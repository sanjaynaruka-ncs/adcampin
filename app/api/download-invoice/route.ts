import { supabaseAdmin } from "@/lib/supabase-admin";
import PDFDocument from "pdfkit";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const payment_id = searchParams.get("payment_id");

    if (!payment_id) {
      return new Response(JSON.stringify({ error: "Missing payment id" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { data, error } = await supabaseAdmin
      .from("payments")
      .select("*")
      .eq("razorpay_payment_id", payment_id)
      .single();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const gst = Math.round(data.amount * 0.18);
    const total = data.amount + gst;

    // ✅ PDF GENERATION
    const doc = new PDFDocument();
    const buffers: Uint8Array[] = [];

    doc.on("data", (chunk: Uint8Array) => buffers.push(chunk));

    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      doc.on("end", () => {
        resolve(Buffer.concat(buffers));
      });
      doc.on("error", reject);
    });

    // 🧾 HEADER
    doc.fontSize(20).text("TAX INVOICE", { align: "center" });

    doc.moveDown();

    doc.fontSize(12).text(`Invoice No: ${data.invoice_number || `INV-${Date.now()}`}`);
    doc.text(`Date: ${new Date().toDateString()}`);

    doc.moveDown();

    // 🏢 SELLER
    doc.text("Seller:");
    doc.text("AdCampin");
    doc.text("GSTIN: 08ADDPN1868R2ZR");
    doc.text("G-2, A50A, Royal Kardhani -II,");
    doc.text("Kardhani, Kalwar Road,");
    doc.text("Jhotwara, Jaipur - 302012");
    doc.text("Rajasthan, India");

    doc.moveDown();

    // 👤 CUSTOMER
    doc.text("Customer:");
    doc.text(`Email: ${data.user_email}`);

    doc.moveDown();

    // 📦 DETAILS
    doc.text(`${data.plan} Plan (${data.billing})`);

    doc.moveDown();

    // 💰 AMOUNT
    doc.text(`Subtotal: ₹${data.amount}`);
    doc.text(`GST (18%): ₹${gst}`);
    doc.text(`Total: ₹${total}`);

    doc.moveDown();

    doc.text(`Payment ID: ${payment_id}`);

    doc.moveDown();

    doc.text("Thank you for your business!", { align: "center" });

    doc.end();

    const pdfBuffer = await pdfPromise;

    // ✅ FINAL FIX: Use Uint8Array (SAFE for Next.js Response)
    const uint8Array = new Uint8Array(pdfBuffer);

    return new Response(uint8Array, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=invoice-${payment_id}.pdf`,
      },
    });

  } catch (error) {
    console.error("Invoice Download Error:", error);

    return new Response(JSON.stringify({ error: "Failed to generate invoice" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}