import OpenAI from "openai";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { CREDIT_COST, deductCredits } from "@/lib/credits";

export async function POST(req: Request) {
  try {

    const { business, product, ads, userId } = await req.json();

    // Deduct AI credits
    const creditCheck = await deductCredits(
      supabase,
      userId,
      CREDIT_COST.AD_VARIATIONS
    );

    if (!creditCheck.success) {
      return NextResponse.json({
        improvedAds: [],
        error: "Not enough AI credits"
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
You are an expert advertising copywriter.

Business: ${business}
Product: ${product}

Existing Ads:
${JSON.stringify(ads)}

Rewrite the ads to improve conversions and click-through rate.

Return ONLY valid JSON in this format:

{
  "ads": [
    {
      "headline": "Improved headline",
      "primary_text": "Improved ad text",
      "cta": "Call to action"
    },
    {
      "headline": "Improved headline",
      "primary_text": "Improved ad text",
      "cta": "Call to action"
    }
  ]
}

Rules:
- No markdown
- No explanation
- Only valid JSON
`,
        },
      ],
      max_tokens: 400,
    });

    let improvedAds: any[] = [];

    try {

      const raw = completion.choices?.[0]?.message?.content || "{}";
      const parsed = JSON.parse(raw);
      improvedAds = parsed.ads || [];

    } catch (err) {

      console.error("Improved Ads JSON parse error:", err);
      improvedAds = [];

    }

    // SUCCESS RESPONSE
    return NextResponse.json({
      improvedAds
    });

  } catch (error) {

    console.error("IMPROVE ERROR:", error);

    return NextResponse.json({
      improvedAds: [],
      error: "Failed to improve campaign"
    });

  }
}