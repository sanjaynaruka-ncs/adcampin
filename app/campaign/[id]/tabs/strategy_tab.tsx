"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function StrategyTab({ campaign }: any) {

  const data = [
    { name: "Meta Ads", value: 40 },
    { name: "Google Ads", value: 35 },
    { name: "LinkedIn Ads", value: 25 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#8b5cf6"];

  return (

    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

      <h2 className="text-xl text-white mb-6">
        Recommended Platform Strategy
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip formatter={(value) => `${value}%`} />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6 text-sm text-gray-300">

        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">

            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[i] }}
            />

            <span>
              {item.name} – {item.value}%
            </span>

          </div>
        ))}

      </div>

    </div>

  );
}