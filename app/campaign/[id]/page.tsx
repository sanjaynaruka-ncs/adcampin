"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import Navbar from "../../components/navbar";
import OverviewTab from "./tabs/overview_tab";
import AdsTab from "./tabs/ads_tab";
import OptimizeTab from "./tabs/optimize_tab";
import VariationsTab from "./tabs/variations_tab";
import LandingTab from "./tabs/landing_tab";
import StrategyTab from "./tabs/strategy_tab";
import PredictionTab from "./tabs/prediction_tab";
import BudgetTab from "./tabs/budget_tab";
import ImageVariationsTab from "./tabs/image_variations_tab";

type TabType =
  | "overview"
  | "ads"
  | "optimize"
  | "image_variations"
  | "variations"
  | "landing"
  | "strategy"
  | "prediction"
  | "budget";

export default function CampaignDetails() {
  const router = useRouter();
  const params = useParams();

  const [campaign, setCampaign] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const [optimizedAds, setOptimizedAds] = useState<any>(null);
  const [optimizing, setOptimizing] = useState(false);

  const [variations, setVariations] = useState("");
  const [generatingVariations, setGeneratingVariations] = useState(false);

  const [landingPage, setLandingPage] = useState("");
  const [generatingPage, setGeneratingPage] = useState(false);

  const [scoreBreakdown, setScoreBreakdown] = useState<any>(null);

  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const scoreText = String(campaign?.campaign_score || "");
  const [plan, setPlan] = useState("free");

  const scoreMatch =
    scoreText.match(/(\d+)\s*\/\s*100/) ||
    scoreText.match(/\b\d{1,3}\b/);

  let campaignScore = scoreMatch
    ? Math.min(Number(scoreMatch[1] || scoreMatch[0]), 100)
    : 0;

  if (!campaignScore && scoreBreakdown) {
    const values = [
      scoreBreakdown.adCopy,
      scoreBreakdown.audience,
      scoreBreakdown.budget,
      scoreBreakdown.platform,
      scoreBreakdown.landing,
    ];

    campaignScore = Math.round(
      values.reduce((a, b) => a + b, 0) / values.length
    );
  }

  useEffect(() => {
    async function loadCampaign() {
      const { data: userData } = await supabase.auth.getUser();
      setUser(userData?.user);

      const { data: profile } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", userData?.user?.id)
        .single();

      setPlan(profile?.plan || "free");

      if (!userData?.user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("id", params?.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      console.log("Campaign loaded from DB:", JSON.stringify(data, null, 2));

      if (data?.ads && typeof data.ads === "string") {
        try {
          data.ads = JSON.parse(data.ads);
        } catch {
          data.ads = [];
        }
      }

      setCampaign(data);

      setScoreBreakdown({
        adCopy: 80,
        audience: 90,
        budget: 70,
        platform: 85,
        landing: 75,
      });
    }

    loadCampaign();
  }, [params?.id, router]);

  async function optimizeCampaign() {

  console.log("STEP 6: optimizeCampaign started");

  if (!user?.id) {
    console.log("STEP 7: User not loaded");
    return { error: "User session not loaded" };
  }

  try {

    setOptimizing(true);

    console.log("STEP 8: Calling optimize API");

    const response = await fetch("/api/optimize-ads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ads: campaign?.ads,
        business: campaign?.business,
        product: campaign?.product,
        userId: user.id,
      }),
    });

    const data = await response.json();

    console.log("STEP 9: API returned:", JSON.stringify(data, null, 2));

    if (data?.error) {
      console.log("STEP 10: API returned error");
      return data;
    }

    if (!data?.optimizedAds) {
      console.log("STEP 11: No optimizedAds returned");
      return { error: "Failed to optimize campaign" };
    }

    setOptimizedAds(data.optimizedAds);

    console.log("STEP 12: Ads set successfully");

    return {
      success: true,
      optimizedAds: data.optimizedAds
    };

  } catch (error) {

    console.log("STEP 13: optimizeCampaign crashed:", error);

    return { error: "Failed to optimize campaign." };

  } finally {

    console.log("STEP 14: optimizeCampaign finished");

    setOptimizing(false);
  }
}

  async function generateVariations() {
    if (!user?.id) {
      alert("User session not loaded. Please refresh the page.");
      return;
    }

    try {
      setGeneratingVariations(true);

      const res = await fetch("/api/ad-variations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business: campaign?.business,
          product: campaign?.product,
          userId: user.id,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("API returned non-JSON:", text);
        return { error: "API route error. Check server logs." };
      }

      const data = await res.json();

      if (data?.error) {
        return data;
      }

      setVariations(data?.variations || "");
    } catch (error) {
      console.error("Generate variations error:", error);
      return { error: "Failed to generate variations." };
    } finally {
      setGeneratingVariations(false);
    }
  }

  async function generateLandingPage() {

    console.log("generateLandingPage started");

  let result: any = null;

  if (!user?.id) {
    return { error: "User session not loaded" };
  }

  try {

    setGeneratingPage(true);

    const res = await fetch("/api/generate-landing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        business: campaign?.business,
        product: campaign?.product,
        userId: user.id,
      }),
    });

    const data = await res.json();

    console.log("generateLandingPage API response:", data);

    if (data?.error) {
      result = data;
      return result;
    }

    if (!data?.landingPage) {
      result = { error: "Generation failed" };
      return result;
    }

    setLandingPage(data.landingPage);

    await supabase
      .from("campaigns")
      .update({
        landing_page: data.landingPage,
      })
      .eq("id", params?.id);
    
    console.log("generateLandingPage returning success");

    result = {
      success: true,
      landingPage: data.landingPage
    };

    return result;

  } catch (error) {

    console.error(error);

    result = { error: "Generation failed" };
    return result;

  } finally {

    setGeneratingPage(false);

  }
}

  function exportAds(platform: string) {
    if (!campaign?.ads) return;

    const exportText = `
Platform: ${platform}

Business: ${campaign.business}
Product: ${campaign.product}

Ads:
${JSON.stringify(campaign.ads, null, 2)}
`;

    navigator.clipboard.writeText(exportText);
    alert(`Ads copied for ${platform}!`);
  }

  if (!campaign) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#0b1a33] p-10 text-white">
          Loading campaign...
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#0b1a33] py-12 flex justify-center">
        <div className="w-full max-w-5xl px-6">

          <h1 className="text-3xl font-semibold text-white mb-10">
            Campaign Report
          </h1>

          <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-700 pb-4">
            {[
              { id: "overview", label: "Overview" },
              { id: "ads", label: "Ads" },
              { id: "image_variations", label: "Image Variations" },
              { id: "optimize", label: "Optimize" },
              { id: "variations", label: "Variations" },
              { id: "landing", label: "Landing Page" },
              { id: "strategy", label: "Strategy" },
              { id: "prediction", label: "Prediction" },
              { id: "budget", label: "Budget" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <OverviewTab
              campaign={campaign}
              campaignScore={campaignScore}
              scoreBreakdown={scoreBreakdown}
            />
          )}

          {activeTab === "ads" && (
            <AdsTab campaign={campaign} exportAds={exportAds} />
          )}

          {activeTab === "image_variations" && (
            <ImageVariationsTab campaign={campaign} plan={plan} />
          )}

          {activeTab === "optimize" && (
            <OptimizeTab
              optimizedAds={optimizedAds}
              optimizeCampaign={optimizeCampaign}
              optimizing={optimizing}
              campaign={campaign}
              exportAds={exportAds}
              plan={plan}
            />
          )}

          {activeTab === "variations" && (
            <VariationsTab
              variations={variations}
              generateVariations={generateVariations}
              generatingVariations={generatingVariations}
            />
          )}

          {activeTab === "landing" && (
            <LandingTab
            landingPage={landingPage}
            generateLandingPage={generateLandingPage}
            generatingPage={generatingPage}
            params={params}
            plan={plan}
          />
          )}

          {activeTab === "strategy" && (
            <StrategyTab campaign={campaign} />
          )}

          {activeTab === "prediction" && (
            <PredictionTab campaign={campaign} />
          )}

          {activeTab === "budget" && (
            <BudgetTab campaign={campaign} />
          )}

        </div>
      </main>
    </>
  );
}