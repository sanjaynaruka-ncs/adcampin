"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

export default function OverviewTab({ campaignScore, scoreBreakdown }: any) {

const data = [
  { name: "Ad Copy", score: scoreBreakdown?.adCopy || 80 },
  { name: "Audience", score: scoreBreakdown?.audience || 85 },
  { name: "Budget", score: scoreBreakdown?.budget || 70 },
  { name: "Platform", score: scoreBreakdown?.platform || 88 },
  { name: "Landing", score: scoreBreakdown?.landing || 75 }
];

const performance = [
  { day: "Day 1", clicks: 30 },
  { day: "Day 2", clicks: 45 },
  { day: "Day 3", clicks: 60 },
  { day: "Day 4", clicks: 50 },
  { day: "Day 5", clicks: 70 },
];

return (

<div className="grid gap-8">

{/* Campaign Score Card */}

<div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

<h2 className="text-xl text-white mb-4">
Campaign Score
</h2>

<p className="text-4xl font-bold text-green-400">
{campaignScore}/100
</p>

</div>

{/* Score Breakdown Chart */}

<div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

<h2 className="text-xl text-white mb-6">
Score Breakdown
</h2>

<ResponsiveContainer width="100%" height={250}>
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3" stroke="#334155" />
<XAxis dataKey="name" stroke="#94a3b8"/>
<YAxis stroke="#94a3b8"/>
<Tooltip
        cursor={false}
        labelStyle={{ color: "#03541b" }}
      />
<Bar dataKey="score" fill="#3b82f6" />
</BarChart>
</ResponsiveContainer>

</div>

{/* Performance Prediction */}

<div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

<h2 className="text-xl text-white mb-6">
Predicted Engagement
</h2>

<ResponsiveContainer width="100%" height={250}>
<LineChart data={performance}>
<CartesianGrid strokeDasharray="3 3" stroke="#334155" />
<XAxis dataKey="day" stroke="#94a3b8"/>
<YAxis stroke="#94a3b8"/>
<Tooltip />
<Line type="monotone" dataKey="clicks" stroke="#22c55e" strokeWidth={3}/>
</LineChart>
</ResponsiveContainer>

</div>

</div>

);
}