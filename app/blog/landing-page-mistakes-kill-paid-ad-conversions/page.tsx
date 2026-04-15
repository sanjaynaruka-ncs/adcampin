import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "10 Landing Page Mistakes That Kill Paid Ad Conversions (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover the top landing page mistakes that kill paid ad conversions and learn how to fix them to boost ROI in 2026.",
  keywords: [
    "landing page mistakes",
    "paid ad landing page optimization",
    "landing page conversion tips",
    "improve landing page conversions",
    "landing page for ads",
    "landing page optimization 2026",
  ],
};

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
      name: "Why do landing pages hurt paid ad conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing pages hurt conversions when they create friction, confusion, or fail to match user expectations from the ad.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest landing page mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest landing page mistake is message mismatch between the ad promise and the landing page offer.",
      },
    },
    {
      "@type": "Question",
      name: "How can I improve landing page conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Improve conversions by simplifying layout, strengthening CTAs, improving speed, and matching messaging to the ad.",
      },
    },
  ],
};

const mistakes = [
  {
    number: "01",
    title: "Weak Headline That Says Nothing",
    description: "Your headline is the first thing a visitor reads. If it doesn't immediately tell them what they'll get and why it matters, they're gone — usually within 3 seconds.",
    explanation:
     `A headline like "Welcome to Our Website" is a conversion killer. It should mirror the ad's promise and speak directly to the visitor's intent. Think benefit-first, not brand-first.`,
  },
  {
    number: "02",
    title: "Slow Loading Speed",
    description: "Every extra second your page takes to load costs you conversions. A 1-second delay can reduce conversions by up to 7%. With paid traffic, that's real money going to waste.",
    explanation:
      "Compress images, eliminate render-blocking scripts, and use a CDN. Google PageSpeed Insights is free — there's no excuse for a landing page that takes 5+ seconds to load in 2026.",
  },
  {
    number: "03",
    title: "Too Many Distractions",
    description: "Navigation menus, social media links, pop-ups, sidebars — each one is an exit ramp off your conversion path. The more choices you give, the fewer conversions you get.",
    explanation:
      "A landing page should have one goal and one goal only. Strip out everything that doesn't serve that single action. No nav bar. No footer links. No rabbit holes.",
  },
  {
    number: "04",
    title: "Poor Mobile Design",
    description: "More than 60% of paid ad clicks happen on mobile. If your landing page isn't built mobile-first — not just mobile-friendly — you're throwing away the majority of your budget.",
    explanation:
      "Tiny text, buttons that are hard to tap, forms that break on iOS — these aren't minor annoyances. They're conversion blockers. Test your page on real devices, not just browser resize tools.",
  },
{
    number: "05",
    title: "Weak CTA Placement",
    description:
      `Burying your call-to-action below the fold or using vague button text like "Submit" or "Click Here" is one of the most common — and most fixable — landing page mistakes.`,
    explanation:
      `Your CTA should appear above the fold, repeat further down the page, and use action-oriented language tied to the visitor's goal. "Get My Free Quote" beats "Submit" every single time.`,
  },
  {
    number: "06",
    title: "No Trust Signals",
    description:
      "Asking someone to hand over their email, phone number, or credit card without any proof you're legitimate is a big ask. No reviews, no logos, no testimonials = no trust = no conversion.",
    explanation:
      `Add real customer reviews, recognizable client logos, security badges, or a short stat like "Trusted by 10,000+ businesses." Even one or two credibility signals can meaningfully lift conversions.`,
  },
  {
    number: "07",
    title: "Generic, Feature-Heavy Copy",
    description: "\"Industry-leading solutions for modern businesses\" means absolutely nothing. Generic copy that talks about features instead of outcomes loses people fast.",
    explanation:
      "Write like you're talking to one specific person. Lead with the outcome they want, not the features you're proud of. 'Save 3 hours a week on scheduling beats Advanced scheduling technology every time.",
  },
  {
    number: "08",
    title: "Long, Complicated Forms",
    description: "Asking for name, company, phone, email, budget, timeline, and pain points before a visitor has even decided they trust you is a guaranteed conversion killer.",
    explanation:
      "Start with the minimum viable form — usually just name and email. You can collect more information later in the funnel once you've earned some trust. Every extra field reduces completion rates.",
  },
  {
    number: "09",
    title: "Poor Visual Hierarchy",
    description: "If everything on your page looks equally important, nothing stands out. When visitors can't quickly figure out where to look or what to do next, they leave.",
    explanation:
      "Use size, contrast, and whitespace to guide the eye. Your headline should dominate. Your CTA should pop. Supporting copy should support — not compete. Design for scanning, not reading.",
  },
  {
    number: "10",
    title: "Message Mismatch Between Ad and Page",
    description:
      "This is the single biggest conversion killer in paid advertising. Your ad promises one thing, your landing page delivers something different — and the visitor feels deceived.",
    explanation:
      `If your ad says "50% Off Summer Sale," your landing page headline should say exactly that. Keep the visual style, tone, and offer consistent from ad to page. The transition should feel seamless, not jarring.`,
  },
];

