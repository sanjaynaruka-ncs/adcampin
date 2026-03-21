"use client";

import ROITab from "@/app/campaign/[id]/tabs/roi_tab";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";

export default function ROIPublicPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1a33] py-12 flex justify-center">
        <div className="w-full max-w-2xl px-6">
          <h1 className="text-3xl text-white font-semibold mb-6 text-center">
            ROI Calculator
          </h1>

            <Suspense fallback={<div className="text-white">Loading...</div>}>
            <ROITab />
            </Suspense>

            {/* ✅ SEO CONTENT */}
            <div className="mt-10 text-gray-300 max-w-2xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold text-white">
                What is ROI in Advertising?
            </h2>

            <p>
                ROI (Return on Investment) measures how much profit you generate from your
                advertising spend. It helps businesses understand whether their marketing
                campaigns are profitable or not.
            </p>

            <h2 className="text-xl font-semibold text-white">
                ROI Formula
            </h2>

            <p>
                ROI = (Revenue - Ad Spend) / Ad Spend × 100
            </p>

            <h2 className="text-xl font-semibold text-white">
                Why ROI Matters?
            </h2>

            <p>
                Tracking ROI helps you optimize campaigns, reduce wasted ad spend, and
                maximize profitability across platforms like Facebook Ads, Google Ads, and
                more.
            </p>
            </div>
        </div>
      </main>

      <Footer />
    </>
  );
}