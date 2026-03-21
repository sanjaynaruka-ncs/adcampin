"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { Share2 } from "lucide-react";

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState(1000);
  const [revenue, setRevenue] = useState(3000);
  const [roi, setRoi] = useState<number | null>(null);

  function calculateROI() {
    const result = ((revenue - adSpend) / adSpend) * 100;
    setRoi(result);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black px-6 py-20">
        <div className="max-w-2xl mx-auto space-y-6">

          <h1 className="text-3xl font-bold text-center">
            ROI Calculator for Ads
          </h1>

          <p className="text-center text-gray-600">
            Calculate your return on investment for ad campaigns instantly.
          </p>

          {/* Inputs */}
          <div className="space-y-4">

            <input
              type="number"
              placeholder="Ad Spend (₹)"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="number"
              placeholder="Revenue Generated (₹)"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            />

            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Calculate ROI
            </button>
          </div>

          {/* Result */}
          {roi !== null && (
            <div className="bg-gray-100 p-6 rounded-xl text-center space-y-4">

              <h2 className="text-xl font-semibold">
                Your ROI: {roi.toFixed(2)}%
              </h2>

              {/* Share Button */}
              <button
                onClick={() => {
                  const url = window.location.href;
                  navigator.clipboard.writeText(url);
                  alert("Link copied! Share it 🚀");
                }}
                className="mx-auto bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white flex items-center gap-2"
              >
                <Share2 size={18} />
                Share this Result
              </button>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}