import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "How to Scale Winning Ads Without Killing ROI (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to scale winning ad campaigns without destroying ROI using proven budget, bidding, and audience expansion strategies in 2026.",
  keywords: [
    "scale winning ads",
    "how to scale ad campaigns",
    "increase ad budget without losing roi",
    "scale facebook ads",
    "scale google ads",
    "ad scaling strategies 2026",
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
      name: "How fast should I scale winning ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scale gradually by increasing budgets 10–20% every few days to avoid disrupting platform optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Why does ROI drop when scaling ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROI often drops because scaling too quickly resets learning phases and forces platforms into less efficient auctions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the safest way to scale ad campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The safest method is gradual vertical scaling combined with testing new audiences and creatives.",
      },
    },
  ],
};

const strategies = [
  {
    id: 1,
    tag: "Budget",
    headline: "Gradual Budget Increases (The 20% Rule)",
    description:
      "Never double your budget overnight. Increase spend by 10–20% every 3–5 days and let the algorithm breathe.",
    explanation:
      "Platforms like Meta and Google use a learning phase to optimize delivery. A sudden spike in budget restarts this phase and tanks efficiency. Small, consistent increases keep the algorithm in a stable zone and protect your CPA.",
  },
  {
    id: 2,
    tag: "Vertical",
    headline: "Vertical Scaling: Go Deeper, Not Wider",
    description:
      "Push more budget into your single best-performing ad set instead of spreading it thin across many.",
    explanation:
      "Vertical scaling concentrates spend where you already know it converts. It's lower risk than testing new audiences from scratch. Use this when your top ad set has strong ROAS and room to absorb more daily budget without frequency issues.",
  },
  {
    id: 3,
    tag: "Horizontal",
    headline: "Horizontal Scaling: Clone and Conquer",
    description:
      "Duplicate your winning ad set into multiple new ad sets with slight variations in audience or placement.",
    explanation:
      "Each new ad set enters its own learning phase independently. This way you're not funneling all your risk into one bucket. It also helps you discover which audience segment drives the most efficient conversions at scale.",
  },
  {
    id: 4,
    tag: "Audience",
    headline: "Audience Expansion: Cast a Bigger Net Carefully",
    description:
      "Broaden your targeting by expanding age ranges, adding interest layers, or enabling Meta's Advantage+ audiences.",
    explanation:
      "Once your core audience is saturated, expansion is necessary — but do it incrementally. Test one change at a time so you can attribute any dip in performance to a specific variable. Lookalike audiences built from your buyer list are often the safest expansion move.",
  },
  {
    id: 5,
    tag: "Creative",
    headline: "Creative Refreshes: Kill Ad Fatigue Before It Kills ROI",
    description:
      "Rotate fresh creatives every 7–14 days for high-spend campaigns to avoid audience fatigue.",
    explanation:
      "When the same users see the same ad repeatedly, click-through rates fall and costs rise. Keeping a bank of 3–5 creative variants ready lets you swap without disrupting the campaign structure. Change the hook, the visual, or the CTA — not everything at once.",
  },
  {
    id: 6,
    tag: "Offer",
    headline: "Offer Testing: What If the Ad Isn't the Problem?",
    description:
      "Sometimes scaling fails not because of your targeting but because the offer has hit its ceiling.",
    explanation:
      "Test alternate offers — a different discount, a free trial, a bonus bundle — within the same campaign. A stronger offer can revive a stalling winner better than any audience tweak. Keep the creative constant while changing the value proposition to isolate the variable.",
  },
  {
    id: 7,
    tag: "Bidding",
    headline: "Bid Adjustments: Give Yourself Room to Win More Auctions",
    description:
      "Switch from lowest-cost to cost-cap or bid-cap bidding when scaling to control per-conversion costs.",
    explanation:
      "As budgets scale, platforms bid more aggressively and costs creep up. Cost-cap bidding tells the algorithm the maximum you're willing to pay per result, protecting margin. Just set your cap above the CPA that breaks even — not so tight that delivery stalls.",
  },
  {
    id: 8,
    tag: "Placement",
    headline: "Placement Expansion: Unlock Cheaper Inventory",
    description:
      "Open up placements beyond your primary channel — Reels, Audience Network, YouTube Display — to access lower-CPM inventory.",
    explanation:
      "Many advertisers run only in feed or Stories, leaving cheaper placement inventory untouched. By expanding placements (with tailored creatives), you can reach more people at lower cost while keeping your primary placements converting at full efficiency.",
  },
  {
    id: 9,
    tag: "Duplicate",
    headline: "Campaign Duplication: Reset and Reload",
    description:
      "If a campaign's learning phase has deteriorated, duplicate the entire campaign and let it re-learn from scratch.",
    explanation:
      "Over time, ad delivery algorithms accumulate data that can actually work against you — especially if early performance was inconsistent. A fresh duplicate gives the algorithm a clean slate with your current budget and audience settings, often recovering lost performance.",
  },
  {
    id: 10,
    tag: "Retargeting",
    headline: "Retargeting Scaling: Warm Audiences Convert Cheaper",
    description:
      "Scale retargeting campaigns separately from cold traffic — they have lower CPAs and higher intent.",
    explanation:
      "People who've already visited your site or engaged with your content are exponentially more likely to convert. Allocate a dedicated budget to retargeting and scale it independently. Use sequential messaging — show them what they viewed, then a testimonial, then an urgency offer.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/60">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            2026 Guide · Paid Ads
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            How to Scale Winning Ads Without Killing ROI
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Scaling isn't just about spending more — it's about spending smarter. Here's a
            no-fluff playbook of 10 strategies that actually protect your margins as you grow.
          </p>
          <div className="flex gap-4 mt-8 text-sm text-gray-500">
            <span>10 strategies</span>
            <span>·</span>
            <span>~8 min read</span>
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
          You found an ad that works. Now what? Most advertisers either blow up their budget
          overnight and watch performance crater, or they play it too safe and leave money on
          the table. The truth is, scaling is a skill — and it comes down to knowing which
          levers to pull, in what order, and how fast.
        </p>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl mt-4">
          Below are 10 battle-tested scaling strategies for 2026. Use them in the right context
          and your winning campaigns will grow revenue without destroying the ROI that made them
          worth scaling in the first place.
        </p>
      </section>

      {/* Main Content */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6">
          {strategies.map((s) => (
            <div
              key={s.id}
              className="rounded-lg bg-slate-800/60 border border-slate-700/50 p-6 hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">
                  {s.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-700 text-slate-400 uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2 leading-snug">
                    {s.headline}
                  </h2>
                  <p className="text-gray-300 font-medium mb-3">{s.description}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.explanation}</p>
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
          <h2 className="text-2xl font-bold text-white mb-6">
            What Separates Scalable Campaigns From One-Hit Wonders
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Controlled Variables",
                body: "The best scaling moves change one thing at a time — budget, audience, creative, or bid. Changing multiple variables at once makes it impossible to know what worked.",
              },
              {
                label: "Patience With Learning",
                body: "Platforms need time. Cutting or doubling budgets too quickly resets optimization. Give each change 3–5 days before judging performance.",
              },
              {
                label: "Margin-First Thinking",
                body: "Scale only what's profitable. Know your target CPA, set your break-even ROAS, and walk away from any scaling move that pushes past those guardrails.",
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
          Real ad strategies from real industries — filtered by city and niche.
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
            { href: "/blog/high-converting-cta-for-ads", label: "High-Converting CTAs for Ads" },
            { href: "/blog/why-ads-not-converting-how-to-fix", label: "Why Your Ads Aren't Converting (And How to Fix It)" },
            { href: "/blog/lead-magnet-ideas-for-ads-increase-signups", label: "Lead Magnet Ideas to Increase Signups" },
            { href: "/blog/lower-cpc-google-ads-without-losing-traffic", label: "How to Lower CPC Without Losing Traffic" },
            { href: "/blog/retargeting-ads-convert-visitors-to-leads-2026", label: "Retargeting Ads: Convert Visitors to Leads in 2026" },
            { href: "/blog/landing-page-optimization-paid-ads-conversions", label: "Landing Page Optimization for Paid Ad Conversions" },
            { href: "/blog/ab-testing-ads-better-performance-2026", label: "A/B Testing Ads for Better Performance in 2026" },
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
      <section id="cta" className="border-t border-slate-700/60 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            Start Free
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Ready to Scale Your Best Ads?
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
            AdCampin gives you the creative tools, audience insights, and scaling frameworks to
            grow revenue without blowing your budget. No credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-semibold text-base transition-colors shadow-lg shadow-rose-500/20"
          >
            Get Started Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How fast should I scale winning ads?",
              a: "Scale gradually by increasing budgets 10–20% every few days to avoid disrupting platform optimization. Patience here pays off more than speed.",
            },
            {
              q: "Why does ROI drop when scaling ads?",
              a: "ROI often drops because scaling too quickly resets learning phases and forces platforms into less efficient auctions. The algorithm needs stable conditions to optimize well.",
            },
            {
              q: "What is the safest way to scale ad campaigns?",
              a: "The safest method is gradual vertical scaling combined with testing new audiences and creatives in parallel. Never change more than one major variable at a time.",
            },
            {
              q: "Should I scale Facebook ads and Google Ads differently?",
              a: "Mostly yes. Google responds well to bid cap adjustments and keyword expansion. Meta is more sensitive to creative fatigue and audience saturation, so creative refreshes matter more on that platform.",
            },
            {
              q: "At what ROAS should I start scaling?",
              a: "There's no universal answer, but most advertisers start scaling confidently once they're hitting 2–3x their break-even ROAS consistently over at least 7 days. Know your numbers before pushing spend.",
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