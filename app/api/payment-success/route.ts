import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";

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

    // Example plan settings

        let credits = 0;

        if (plan === "Pro") credits = 500;
        if (plan === "Business") credits = 3000;

        // Update user plan

        const { error } = await supabase
        .from("users")
        .update({
            plan: plan,
            credits: credits,
            billing_cycle: billing,
            updated_at: new Date().toISOString(),
        })
        .eq("email", body.email);

        if (error) {
        console.error("Supabase update error:", error);
        }

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