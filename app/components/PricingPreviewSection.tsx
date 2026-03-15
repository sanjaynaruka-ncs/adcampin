"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function PricingPreviewSection() {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState<string | null>(null);

  useEffect(() => {

    async function loadUser() {

      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
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

  function getButton(planName: string, labelIfLoggedOut: string) {

    if (!user) {
      return (
        <button
          onClick={() => router.push("/signup")}
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          {labelIfLoggedOut}
        </button>
      );
    }

    if (plan === planName) {
      return (
        <button
          disabled
          className="bg-gray-700 text-gray-300 px-6 py-3 rounded-lg cursor-not-allowed"
        >
          Current Plan
        </button>
      );
    }

    return (
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Activate This Plan
      </button>
    );

  }

  return (
    <section className="py-24 bg-[#0f172a] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Simple Pricing
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Start for free and upgrade as your campaigns grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Free Plan */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-blue-500 transition flex flex-col">

            <h3 className="text-xl font-semibold mb-4">
              Free
            </h3>

            <p className="text-4xl font-bold mb-6">
              ₹0
            </p>

            <ul className="text-gray-400 space-y-3 mb-8 text-sm flex-grow">
              <li>3 AI campaigns</li>
              <li>Basic ad copy generation</li>
              <li>Limited creatives</li>
            </ul>

            <div className="mt-auto">
              {getButton("free", "Get Started")}
            </div>

          </div>


          {/* Pro Plan */}
          <div className="bg-slate-800 border-2 border-blue-500 rounded-xl p-8 text-center shadow-xl scale-105 flex flex-col">

            <div className="text-sm text-blue-400 font-semibold mb-2">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Pro
            </h3>

            <p className="text-4xl font-bold mb-6">
              ₹2499
            </p>

            <ul className="text-gray-400 space-y-3 mb-8 text-sm flex-grow">
              <li>Unlimited AI campaigns</li>
              <li>Ad optimization</li>
              <li>Creative variations</li>
              <li>Campaign predictions</li>
            </ul>

            <div className="mt-auto">
              {getButton("pro", "Start With Pro")}
            </div>

          </div>


          {/* Business Plan */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-blue-500 transition flex flex-col">

            <h3 className="text-xl font-semibold mb-4">
              Business
            </h3>

            <p className="text-4xl font-bold mb-6">
              ₹7999
            </p>

            <ul className="text-gray-400 space-y-3 mb-8 text-sm flex-grow">
              <li>Everything in Pro</li>
              <li>Multi-client campaigns</li>
              <li>Advanced analytics</li>
            </ul>

            <div className="mt-auto">
              {getButton("business", "Start With Business")}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}