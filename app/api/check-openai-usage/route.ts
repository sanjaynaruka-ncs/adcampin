import { NextResponse } from "next/server";

export async function GET() {
  try {
    const OPENAI_KEY = process.env.OPENAI_API_KEY!;
    const LIMIT = 20; // 💰 your monthly budget in USD
    const THRESHOLD = 0.9; // 90%

    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), 1);

    const startDate = Math.floor(start.getTime() / 1000);
    const endDate = Math.floor(today.getTime() / 1000);

    const res = await fetch(
      `https://api.openai.com/v1/dashboard/billing/usage?start_date=${startDate}&end_date=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    );

    const data = await res.json();

    const used = data.total_usage / 100; // cents → dollars

    console.log("💰 OpenAI usage:", used);

    // 🚨 Trigger alert
    if (used >= LIMIT * THRESHOLD) {

        console.log("⚠️ Usage crossed 90%");

        await fetch("https://api.mailgun.net/v3/YOUR_DOMAIN/messages", {
            method: "POST",
            headers: {
            Authorization: "Basic " + Buffer.from("api:" + process.env.MAILGUN_API_KEY).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
            from: "AdCampin <support@adcampin.com>",
            to: "your-email@gmail.com",
            subject: "⚠️ OpenAI Usage Alert (90%)",
            text: `You have used $${used} out of $${LIMIT} budget.`,
            }),
        });

        return NextResponse.json({
            alert: true,
            used,
        });
        }

  } catch (error) {
    console.error("❌ Usage check failed:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}