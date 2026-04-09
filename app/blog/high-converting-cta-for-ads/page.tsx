import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "10 High-Converting Call-to-Actions (CTA) for Ads That Actually Work (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover 10 high-converting call-to-actions for ads that drive clicks and leads, with real examples and proven strategies for 2026.",
  keywords: [
    "high converting CTA ads",
    "best call to action ads",
    "cta examples ads",
    "ad copy cta examples",
    "increase ad conversions CTA",
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          10 High-Converting Call-to-Actions (CTA) for Ads That Actually Work (2026 Guide)
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Your ad might be perfect — but if your CTA is weak, conversions will suffer.
          These proven CTAs are designed to increase clicks and drive real results.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <p className="mb-3">
          Most advertisers focus on targeting and creatives, but ignore one critical piece — the CTA.
        </p>
        <p>
          A strong CTA can double your conversions without increasing your budget.
        </p>
      </section>

      {/* CTA Examples */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        {ctas.map((cta, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              {i + 1}. {cta.title}
            </h2>
            <p className="mb-2">
              <strong>Use case:</strong> {cta.use}
            </p>
            <p className="mb-2">
              <strong>Why it works:</strong> {cta.why}
            </p>
            <p className="mb-3">{cta.explanation}</p>

            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>
        ))}
      </section>

      {/* Insights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-4">Key Insights</h2>
        <ul className="space-y-2 text-gray-400">
          <li>• Clear CTAs outperform clever ones</li>
          <li>• Low-friction CTAs increase conversion rates</li>
          <li>• Urgency drives immediate action</li>
          <li>• Value-based CTAs improve lead quality</li>
        </ul>
      </section>

      {/* Explore More */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Explore More Ad Examples
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ads/google/dentists/new-york/examples" className="rounded-lg border border-white/10 bg-slate-800 p-6">
            Dentist Ads (NY)
          </Link>
          <Link href="/ads/google/real-estate/mumbai/examples" className="rounded-lg border border-white/10 bg-slate-800 p-6">
            Real Estate Ads (Mumbai)
          </Link>
          <Link href="/ads/google/lawyers/houston/examples" className="rounded-lg border border-white/10 bg-slate-800 p-6">
            Lawyer Ads (Houston)
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-4">Read More</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Link href="/blog/high-converting-ad-hooks-examples">Ad Hooks</Link>
          <Link href="/blog/top-20-ad-copy-mistakes">Ad Copy Mistakes</Link>
          <Link href="/blog/why-ads-not-converting-how-to-fix">Fix Conversions</Link>
          <Link href="/blog/google-ads-targeting-strategies-local-business-2026">Google Ads Targeting</Link>
          <Link href="/blog/facebook-lead-ads-vs-landing-pages">Lead Ads vs Landing Pages</Link>
          <Link href="/blog/reduce-cost-per-lead-google-facebook-ads-2026">Reduce CPL</Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Want Higher Conversions From Your Ads?
        </h2>
        <Link
          href="/signup"
          className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-lg text-white"
        >
          Get Started →
        </Link>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-6">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">
              What is the best CTA for ads?
            </h3>
            <p className="text-gray-400">
              The best CTA depends on your offer, but low-friction and value-driven CTAs perform best.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Do CTAs really impact conversions?
            </h3>
            <p className="text-gray-400">
              Yes, a strong CTA can significantly increase click-through and conversion rates.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Should I test multiple CTAs?
            </h3>
            <p className="text-gray-400">
              Absolutely. A/B testing CTAs helps identify what resonates best with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}

const ctas = [
  {
    title: "Get Your Free Quote Now",
    use: "Service-based businesses",
    why: "Combines urgency with value",
    explanation:
      "The word 'free' reduces friction while 'now' pushes immediate action. Great for lead generation.",
  },
  {
    title: "Book Your Free Consultation",
    use: "High-ticket services",
    why: "Builds trust and lowers commitment",
    explanation:
      "Users feel safe taking the first step without financial risk.",
  },
  {
    title: "See Pricing Instantly",
    use: "SaaS and services",
    why: "Triggers curiosity and transparency",
    explanation:
      "People want quick answers. This CTA removes uncertainty.",
  },
  {
    title: "Claim Your Discount Today",
    use: "Ecommerce offers",
    why: "Uses urgency and scarcity",
    explanation:
      "Encourages users to act before the deal expires.",
  },
  {
    title: "Start Your Free Trial",
    use: "Apps and SaaS",
    why: "Low-risk entry point",
    explanation:
      "Removes financial barrier and encourages exploration.",
  },
  {
    title: "Get Results Like This",
    use: "Case study ads",
    why: "Social proof driven",
    explanation:
      "Users are motivated by proven outcomes and results.",
  },
  {
    title: "Check Availability Now",
    use: "Local services",
    why: "Creates urgency and relevance",
    explanation:
      "Ideal for businesses with limited slots or appointments.",
  },
  {
    title: "Download Free Guide",
    use: "Lead magnets",
    why: "Value-driven CTA",
    explanation:
      "Users exchange contact info for useful content.",
  },
  {
    title: "See How It Works",
    use: "New products/services",
    why: "Curiosity-based CTA",
    explanation:
      "Encourages users to explore without commitment.",
  },
  {
    title: "Get Started in 60 Seconds",
    use: "Fast onboarding funnels",
    why: "Reduces perceived effort",
    explanation:
      "Short time commitment increases conversion rates.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blogTitle,
  description:
    "10 high-converting call-to-actions for ads with examples.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best CTA for ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best CTA depends on your offer, but low-friction and value-driven CTAs perform best.",
      },
    },
    {
      "@type": "Question",
      name: "Do CTAs really impact conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a strong CTA can significantly increase click-through and conversion rates.",
      },
    },
    {
      "@type": "Question",
      name: "Should I test multiple CTAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, A/B testing CTAs helps identify what works best.",
      },
    },
  ],
};