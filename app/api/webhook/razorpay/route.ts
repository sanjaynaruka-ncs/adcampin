import { NextResponse } from "next/server";
import crypto from "crypto";

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

    console.log("✅ Webhook verified");
    console.log("📦 Event type:", event.event);
    console.log("💰 Payment ID:", event.payload?.payment?.entity?.id);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}