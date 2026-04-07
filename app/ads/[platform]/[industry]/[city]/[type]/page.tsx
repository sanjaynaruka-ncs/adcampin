import Link from "next/link";
import Image from "next/image";
import { platforms } from "@/lib/platforms";
import { industries } from "@/lib/industries";
import { cities } from "@/lib/cities";
import { types } from "@/lib/types";
import { notFound } from "next/navigation";
import Navbar from "../../../../../components/navbar";
import SEOShareEmbed from "@/app/components/seo_share_embed";
export const dynamicParams = true;

export const revalidate = 3600;
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: {
    platform: string;
    industry: string;
    city: string;
    type: string;
  };
}) {
  function formatText(text?: string): string {
    if (!text) return "";
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  }

  const formattedPlatform = formatText(params.platform);
  const formattedIndustry = formatText(params.industry);
  const formattedCity = formatText(params.city);
  const formattedType = formatText(params.type);

  const title = `${formattedPlatform} Ads ${formattedType} for ${formattedIndustry} in ${formattedCity}`;
  const description = `Guide to ${formattedPlatform} ads ${formattedType} for ${formattedIndustry} businesses in ${formattedCity}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.adcampin.com/ads/${params.platform}/${params.industry}/${params.city}/${params.type}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function formatText(text?: string): string {
  if (!text) return "";
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function Page({
  params,
}: {
  params: {
    platform: string;
    industry: string;
    city: string;
    type: string;
  };
}) {

function getSlug(list: any[], value: string): string {
  if (!value) return "";

  const normalized = value.toLowerCase().trim();

  const found = list.find((item: any) => {
    if (typeof item === "string") {
      return item.toLowerCase() === normalized;
    }
    return item.slug?.toLowerCase() === normalized;
  });

  return typeof found === "string"
  ? found
  : found?.slug || value;
}

const platform = getSlug(platforms as any[], params.platform);
const industry = getSlug(industries as any[], params.industry);
const city = getSlug(cities as any[], params.city);
const type = getSlug(types as any[], params.type);

// if (!platform || !industry || !city || !type) {
//   notFound();
// }

const formattedPlatform = formatText(platform);
const formattedIndustry = formatText(industry);
const formattedCity = formatText(city);
const formattedType = formatText(type);
const year = new Date().getFullYear();
  const adExamples: string[] = [
  `Find the Best ${formattedIndustry} Services Near You`,
  `Top Rated ${formattedIndustry} Experts in Your Area`,
  `Professional ${formattedIndustry} Services Available Today`,
  `Trusted ${formattedIndustry} Specialists Ready to Help`,
  `Affordable ${formattedIndustry} Services – Contact Today`,
  `Local ${formattedIndustry} Experts With Great Reviews`,
  `Looking for Reliable ${formattedIndustry}? Get a Quote`,
  `Book Your ${formattedIndustry} Service in Minutes`
];

const adCopies: string[] = [
  `Grow your ${formattedIndustry} business with targeted ${formattedPlatform} advertising.`,
  `Reach customers searching for ${formattedIndustry} services today.`,
  `Promote your ${formattedIndustry} services to the right audience.`,
  `Boost your ${formattedIndustry} business with powerful ${formattedPlatform} ads.`,
  `Get more leads for your ${formattedIndustry} services instantly.`,
  `Advertise your ${formattedIndustry} business to local customers.`,
  `High-converting ${formattedPlatform} ads for ${formattedIndustry} professionals.`,
  `Turn clicks into customers with better ${formattedIndustry} ads.`,
  `Scale your ${formattedIndustry} marketing using AI-powered campaigns.`,
  `Generate more ${formattedIndustry} leads with targeted ads.`,
  `Reach high-intent customers looking for ${formattedIndustry} services.`,
  `Launch optimized ${formattedPlatform} ads for your ${formattedIndustry} business.`
];

  return (
  <>
    <Navbar />
    <main className="max-w-6xl mx-auto px-6 py-16 text-white text-center">

      {/* HERO SECTION */}

      <section className="mb-20">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {formattedPlatform} Ads {formattedType} for {formattedIndustry} in {formattedCity} ({year} Guide)
      </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Looking to generate high-converting {formattedPlatform} ads for {formattedIndustry}? 
        This guide covers proven strategies, real ad examples, targeting tips and cost insights 
        to help you attract more customers and grow your business.

        <br /><br />

        Using AI, AdCampin helps create ad copy, targeting strategy,
        creatives and optimization instantly.
      </p>

        <div className="flex justify-center mb-10">
          <Image
            src={
              platform === "facebook"
                ? "/facebook-ads.webp"
                : platform === "google"
                ? "/google-ads.webp"
                : platform === "instagram"
                ? "/instagram-ads.webp"
                : platform === "linkedin"
                ? "/linkedin-ads.webp"
                : "/google-ads.webp"
            }
            alt={`${formattedPlatform} ads ${formattedType} for ${formattedIndustry} in ${formattedCity}`}
            width={900}
            height={500}
            className="rounded-xl border border-slate-700"
            priority
          />
        </div>

        <a
        href={`/signup?platform=${platform}&industry=${industry}&city=${city}&type=${type}`}
        className="bg-blue-600 px-6 py-3 rounded-lg inline-block"
      >
        Generate Ads Now
      </a>

      </section>

      <div className="text-sm text-gray-400 mb-12">

        <p>In this guide:</p>

        <ul className="space-y-1">
        <li>Advertising Strategy</li>
        <li>Ad Examples</li>
        <li>Campaign Costs</li>
        <li>Targeting Tips</li>
        <li>Ad Copy Examples</li>
        </ul>

        </div>


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
                Example {formattedPlatform} Ads {formattedType} for {formattedIndustry} in {formattedCity}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

        {adExamples.map((example: string, i: number) => (

          <div key={i} className="bg-slate-800 p-6 rounded-lg">

            <h3 className="font-semibold mb-2">
              {example}
            </h3>

            <p className="text-gray-300 text-sm">
              Promote your {formattedIndustry} services using high-converting
              {formattedPlatform} ads designed to attract new customers.
            </p>

          </div>

         ))}

        </div>

      </section>


      {/* STRATEGY */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          {formattedPlatform} Advertising Strategy
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto text-gray-300">

          <p>
            Successful {formattedPlatform} campaigns for {formattedIndustry} businesses
            usually focus on clear targeting, strong creatives and compelling offers.
            Businesses often begin with awareness campaigns and gradually move
            into lead generation and retargeting campaigns.
          </p>

          <p>
            Many {formattedIndustry} companies use location targeting to reach
            potential customers nearby. This allows ads to appear only to users
            within the service area, which improves conversion rates and reduces
            wasted ad spend.
          </p>

          <p>
            Retargeting campaigns are also extremely effective. These campaigns
            show ads to people who previously visited your website or interacted
            with your brand, increasing the chances of turning interested users
            into paying customers.
          </p>

        </div>

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

          {adCopies.map((copy: string, i: number) => (

            <div key={i} className="bg-slate-800 p-4 rounded">
              {copy}
            </div>

          ))}

        </div>

      </section>


      {/* TARGETING */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Targeting Suggestions
        </h2>

        <ul className="space-y-4 text-gray-300 max-w-2xl mx-auto text-left">

          <li>
          Target audiences within your service location to ensure your ads reach
          potential customers who can actually use your {formattedIndustry} services.
          </li>

          <li>
          Focus on demographics that are most likely to purchase your services,
          including age groups, household income levels and interests related
          to {formattedIndustry}.
          </li>

          <li>
          Retarget users who previously interacted with your website or ads.
          Retargeting campaigns typically produce higher conversion rates.
          </li>

          <li>
          Use lookalike audiences to find new customers who share similar
          characteristics with your existing clients.
          </li>

        </ul>

      </section>


      {/* BENEFITS */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Why {formattedIndustry} Businesses in {formattedCity} Use {formattedPlatform} Ads
        </h2>

        <ul className="space-y-4 text-gray-300 text-left max-w-3xl mx-auto">

          <li>
          Reach highly targeted audiences interested in {formattedIndustry} services
          using advanced targeting options available on {formattedPlatform}.
          </li>

          <li>
          Generate qualified leads and attract potential customers who are actively
          searching for reliable {formattedIndustry} providers.
          </li>

          <li>
          Promote seasonal offers, discounts and special packages to increase
          engagement and encourage immediate action.
          </li>

          <li>
          Build strong brand awareness for your {formattedIndustry} business
          in your local service area.
          </li>

          <li>
          Retarget users who previously interacted with your business
          or visited your website.
          </li>

          <li>
          Showcase your expertise and unique selling points through
          engaging ad creatives and compelling messaging.
          </li>

          <li>
          Increase website traffic and generate more inquiries
          from interested prospects.
          </li>

          <li>
          Use performance data to continuously improve campaigns
          and maximize return on ad spend.
          </li>

          <li>
          Expand your reach to new audiences using lookalike
          or similar audience targeting strategies.
          </li>

          <li>
          Scale your advertising campaigns as your {formattedIndustry}
          business grows.
          </li>

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

        <div className="space-y-6 text-left max-w-3xl mx-auto">

          <div>
            <h3 className="font-semibold">
              Are {formattedPlatform} ads effective for {formattedIndustry} businesses?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. {formattedPlatform} ads allow businesses to target specific
              audiences based on location, interests and behavior, making them
              highly effective for attracting customers interested in
              {formattedIndustry} services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How much should a {formattedIndustry} business spend on ads?
            </h3>
            <p className="text-gray-300 text-sm">
              Budgets vary depending on market competition and location.
              Many businesses start with smaller daily budgets and increase
              spending once campaigns begin generating profitable results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              What type of ads work best for {formattedIndustry} services?
            </h3>
            <p className="text-gray-300 text-sm">
              Ads highlighting clear benefits, customer testimonials,
              service guarantees and special offers typically perform
              best for {formattedIndustry} businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Should {formattedIndustry} businesses use local targeting?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. Local targeting ensures ads reach users within
              the service area, which improves lead quality
              and reduces wasted advertising spend.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How long does it take to see results from {formattedPlatform} ads?
            </h3>
            <p className="text-gray-300 text-sm">
              Many campaigns start generating clicks and leads
              within a few days, but optimization over several weeks
              typically produces the best results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can small {formattedIndustry} businesses afford online advertising?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. Even small businesses can start with modest budgets
              and scale campaigns once they begin generating positive ROI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              What is the biggest advantage of using {formattedPlatform} ads?
            </h3>
            <p className="text-gray-300 text-sm">
              The biggest advantage is precise targeting combined
              with measurable results, allowing businesses to
              continuously improve campaign performance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can AI help optimize {formattedPlatform} campaigns?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. Tools like AdCampin can generate optimized ad copy,
              targeting strategies and campaign structures automatically.
            </p>
          </div>

        </div>

      </section>

      {/* RELATED INDUSTRIES */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          More {formattedPlatform} Advertising Guides
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">

          {industries.slice(0, 12).map((ind) => (

            <Link
              key={ind.slug}
              href={`/ads/${platform}/${ind.slug}/${city}`}
              className="bg-slate-800 p-4 rounded hover:bg-slate-700 transition"
            >
              {formattedPlatform} Ads for {formatText(ind.slug)}
            </Link>

          ))}

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="text-center mt-24">

        <h2 className="text-3xl font-bold mb-4">
          Start Generating {formattedPlatform} Ads in {formattedCity} Today
        </h2>

        <p className="text-gray-300 mb-6">
          Create complete advertising campaigns in seconds using AI.
        </p>

        <Link
        href={`/signup?platform=${platform}&industry=${industry}&city=${city}&type=${type}`}
          className="bg-blue-600 px-6 py-3 rounded-lg inline-block"
        >
          Start Free Trial
        </Link>

      </section>
      <div className="flex justify-center">
        <SEOShareEmbed title={`${formattedPlatform} Ads ${formattedType} for ${formattedIndustry} in ${formattedCity}`} />
      </div>
      
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${formattedPlatform} Ads ${formattedType} for ${formattedIndustry} in ${formattedCity}`,
            "description": `Guide to ${formattedPlatform} ads ${formattedType} for ${formattedIndustry} businesses in ${formattedCity}.`,
            "author": {
              "@type": "Organization",
              "name": "AdCampin"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AdCampin"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.adcampin.com/ads/${platform}/${industry}/${city}/${type}`
            }
          })
        }}
      />
    </main>
    </>
  );
}
