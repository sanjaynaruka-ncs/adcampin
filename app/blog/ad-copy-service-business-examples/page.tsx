import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "How to Write Ad Copy for Service-Based Businesses (With Examples) [2026 Guide]";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to write high-converting ad copy for service-based businesses with real examples and proven frameworks for 2026.",
  keywords: [
    "ad copy service business",
    "write ad copy examples",
    "service ads copywriting",
    "google ads copy service business",
    "facebook ads copy service business",
    "high converting ad copy",
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">{blogTitle}</h1>
        <p className="text-gray-400 max-w-2xl">
          Writing ad copy for service businesses is different. You’re not just
          selling — you’re building trust, urgency, and local relevance.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <p className="mb-3">
          Most ads fail because they sound generic. They don’t address real
          problems.
        </p>
        <p>
          The best-performing ads speak directly to pain points, show proof, and
          offer a clear next step.
        </p>
      </section>

      {/* Examples */}
      <section
        id="examples"
        className="max-w-6xl mx-auto px-6 py-10 space-y-6"
      >
        {examples.map((e, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/10 bg-slate-800 p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {i + 1}. {e.business}
            </h2>

            <p className="mb-2 text-gray-400">
              <strong>Ad Copy:</strong>
            </p>
            <p className="mb-2 text-white font-medium">{e.headline}</p>
            <p className="mb-2">{e.desc}</p>

            <p className="mb-2">
              <strong>Why it works:</strong> {e.why}
            </p>

            <p className="mb-3">{e.explanation}</p>

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
          <li>• Specific beats generic every time</li>
          <li>• Local keywords increase relevance</li>
          <li>• Offers dramatically boost conversions</li>
          <li>• Trust signals reduce hesitation</li>
        </ul>
      </section>

      {/* Explore More */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Explore More Ad Examples
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/ads/google/dentists/new-york/examples"
            className="rounded-lg border border-white/10 bg-slate-800 p-6"
          >
            Dentist Ads (NY)
          </Link>
          <Link
            href="/ads/google/real-estate/mumbai/examples"
            className="rounded-lg border border-white/10 bg-slate-800 p-6"
          >
            Real Estate Ads (Mumbai)
          </Link>
          <Link
            href="/ads/google/lawyers/houston/examples"
            className="rounded-lg border border-white/10 bg-slate-800 p-6"
          >
            Lawyer Ads (Houston)
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-4">Read More</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Link href="/blog/high-converting-cta-for-ads">CTA Guide</Link>
          <Link href="/blog/top-20-ad-copy-mistakes">Ad Copy Mistakes</Link>
          <Link href="/blog/high-converting-ad-hooks-examples">
            Ad Hooks
          </Link>
          <Link href="/blog/google-ads-targeting-strategies-local-business-2026">
            Targeting Guide
          </Link>
          <Link href="/blog/facebook-lead-ads-vs-landing-pages">
            Lead Ads vs Landing Pages
          </Link>
          <Link href="/blog/reduce-cost-per-lead-google-facebook-ads-2026">
            Reduce CPL
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Want Better Ad Copy That Converts?
        </h2>
        <Link
          href="/signup"
          className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-lg text-white"
        >
          Get Started →
        </Link>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-2xl font-bold text-white mb-6">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">
              How to write ad copy for service businesses?
            </h3>
            <p className="text-gray-400">
              Focus on pain points, local intent, and clear offers to create
              high-converting ad copy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              What makes ad copy convert?
            </h3>
            <p className="text-gray-400">
              Clarity, relevance, urgency, and strong CTAs are key.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Should I include offers in ads?
            </h3>
            <p className="text-gray-400">
              Yes, offers significantly increase conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </div>
  );
}

const examples = [
  {
    business: "Dentist",
    headline: "Tooth Pain? Get Same-Day Appointment in Your Area",
    desc: "Trusted local dentists. Book now and get relief today.",
    why: "Targets urgency + local intent",
    explanation:
      "Pain-driven copy converts fast. Adding 'same-day' removes hesitation.",
  },
  {
    business: "Lawyer",
    headline: "Injured in an Accident? Talk to a Lawyer Today",
    desc: "No fees unless you win. Free consultation available.",
    why: "Combines fear + safety",
    explanation:
      "Removes financial risk while addressing urgent legal need.",
  },
  {
    business: "Gym",
    headline: "Get Fit in 30 Days — Join Our Local Gym Today",
    desc: "Limited-time offer. Free trial available.",
    why: "Promise + urgency",
    explanation:
      "Clear outcome and time-bound offer increase action.",
  },
  {
    business: "Real Estate",
    headline: "Find Your Dream Home in Mumbai Today",
    desc: "Explore verified listings. Book site visit now.",
    why: "Aspirational + local",
    explanation:
      "Targets emotional desire with a clear next step.",
  },
  {
    business: "Salon",
    headline: "Flat 50% Off Hair Services — Book Now",
    desc: "Limited slots available. Reserve today.",
    why: "Discount + urgency",
    explanation:
      "Scarcity combined with offer drives quick conversions.",
  },
  {
    business: "Cleaning Service",
    headline: "Need Home Cleaning? Book Trusted Experts Today",
    desc: "Affordable plans. Same-day service available.",
    why: "Convenience + trust",
    explanation:
      "Highlights ease and reliability — key decision factors.",
  },
  {
    business: "Coaching",
    headline: "Struggling to Grow Your Business? Get Expert Help",
    desc: "Free strategy session. Limited availability.",
    why: "Pain point driven",
    explanation:
      "Directly addresses frustration and offers solution.",
  },
  {
    business: "Plumber",
    headline: "Leaky Pipe? Emergency Plumbing in 30 Minutes",
    desc: "Available 24/7. Call now.",
    why: "Urgency + speed",
    explanation:
      "Time-sensitive problem requires instant solution.",
  },
  {
    business: "Digital Marketing Agency",
    headline: "Get More Leads Without Increasing Budget",
    desc: "Proven strategies. Book free audit today.",
    why: "Value proposition",
    explanation:
      "Promises better results without extra cost — strong hook.",
  },
  {
    business: "Car Service",
    headline: "Car Servicing at Your Doorstep — Book Now",
    desc: "Save time. Certified mechanics.",
    why: "Convenience + trust",
    explanation:
      "Modern users prefer ease and reliability.",
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
      name: "How to write ad copy for service businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on pain points, local intent, and clear offers to create high-converting ad copy.",
      },
    },
    {
      "@type": "Question",
      name: "What makes ad copy convert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clarity, relevance, urgency, and strong CTAs are key to high-performing ads.",
      },
    },
    {
      "@type": "Question",
      name: "Should I include offers in ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, offers significantly increase click-through and conversion rates.",
      },
    },
  ],
};