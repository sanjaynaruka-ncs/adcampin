import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { CREDIT_COST, deductCredits } from "@/lib/credits";

export async function POST(req: Request) {

  console.log("STEP 15: OPTIMIZE API HIT");

  try {

    const { business, product, ads, userId } = await req.json();

    console.log("STEP 16: Request body:", {
      business,
      product,
      ads,
      userId
    });

    // USER VALIDATION
    if (!userId) {
      return NextResponse.json({
        optimizedAds: [],
        error: "User not authenticated"
      });
    }

    // CAMPAIGN DATA VALIDATION
    if (!business || !product) {
      return NextResponse.json({
        optimizedAds: [],
        error: "Missing campaign data"
      });
    }

    // ADS VALIDATION
    if (!ads || !Array.isArray(ads)) {
      return NextResponse.json({
        optimizedAds: [],
        error: "Invalid ads data"
      });
    }

    // Initialize Supabase safely inside handler
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables missing");
      return NextResponse.json({
        optimizedAds: [],
        error: "Server configuration error"
      });
    }

    if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase environment variables missing");

  return NextResponse.json({
    optimizedAds: [],
    error: "Server configuration error"
  });
}

const supabaseServer = createClient(supabaseUrl, supabaseKey);
    // VERIFY PROFILE EXISTS
    let profileDebug: any = null;
    let profileDebugError: any = null;

    try {

      const profileQuery = await supabaseServer
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      profileDebug = profileQuery.data;
      profileDebugError = profileQuery.error;

    } catch (err) {

      console.error("STEP 16.4 PROFILE QUERY FAILED:", err);

    }

    console.log("STEP 16.5 PROFILE DEBUG RESULT:", profileDebug);
    console.log("STEP 16.6 PROFILE DEBUG ERROR:", profileDebugError);

    // PROFILE NOT FOUND
    if (!profileDebug) {
      return NextResponse.json({
        optimizedAds: [],
        error: "User profile not found"
      });
    }

    // 🔒 LOCK OPTIMIZE FOR FREE PLAN
    const plan = profileDebug.plan || "free";

    if (plan === "free") {

      console.log("STEP 16.7 OPTIMIZE LOCKED FOR FREE PLAN");

      return NextResponse.json({
        optimizedAds: [],
        error: "Optimize feature available in Pro plan"
      });

    }

    // DEDUCT AI CREDITS
    const creditCheck = await deductCredits(
      supabaseServer,
      userId,
      CREDIT_COST.AD_OPTIMIZATION
    );

    console.log("STEP 17: Credit check result:", creditCheck);

    if (!creditCheck.success) {
      return NextResponse.json({
        optimizedAds: [],
        error: creditCheck.error || "Not enough AI credits"
      });
    }

    console.log("STEP 18: Calling OpenAI");

    const openaiKey = process.env.OPENAI_API_KEY;

    if (!openaiKey) {
      console.error("OpenAI API key missing");
      return NextResponse.json({
        optimizedAds: [],
        error: "Server configuration error"
      });
    }

    const client = new OpenAI({
      apiKey: openaiKey
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

Rewrite the ads to improve click-through rate and conversions.

Return ONLY valid JSON in this format:

{
  "ads": [
    {
      "headline": "Optimized headline",
      "primary_text": "Optimized ad text",
      "cta": "Call to action"
    },
    {
      "headline": "Optimized headline",
      "primary_text": "Optimized ad text",
      "cta": "Call to action"
    }
  ]
}

Rules:
- No markdown
- No explanation
- Only valid JSON
`
        }
      ],
      max_tokens: 400
    });

    console.log("STEP 18.5 OpenAI response received");

    let optimizedAds: any[] = [];

    try {

      const raw = completion?.choices?.[0]?.message?.content || "{}";

      const cleaned = raw
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      if (!parsed?.ads || !Array.isArray(parsed.ads)) {
        throw new Error("Invalid AI response structure");
      }

      optimizedAds = parsed.ads;

    } catch (err) {

      console.error("Optimized Ads JSON parse error:", err);

      return NextResponse.json({
        optimizedAds: [],
        error: "AI response parsing failed"
      });

    }

    console.log("STEP 19: Returning optimized ads:", optimizedAds);

    return NextResponse.json({
      optimizedAds
    });

  } catch (error) {

    console.error("OPTIMIZE ADS ERROR:", error);

    return NextResponse.json({
      optimizedAds: [],
      error: "Failed to optimize ads"
    });

  }

}