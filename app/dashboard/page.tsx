"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import Navbar from "../components/navbar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function Dashboard() {
  const router = useRouter();

  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [credits, setCredits] = useState(0);
  const [plan, setPlan] = useState("free");
  const [totalCampaignCount, setTotalCampaignCount] = useState(0);
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const PLAN_NAME =
  plan === "pro"
    ? "Pro Plan"
    : plan === "business"
    ? "Business Plan"
    : plan === "enterprise"
    ? "Enterprise Plan"
    : "Free";

  let CAMPAIGN_LIMIT = 3;
  if (plan === "pro") CAMPAIGN_LIMIT = 50;
  if (plan === "business") CAMPAIGN_LIMIT = 250;
  if (plan === "enterprise") CAMPAIGN_LIMIT = Infinity;

  let TOTAL_CREDITS = 50;
  if (plan === "pro") TOTAL_CREDITS = 500;
  if (plan === "business") TOTAL_CREDITS = 3000;
  if (plan === "enterprise") TOTAL_CREDITS = Infinity;

  const usedCampaigns = totalCampaignCount;
  const remainingCampaigns =
  CAMPAIGN_LIMIT === Infinity
    ? "Unlimited"
    : Math.max(CAMPAIGN_LIMIT - usedCampaigns, 0);

  const usedCredits =
    TOTAL_CREDITS === Infinity ? credits : TOTAL_CREDITS - credits;

  const remainingCredits = credits;

  const totalBudget = campaigns.reduce(
    (sum, c) => sum + (Number(c.budget) || 0),
    0
  );

  const estimatedReach = totalBudget * 25;

  const chartData = campaigns.slice(0, 5).map((c) => {

    let score = 0;

    if (c?.campaign_score) {
      const match = String(c.campaign_score).match(/\d+/);

      if (match) {
        const parsed = parseInt(match[0]);
        score = isNaN(parsed) ? 0 : parsed;
      }
    }

    return {
      name: c.business,
      score: score
    };

  });

  useEffect(() => {
    async function loadData() {

      const { data: { session } } = await supabase.auth.getSession();
      const userData = { user: session?.user };

      if (!userData?.user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("ai_credits, total_campaigns_created, plan")
        .eq("id", userData.user.id)
        .single();

      setCredits(profile?.ai_credits || 0);
      setTotalCampaignCount(profile?.total_campaigns_created || 0);
      setPlan(profile?.plan || "free");

      const { data } = await supabase
        .from("campaigns")
        .select("*")
        .eq("user_id", userData.user.id)
        .order("created_at", { ascending: false });

      setCampaigns(data || []);
    }

    loadData();
  }, [router]);

  useEffect(() => {

    let channel: any;

    async function subscribeCredits() {

      const { data: { session } } = await supabase.auth.getSession();
      const userData = { user: session?.user };
      if (!userData?.user) return;

      channel = supabase
        .channel("credits-update")
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "profiles",
            filter: `id=eq.${userData.user.id}`,
          },
          (payload) => {
            setCredits(payload.new.ai_credits);
          }
        )
        .subscribe();
    }

    subscribeCredits();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };

  }, []);

  function toggleCampaign(id: string) {
    if (selectedCampaigns.includes(id)) {
      setSelectedCampaigns(selectedCampaigns.filter((c) => c !== id));
    } else {
      setSelectedCampaigns([...selectedCampaigns, id]);
    }
  }

  function toggleSelectAll() {

  if (selectAll) {
    setSelectedCampaigns([]);
  } else {
    setSelectedCampaigns(campaigns.map((c) => c.id));
  }

  setSelectAll(!selectAll);
}

  async function deleteSelectedCampaigns() {

    if (selectedCampaigns.length === 0) {
      alert("No campaigns selected.");
      return;
    }

    const confirmDelete = confirm("Delete selected campaigns?");
    if (!confirmDelete) return;

    const { data: { session } } = await supabase.auth.getSession();
    const userData = { user: session?.user };

    if (!userData?.user) {
      alert("User not authenticated.");
      return;
    }

    const { error } = await supabase
      .from("campaigns")
      .delete()
      .eq("user_id", userData.user.id)
      .in("id", selectedCampaigns);

    if (error) {
      console.error(error);
      alert("Failed to delete campaigns.");
      return;
    }

    setCampaigns((prev) =>
      prev.filter((c) => !selectedCampaigns.includes(c.id))
    );

    setSelectedCampaigns([]);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10">

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* PLAN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Plan
            </h2>

            <p className="text-3xl mt-2 text-black dark:text-white">
              {PLAN_NAME}
            </p>

            <button
              onClick={() => router.push("/pricing")}
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Upgrade to Pro
            </button>
          </div>

          {/* CAMPAIGN USAGE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Campaign Usage
            </h2>
            <p className="text-3xl mt-2 text-black dark:text-white font-semibold">
              {CAMPAIGN_LIMIT === Infinity
                ? `${usedCampaigns} / Unlimited`
                : `${usedCampaigns} / ${CAMPAIGN_LIMIT}`}
            </p>
            <p className="text-sm text-pink-500 mt-1">
              {remainingCampaigns} remaining
            </p>
          </div>

          {/* AI CREDITS */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              AI Credits
            </h2>
            <p className="text-3xl mt-2 text-black dark:text-white">
              {usedCredits} / {TOTAL_CREDITS}
            </p>
            <p className="text-sm text-yellow-500 mt-1">
              {remainingCredits} remaining
            </p>
          </div>

          {/* ESTIMATED REACH */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Estimated Reach
            </h2>
            <p className="text-3xl mt-2 text-black dark:text-white">
              {estimatedReach.toLocaleString()}
            </p>
            <p className="text-sm text-orange-500 mt-1">
              people
            </p>
          </div>

        </div>

        <div className="flex justify-center my-10">
          <button
            onClick={() => router.push("/create-campaign")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition"
          >
            + Create Campaign
          </button>
        </div>

        {campaigns.length > 0 && (
          <div className="mt-12 max-w-5xl mx-auto">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                Recent Campaign Scores
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip
                    cursor={false}
                    labelStyle={{ color: "#03541b" }}
                  />
                  <Bar
                    dataKey="score"
                    fill="#22a66b"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between mt-12 mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Recent Campaigns
              </h2>

              <button
                onClick={deleteSelectedCampaigns}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete Selected
              </button>
            </div>
            
            <div className="flex justify-end mb-3 pr-6">

              <label className="flex items-center gap-2 text-sm text-gray-300">
                Select All
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="w-5 h-5"
                />
              </label>

            </div>
            <div className="grid gap-2">

              {campaigns.map((c) => (
                <div
                  key={c.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow border flex items-center justify-between"
                >

                  <Link
                    href={`/campaign/${c.id}`}
                    className="flex-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <div className="cursor-pointer">

                      <p className="font-semibold text-black dark:text-white">
                        {c.business} – {c.product}
                      </p>

                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Generated on {new Date(c.created_at).toLocaleDateString()}
                      </p>

                    </div>
                  </Link>

                  <input
                    type="checkbox"
                    checked={selectedCampaigns.includes(c.id)}
                    onChange={() => toggleCampaign(c.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5 ml-6"
                  />

                </div>
              ))}

            </div>

          </div>
        )}

      </main>
    </>
  );
}