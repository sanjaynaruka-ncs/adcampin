"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Navbar from "../components/navbar";

export default function CreateCampaign() {
  const router = useRouter();

  const [business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");
  const [strategy, setStrategy] = useState("");
  const [prediction, setPrediction] = useState("");
  const [budgetPlan, setBudgetPlan] = useState("");
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [campaignScore, setCampaignScore] = useState("");
  const [createdCampaignId, setCreatedCampaignId] = useState<string | null>(null);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        router.push("/login");
        return;
      }
    }

    checkUser();
  }, [router]);

  async function generateAds() {
    try {
      setLoading(true);

      const { data: userData } = await supabase.auth.getUser();

      if (!userData?.user) {
        alert("Please login first.");
        setLoading(false);
        return;
      }

      // Count existing campaigns
      const { count } = await supabase
        .from("campaigns")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userData.user.id);

      if (count !== null && count >= 100) {
        alert("Free plan limit reached. Upgrade to create more campaigns.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/generate-ads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business,
          product,
          budget,
          userId: userData.user.id
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      // Convert ads to JSON string for storage
      const adsString = JSON.stringify(data.ads || []);

      if (!createdCampaignId) {
        setResult(adsString);
        setImage(data.image || "");
        setStrategy(data.strategy || "");
        setPrediction(data.prediction || "");
        setBudgetPlan(data.budgetPlan || "");
        setCampaignScore(data.campaignScore || "");
      }

      // Save campaign to Supabase
      const { data: insertedCampaign } = await supabase
        .from("campaigns")
        .insert([
          {
            user_id: userData.user.id,
            business,
            product,
            budget: Number(budget),
            ads: adsString,   // ⭐ FIXED
            image_url: data.image,
            strategy: data.strategy,
            prediction: data.prediction,
            budget_plan: data.budgetPlan,
            campaign_score: data.campaignScore,
          },
        ])
        .select()
        .single();

      if (insertedCampaign) {
        setCreatedCampaignId(insertedCampaign.id);
      }

      setCampaigns([
        ...campaigns,
        {
          business,
          product,
          ads: adsString,
          strategy: data.strategy,
          prediction: data.prediction,
          date: new Date().toLocaleDateString(),
        },
      ]);

    } catch (error) {
      console.error("Generate Ads Error:", error);
      alert("Something went wrong while generating ads.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#0b1a33] p-10 flex justify-center">

        <div className="w-full max-w-5xl">

          <h1 className="text-3xl font-bold text-white mb-8">
            Create Campaign
          </h1>

          <div className="bg-slate-800/60 backdrop-blur p-8 rounded-xl shadow max-w-2xl border border-slate-700">

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Business Name
              </label>
              <input
                type="text"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Product / Service
              </label>
              <input
                type="text"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Budget
              </label>
              <input
                type="number"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>

            <button
              onClick={generateAds}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Generating..." : "Generate Ads with AI"}
            </button>

            {loading && (
              <div className="text-gray-400 text-sm space-y-1 mt-2">
                <p>This may take a few seconds</p>
              </div>
            )}

          </div>

          {createdCampaignId && (
            <div className="mt-8 bg-green-900/30 border border-green-700 rounded-xl p-8 text-center max-w-2xl">

              <h2 className="text-2xl font-semibold text-green-300 mb-3">
                Campaign Generated Successfully
              </h2>

              <p className="text-gray-300 mb-6">
                Your AI campaign has been created and saved.
              </p>

              <div className="flex justify-center gap-4">

                <button
                  onClick={() => router.push(`/campaign/${createdCampaignId}`)}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium"
                >
                  View Campaign
                </button>

                <button
                  onClick={() => router.push("/dashboard")}
                  className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg text-white font-medium"
                >
                  Go to Dashboard
                </button>

              </div>

            </div>
          )}

        </div>
      </main>
    </>
  );
}