import ROITab from "@/app/campaign/[id]/tabs/roi_tab";

/**
 * SEO CONTROL:
 * - Prevent indexing of programmatic ROI pages
 * - Allow link crawling
 */
export const metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ROILanding({ params }: PageProps) {
  /**
   * Preset values for different ROI scenarios
   */
  const presets: Record<string, { ad: number; rev: number }> = {
    "facebook-ads": { ad: 1000, rev: 3000 },
    "google-ads": { ad: 2000, rev: 5000 },
    ecommerce: { ad: 5000, rev: 15000 },
  };

  const slug = params?.slug || "";

  const preset = presets[slug] || { ad: 1000, rev: 3000 };

  const formattedSlug = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-[#0b1a33] text-white p-10">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {formattedSlug} ROI Calculator
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-6">
        Calculate return on investment for {formattedSlug} campaigns.
      </p>

      {/* ROI TOOL */}
      <ROITab defaultAd={preset.ad} defaultRev={preset.rev} />

    </div>
  );
}