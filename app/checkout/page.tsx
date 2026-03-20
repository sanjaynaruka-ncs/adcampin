"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/navbar";
import Script from "next/script";
import { supabase } from "../../lib/supabase";
import { countries } from "@/lib/countries";

function CheckoutContent() {
  const params = useSearchParams();
  const [country, setCountry] = useState("India");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const plan = params.get("plan") || "Pro";

 

  const basePrice = Number(params.get("price") || "999");

  const billing = params.get("billing") || "monthly";

  // ✅ GST logic based on selected country
  const isIndia = country === "India";


  const gst = isIndia ? Math.round(basePrice * 0.18) : 0;

  const totalPrice = basePrice + gst;

  const countryInput =
    (typeof window !== "undefined"
      ? (document.getElementById("country") as HTMLInputElement)?.value
      : "") || "India";

  const handlePay = async () => {
    console.log("Pay button clicked");

    const { data } = await supabase.auth.getUser();
    const user = data?.user;

    const email = user?.email;
    const user_id = user?.id;

    if (!email || !user_id) {
      alert("Please login before making a payment.");
      return;
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      amount: Number(totalPrice),
      email: user?.email,
      user_id: user?.id,
      plan: plan,
      billing: billing,
    }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "AdCampin",
      description: `${plan} Plan`,
      order_id: order.id,

      // ✅ HANDLER
      handler: function (response: any) {
        console.log("Razorpay Response:", response);

        // 🚀 Instant redirect
        window.location.href = "/payment-success";

        fetch("/api/payment-success", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            plan: plan,
            billing: billing,
            email: email,
            user_id: user_id,
            amount: Number(totalPrice),

            // ✅ NEW FIELDS
            gstin:
              (document.getElementById("gstin") as HTMLInputElement)?.value ||
              null,
            business_name:
              (document.getElementById("business_name") as HTMLInputElement)
                ?.value || null,
            country:
             (document.getElementById("country") as HTMLInputElement)?.value || "India",
          }),
        });
      },

      theme: {
        color: "#2563eb",
      },
    };

    if (!(window as any).Razorpay) {
      alert("Payment system not loaded. Please refresh.");
      return;
    }

    const razor = new (window as any).Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#0b1b3b] to-black text-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Complete Your Purchase
          </h1>

          <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur">
            <div className="space-y-6 text-lg">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal</span>
                <span>₹{basePrice}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">GST (18%)</span>
                <span>₹{gst}</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="text-gray-300">Total</span>
                <span className="font-bold">₹{totalPrice}</span>
              </div>
            </div>

            {/* ✅ NEW: Business Name */}
            <input
              type="text"
              placeholder="Enter Business Name (Optional)"
              id="business_name"
              className="w-full mt-6 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
            />

            {/* Existing GSTIN */}
            <input
              type="text"
              placeholder="Enter GSTIN (Optional for Business)"
              id="gstin"
              className="w-full mt-4 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
            />

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Select Country"
                value={country}
                onChange={(e) => {
                  const value = e.target.value;
                  setCountry(value);

                  const filtered = countries.filter((c: string) =>
                    c.toLowerCase().includes(value.toLowerCase())
                  );

                  setSuggestions(filtered.slice(0, 6));
                }}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
              />

              {suggestions.length > 0 && (
                <div className="absolute w-full bg-black border border-white/20 rounded-lg mt-1 z-10 max-h-60 overflow-y-auto">
                  {suggestions.map((c: string) => (
                    <div
                      key={c}
                      onClick={() => {
                        setCountry(c);
                        setSuggestions([]);
                      }}
                      className="p-2 hover:bg-white/10 cursor-pointer"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
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
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}