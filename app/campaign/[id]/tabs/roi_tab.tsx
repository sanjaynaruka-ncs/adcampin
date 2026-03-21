"use client";

import { useState, useEffect } from "react";
import { Share2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

type ROITabProps = {
  defaultAd?: number;
  defaultRev?: number;
};

export default function ROITab({
  defaultAd = 0,
  defaultRev = 0,
}: ROITabProps) {
  const [adSpend, setAdSpend] = useState<number>(defaultAd);
  const [revenue, setRevenue] = useState<number>(defaultRev);
  const [roi, setRoi] = useState<number | null>(null);

  const searchParams = useSearchParams();

  // ✅ Read from URL
  useEffect(() => {
    const ad = searchParams.get("ad");
    const rev = searchParams.get("rev");

    if (ad) setAdSpend(Number(ad));
    if (rev) setRevenue(Number(rev));
  }, [searchParams]);

  function calculateROI() {
    if (adSpend <= 0) return;
    const result = ((revenue - adSpend) / adSpend) * 100;
    setRoi(result);
  }

  // ✅ Auto calculate
  useEffect(() => {
    if (adSpend > 0 && revenue > 0) {
      calculateROI();
    }
  }, [adSpend, revenue]);

  return (
    <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">
      <h2 className="text-xl text-white mb-6">ROI Calculator</h2>

      <div className="space-y-4">

        {/* Ad Spend */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">
            💰 Ad Spend (How much you spend on ads)
          </label>
          <input
            type="number"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
          />
        </div>

        {/* Revenue */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">
            📈 Revenue Generated (From those ads)
          </label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
          />
        </div>

        <button
          onClick={calculateROI}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Calculate ROI
        </button>
      </div>

      {/* RESULT */}
      {roi !== null && (
        <div className="mt-6 bg-slate-900 border border-slate-700 p-5 rounded-xl text-center space-y-4">
          <h3 className="text-white text-lg">
            ROI: <span className="font-bold">{roi.toFixed(2)}%</span>
          </h3>

          {/* Share current page */}
          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert("Link copied! Share it 🚀");
            }}
            className="mx-auto bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white flex items-center gap-2"
          >
            <Share2 size={16} />
            Share this Result
          </button>

          {/* Share with params */}
          <button
            onClick={() => {
              const url = `${window.location.origin}${window.location.pathname}?ad=${adSpend}&rev=${revenue}`;
              navigator.clipboard.writeText(url);
              alert("🔗 Share link copied!");
            }}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Share2 size={16} />
            Share ROI Calculator
          </button>

          <button
            onClick={() => {
              const embedCode = `<iframe src="${window.location.origin}/roi?ad=${adSpend}&rev=${revenue}" ...>`
              navigator.clipboard.writeText(embedCode);
              alert("📋 Embed code copied!");
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            📋 Embed this Calculator
          </button>
        </div>
      )}
    </div>
  );
}