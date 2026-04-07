import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../../components/navbar";

export const metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

type PageProps = {
  params: {
    platform: string;
    industry: string;
    type: string;
    city: string;
  };
};

function formatText(text: string) {
  return text
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


function generateFaq(platform: string, industry: string) {
  return [
    {
      q: `How much do ${platform} ads cost for ${industry}?`,
      a: `${platform} ad costs for ${industry} businesses vary depending on competition and targeting. Many businesses start with small budgets and scale campaigns once they see profitable results.`
    },
    {
      q: `Do ${platform} ads work for ${industry} businesses?`,
      a: `Yes. ${platform} ads allow precise audience targeting, making them highly effective for promoting ${industry} services and generating new leads.`
    },
    {
      q: `How can ${industry} businesses generate leads using ${platform} ads?`,
      a: `${industry} businesses can use ${platform} ads to promote services, special offers and consultations to targeted audiences interested in their services.`
    },
    {
      q: `What are the best ${platform} ad ideas for ${industry}?`,
      a: `Some of the best ad ideas include promoting limited-time offers, showcasing customer testimonials and highlighting unique benefits of your ${industry} services.`
    }
  ];
}


const platforms = [
  "facebook",
  "google",
  "instagram",
  "linkedin"
];

const types = [
  "examples",
  "strategy",
  "cost",
  "ideas"
];

export default function Page({ params }: PageProps) {

const { platform, industry, type, city } = params;

  const formattedPlatform = formatText(platform);
  const formattedIndustry = formatText(industry);
  const formattedType = formatText(type);
  const faqs = generateFaq(formattedPlatform, formattedIndustry);

  return (
  <>
    <Navbar />

    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${formattedPlatform} Ads ${formattedType} for ${formattedIndustry}`,
          "description": `Best ${formattedPlatform} ads ${formattedType} for ${formattedIndustry} businesses.`,
          "author": {
            "@type": "Organization",
            "name": "AdCampin"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AdCampin"
          },
          "mainEntityOfPage": `https://www.adcampin.com/ads/${platform}/${industry}/${type}`
        })
      }}
    />
    <main className="max-w-6xl mx-auto px-6 py-16 text-white text-center">

      {/* HERO */}

      <section className="mb-20">
        <div className="max-w-xl mx-auto">
        <Image
            src={`/${platform}-ads.webp`}
            alt={`${platform} advertising examples`}
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl shadow-lg"
            priority
        />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {formattedPlatform} Ads {formattedType} for {formattedIndustry}
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Learn the best {formattedPlatform} ads {formattedType} for {formattedIndustry}
          businesses. Discover strategies, ad examples, costs and ideas to grow
          your business using AI-powered campaigns with AdCampin.
        </p>

        <Link
          href="/signup"
          className="bg-blue-600 px-6 py-3 rounded-lg inline-block hover:bg-blue-700 transition"
        >
          Generate Ads Now
        </Link>

      </section>


      {/* AD EXAMPLES */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Example {formattedPlatform} Ads for {formattedIndustry}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Top Rated {formattedIndustry} Services
            </h3>
            <p className="text-gray-300 text-sm">
              Looking for trusted {formattedIndustry} services? Book your appointment
              today and experience professional service from experts near you.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Trusted Local {formattedIndustry} Experts
            </h3>
            <p className="text-gray-300 text-sm">
              Discover experienced {formattedIndustry} specialists with proven
              results. Contact now to get started with high-quality service.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Book Your {formattedIndustry} Consultation Today
            </h3>
            <p className="text-gray-300 text-sm">
              Schedule a consultation with certified professionals and get the
              best solutions tailored to your needs.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              Premium {formattedIndustry} Services Near You
            </h3>
            <p className="text-gray-300 text-sm">
              Get high-quality services from trusted providers. Contact today
              and see why customers choose us.
            </p>
          </div>

        </div>

      </section>


      {/* BENEFITS */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          Why {formattedIndustry} Businesses Use {formattedPlatform} Ads
        </h2>

        <ul className="space-y-4 text-gray-300 max-w-2xl mx-auto">

          <li>• Reach highly targeted audiences interested in {formattedIndustry} services</li>

          <li>• Generate qualified leads and new customers</li>

          <li>• Promote offers, services and brand awareness</li>

          <li>• Retarget visitors who previously interacted with your business</li>

          <li>• Scale campaigns quickly with data-driven optimization</li>

        </ul>

      </section>


      {/* HOW IT WORKS */}

      <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
          How AdCampin Generates {formattedPlatform} Ads
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              1. Enter Business Details
            </h3>
            <p className="text-gray-300 text-sm">
              Provide information about your {formattedIndustry} business,
              target audience and marketing goals.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              2. AI Generates Campaign
            </h3>
            <p className="text-gray-300 text-sm">
              AdCampin AI generates ad copy, targeting strategies,
              creatives and performance predictions instantly.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              3. Launch & Optimize
            </h3>
            <p className="text-gray-300 text-sm">
              Launch campaigns quickly and continuously improve
              performance using AI optimization.
            </p>
          </div>

        </div>

      </section>


      {/* FAQ */}

        <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">

            {faqs.map((faq, index) => (

            <div key={index}>

                <h3 className="font-semibold mb-2">
                {faq.q}
                </h3>

                <p className="text-gray-300 text-sm">
                {faq.a}
                </p>

            </div>

            ))}

        </div>

        </section>


      {/* CTA */}

      <section className="mt-24">

        <h2 className="text-3xl font-bold mb-4">
          Start Generating {formattedPlatform} Ads Today
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Create complete advertising campaigns in seconds using AI-powered
          marketing tools built for modern businesses.
        </p>

        <Link
          href="/signup"
          className="bg-blue-600 px-8 py-3 rounded-lg inline-block hover:bg-blue-700 transition"
        >
          Start Free Trial
        </Link>

      </section>

      {/* RELATED PAGES */}

        <section className="mb-24">

        <h2 className="text-3xl font-bold mb-8">
            Related {formattedPlatform} Ads Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">

            {platforms
            .filter(p => p !== platform)
            .map(p => (
                <Link
                key={p}
                href={`/ads/${p}/${industry}/${type}`}
                className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition"
                >
                {formatText(p)} Ads {formattedType} for {formattedIndustry}
                </Link>
            ))}

            {types
            .filter(t => t !== type)
            .map(t => (
                <Link
                key={t}
                href={`/ads/${platform}/${industry}/${t}`}
                className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition"
                >
                {formattedPlatform} Ads {formatText(t)} for {formattedIndustry}
                </Link>
            ))}

        </div>

        </section>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": generateFaq(formattedPlatform, formattedIndustry).map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              })
            }}
          />
    </main>
    </>
  );
}