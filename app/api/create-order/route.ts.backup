import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Extract all required fields from body
    const amount = body.amount;
    const email = body.email;
    const user_id = body.user_id;
    const plan = body.plan;
    const billing = body.billing;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "order_rcptid_" + Date.now(),

      // ✅ Pass metadata to webhook
      notes: {
        email: email || "",
        plan: plan || "",
        billing: billing || "",
        user_id: user_id || "",
      },
    });

    return NextResponse.json(order);

    } catch (error: any) {

    console.error("❌ Razorpay Order Error:", error);

    return NextResponse.json(
      { error: error?.message || "Order creation failed" },
      { status: 500 }
    );

  }
}