const faqs = [
  {
    q: "Why do landing pages hurt paid ad conversions?",
    a: "Landing pages hurt conversions when they create friction, confusion, or fail to match user expectations from the ad. Even a great ad can't overcome a poor landing page experience.",
  },
  {
    q: "What is the biggest landing page mistake?",
    a: "Message mismatch between the ad promise and the landing page offer. When visitors feel deceived or confused, they bounce — simple as that.",
  },
  {
    q: "How can I improve landing page conversions?",
    a: "Start with speed, simplify your layout, strengthen your CTA, add trust signals, and make sure your page matches your ad's message. Small fixes compound fast.",
  },
  {
    q: "How important is mobile optimization for landing pages?",
    a: "Extremely important. The majority of paid ad clicks happen on mobile devices. A page that looks great on desktop but breaks on mobile is wasting more than half your ad spend.",
  },
  {
    q: "Should every ad have its own landing page?",
    a: "Ideally, yes. Dedicated landing pages that match the specific ad's message, audience, and offer consistently outperform generic homepages or service pages.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-900 min-h-screen text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          Conversion Optimization · 2026 Guide
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          10 Landing Page Mistakes That Kill <br className="hidden md:block" />
          Paid Ad Conversions
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          You're paying for every click. Make sure your landing page isn't
          throwing that money away.
        </p>
        <div className="flex justify-center gap-4 mt-6 text-sm text-gray-500">
          <span>8 min read</span>
          <span>·</span>
          <span>Updated April 2026</span>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-gray-400 leading-relaxed mb-4">
          Running paid ads without optimizing your landing page is like pouring
          water into a leaky bucket. The traffic arrives, looks around for half
          a second, and leaves — and you pay for every single one of those
          exits.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          The good news? Most landing page problems are fixable. Here are the
          10 mistakes we see most often — and what to do about each one.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Want to see how high-converting ad pages actually look? Check out our{" "}
          <Link
            href="/blog/landing-page-optimization-paid-ads-conversions"
            className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
          >
            landing page optimization guide for paid ads
          </Link>{" "}
          or browse real examples below.
        </p>
      </section>

      {/* Main Content */}
      <section
        id="examples"
        className="max-w-4xl mx-auto px-6 pb-16 scroll-mt-20"
      >
        <div className="space-y-12">
  {mistakes.map((item: any) => (
    <div
      key={item.number}
      className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-colors"
    >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-black text-slate-600 leading-none select-none">
                  {item.number}
                </span>
                <h2 className="text-xl font-bold text-white leading-snug mt-1">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed">
                {item.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.explanation}
              </p>
              <Link
                href="/signup"
                className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
              >
                Fix this in your ads →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Patterns & Insights */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            What These Mistakes Have in Common
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Look at that list and you'll notice a pattern: most of these
            mistakes come down to friction, confusion, or broken expectations.
            You either made it hard to act, unclear what to do, or you failed
            to deliver on the promise your ad made.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            The best landing pages remove every possible obstacle between the
            click and the conversion. They're fast, focused, and feel like a
            natural continuation of the ad experience — not a jarring left turn.
          </p>
          <p className="text-gray-400 leading-relaxed">
            If you're still not sure why your ads aren't converting, read our
            breakdown on{" "}
            <Link
              href="/blog/why-ads-not-converting-how-to-fix"
              className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
            >
              why ads stop converting and how to fix them
            </Link>
            . And if you want to improve results without raising your budget,{" "}
            <Link
              href="/blog/improve-ctr-on-ads-without-increasing-budget"
              className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
            >
              this CTR improvement guide
            </Link>{" "}
            is worth reading next.
          </p>
        </div>
      </section>

      {/* Explore More Ad Examples */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Explore Real Ad + Landing Page Examples
        </h2>
        <p className="text-gray-400 mb-8">
          See what high-performing paid ad campaigns actually look like across
          industries and cities.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/ads/google/dentists/new-york/examples"
            className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-rose-500 transition-colors group"
          >
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Google Ads
            </span>
            <p className="text-white font-semibold mt-2 group-hover:text-rose-300 transition-colors">
              Dentist Ads · New York
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Real examples from NYC dental campaigns
            </p>
          </Link>
          <Link
            href="/ads/google/real-estate/mumbai/examples"
            className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-rose-500 transition-colors group"
          >
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Google Ads
            </span>
            <p className="text-white font-semibold mt-2 group-hover:text-rose-300 transition-colors">
              Real Estate Ads · Mumbai
            </p>
            <p className="text-sm text-gray-500 mt-1">
              High-converting real estate examples
            </p>
          </Link>
          <Link
            href="/ads/google/lawyers/houston/examples"
            className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-rose-500 transition-colors group"
          >
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Google Ads
            </span>
            <p className="text-white font-semibold mt-2 group-hover:text-rose-300 transition-colors">
              Lawyer Ads · Houston
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Legal campaign examples from Houston
            </p>
          </Link>
        </div>
      </section>

      {/* Related Reading */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-bold text-white mb-5">Keep Reading</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              href: "/blog/high-converting-cta-for-ads",
              label: "How to Write High-Converting CTAs for Ads",
            },
            {
              href: "/blog/google-ads-bidding-strategies-max-roi",
              label: "Google Ads Bidding Strategies for Max ROI",
            },
            {
              href: "/blog/how-to-lower-cpc-google-ads-without-losing-quality-traffic",
              label: "Lower CPC Without Losing Quality Traffic",
            },
            {
              href: "/blog/ab-testing-ads-better-performance-2026",
              label: "A/B Testing Your Ads for Better Performance in 2026",
            },
            {
              href: "/blog/lead-magnet-ideas-for-ads-increase-signups",
              label: "Lead Magnet Ideas That Actually Increase Signups",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-2 border-b border-slate-800"
            >
              <span className="text-rose-500">→</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section
        id="cta"
        className="max-w-4xl mx-auto px-6 pb-16 scroll-mt-20"
      >
        <div className="bg-gradient-to-br from-rose-900/40 to-slate-800 rounded-lg p-10 border border-rose-800/40 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Fix Your Landing Pages?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Stop wasting ad spend on pages that don't convert. AdCampin helps
            you build, test, and optimize landing pages built around your
            specific campaigns.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Get Started Free →
          </Link>
          <p className="text-xs text-gray-600 mt-4">
            No credit card required
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-4xl mx-auto px-6 pb-20 scroll-mt-20"
      >
        <h2 className="text-2xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b border-slate-800 pb-6"
            >
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
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
    </main>
  );
}