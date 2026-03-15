"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function PredictionTab({ campaign }: any) {

const data = [
  { day: "Day 1", clicks: 50 },
  { day: "Day 2", clicks: 80 },
  { day: "Day 3", clicks: 120 },
  { day: "Day 4", clicks: 100 },
  { day: "Day 5", clicks: 160 },
];

return (

<div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

<h2 className="text-xl text-white mb-6">
Campaign Performance Forecast
</h2>

<ResponsiveContainer width="100%" height={300}>
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3" stroke="#334155" />
<XAxis dataKey="day" stroke="#94a3b8"/>
<YAxis stroke="#94a3b8"/>
<Tooltip />
<Line
type="monotone"
dataKey="clicks"
stroke="#3b82f6"
strokeWidth={3}
/>
</LineChart>
</ResponsiveContainer>

</div>

);
}