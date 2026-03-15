"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OptimizeTab({
  optimizedAds,
  optimizeCampaign,
  optimizing,
  campaign,
  exportAds,
  plan
}: any) {

  const router = useRouter();
  const [creditError, setCreditError] = useState(false);

  const isLocked = plan === "free";

  let ads: any[] = [];

  try {

    // Support both JSON string and array
    if (typeof optimizedAds === "string") {
      ads = JSON.parse(optimizedAds);
    } else if (Array.isArray(optimizedAds)) {
      ads = optimizedAds;
    }

  } catch {
    ads = [];
  }

  async function handleOptimizeCampaign() {

    console.log("STEP 3: handleOptimizeCampaign started");

    setCreditError(false);

    const result = await optimizeCampaign();

    console.log(
      "STEP 4: optimizeCampaign returned:",
      JSON.stringify(result, null, 2)
    );

    if (result?.error === "Not enough AI credits") {
      console.log("STEP 5: Credit error triggered");
      setCreditError(true);
    }

    return result;
  }

  return (

    <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">

      <button
        onClick={optimizing ? undefined : handleOptimizeCampaign}
        disabled={optimizing || isLocked}
        className={`px-6 py-3 rounded-lg mb-6 text-white ${
          isLocked
            ? "bg-gray-500 cursor-not-allowed"
            : optimizing
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLocked
          ? "🔒 Optimize Campaign (Pro)"
          : optimizing
          ? "Optimizing..."
          : "Optimize Campaign with AI"}
      </button>

      {isLocked && (
        <div className="text-yellow-400 text-sm mb-4">
          🔒 Optimize Campaigns are available in the Pro plan.{" "}
          <span
            onClick={() => router.push("/pricing")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Upgrade
          </span>
        </div>
      )}

      {creditError && !isLocked && (
        <div className="text-sm text-red-400 mb-4">
          AI usage limit reached.{" "}
          <span
            onClick={() => router.push("/pricing")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Upgrade to Pro
          </span>
        </div>
      )}

      {optimizing && (
        <p className="text-sm text-gray-400 mt-2">
          This may take a few seconds
        </p>
      )}

      {!optimizing && !optimizedAds && !creditError && !isLocked && (
        <p className="text-gray-400 mb-6">
          Click "Optimize Campaign with AI" to generate optimized ads.
        </p>
      )}

      {ads.length > 0 && (

        <div className="space-y-6">

          <h2 className="text-xl text-white mb-6">
            ✨ AI Optimized Ads
          </h2>

          {ads.map((ad: any, i: number) => (

            <div
              key={i}
              className="bg-slate-900/200 border border-slate-700 rounded-xl p-6 min-h-[200px] flex flex-col items-center text-center"
            >

              {campaign?.image_url && (
                <img
                  src={campaign.image_url}
                  alt="Ad Creative"
                  className="max-h-128 rounded-xl mb-6"
                />
              )}

              <h1 className="text-2xl font-bold text-white mb-4">
                {ad.headline}
              </h1>

              <p className="text-gray-300 mb-6 whitespace-pre-line">
                {ad.primary_text}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                {ad.cta}
              </button>

              <div className="mt-6 flex gap-3 flex-wrap">

                <button
                  onClick={() => exportAds("Meta Ads")}
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
                >
                  Meta Ads
                </button>

                <button
                  onClick={() => exportAds("Google Ads")}
                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
                >
                  Google Ads
                </button>

                <button
                  onClick={() => exportAds("LinkedIn Ads")}
                  className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white"
                >
                  LinkedIn Ads
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}