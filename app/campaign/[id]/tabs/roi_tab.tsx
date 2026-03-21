"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export default function ROITab() {
  const [adSpend, setAdSpend] = useState(1000);
  const [revenue, setRevenue] = useState(3000);
  const [roi, setRoi] = useState<number | null>(null);

  function calculateROI() {
    if (adSpend <= 0) return;
    const result = ((revenue - adSpend) / adSpend) * 100;
    setRoi(result);
  }

  return (
    <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">

      <h2 className="text-xl text-white mb-6">
        ROI Calculator
      </h2>

      <div className="space-y-4">

        <input
          type="number"
          placeholder="Ad Spend (₹)"
          value={adSpend}
          onChange={(e) => setAdSpend(Number(e.target.value))}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
        />

        <input
          type="number"
          placeholder="Revenue (₹)"
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
        />

        <button
          onClick={calculateROI}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Calculate ROI
        </button>

        {roi !== null && (
          <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl text-center space-y-4">

            <h3 className="text-white text-lg">
              ROI: <span className="font-bold">{roi.toFixed(2)}%</span>
            </h3>

            {/* ✅ Share Button */}
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

          </div>
        )}

      </div>

    </div>
  );
}