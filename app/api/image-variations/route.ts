import OpenAI from "openai";
import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase_server";
import { CREDIT_COST, deductCredits } from "@/lib/credits";
import { checkFeature } from "@/lib/feature_guard";

export async function POST(req: Request) {

  const supabaseServer = getSupabaseServer();

  console.log("IMAGE STEP 1: API HIT");

  try {

    const { business, product, userId } = await req.json();

    console.log("IMAGE STEP 2: Request body:", {
      business,
      product,
      userId
    });

    if (!userId) {
      return NextResponse.json({
        images: [],
        error: "User not authenticated"
      });
    }

    // Fetch profile to check plan
    const { data: profile, error: profileError } = await supabaseServer
      .from("profiles")
      .select("plan")
      .eq("id", userId)
      .single();

    console.log("IMAGE STEP 2.5: Profile result:", profile);

    if (profileError || !profile) {
      console.log("IMAGE STEP 2.6: Profile not found");
      return NextResponse.json({
        images: [],
        error: "User profile not found"
      });
    }

    const plan = profile.plan || "free";

    // 🔒 FEATURE LOCK CHECK (using feature_guard.ts)
    const imageAllowed = checkFeature(plan, "image_variations");

    if (!imageAllowed) {
      console.log("IMAGE STEP 2.7: Feature locked for plan:", plan);
      return NextResponse.json({
        images: [],
        error: "Upgrade to Pro to generate image variations"
      });
    }

    // Deduct AI credits
    const creditCheck = await deductCredits(
      supabaseServer,
      userId,
      CREDIT_COST.IMAGE_VARIATIONS
    );

    console.log("IMAGE STEP 3: Credit check:", creditCheck);

    if (!creditCheck.success) {
      return NextResponse.json({
        images: [],
        error: creditCheck.error || "Not enough AI credits"
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const images: string[] = [];

    console.log("IMAGE STEP 4: Generating images");

    for (let i = 0; i < 4; i++) {

      const result = await client.images.generate({
        model: "gpt-image-1",
        prompt: `
Professional advertising creative.

Business: ${business}
Product: ${product}

Style:
- modern marketing creative
- product centered
- clean background
- square ad design
`,
        size: "1024x1024",
      });

      const base64 = result?.data?.[0]?.b64_json;

      if (base64) {
        images.push(`data:image/png;base64,${base64}`);
      }

    }

    console.log("IMAGE STEP 5: Images generated:", images.length);

    return NextResponse.json({
      images
    });

  } catch (error) {

    console.error("IMAGE VARIATIONS ERROR:", error);

    return NextResponse.json({
      images: [],
      error: "Image generation failed"
    });

  }
}