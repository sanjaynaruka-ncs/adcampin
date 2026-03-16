import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/industries";
import { platforms } from "@/lib/platforms";

export function generateStaticParams() {

  const params = [];

  for (const platform of platforms) {
    for (const industry of industries) {
      params.push({
        platform,
        industry: industry.slug
      });
    }
  }

  return params;
}

type PageProps = {
  params: Promise<{
    platform: string;
    industry: string;
  }>;
};

function formatText(text: string) {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: PageProps) {
  const { platform, industry } = await params;

  const formattedPlatform = formatText(platform);
  const formattedIndustry = formatText(industry);

  return {
    title: `${formattedPlatform} Ads for ${formattedIndustry} | AdCampin`,
    description: `Generate high-performing ${formattedPlatform} ads for ${formattedIndustry} businesses using AI with AdCampin.`,
  };
}

export default async function Page({ params }: PageProps) {

  const { platform, industry } = await params;

  const formattedPlatform = formatText(platform);
  const formattedIndustry = formatText(industry);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white text-center">

      {/* HERO SECTION */}

      <section className="mb-20">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {formattedPlatform} Ads for {formattedIndustry}
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Generate high-performing {formattedPlatform} ads for {formattedIndustry} businesses
          using AI. AdCampin helps create ad copy, targeting strategy,
          creatives and optimization instantly.
        </p>

        <div className="flex justify-center mb-10">
          <Image
            src="/ads-preview.webp"
            alt={`${formattedPlatform} ads for ${formattedIndustry}`}
            width={900}
            height={500}
            className="rounded-xl border border-slate-700"
            priority
          />
        </div>

        <Link
          href="/signup"
          className="bg-blue-600 px-6 py-3 rounded-lg inline-block"
        >
          Generate Ads Now
        </Link>

      </section>


      {/* INDUSTRY OVERVIEW */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Advertising for {formattedIndustry} Businesses
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          {formattedIndustry} businesses use {formattedPlatform} ads to reach new
          customers, promote services and generate qualified leads.
          Advertising campaigns can target audiences based on location,
          interests and behaviors, making them highly effective for
          service-based businesses looking to grow.
        </p>

      </section>


      {/* AD EXAMPLES */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Example {formattedPlatform} Ads for {formattedIndustry}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Find the Best {formattedIndustry} Services Today
            </h3>
            <p className="text-gray-300 text-sm">
              Discover trusted {formattedIndustry} professionals near you.
              Contact today and grow your business faster.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Top Rated {formattedIndustry} Solutions
            </h3>
            <p className="text-gray-300 text-sm">
              Reach more customers with high-converting {formattedPlatform} ads
              designed specifically for {formattedIndustry} businesses.
            </p>
          </div>

        </div>

      </section>


      {/* STRATEGY */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          {formattedPlatform} Advertising Strategy
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          Successful campaigns for {formattedIndustry} businesses often focus
          on local targeting, strong visual creatives and compelling offers.
          Businesses typically start with lead generation campaigns and
          retarget interested users to convert them into customers.
        </p>

      </section>


      {/* COST ESTIMATES */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Estimated Advertising Costs
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-left border border-slate-700">

            <thead className="bg-slate-800">
              <tr>
                <th className="p-4">Platform</th>
                <th className="p-4">Avg CPC</th>
                <th className="p-4">Avg Lead Cost</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-slate-700">
                <td className="p-4">{formattedPlatform}</td>
                <td className="p-4">$1 – $3</td>
                <td className="p-4">$10 – $40</td>
              </tr>
            </tbody>

          </table>

        </div>

      </section>


      {/* AD COPY */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Ready-to-Use Ad Copy
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">

          <div className="bg-slate-800 p-4 rounded">
            Grow your {formattedIndustry} business with high-performing
            {formattedPlatform} ads. Reach new customers today.
          </div>

          <div className="bg-slate-800 p-4 rounded">
            Looking for trusted {formattedIndustry} services?
            Discover top-rated professionals near you.
          </div>

          <div className="bg-slate-800 p-4 rounded">
            Promote your {formattedIndustry} services with
            targeted {formattedPlatform} campaigns.
          </div>

        </div>

      </section>


      {/* TARGETING */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Targeting Suggestions
        </h2>

        <ul className="space-y-4 text-gray-300 max-w-2xl mx-auto">

          <li>• Target audiences within your service location</li>

          <li>• Focus on demographics most likely to purchase</li>

          <li>• Retarget users who previously interacted with your business</li>

          <li>• Use lookalike audiences to reach new potential customers</li>

        </ul>

      </section>


      {/* BENEFITS */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Why {formattedIndustry} Businesses Use {formattedPlatform} Ads
        </h2>

        <ul className="space-y-4 text-gray-300">

          <li>• Reach highly targeted audiences interested in {formattedIndustry}</li>

          <li>• Generate qualified leads and new customers</li>

          <li>• Promote offers, services and brand awareness</li>

          <li>• Retarget users who previously interacted with your business</li>

        </ul>

      </section>


      {/* HOW IT WORKS */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          How AdCampin Generates {formattedPlatform} Ads
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">1. Enter Business Details</h3>
            <p className="text-sm text-gray-300">
              Provide your {formattedIndustry} business information
              and marketing goals.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">2. AI Generates Campaign</h3>
            <p className="text-sm text-gray-300">
              AdCampin creates ad copy, targeting strategy and
              creative variations.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">3. Launch & Optimize</h3>
            <p className="text-sm text-gray-300">
              Launch campaigns quickly and improve performance
              with AI optimization.
            </p>
          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">
              Are {formattedPlatform} ads effective for {formattedIndustry} businesses?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. {formattedPlatform} ads allow precise targeting, making them
              highly effective for reaching customers interested in
              {formattedIndustry} services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How much should a {formattedIndustry} business spend on ads?
            </h3>
            <p className="text-gray-300 text-sm">
              Budgets vary depending on location and competition, but many
              businesses start with small campaigns and scale after seeing results.
            </p>
          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="text-center mt-24">

        <h2 className="text-3xl font-bold mb-4">
          Start Generating {formattedPlatform} Ads Today
        </h2>

        <p className="text-gray-300 mb-6">
          Create complete advertising campaigns in seconds using AI.
        </p>

        <Link
          href="/signup"
          className="bg-blue-600 px-6 py-3 rounded-lg inline-block"
        >
          Start Free Trial
        </Link>

      </section>

    </main>
  );
}