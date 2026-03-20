import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

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

    // ✅ Extract from notes (CRITICAL)
    const notes = payment?.notes || {};

    const email = notes.email || payment?.email || "unknown";
    const plan = notes.plan || "Free";
    const billing = notes.billing || "monthly";
    const user_id = notes.user_id || null;

    const amount = payment?.amount / 100;

    // 🚫 Prevent duplicate BEFORE insert (FIXED)
    const { data: existing } = await supabaseAdmin
      .from("payments")
      .select("id")
      .eq("razorpay_payment_id", paymentId)
      .maybeSingle();

    if (existing) {
      console.log("⚠️ Duplicate webhook ignored:", paymentId);
      return NextResponse.json({ success: true });
    }

    // 💾 Save payment
    await supabaseAdmin.from("payments").insert({
      user_email: email,
      plan,
      billing,
      amount,
      razorpay_payment_id: paymentId,
    });

    // ✅ Update user plan (MAIN LOGIC)
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

      console.log("✅ User updated:", user_id);
    }

    console.log("✅ Webhook verified");
    console.log("📦 Event type:", event.event);
    console.log("💰 Payment ID:", paymentId);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}