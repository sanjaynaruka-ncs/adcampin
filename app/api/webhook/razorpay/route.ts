import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { Resend } from "resend";

// ✅ Invoice Generator (ADDED)
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
  country: string;
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = 730;

  const drawLeft = (text: string, size = 12) => {
    page.drawText(text, { x: 50, y, size, font });
    y -= 18;
  };

  const drawRight = (text: string, size = 12) => {
    page.drawText(text, { x: 350, y, size, font });
  };

  // Header
  drawLeft("TAX INVOICE", 18);
  drawRight(`Invoice No: ${invoice_number}`);
  y -= 18;
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

  // Description
  drawLeft(`AdCampin ${plan} Plan (${billing})`);

  y -= 10;

  // Amounts
  drawRight(`Subtotal: Rs. ${baseAmount}`);
  y -= 18;

  if (country.toLowerCase() === "india") {
    const cgst = Math.round(gst / 2);
    const sgst = gst - cgst;

    drawRight(`CGST (9%): Rs. ${cgst}`);
    y -= 18;
    drawRight(`SGST (9%): Rs. ${sgst}`);
    y -= 18;
  } else {
    drawRight(`GST: Rs. 0`);
    y -= 18;
  }

  drawRight(`Total: Rs. ${total}`, 14);

  y -= 25;

  drawLeft(`Payment ID: ${payment_id}`);

  y -= 20;

  // ✅ Export note
  if (country.toLowerCase() !== "india") {
    drawLeft("Export of Services – GST not applicable under LUT", 10);
    y -= 10;
  }

  drawLeft("Thank you for your business!");

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function POST(req: Request) {
  try {
    const body = await req.text();

    console.log("🔥 WEBHOOK HIT RAW");

    const signature = req.headers.get("x-razorpay-signature")!;
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

    // ✅ Verify signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.log("❌ Invalid signature");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const event = JSON.parse(body);

    const payment = event.payload?.payment?.entity;
    const paymentId = payment?.id;

    const notes = payment?.notes || {};

    const email = notes.email || payment?.email || "unknown";
    const plan = notes.plan || "Free";
    const billing = notes.billing || "monthly";
    const user_id = notes.user_id || null;
    const country = notes.country || "India";

    const amount = payment?.amount / 100;

    const isIndia = country.toLowerCase() === "india";
    const baseAmount = isIndia ? Math.round(amount / 1.18) : amount;
    const gst = isIndia ? amount - baseAmount : 0;
    const total = amount;

    // 🚫 Duplicate check
    const { data: existing } = await supabaseAdmin
      .from("payments")
      .select("id")
      .eq("razorpay_payment_id", paymentId)
      .maybeSingle();

    if (existing) {
      console.log("⚠️ Duplicate webhook ignored:", paymentId);
      return NextResponse.json({ success: true });
    }

    // ✅ Invoice number
    const now = new Date();
    const invoice_number = `ADC-${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}${String(
      now.getHours()
    ).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;

    // 💾 Save payment
    await supabaseAdmin.from("payments").insert({
      user_email: email,
      plan,
      billing,
      amount,
      razorpay_payment_id: paymentId,
      invoice_number,
    });

    // ✅ Update user
    if (user_id) {
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
    }

    // ✅ Generate Invoice (NEW)
    const pdfBuffer = await generateInvoicePDF({
      email,
      plan,
      billing,
      baseAmount,
      gst,
      total,
      payment_id: paymentId,
      invoice_number,
      country,
    });

    console.log("📄 Invoice generated:", invoice_number);

    // ✅ Send email with invoice
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
    from: "AdCampin <invoice@adcampin.com>",
    to: email,
    subject: "Your AdCampin Invoice",
    html: `
        <h2>Payment Successful 🎉</h2>
        <p>Your invoice is attached.</p>
    `,
    attachments: [
        {
        filename: `invoice-${invoice_number}.pdf`,
        content: pdfBuffer,
        },
    ],
    });

console.log("📧 Invoice email sent to:", email);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}