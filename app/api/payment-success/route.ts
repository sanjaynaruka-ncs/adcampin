export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// ✅ Inline PDF generator
async function generateInvoicePDF({
  email,
  plan,
  billing,
  baseAmount,
  gst,
  total,
  payment_id,
  invoice_number,
  gstin,
  business_name,
  country,
}: {
  email: string;
  plan: string;
  billing: string;
  baseAmount: number;
  gst: number;
  total: number;
  payment_id: string;
  invoice_number: string;
  gstin?: string;
  business_name?: string;
  country?: string;
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // ✅ Outer border (NO FILL)
  page.drawRectangle({
    x: 40,
    y: 40,
    width: 520,
    height: 720,
    borderWidth: 1,
    borderColor: rgb(0, 0, 0),
  });

  let y = 750;

  const drawLeft = (text: string, size = 12) => {
    page.drawText(text, { x: 50, y, size, font });
    y -= 18;
  };

  const drawRight = (text: string, size = 12) => {
    page.drawText(text, { x: 350, y, size, font });
  };

  // Header
  y -= 10; 
  drawLeft("TAX INVOICE", 18);
  drawRight(`Invoice No: ${invoice_number}`);
  y -= 25;
  drawRight(`Date: ${new Date().toDateString()}`);
  y -= 25;

  // Seller
  drawLeft("Seller", 14);
  drawLeft("AdCampin");
  drawLeft("GSTIN: 08ADDPN1868R2ZR");
  drawLeft("Jaipur, Rajasthan, India");

  y -= 10;

  // Customer
  drawLeft("Billed To", 14);

  if (business_name) drawLeft(business_name);
  if (gstin) drawLeft(`GSTIN: ${gstin}`);

  drawLeft(`Email: ${email}`);

  y -= 15;

  // ================= TABLE =================

  const tableStartY = y;

  // ✅ HEADER BACKGROUND (LIGHT GREY — NOT BLACK)
  page.drawRectangle({
    x: 50,
    y: y - 5,
    width: 500,
    height: 20,
    color: rgb(0.95, 0.95, 0.95),
  });

  // Header text
  page.drawText("Description", { x: 60, y, size: 10, font });
  page.drawText("Amount", { x: 450, y, size: 10, font });

  y -= 20;

  // Plan row
  page.drawText(`AdCampin ${plan} Plan (${billing})`, {
    x: 60,
    y,
    size: 10,
    font,
  });

  page.drawText(`Rs. ${baseAmount}`, {
    x: 450,
    y,
    size: 10,
    font,
  });

  y -= 20;

  // GST split
 if (!country || country.toLowerCase() === "india") {
  const cgst = Math.round(gst / 2);
  const sgst = gst - cgst;

  page.drawText("CGST (9%)", { x: 60, y, size: 10, font });
  page.drawText(`Rs. ${cgst}`, { x: 450, y, size: 10, font });

  y -= 20;

  page.drawText("SGST (9%)", { x: 60, y, size: 10, font });
  page.drawText(`Rs. ${sgst}`, { x: 450, y, size: 10, font });

  y -= 20;
} else {
  page.drawText("Export of Services (0% GST)", {
    x: 60,
    y,
    size: 10,
    font,
  });

  y -= 20;
}

  // Divider
  page.drawLine({
    start: { x: 50, y },
    end: { x: 550, y },
    thickness: 1,
  });

  y -= 15;

  // Total
  page.drawText("Total", { x: 60, y, size: 12, font });
  page.drawText(`Rs. ${total}`, { x: 450, y, size: 12, font });

  y -= 25;

  // ✅ Table border (NO FILL)
  page.drawRectangle({
    x: 50,
    y: y,
    width: 500,
    height: tableStartY - y + 20,
    borderWidth: 1,
    borderColor: rgb(0, 0, 0),
  });

  // Vertical divider
  page.drawLine({
    start: { x: 400, y: tableStartY },
    end: { x: 400, y },
    thickness: 1,
  });

  y -= 20;

  // ✅ ADD THIS BLOCK HERE
if (country && country.toLowerCase() !== "india") {
  drawLeft("Note: Export of services – GST not applicable");
  y -= 10;
}
  drawLeft(`Payment ID: ${payment_id}`);

  y -= 20;

  drawLeft("Thank you for your business!");

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      plan,
      billing,
      email,
      amount,
      gstin,
      business_name,
      country,
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET!;

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Invalid payment signature" },
        { status: 400 }
      );
    }

    const razorpayKey = process.env.RAZORPAY_KEY_ID!;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET!;

    const auth = Buffer.from(`${razorpayKey}:${razorpaySecret}`).toString("base64");

    const paymentRes = await fetch(
      `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    const paymentData = await paymentRes.json();

    if (!paymentData || paymentData.status !== "captured") {
      return NextResponse.json(
        { success: false, message: "Payment not captured" },
        { status: 400 }
      );
    }

    const { data: existingPayment } = await supabaseAdmin
      .from("payments")
      .select("id")
      .eq("razorpay_payment_id", razorpay_payment_id)
      .maybeSingle();

    if (existingPayment) {
      return NextResponse.json({
        success: true,
        message: "Payment already processed",
      });
    }

    const { data: users } = await supabaseAdmin.auth.admin.listUsers();
    const matchedUser = users.users.find((u) => u.email === email);
    const user_id = matchedUser?.id;

    if (!user_id) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 400 }
      );
    }

    let credits = 0;
    if (plan === "Pro") credits = 500;
    if (plan === "Business") credits = 3000;

    const expiryDate =
      billing === "yearly"
        ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    await supabaseAdmin
      .from("profiles")
      .update({
        plan,
        ai_credits: credits,
        plan_expires_at: expiryDate.toISOString(),
      })
      .eq("id", user_id);

    const now = new Date();
    const invoice_number = `ADC-${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}${String(
      now.getHours()
    ).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;

    await supabaseAdmin.from("payments").insert({
      user_email: email,
      plan,
      billing,
      amount: paymentData.amount / 100,
      razorpay_payment_id,
      razorpay_order_id,
      invoice_number,
    });

    let baseAmount = amount;
    let gst = 0;

    if (!country || country.toLowerCase() === "india") {
      baseAmount = Math.round(amount / 1.18);
      gst = amount - baseAmount;
    }

    const total = amount;

    const pdfBuffer = await generateInvoicePDF({
      email,
      plan,
      billing,
      baseAmount,
      gst,
      total,
      payment_id: razorpay_payment_id,
      invoice_number,
      gstin,
      business_name,
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "AdCampin <invoice@adcampin.com>",
      to: email,
      subject: "Your AdCampin GST Invoice",
      html: `
        <h2>Payment Successful 🎉</h2>
        <p>Your GST invoice is attached.</p>
      `,
      attachments: [
        {
          filename: `invoice-${razorpay_payment_id}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Payment API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}