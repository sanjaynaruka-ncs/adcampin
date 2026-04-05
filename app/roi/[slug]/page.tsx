import ROITab from "@/app/campaign/[id]/tabs/roi_tab";

export const metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function ROILanding({ params }: any) {

  const presets: any = {
    "facebook-ads": { ad: 1000, rev: 3000 },
    "google-ads": { ad: 2000, rev: 5000 },
    "ecommerce": { ad: 5000, rev: 15000 },
  };

  const preset = presets[params.slug] || { ad: 1000, rev: 3000 };

  return (
    <div className="min-h-screen bg-[#0b1a33] text-white p-10">

      <h1 className="text-3xl font-bold mb-6 capitalize">
        {params.slug.replace("-", " ")} ROI Calculator
      </h1>

      <p className="text-gray-400 mb-6">
        Calculate return on investment for {params.slug.replace("-", " ")} campaigns.
      </p>

      <ROITab defaultAd={preset.ad} defaultRev={preset.rev} />

    </div>
  );
}