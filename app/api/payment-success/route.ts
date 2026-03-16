import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      payment_id,
      order_id,
      signature,
      plan,
      billing
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET!;

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(order_id + "|" + payment_id)
      .digest("hex");

    if (generated_signature !== signature) {

      return NextResponse.json(
        { success: false, message: "Invalid payment signature" },
        { status: 400 }
      );

    }

    /*
      TODO (Next Step)
      Activate user plan in Supabase
    */

    console.log("Payment verified:", payment_id);

    return NextResponse.json({
      success: true
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }

}