import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "7 Retargeting Mistakes That Waste Your Ad Budget (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Avoid these 7 costly retargeting mistakes that waste ad budget and learn how to improve ROI with smarter remarketing strategies in 2026.",
  keywords: [
    "retargeting mistakes",
    "retargeting ads strategy",
    "remarketing mistakes",
    "retargeting ad budget waste",
    "improve retargeting roi",
    "retargeting ads 2026",
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
      name: "Why is retargeting important in advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retargeting helps convert warm visitors who already interacted with your brand but didn't convert initially.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest retargeting mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Showing the same ad to every visitor without segmenting audiences is one of the most common retargeting mistakes.",
      },
    },
    {
      "@type": "Question",
      name: "How do I improve retargeting ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Improve retargeting ROI by segmenting audiences, rotating creatives, capping frequency, and matching offers to buyer intent.",
      },
    },
  ],
};

const mistakes = [
  {
    id: 1,
    tag: "Audience",
    headline: "Retargeting Everyone Who Ever Touched Your Site",
    description:
      "Casting your retargeting net over every single visitor — including people who bounced in two seconds — burns budget on people who were never interested.",
    explanation:
      "Not all traffic is equal. Someone who spent 30 seconds on your homepage and left is very different from someone who added to cart and didn't checkout. Lumping them together wastes spend on cold, unqualified traffic that happens to have your pixel. Tighten your retargeting window to high-intent behaviors: page depth, time on site, product views, or cart activity. You'll pay less and convert more.",
  },
  {
    id: 2,
    tag: "Segmentation",
    headline: "Treating All Warm Audiences as One Audience",
    description:
      "Running a single retargeting campaign for all past visitors is like sending the same email to your entire list regardless of where they are in the funnel.",
    explanation:
      "A blog reader, a pricing page visitor, and an abandoned cart user all need different messages. Without segmentation, you're forcing one creative to do three different jobs — and it fails at all three. Build separate ad sets for awareness-stage visitors, consideration-stage browsers, and high-intent abandoners. Each needs a different offer, tone, and CTA to move them forward.",
  },
  {
    id: 3,
    tag: "Frequency",
    headline: "Ignoring Frequency Caps and Stalking Your Own Customers",
    description:
      "Showing your ad to the same person 15 times a week doesn't increase conversions — it increases brand resentment.",
    explanation:
      "There's a frequency threshold beyond which every additional impression costs you money and goodwill. Meta data consistently shows that ad recall peaks around 2–4 exposures per week per user. After that, performance degrades and negative sentiment climbs. Set frequency caps on your retargeting campaigns and monitor frequency in your ad manager. If people are seeing your ad more than 5–6 times a week, you either have too small an audience or too high a budget for the size of your pool.",
  },
  {
    id: 4,
    tag: "Creative",
    headline: "Running the Same Creative for Months Without Rotating",
    description:
      "Retargeting audiences are small by nature. Running the same creative to the same 500 people for 60 days is a fast track to creative fatigue and wasted spend.",
    explanation:
      "When frequency goes up and creative stays the same, CTR drops, CPM rises, and your ROAS quietly collapses. Rotate retargeting creatives every 2–3 weeks at minimum. The creative doesn't need to be a complete overhaul — changing the hook, the visual format, or the offer angle is enough to reset engagement. Keep 3–5 variants in rotation so the algorithm has options to test.",
  },
  {
    id: 5,
    tag: "Messaging",
    headline: "Sending Every User the Same Generic Message",
    description:
      "If someone already read your feature comparison page, showing them a top-of-funnel brand awareness ad is a waste of their attention and your budget.",
    explanation:
      "Retargeting is most powerful when the message matches exactly where someone stopped. Show cart abandoners the specific product they left behind, with a nudge like a limited-time discount or a trust signal like a review. Show pricing page visitors a case study or ROI calculator. Show blog readers a lead magnet or free trial offer. Message-to-audience match is the highest-leverage variable in retargeting, and most advertisers get it completely wrong.",
  },
  {
    id: 6,
    tag: "Offer",
    headline: "Using a Weak CTA When the Audience Is Already Warm",
    description:
      "\"Learn more\" is a cold-traffic CTA. Your retargeting audience already knows you — they need a reason to act now, not another invitation to browse.",
    explanation:
      "Retargeting audiences have lower friction than cold traffic, which means your offer needs to match their intent level. Use time-sensitive CTAs like \"Claim your 20% discount — 48 hours left\" or social proof anchors like \"Join 3,000 customers who switched last month.\" The more specific and action-oriented your CTA, the more likely a warm audience converts. A generic \"learn more\" is leaving conversions on the table.",
  },
  {
    id: 7,
    tag: "Exclusions",
    headline: "Forgetting to Exclude Existing Customers and Converters",
    description:
      "Retargeting someone who already bought from you is awkward at best and a budget drain at worst — unless you're cross-selling intentionally.",
    explanation:
      "Without proper exclusion audiences, your retargeting campaigns will keep serving ads to people who converted yesterday. They see an offer for something they already own, it feels out of touch, and you've wasted an impression. Always exclude recent purchasers, active subscribers, and current leads from your standard retargeting pools. If you want to upsell or cross-sell existing customers, build a separate campaign with a separate message for that purpose — don't mix it with acquisition retargeting.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/60">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/25 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            2026 Guide · Retargeting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            7 Retargeting Mistakes That Waste Your Ad Budget
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Retargeting should be your highest-ROI campaign type. If it isn't, you're probably
            making one — or several — of these mistakes. Here's exactly what's going wrong and
            how to fix it.
          </p>
          <div className="flex gap-4 mt-8 text-sm text-gray-500">
            <span>7 mistakes covered</span>
            <span>·</span>
            <span>~7 min read</span>
            <span>·</span>
            <Link href="#faq" className="text-rose-400 hover:text-rose-300 transition-colors">
              Skip to FAQ ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
          Retargeting is supposed to be easy. You're talking to people who already know your
          brand — they visited your site, browsed your products, maybe even started a checkout.
          The hard part (getting attention) is done. And yet most retargeting campaigns are
          hemorrhaging budget without delivering results.
        </p>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl mt-4">
          The problem is almost never the channel. It's the strategy — specifically, the seven
          mistakes below. Fix these and your retargeting campaigns will start working the way
          they're supposed to.
        </p>
      </section>

      {/* Main Content */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6">
          {mistakes.map((m) => (
            <div
              key={m.id}
              className="rounded-lg bg-slate-800/60 border border-slate-700/50 p-6 hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">
                  {m.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-700 text-slate-400 uppercase tracking-wider">
                      {m.tag}
                    </span>
                    <span className="text-xs text-rose-500/70 font-medium">Mistake #{m.id}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2 leading-snug">
                    {m.headline}
                  </h2>
                  <p className="text-gray-300 font-medium mb-3">{m.description}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{m.explanation}</p>
                  <Link
                    href="/signup"
                    className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Fix this in your ads →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pattern / Insights */}
      <section className="border-t border-b border-slate-700/60 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-white mb-3">
            The Pattern Behind Every Failed Retargeting Campaign
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mb-8">
            These seven mistakes all trace back to one root cause: treating retargeting like a
            second chance to show the same ad rather than an opportunity to deliver a more
            targeted, more relevant message. The fix is always the same — get more specific.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Match Message to Moment",
                body: "Every retargeting audience segment has a different level of intent. The creative, offer, and CTA should match exactly where they stopped — not where you wish they were.",
              },
              {
                label: "Protect Audience Size",
                body: "Retargeting pools are small. Over-serving, poor segmentation, and missing exclusions all shrink your effective audience faster than you think. Protect the pool.",
              },
              {
                label: "Refresh Before It Flatlines",
                body: "Don't wait for performance to collapse before rotating creatives. Set a calendar reminder every two weeks to check frequency and swap in fresh variants before fatigue sets in.",
              },
            ].map((insight) => (
              <div
                key={insight.label}
                className="rounded-lg bg-slate-900/60 border border-slate-700/50 p-5"
              >
                <div className="w-1.5 h-6 bg-rose-500 rounded mb-4" />
                <h3 className="text-white font-semibold mb-2">{insight.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-white mb-2">Explore More Ad Examples</h2>
        <p className="text-gray-400 text-sm mb-8">
          Real campaigns, real industries — see how top advertisers structure their ads by niche
          and city.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            {
              href: "/ads/google/dentists/new-york/examples",
              label: "Google Ads for Dentists — New York",
              sub: "Local lead gen examples",
            },
            {
              href: "/ads/google/real-estate/mumbai/examples",
              label: "Google Ads for Real Estate — Mumbai",
              sub: "Property campaign examples",
            },
            {
              href: "/ads/google/lawyers/houston/examples",
              label: "Google Ads for Lawyers — Houston",
              sub: "Legal lead gen examples",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-slate-700/50 bg-slate-800/40 p-5 hover:border-rose-500/40 hover:bg-slate-800/70 transition-all"
            >
              <p className="text-white font-medium group-hover:text-rose-300 transition-colors mb-1">
                {link.label}
              </p>
              <p className="text-gray-500 text-xs">{link.sub}</p>
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">Related Guides</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              href: "/blog/retargeting-ads-convert-visitors-to-leads-2026",
              label: "Retargeting Ads: Convert Visitors to Leads in 2026",
            },
            {
              href: "/blog/why-ads-not-converting-how-to-fix",
              label: "Why Your Ads Aren't Converting (And How to Fix It)",
            },
            {
              href: "/blog/high-converting-cta-for-ads",
              label: "High-Converting CTAs for Ads",
            },
            {
              href: "/blog/high-converting-ad-hooks-examples",
              label: "High-Converting Ad Hooks with Examples",
            },
            {
              href: "/blog/ab-testing-ads-better-performance-2026",
              label: "A/B Testing Ads for Better Performance in 2026",
            },
            {
              href: "/blog/scale-winning-ads-without-killing-roi",
              label: "How to Scale Winning Ads Without Killing ROI",
            },
            {
              href: "/blog/lead-magnet-ideas-for-ads-increase-signups",
              label: "Lead Magnet Ideas to Increase Signups",
            },
            {
              href: "/blog/google-ads-vs-facebook-ads-lead-generation",
              label: "Google Ads vs Facebook Ads for Lead Generation",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-rose-300 transition-colors py-2 border-b border-slate-800"
            >
              <span className="text-rose-500">→</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="border-t border-slate-700/60 bg-gradient-to-b from-slate-800/50 to-slate-900"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            Start Free
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Stop Wasting Budget on Retargeting That Doesn't Convert
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
            AdCampin helps you build smarter retargeting campaigns — with audience segmentation,
            creative rotation tools, and offer testing built in. No credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-semibold text-base transition-colors shadow-lg shadow-rose-500/20"
          >
            Fix My Retargeting →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Why is retargeting important in advertising?",
              a: "Retargeting helps convert warm visitors who already interacted with your brand but didn't convert initially. These audiences are significantly more likely to buy than cold traffic, making retargeting one of the highest-ROI channels available when done correctly.",
            },
            {
              q: "What is the biggest retargeting mistake?",
              a: "Showing the same ad to every visitor without segmenting audiences is one of the most common retargeting mistakes. It wastes budget on low-intent visitors while missing the opportunity to deliver highly relevant messages to high-intent ones.",
            },
            {
              q: "How do I improve retargeting ROI?",
              a: "Improve retargeting ROI by segmenting audiences, rotating creatives, capping frequency, and matching offers to buyer intent. Also make sure you're excluding existing customers and recent converters from your acquisition campaigns.",
            },
            {
              q: "How often should I rotate retargeting creatives?",
              a: "For most retargeting campaigns, rotate creatives every 2–3 weeks. Monitor frequency — if average frequency exceeds 5–6 per week and CTR is declining, it's time to swap in fresh creative immediately.",
            },
            {
              q: "What frequency cap should I set for retargeting ads?",
              a: "A common starting point is 3–5 impressions per week per user for most retargeting campaigns. High-intent abandonment campaigns can handle slightly higher frequency, but always monitor CTR and CPM as guardrails.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-6"
            >
              <h3 className="text-white font-semibold mb-3">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schema Scripts */}
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