import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();
  const amount = body.amount;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  try {

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "order_rcptid_" + Date.now(),
    });

    return NextResponse.json(order);

  } catch (error) {

    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );

  }
}