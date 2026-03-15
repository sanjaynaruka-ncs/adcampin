"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function BudgetTab({ campaign }: any) {

  // Normalize budget safely
  const rawBudget = campaign?.budget;
  const totalBudget =
  campaign?.budget ??
  Number(campaign?.budget_plan?.match(/\d+/)?.[0] || 0);

  let metaSpend = 0;
  let googleSpend = 0;
  let linkedinSpend = 0;

  console.log("Campaign budget:", campaign?.budget);
  // If a valid budget exists → calculate allocation directly
  if (!isNaN(totalBudget) && totalBudget > 0) {

    metaSpend = Math.floor(totalBudget * 0.4);
    googleSpend = Math.floor(totalBudget * 0.35);
    linkedinSpend = totalBudget - metaSpend - googleSpend;

  } else {

    // Fallback: parse AI text plan (keeps existing feature working)
    try {
      const text = campaign?.budget_plan || "";

      const metaMatch = text.match(/Meta.*?(\d+)/i);
      const googleMatch = text.match(/Google.*?(\d+)/i);
      const linkedinMatch = text.match(/LinkedIn.*?(\d+)/i);

      metaSpend = metaMatch ? Number(metaMatch[1]) : 0;
      googleSpend = googleMatch ? Number(googleMatch[1]) : 0;
      linkedinSpend = linkedinMatch ? Number(linkedinMatch[1]) : 0;

    } catch {
      metaSpend = 0;
      googleSpend = 0;
      linkedinSpend = 0;
    }

  }

  const data = [
    { platform: "Meta", spend: metaSpend },
    { platform: "Google", spend: googleSpend },
    { platform: "LinkedIn", spend: linkedinSpend },
  ];

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

      <h2 className="text-xl text-white mb-6">
        Budget Allocation
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155"/>
        <XAxis dataKey="platform" stroke="#94a3b8"/>
        <YAxis stroke="#94a3b8"/>
       <Tooltip
        cursor={false}
        labelStyle={{ color: "#03541b" }}
      />
        <Bar dataKey="spend" fill="#22c55e"/>
      </BarChart>
      </ResponsiveContainer>

    </div>
  );
}