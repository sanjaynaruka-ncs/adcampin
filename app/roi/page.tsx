"use client";

import ROITab from "@/app/campaign/[id]/tabs/roi_tab";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function ROIPublicPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1a33] py-12 flex justify-center">
        <div className="w-full max-w-2xl px-6">
          <h1 className="text-3xl text-white font-semibold mb-6 text-center">
            ROI Calculator
          </h1>

          <ROITab />
        </div>
      </main>

      <Footer />
    </>
  );
}