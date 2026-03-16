"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const params = useSearchParams();

  const plan = params.get("plan") || "Pro";
  const price = params.get("price") || "999";
  const billing = params.get("billing") || "monthly";

  const handlePay = () => {
    alert("Razorpay checkout will open here");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1b3b] to-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">
          Complete Your Purchase
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur">

          <div className="space-y-6 text-lg">

            <div className="flex justify-between">
              <span className="text-gray-300">Plan</span>
              <span className="font-semibold">{plan}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-300">Billing</span>
              <span className="font-semibold capitalize">{billing}</span>
            </div>

            <div className="flex justify-between text-xl">
              <span className="text-gray-300">Total</span>
              <span className="font-bold">₹{price}</span>
            </div>

          </div>

          <button
            onClick={handlePay}
            className="mt-10 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-semibold"
          >
            Pay Now
          </button>

        </div>

      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}