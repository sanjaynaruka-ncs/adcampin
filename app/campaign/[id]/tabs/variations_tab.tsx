"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VariationsTab({
  variations,
  winner,
  generateVariations,
  generatingVariations,
  campaign,
  exportAds
}: any) {

  const router = useRouter();
  const [creditError, setCreditError] = useState(false);

  let ads: any[] = [];

  try {

    if (typeof variations === "string") {
      const parsed = JSON.parse(variations);
      ads = parsed?.variations || [];
    } else if (Array.isArray(variations)) {
      ads = variations;
    }

  } catch {
    ads = [];
  }

  async function handleGenerateVariations() {

    setCreditError(false);

    const result = await generateVariations();

    if (result?.error) {
      setCreditError(true);
    }

    return result;

  }

  return (
    <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">

      {/* Button */}
      <button
        onClick={handleGenerateVariations}
        className="bg-purple-600 text-white py-3 px-6 rounded-lg mb-4 hover:bg-purple-700 transition"
      >
        {generatingVariations ? "Generating..." : "Generate Ad Variations"}
      </button>

      {/* Status Messages */}
      <div className="text-gray-400 text-sm space-y-1 mb-4">

        {creditError && (
          <div className="text-red-400">
            Not enough AI credits.{" "}
            <span
              onClick={() => router.push("/pricing")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Upgrade to Pro
            </span>
          </div>
        )}

        {generatingVariations && (
          <p>This may take a few seconds</p>
        )}

        {!generatingVariations && !ads.length && !creditError && (
          <p>
            Click "Generate Ad Variations" to create alternative ad versions.
          </p>
        )}

      </div>

      {ads.length > 0 && (

        <div className="space-y-6">

          <h2 className="text-xl text-white mb-6">
            AI Ad Variations
          </h2>

          {ads.map((ad: any, i: number) => (

            <div
              key={i}
              className={`bg-slate-900/200 border rounded-xl p-6 min-h-[200px] flex flex-col items-center text-center ${
                winner === i + 1
                  ? "border-green-500"
                  : "border-slate-700"
              }`}
            >

              {/* CAMPAIGN IMAGE */}
              {campaign?.image_url && (
                <img
                  src={campaign.image_url}
                  alt="Ad Creative"
                  className="max-h-128 rounded-xl mb-6"
                />
              )}

              {winner === i + 1 && (
                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                  Predicted Winner
                </span>
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

              {ad.predicted_ctr && (
                <p className="text-sm text-gray-400 mt-4">
                  Predicted CTR: {ad.predicted_ctr}
                </p>
              )}

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