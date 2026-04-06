import Navbar from "../../../../components/navbar";
import type { Metadata } from "next";

type Props = {
  params: {
    platform: string;
    industry: string;
    city: string;
  };
};

function formatText(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const platform = formatText(params.platform);
  const industry = formatText(params.industry);
  const city = formatText(params.city);

  return {
    title: `${platform} Ads for ${industry} in ${city}`,
    description: `Generate high-converting ${platform} ads for ${industry} businesses in ${city}.`,
  };
}

export default function CityAdsPage({ params }: Props) {
  const platform = formatText(params.platform);
  const industry = formatText(params.industry);
  const city = formatText(params.city);

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16 text-white">

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {platform} Ads for {industry} in {city}
        </h1>

        {/* Short Intro */}
        <p className="text-gray-400 mb-10">
          Looking to generate more leads for your {industry} business in {city}? 
          Create high-converting {platform} ads in seconds using AI.
        </p>

        {/* Key Benefits */}
        <div className="grid gap-4 mb-10">
          <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
            ✔ High-converting ad copy tailored for {city}
          </div>
          <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
            ✔ Built for {platform} performance
          </div>
          <div className="bg-white/5 border border-gray-700 rounded-lg p-4">
            ✔ No copywriting skills required
          </div>
        </div>

        {/* CTA */}
        <a
          href="/signup"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Generate Ads Now →
        </a>

      </main>
    </>
  );
}