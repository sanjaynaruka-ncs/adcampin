import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase_server";
import { CREDIT_COST, deductCredits } from "@/lib/credits";
import { checkFeature } from "@/lib/feature_guard";

const PLAN_LIMITS: any = {
  free: 3,
  pro: 50,
  business: 250,
  enterprise: Infinity
};

export async function POST(req: Request) {
  const supabaseServer = getSupabaseServer();

  console.log("LANDING STEP 1: API HIT");

  try {

    const { business, product, userId } = await req.json();

    console.log("LANDING STEP 2: Request body:", {
      business,
      product,
      userId
    });

    if (!userId) {
      return NextResponse.json({
        landingPage: "",
        error: "User not authenticated"
      });
    }

    if (!business || !product) {
      return NextResponse.json({
        landingPage: "",
        error: "Missing campaign data"
      });
    }

    // Fetch profile
    const { data: profile, error: profileError } = await supabaseServer
      .from("profiles")
      .select("plan, total_campaigns_created")
      .eq("id", userId)
      .single();

    console.log("LANDING STEP 3: Profile result:", profile);

    if (profileError || !profile) {
      console.log("LANDING STEP 4: Profile not found");
      return NextResponse.json({
        landingPage: "",
        error: "User profile not found"
      });
    }

    const plan = profile.plan || "free";

    // 🔒 FEATURE LOCK CHECK (using feature_guard.ts)
    const landingAllowed = checkFeature(plan, "landing_page");

    if (!landingAllowed) {
      console.log("LANDING STEP 4.5: Feature locked for plan:", plan);
      return NextResponse.json({
        landingPage: "",
        error: "Upgrade to Pro to use Landing Page Generator"
      });
    }

    const usedCampaigns = profile.total_campaigns_created || 0;
    const campaignLimit = PLAN_LIMITS[plan];

    console.log("LANDING STEP 5: Plan check:", {
      plan,
      usedCampaigns,
      campaignLimit
    });

    if (usedCampaigns >= campaignLimit) {
      return NextResponse.json({
        landingPage: "",
        error: "Campaign limit reached for your plan."
      });
    }

    // Deduct credits
    const creditCheck = await deductCredits(
      supabaseServer,
      userId,
      CREDIT_COST.LANDING_PAGE
    );

    console.log("LANDING STEP 6: Credit check result:", creditCheck);

    if (!creditCheck.success) {
      return NextResponse.json({
        landingPage: "",
        error: creditCheck.error || "Not enough AI credits"
      });
    }

    const prompt = `
You are a professional website designer.

Generate a modern landing page using clean HTML with inline CSS.

Requirements:
- Works for ANY business
- Hero section
- Benefits section
- Features section
- Testimonials
- Call to action
- Footer

Rules:
- Clean modern design
- Inline CSS only
- No external libraries
- Mobile friendly
- Do NOT include any images
- Return HTML only
- No explanation text

Business Name:
${business}

Product or Service:
${product}
`;

    console.log("LANDING STEP 7: Calling OpenAI");

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          max_tokens: 1500
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("LANDING STEP 8: OpenAI API error:", data);
      return NextResponse.json({
        landingPage: "",
        error: "OpenAI request failed"
      });
    }

    console.log("LANDING STEP 9: OpenAI response received");

    let landingPage = data?.choices?.[0]?.message?.content || "";

    // Remove markdown blocks
    landingPage = landingPage
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .trim();

    if (!landingPage) {
      return NextResponse.json({
        landingPage: "",
        error: "AI returned empty landing page"
      });
    }

    console.log("LANDING STEP 10: Landing page generated successfully");

    return NextResponse.json({
      landingPage
    });

  } catch (error) {

    console.error("LANDING PAGE ERROR:", error);

    return NextResponse.json({
      landingPage: "",
      error: "Landing page generation failed"
    });

  }
}