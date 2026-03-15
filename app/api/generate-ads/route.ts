import OpenAI from "openai";
import { NextResponse } from "next/server";
import { CREDIT_COST, deductCredits } from "@/lib/credits";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { business, product, budget, productImage, userId } = await req.json();

    // Validate user
    if (!userId) {
      return NextResponse.json({
        ads: [],
        image: null,
        strategy: "",
        prediction: "",
        budgetPlan: "",
        campaignScore: "",
        error: "User not authenticated"
      });
    }

    // SAFE SUPABASE INITIALIZATION — fully lazy, inside handler only
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables missing");
      return NextResponse.json({
        ads: [],
        image: null,
        strategy: "",
        prediction: "",
        budgetPlan: "",
        campaignScore: "",
        error: "Server configuration error"
      });
    }

    // Dynamically import createClient to avoid any top-level/build-time evaluation
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Deduct AI credits
    const creditCheck = await deductCredits(
      supabase,
      userId,
      CREDIT_COST.GENERATE_CAMPAIGN
    );

    if (!creditCheck.success) {
      return NextResponse.json({
        ads: [],
        image: null,
        strategy: "",
        prediction: "",
        budgetPlan: "",
        campaignScore: "",
        error: creditCheck.error
      });
    }

    const openaiKey = process.env.OPENAI_API_KEY;

    if (!openaiKey) {
      console.error("OpenAI key missing");
      return NextResponse.json({
        ads: [],
        image: null,
        strategy: "",
        prediction: "",
        budgetPlan: "",
        campaignScore: "",
        error: "Server configuration error"
      });
    }

    const client = new OpenAI({ apiKey: openaiKey });

    // Generate Ads
    const textResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: `
You are an expert advertising copywriter.

Business: ${business}
Product: ${product}
Budget: ${budget}

Generate 2 high converting ads.

Return JSON in this format:

{
  "ads": [
    {
      "headline": "Headline text",
      "primary_text": "Primary text paragraph",
      "cta": "Call to action"
    },
    {
      "headline": "Headline text",
      "primary_text": "Primary text paragraph",
      "cta": "Call to action"
    }
  ]
}
`
        }
      ],
      max_tokens: 400
    });

    let ads: any[] = [];

    try {
      const raw = textResponse.choices?.[0]?.message?.content || "{}";
      const parsed = JSON.parse(raw);

      if (!parsed?.ads || !Array.isArray(parsed.ads)) {
        throw new Error("Invalid ads response");
      }

      ads = parsed.ads;
    } catch (err) {
      console.error("Ad JSON parse error:", err);

      return NextResponse.json({
        ads: [],
        image: null,
        strategy: "",
        prediction: "",
        budgetPlan: "",
        campaignScore: "",
        error: "Failed to generate ads"
      });
    }

    // Strategy
    const strategyResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
Suggest an advertising strategy.

Business: ${business}
Product: ${product}
Budget: ${budget}

Provide:
Recommended Platform
Recommended Daily Budget
Target Audience (age, location, interests)
`
        }
      ],
      max_tokens: 300
    });

    const strategy =
      strategyResponse.choices?.[0]?.message?.content ?? "Strategy generation failed.";

    // Prediction
    const predictionResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
Estimate ad performance.

Business: ${business}
Product: ${product}
Budget: ${budget}

Provide:
Estimated Reach
Estimated Clicks
Estimated Leads
Estimated Cost Per Lead
`
        }
      ],
      max_tokens: 300
    });

    const prediction =
      predictionResponse.choices?.[0]?.message?.content ?? "Prediction generation failed.";

    // Budget plan
    const budgetResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
Optimize advertising budget.

Business: ${business}
Product: ${product}
Budget: ${budget}

Suggest allocation for:
Meta Ads
Google Ads
TikTok Ads
`
        }
      ],
      max_tokens: 200
    });

    const budgetPlan =
      budgetResponse.choices?.[0]?.message?.content ?? "Budget plan generation failed.";

    // Campaign score
    const scoreResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `
Analyze this ad campaign.

Business: ${business}
Product: ${product}

Ads:
${JSON.stringify(ads)}

Provide:
Campaign Quality Score (100)
Strengths
Weaknesses
Suggestions
`
        }
      ],
      max_tokens: 200
    });

    const campaignScore =
      scoreResponse.choices?.[0]?.message?.content ?? "Score generation failed.";

    // Image generation
    let imageUrl: string | null = null;

    try {
      if (productImage) {
        imageUrl = productImage;
      } else {
        const imageResponse = await client.images.generate({
          model: "gpt-image-1",
          prompt: `
Professional advertising creative.

Business: ${business}
Product: ${product}

Square ad creative
Product centered
Clean background
`,
          size: "1024x1024"
        });

        imageUrl = imageResponse.data?.[0]?.b64_json
          ? `data:image/png;base64,${imageResponse.data[0].b64_json}`
          : null;
      }
    } catch (err) {
      console.error("Image generation error:", err);
    }

    await supabase.rpc("increment_campaign_count", {
      user_id: userId
    });

    return NextResponse.json({
      ads,
      image: imageUrl,
      strategy,
      prediction,
      budgetPlan,
      campaignScore
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return NextResponse.json({
      ads: [],
      image: null,
      strategy: "",
      prediction: "",
      budgetPlan: "",
      campaignScore: ""
    });
  }
}