import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.text();

    console.log("🔥 WEBHOOK HIT RAW");

    const signature = req.headers.get("x-razorpay-signature")!;
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.log("❌ Invalid signature");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const event = JSON.parse(body);

    const paymentId = event.payload?.payment?.entity?.id;

    const payment = event.payload?.payment?.entity;

    const email = payment?.email || "unknown";
    const amount = payment?.amount / 100; // Razorpay gives in paise

    // 💾 Save payment
    await supabaseAdmin.from("payments").insert({
    user_email: email,
    amount,
    razorpay_payment_id: paymentId,
    });

    // 🚫 Prevent duplicate processing
    const { data: existing } = await supabaseAdmin
    .from("payments")
    .select("id")
    .eq("razorpay_payment_id", paymentId)
    .maybeSingle();

if (existing) {
  console.log("⚠️ Duplicate webhook ignored:", paymentId);
  return NextResponse.json({ success: true });
}

    console.log("✅ Webhook verified");
    console.log("📦 Event type:", event.event);
    console.log("💰 Payment ID:", event.payload?.payment?.entity?.id);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}