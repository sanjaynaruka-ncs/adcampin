import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "Retargeting Ads: How to Turn Visitors into Leads (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to use retargeting ads to convert website visitors into high-quality leads with proven strategies and examples for 2026.",
  keywords: [
    "retargeting ads",
    "remarketing ads strategy",
    "convert visitors into leads",
    "facebook retargeting ads",
    "google remarketing strategy",
    "retargeting examples 2026",
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          {blogTitle}
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Most visitors don’t convert on the first visit. Retargeting is how you
          bring them back and turn interest into actual leads.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <p className="mb-3">
          You already paid to get the click. Don’t lose it.
        </p>
        <p>
          Retargeting ads help you follow up with users who showed interest but
          didn’t convert — and that’s where real profit happens.
        </p>
      </section>

      {/* Strategies */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        {strategies.map((s, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-slate-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              {i + 1}. {s.scenario}
            </h2>
            <p className="mb-2">
              <strong>Ad Idea:</strong> {s.idea}
            </p>
            <p className="mb-2">
              <strong>Why it works:</strong> {s.why}
            </p>
            <p className="mb-3">{s.explanation}</p>

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
          <li>• Warm audiences convert 2–5x better than cold traffic</li>
          <li>• Speed of follow-up impacts conversion rates</li>
          <li>• Personalized messaging improves engagement</li>
          <li>• Offers can re-activate lost leads effectively</li>
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
          <Link href="/blog/high-converting-cta-for-ads">CTA Guide</Link>
          <Link href="/blog/ad-copy-service-business-examples">Ad Copy Examples</Link>
          <Link href="/blog/why-ads-not-converting-how-to-fix">Fix Conversions</Link>
          <Link href="/blog/google-ads-targeting-strategies-local-business-2026">Targeting Guide</Link>
          <Link href="/blog/facebook-lead-ads-vs-landing-pages">Lead Ads vs Landing Pages</Link>
          <Link href="/blog/reduce-cost-per-lead-google-facebook-ads-2026">Reduce CPL</Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Turn Visitors into Leads?
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
              What are retargeting ads?
            </h3>
            <p className="text-gray-400">
              Retargeting ads show ads to users who previously visited your website or interacted with your brand.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Do retargeting ads increase conversions?
            </h3>
            <p className="text-gray-400">
              Yes, they significantly improve conversions by targeting warm audiences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              How long should retargeting run?
            </h3>
            <p className="text-gray-400">
              Typically 7–30 days depending on your sales cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

const strategies = [
  {
    scenario: "Visited homepage but didn’t convert",
    idea: "Still thinking? See how we helped 500+ businesses grow.",
    why: "Uses social proof",
    explanation: "Reassures users by showing credibility and results.",
  },
  {
    scenario: "Abandoned lead form",
    idea: "Finish your signup in 30 seconds — don’t miss out.",
    why: "Reduces friction",
    explanation: "Reminds users it’s quick and easy to complete.",
  },
  {
    scenario: "Viewed pricing page",
    idea: "Get started today — no risk, cancel anytime.",
    why: "Removes risk",
    explanation: "Addresses hesitation around pricing commitment.",
  },
  {
    scenario: "Viewed service page",
    idea: "Book your free consultation today.",
    why: "Low-friction CTA",
    explanation: "Encourages easy next step with no commitment.",
  },
  {
    scenario: "Visited multiple pages",
    idea: "Ready to take the next step? Let’s help you grow.",
    why: "High intent targeting",
    explanation: "Targets users showing strong interest signals.",
  },
  {
    scenario: "Abandoned checkout",
    idea: "Complete your booking now and save 10%.",
    why: "Incentive-based",
    explanation: "Discount pushes users to finish action.",
  },
  {
    scenario: "Visited blog content",
    idea: "Want results like this? Start your journey today.",
    why: "Value-based retargeting",
    explanation: "Moves users from learning to action.",
  },
  {
    scenario: "Time-based retargeting (3 days later)",
    idea: "Still looking? Limited slots available this week.",
    why: "Creates urgency",
    explanation: "Triggers fear of missing out.",
  },
  {
    scenario: "Product viewers",
    idea: "See why customers love this service.",
    why: "Social proof",
    explanation: "Builds trust through validation.",
  },
  {
    scenario: "Returning visitors",
    idea: "You’re one step away — get started today.",
    why: "Completion bias",
    explanation: "Encourages finishing what they started.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blogTitle,
  description: metadata.description,
  author: { "@type": "Organization", name: "AdCampin" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are retargeting ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retargeting ads show ads to users who have previously visited your website or interacted with your brand.",
      },
    },
    {
      "@type": "Question",
      name: "Do retargeting ads increase conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, retargeting significantly improves conversion rates by re-engaging interested users.",
      },
    },
    {
      "@type": "Question",
      name: "How long should retargeting run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 7–30 days depending on the buying cycle of your product or service.",
      },
    },
  ],
};