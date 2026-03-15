"use client";

export default function AdsTab({ campaign, exportAds }: any) {

  if (!campaign?.ads) {
    return (
      <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">
        <p className="text-gray-400">No ads generated yet.</p>
      </div>
    );
  }

  let ads: any[] = [];

  function exportAdsCSV(platform: string) {

  if (!ads.length) return;

  const headers = ["Headline", "Primary Text", "CTA"];

  const rows = ads.map((ad: any) => [
    ad.headline,
    ad.primary_text,
    ad.cta
  ]);

  const csvContent =
    [headers, ...rows]
      .map((row) => row.map((v) => `"${v}"`).join(","))
      .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${platform}_ads.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  try {

    // Support both JSON string and array
    if (typeof campaign.ads === "string") {
      ads = JSON.parse(campaign.ads);
    } else if (Array.isArray(campaign.ads)) {
      ads = campaign.ads;
    }

  } catch {
    ads = [];
  }

  return (
    <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">

      <h2 className="text-xl text-white mb-6">
        AI Generated Ads
      </h2>

      <div className="space-y-6">

        {ads.map((ad: any, i: number) => (

          <div
            key={i}
            className="bg-slate-900/200 border border-slate-700 rounded-xl p-6 min-h-[200px] flex flex-col items-center text-center"
          >

            {/* CAMPAIGN IMAGE */}
            {campaign.image_url && (
              <img
                src={campaign.image_url}
                alt="Ad Creative"
                className="max-h-128 rounded-xl mb-6"
              />
            )}

            <h1 className="text-2xl font-bold text-white mb-4">
              {ad.headline}
            </h1>

            <p className="text-gray-300 mb-6 whitespace-pre-line">
              {ad.primary_text}
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              {ad.cta}
            </button>

            <div className="mt-6 flex gap-3 flex-wrap">

              <button
                onClick={() => exportAdsCSV("meta")}
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
              >
                Export Meta Ads
              </button>

              <button
                onClick={() => exportAdsCSV("google")}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
              >
                Export Google Ads
              </button>

              <button
                onClick={() => exportAdsCSV("linkedin")}
                className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white"
              >
                Export LinkedIn Ads
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}