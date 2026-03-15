import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { CREDIT_COST, deductCredits } from "@/lib/credits";

export async function POST(req: Request) {

  console.log("VARIATIONS STEP 1: API HIT");

  try {

    const { business, product, userId } = await req.json();

    console.log("VARIATIONS STEP 2: Request body:", {
      business,
      product,
      userId
    });

    if (!userId) {
      return NextResponse.json({
        variations: [],
        winner: null,
        error: "User not authenticated"
      });
    }

    // Validate environment variables before initializing Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables missing");
      return NextResponse.json({
        variations: [],
        winner: null,
        error: "Server configuration error"
      });
    }

    // Initialize Supabase safely
    const supabaseServer = createClient(
      supabaseUrl,
      supabaseKey
    );

    // Deduct AI credits
    const creditCheck = await deductCredits(
      supabaseServer,
      userId,
      CREDIT_COST.AD_VARIATIONS
    );

    console.log("VARIATIONS STEP 3: Credit check:", creditCheck);

    if (!creditCheck.success) {
      return NextResponse.json({
        variations: [],
        winner: null,
        error: creditCheck.error || "Not enough AI credits"
      });
    }

    const openaiKey = process.env.OPENAI_API_KEY;

    if (!openaiKey) {
      console.error("OpenAI API key missing");
      return NextResponse.json({
        variations: [],
        winner: null,
        error: "Server configuration error"
      });
    }

    const client = new OpenAI({
      apiKey: openaiKey,
    });

    console.log("VARIATIONS STEP 4: Calling OpenAI");

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
You are an expert advertising strategist.

Business: ${business}
Product: ${product}

Generate 3 ad variations.

Return ONLY valid JSON in this format:

{
  "variations": [
    {
      "headline": "Headline text",
      "primary_text": "Primary text",
      "cta": "Call to action",
      "predicted_ctr": "3.2%"
    },
    {
      "headline": "Headline text",
      "primary_text": "Primary text",
      "cta": "Call to action",
      "predicted_ctr": "4.1%"
    },
    {
      "headline": "Headline text",
      "primary_text": "Primary text",
      "cta": "Call to action",
      "predicted_ctr": "2.8%"
    }
  ],
  "winner": 2
}

Rules:
- No markdown
- No explanation
- Only valid JSON
`
        }
      ],
      max_tokens: 400,
    });

    console.log("VARIATIONS STEP 5: OpenAI response received");

    let variations: any[] = [];
    let winner: number | null = null;

    try {

      const raw = completion?.choices?.[0]?.message?.content || "{}";

      const cleaned = raw
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      variations = parsed?.variations || [];
      winner = parsed?.winner ?? null;

    } catch (err) {

      console.error("Variations JSON parse error:", err);

      return NextResponse.json({
        variations: [],
        winner: null,
        error: "AI returned invalid JSON"
      });

    }

    if (!variations.length) {
      return NextResponse.json({
        variations: [],
        winner: null,
        error: "AI returned no variations"
      });
    }

    console.log("VARIATIONS STEP 6: Returning variations:", variations.length);

    return NextResponse.json({
      variations,
      winner
    });

  } catch (error) {

    console.error("VARIATIONS ERROR:", error);

    return NextResponse.json({
      variations: [],
      winner: null,
      error: "Ad variation generation failed"
    });

  }
}