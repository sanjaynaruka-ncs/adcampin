import Navbar from "@/app/components/navbar";
import Link from "next/link";

export const blogTitle =
  "Best Google Ads Targeting Strategies for Local Businesses (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover the best Google Ads targeting strategies for local businesses to generate high-quality leads and reduce wasted spend in 2026.",
  keywords: [
    "google ads targeting",
    "local business google ads",
    "geo targeting google ads",
    "google ads strategy 2026",
    "audience targeting google ads",
  ],
};

export default function BlogPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogTitle,
    description: metadata.description,
    author: { "@type": "Organization", name: "AdCampin" },
    publisher: { "@type": "Organization", name: "AdCampin" },
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <div className="min-h-screen bg-slate-950 text-gray-300">
        <Navbar />

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            {blogTitle}
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Stop wasting ad spend. Learn how to target the right local audience,
            generate better leads, and scale profitably with Google Ads.
          </p>
        </section>

        {/* Intro */}
        <section className="max-w-6xl mx-auto px-6 pb-10">
          <p className="mb-3">
            Most local businesses don’t fail because of bad ads — they fail because
            of bad targeting.
          </p>
          <p>
            In 2026, precision targeting is everything. If your ads reach the wrong
            people, nothing else matters.
          </p>
        </section>

        {/* Main Strategies */}
        <section id="examples" className="max-w-6xl mx-auto px-6 py-10 space-y-6">
          {strategies.map((s, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                {i + 1}. {s.title}
              </h2>
              <p className="text-gray-400 mb-2">{s.useCase}</p>
              <p className="mb-2">
                <strong>How to implement:</strong> {s.how}
              </p>
              <p className="mb-3">
                <strong>Why it works:</strong> {s.why}
              </p>
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
            <li>• Hyper-local targeting beats broad campaigns every time</li>
            <li>• Audience layering reduces wasted clicks</li>
            <li>• Intent-based keywords drive real conversions</li>
            <li>• Data refinement is where scaling happens</li>
          </ul>
        </section>

        {/* Related Articles */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Link href="/blog/best-google-ads-examples-small-businesses-2026">Best Google Ads Examples</Link>
            <Link href="/blog/how-to-write-facebook-ads-local-business">Facebook Ads Guide</Link>
            <Link href="/blog/google-ads-vs-facebook-ads-lead-generation">Google vs Facebook Ads</Link>
            <Link href="/blog/top-20-ad-copy-mistakes">Ad Copy Mistakes</Link>
            <Link href="/blog/high-converting-ad-hooks-examples">Ad Hooks</Link>
            <Link href="/blog/reduce-cost-per-lead-google-facebook-ads-2026">Reduce CPL</Link>
            <Link href="/blog/local-business-ads-campaign-structures-that-work">Campaign Structures</Link>
          </div>
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

        {/* CTA */}
        <section id="cta" className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want Better Leads From Your Ads?
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
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

const strategies = [
  {
    title: "Geo Radius Targeting",
    useCase: "Best for local service businesses like plumbers or dentists.",
    how: "Set radius targeting around your service area (5–20 km).",
    why: "Ensures ads are shown only to nearby users likely to convert.",
  },
  {
    title: "Location-Specific Keywords",
    useCase: "Ideal for high-intent searches.",
    how: "Use keywords like 'dentist near me' or 'lawyer in Mumbai'.",
    why: "Captures users actively searching for local services.",
  },
  {
    title: "Audience Layering",
    useCase: "Great for niche businesses.",
    how: "Combine demographics + interests + in-market audiences.",
    why: "Filters low-quality traffic and improves lead quality.",
  },
  {
    title: "Custom Intent Audiences",
    useCase: "For targeting users researching services.",
    how: "Create audiences based on search behavior.",
    why: "Reaches users with high buying intent.",
  },
  {
    title: "Remarketing",
    useCase: "Recover lost visitors.",
    how: "Target users who visited your site but didn’t convert.",
    why: "Higher conversion rates due to familiarity.",
  },
  {
    title: "Negative Keywords",
    useCase: "Avoid wasted spend.",
    how: "Exclude irrelevant search terms regularly.",
    why: "Prevents unqualified clicks.",
  },
  {
    title: "Device Targeting",
    useCase: "Optimize mobile vs desktop.",
    how: "Adjust bids based on device performance.",
    why: "Improves ROI by focusing on best-performing devices.",
  },
  {
    title: "Time-Based Targeting",
    useCase: "For businesses with peak hours.",
    how: "Schedule ads during high-conversion times.",
    why: "Maximizes efficiency and reduces waste.",
  },
  {
    title: "Competitor Targeting",
    useCase: "Steal competitor traffic.",
    how: "Bid on competitor brand keywords.",
    why: "Captures users already considering alternatives.",
  },
  {
    title: "Smart Bidding with Signals",
    useCase: "Scale campaigns efficiently.",
    how: "Use automated bidding with audience signals.",
    why: "Leverages AI for better targeting and conversions.",
  },
];

const faqs = [
  {
    q: "What is the best targeting strategy in Google Ads?",
    a: "Combining geo-targeting, intent-based keywords, and audience layering delivers the best results for local businesses.",
  },
  {
    q: "How to target local customers using Google Ads?",
    a: "Use radius targeting, location keywords, and local extensions to reach nearby high-intent users.",
  },
  {
    q: "Does geo-targeting improve conversions?",
    a: "Yes, it ensures your ads are shown only to relevant nearby users, improving conversion rates and reducing wasted spend.",
  },
];