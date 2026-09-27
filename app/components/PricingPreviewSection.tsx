"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function PricingPreviewSection() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState<string | null>(null);
  const [yearly, setYearly] = useState(false);

  const proBase = 2499;
  const businessBase = 7999;

  const proPrice = yearly ? Math.round(proBase * 0.8) : proBase;
  const businessPrice = yearly
    ? Math.round(businessBase * 0.8)
    : businessBase;

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        setUser(null);
        setPlan(null);
        return;
      }

      setUser(data.user);

      const { data: profile } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", data.user.id)
        .single();

      if (profile?.plan) {
        setPlan(profile.plan);
      }
    }

    loadUser();
  }, []);

  function goSignup() {
    router.push("/signup");
  }

  function getPlanButton(
    planName: string,
    signupLabel: string,
    checkoutLabel: string,
    price: number,
    color: "blue" | "purple"
  ) {
    if (!user) {
      return (
        <button
          onClick={goSignup}
          className={`w-full ${
            color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-purple-600 hover:bg-purple-700"
          } text-white py-3 rounded-lg transition`}
        >
          {signupLabel}
        </button>
      );
    }

    if (plan === planName.toLowerCase()) {
      return (
        <button
          disabled
          className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg cursor-not-allowed"
        >
          Current Plan
        </button>
      );
    }

    return (
      <Link
        href={`/checkout?plan=${planName}&price=${price}&billing=${
          yearly ? "yearly" : "monthly"
        }`}
        className={`block w-full text-center ${
          color === "blue"
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-purple-600 hover:bg-purple-700"
        } text-white py-3 rounded-lg transition`}
      >
        {checkoutLabel}
      </Link>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#0b1a33] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Smarter Ad Campaigns. Simple Pricing.
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Generate ads, landing pages, and creatives with AI in seconds.
        </p>

        {/* BILLING TOGGLE */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800 border border-slate-700 rounded-full flex p-1">

            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2 rounded-full text-sm ${
                !yearly
                  ? "bg-blue-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2 rounded-full text-sm ${
                yearly
                  ? "bg-blue-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Yearly (Save 20%)
            </button>

          </div>
        </div>

        {/* VALUE BANNER */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-500/10 text-blue-400 px-6 py-2 rounded-full text-sm">
            ⚡ Generate complete ad campaigns in under 60 seconds with AI
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* FREE */}
          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl shadow border border-slate-700 flex flex-col h-full opacity-80">

            <h3 className="text-xl font-semibold text-white mb-4">
              Free
            </h3>

            <p className="text-4xl font-bold text-white mb-6">
              ₹0
            </p>

            <ul className="text-gray-300 space-y-3 mb-8 flex-grow">
              <li>3 Campaigns</li>
              <li>50 AI Credits</li>
              <li>AI Ad Generator</li>
              <li>Basic Campaign Strategy</li>
              <li>Campaign Score Breakdown</li>
              <li>Ad Variations Generator</li>
              <li className="text-gray-500">
                🔒 Landing Page Generator (Pro)
              </li>
              <li className="text-gray-500">
                🔒 Image Variations Generator (Pro)
              </li>
              <li className="text-gray-500">
                🔒 AI Campaign Optimization (Pro)
              </li>
            </ul>

            <div className="mt-auto">
              <button
                disabled={!!user}
                onClick={!user ? goSignup : undefined}
                className="w-full bg-slate-700 text-white py-3 rounded-lg"
              >
                {user ? "Current Plan" : "Get Started"}
              </button>
            </div>

          </div>

          {/* PRO */}
          <div className="bg-slate-800/70 backdrop-blur p-8 rounded-xl shadow-lg border-2 border-blue-600 relative flex flex-col h-full">

            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
              ⭐ Most Popular
            </span>

            <h3 className="text-xl font-semibold text-white mb-4">
              Pro
            </h3>

            <p className="text-4xl font-bold text-white mb-1">
              ₹{proPrice}
              <span className="text-lg text-gray-400">
                {" "} / month
              </span>
            </p>

            <p className="text-xs text-gray-400 mb-2">
              + applicable taxes
            </p>

            <p className="text-sm text-green-400 mb-6">
              Best for growing businesses
            </p>

            <ul className="text-gray-300 space-y-3 mb-8 flex-grow">
              <li>50 Campaigns per month</li>
              <li>500 AI Credits / month</li>
              <li>🚀 AI Campaign Optimization</li>
              <li>🎯 Landing Page Generator</li>
              <li>🖼 Image Variations Generator</li>
              <li>Ad Variations Generator</li>
              <li>Campaign Score Breakdown</li>
              <li>Export to Meta / Google / LinkedIn</li>
              <li>Priority AI Processing</li>
            </ul>

            <div className="mt-auto">
              {getPlanButton(
                "Pro",
                "Start With Pro",
                "Activate Pro",
                proPrice,
                "blue"
              )}
            </div>

          </div>

          {/* BUSINESS */}
          <div className="bg-slate-800/60 backdrop-blur p-8 rounded-xl shadow border border-slate-700 flex flex-col h-full">

            <h3 className="text-xl font-semibold text-white mb-4">
              Business
            </h3>

            <p className="text-4xl font-bold text-white mb-1">
              ₹{businessPrice}
              <span className="text-lg text-gray-400">
                {" "} / month
              </span>
            </p>

            <p className="text-xs text-gray-400 mb-2">
              + applicable taxes
            </p>

            <p className="text-sm text-purple-400 mb-6">
              Ideal for teams & agencies
            </p>

            <ul className="text-gray-300 space-y-3 mb-8 flex-grow">
              <li>250 Campaigns per month</li>
              <li>3000 AI Credits / month</li>
              <li>Advanced AI Optimization</li>
              <li>Ad Variations Generator</li>
              <li>Landing Page Generator</li>
              <li>Image Variations Generator</li>
              <li>Bulk Campaign Generation</li>
              <li>Team Collaboration Workspace</li>
              <li>Export to Meta / Google / LinkedIn</li>
              <li>Priority Feature Access</li>
              <li>Fastest AI Processing</li>
            </ul>

            <div className="mt-auto">
              {getPlanButton(
                "Business",
                "Start With Business",
                "Activate Business",
                businessPrice,
                "purple"
              )}
            </div>

          </div>

          {/* ENTERPRISE */}
          <div className="bg-slate-800/60 backdrop-blur p-8 rounded-xl shadow border border-amber-400/30 flex flex-col h-full">

            <h3 className="text-xl font-semibold text-white mb-4">
              Enterprise
            </h3>

            <p className="text-4xl font-bold text-white mb-6">
              Custom
            </p>

            <ul className="text-gray-300 space-y-3 mb-8 flex-grow">
              <li>Custom solutions for large organizations</li>
              <li>Advanced security & compliance</li>
              <li>Flexible AI usage and pricing</li>
              <li>Dedicated infrastructure</li>
              <li>Custom integrations & APIs</li>
              <li>Priority support & onboarding</li>
              <li>AI strategy consultation</li>
            </ul>

            <div className="mt-auto">
              <a
                href="mailto:sales@adcampin.com?subject=Enterprise Plan Inquiry"
                className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Contact Sales
              </a>
            </div>

          </div>

        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          AI features use between 2–5 credits depending on the generation type.
        </p>

      </div>
    </section>
  );
}