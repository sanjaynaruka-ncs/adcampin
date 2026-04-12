import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "How to Lower CPC in Google Ads Without Losing Quality Traffic (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to lower CPC in Google Ads without sacrificing lead quality using proven optimization strategies and bidding techniques in 2026.",
  keywords: [
    "lower cpc google ads",
    "reduce google ads cost per click",
    "google ads optimization",
    "improve google ads quality score",
    "cheap google ads traffic",
    "google ads bidding tips",
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
      name: "Why is my Google Ads CPC so high?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High CPC often comes from poor Quality Score, broad targeting, and competitive bidding.",
      },
    },
    {
      "@type": "Question",
      name: "Can I lower CPC without losing conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, by improving Quality Score and targeting efficiency you can reduce CPC while maintaining traffic quality.",
      },
    },
    {
      "@type": "Question",
      name: "What affects Google Ads CPC the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Competition, Quality Score, keyword relevance, and bidding strategy impact CPC the most.",
      },
    },
  ],
};

const strategies = [
  {
    number: "01",
    title: "Improve Your Quality Score",
    tactic:
      "Quality Score is Google's 1–10 rating of how relevant your keyword, ad, and landing page are to a searcher's query. A score of 7+ earns you a CPC discount — sometimes 30–50% below auction price.",
    how: "Align your keyword, ad headline, ad description, and landing page around the same core phrase. The more consistent the message across all three, the higher Google rates your relevance.",
    why: "Google rewards relevance with cheaper clicks because relevant ads improve the user experience. A Quality Score of 8 vs. 4 on the same keyword can mean paying half the CPC of your competitors.",
    badge: "⚡ Quality Score",
  },
  {
    number: "02",
    title: "Build a Strong Negative Keyword List",
    tactic:
      "Without negative keywords, your ads show for irrelevant queries that drain budget and signal low relevance to Google — both of which push CPC up.",
    how: "Pull your Search Terms report weekly. Identify queries that triggered your ads but have no conversion intent — add them as negatives at the campaign or account level. Common additions: 'free,' 'DIY,' 'jobs,' 'reviews,' 'cheap.'",
    why: "Negative keywords filter out low-intent traffic, which raises your CTR on the remaining impressions. Higher CTR directly improves Quality Score, which in turn lowers your actual CPC in auction.",
    badge: "🚫 Negative Keywords",
  },
  {
    number: "03",
    title: "Optimize Ad Copy for Higher CTR",
    tactic:
      "CTR is one of the three core components of Quality Score. An ad with a 6% CTR will consistently pay less per click than an identical ad with a 2% CTR, even targeting the same keywords.",
    how: "Test headlines that include the search keyword, a specific benefit, and urgency or social proof. Use all available headline and description slots. Pin your most critical message to position 1.",
    why: "Google interprets a high CTR as proof that your ad matches what users want. The more clicks you earn relative to impressions, the more Google rewards you with lower costs and higher ad positions.",
    badge: "📈 CTR",
  },
  {
    number: "04",
    title: "Switch to the Right Bid Strategy",
    tactic:
      "Manual CPC, Maximize Clicks, Target CPA, and Target ROAS all produce different cost outcomes depending on your campaign stage and conversion data volume.",
    how: "If you have fewer than 30 conversions per month, use Manual CPC or Maximize Clicks with a bid cap to avoid overspending. Once you have 50+ conversions per month, Target CPA usually lowers cost per result significantly.",
    why: "The wrong bid strategy can cause Google to bid aggressively in low-value auctions. Matching bid strategy to your data volume lets the algorithm optimize effectively — reducing wasted spend and CPC.",
    badge: "💰 Bidding",
  },
  {
    number: "05",
    title: "Exclude Low-Converting Audiences",
    tactic:
      "You're likely paying for clicks from audience segments that never convert — certain age groups, household income tiers, or customer match segments already in your CRM.",
    how: "In Google Ads, add audience segments in observation mode first. Review conversion rates by segment after 30 days. Apply bid adjustments of -30% to -100% on consistently non-converting segments.",
    why: "Excluding low-value audiences tightens your impression pool to higher-intent users, which raises CTR and conversion rate simultaneously — improving Quality Score and making every click cheaper on average.",
    badge: "🎯 Audiences",
  },
  {
    number: "06",
    title: "Optimize Bids by Device",
    tactic:
      "Desktop, mobile, and tablet users convert at very different rates across most industries. Paying the same CPC across all devices means overpaying on at least one.",
    how: "Check your campaign device performance report. If mobile converts at half the rate of desktop but costs the same, apply a -30% to -50% mobile bid adjustment. Redirect mobile budget toward your higher-converting device.",
    why: "Device bid adjustments let you allocate more budget toward the devices that actually generate revenue — reducing wasted spend and effectively lowering your average CPC across the campaign.",
    badge: "📱 Devices",
  },
  {
    number: "07",
    title: "Tighten Geographic Targeting",
    tactic:
      "Running ads across an entire country or state when your business only serves specific cities means paying for clicks from people who will never become customers.",
    how: "Use radius targeting around your service areas. Layer city or zip-code level targeting for local businesses. Exclude locations that have consumed budget without conversions in the past 90 days.",
    why: "Geo-focused targeting concentrates impressions among the users most likely to convert. Higher relevance in a smaller pool means better CTR, better Quality Score, and a meaningfully lower CPC.",
    badge: "📍 Geo Targeting",
  },
  {
    number: "08",
    title: "Run Ads Only During High-Converting Hours",
    tactic:
      "Most businesses have clear peak conversion windows — times of day and days of week when leads or purchases are far more likely. Running ads 24/7 burns budget during low-intent windows.",
    how: "Pull your campaign's Day & Hour breakdown report. Identify your 3–5 highest-converting time blocks. Use ad scheduling to pause ads during consistently low-performing hours or apply negative bid adjustments.",
    why: "Ad scheduling focuses your spend on moments when users are most ready to act. This raises your effective conversion rate, which improves your Quality Score over time and reduces CPC in the auctions that matter most.",
    badge: "⏰ Scheduling",
  },
  {
    number: "09",
    title: "Target Long-Tail Keywords",
    tactic:
      "Short, competitive keywords like 'dentist' or 'lawyer' carry CPCs of $15–$80+ because every competitor is bidding on them. Long-tail variants like 'emergency dental care Saturday Houston' cost a fraction of that.",
    how: "Use Google's Keyword Planner and your Search Terms report to find 3–5 word variants with clear intent. Build dedicated ad groups for each long-tail cluster with tightly matched ad copy.",
    why: "Long-tail keywords have lower competition, higher relevance, and higher conversion intent. You pay less per click and convert more of those clicks — a compounding advantage that dramatically improves campaign efficiency.",
    badge: "🔍 Long-Tail",
  },
  {
    number: "10",
    title: "Improve Landing Page Relevance",
    tactic:
      "Landing page experience is the third pillar of Quality Score — and one of the most overlooked. A fast, relevant, mobile-friendly landing page lowers CPC directly by improving your score.",
    how: "Send each ad group to a dedicated landing page that mirrors the keyword and ad headline. Remove navigation links, reduce load time to under 2 seconds, and make the CTA immediately visible above the fold.",
    why: "Google checks whether your landing page delivers on what your ad promised. A strong landing page experience increases Quality Score by 1–3 points — which can lower CPC by 20–40% without changing a single bid.",
    badge: "🏠 Landing Page",
  },
];

const faqs = [
  {
    q: "Why is my Google Ads CPC so high?",
    a: "High CPC most often results from a low Quality Score, broad keyword targeting that triggers irrelevant searches, and heavy competition in your auction. Improving ad relevance, tightening targeting, and adding negative keywords are the fastest routes to reducing it.",
  },
  {
    q: "Can I lower CPC without losing conversions?",
    a: "Yes — and in most cases, the tactics that lower CPC also improve conversion rate. Improving Quality Score, using long-tail keywords, and tightening geo and device targeting all reduce cost while increasing the relevance and intent of the traffic you receive.",
  },
  {
    q: "What affects Google Ads CPC the most?",
    a: "Competition, Quality Score, keyword relevance, and bidding strategy have the biggest impact. Quality Score is the lever most advertisers underutilize — a score improvement from 4 to 8 can cut your CPC nearly in half on the same keyword.",
  },
  {
    q: "How long does it take to see CPC improvements?",
    a: "Some changes — like adding negative keywords or tightening geo targeting — take effect within days. Quality Score improvements from landing page and CTR optimization typically reflect over 2–4 weeks of accumulated data.",
  },
  {
    q: "Is lower CPC always better?",
    a: "Not always. The goal is a lower cost per conversion, not just a lower cost per click. A $2 CPC that converts at 1% is worse than a $6 CPC that converts at 8%. Focus on cost per lead or cost per acquisition as your primary metric.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          2026 Guide · Google Ads
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          How to Lower CPC in Google Ads{" "}
          <span className="text-rose-400">Without Losing Quality Traffic</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          High cost-per-click is one of the most common complaints from Google Ads advertisers. The
          good news: most of it is fixable without cutting your bids or sacrificing lead quality.
          Here's how.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-rose-500 hover:bg-rose-400 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Reduce My Google Ads CPC →
          </Link>
          <Link
            href="#examples"
            className="border border-white/10 hover:border-white/30 text-gray-300 px-6 py-3 rounded-lg transition"
          >
            See 10 CPC Strategies
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-gray-400 text-base leading-relaxed">
          Google Ads CPC has risen significantly in nearly every industry over the past three years.
          More advertisers competing for the same searches means higher auction prices — unless you
          know how to earn Google's relevance discount. That's what this guide is about.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mt-4">
          These 10 strategies address the root causes of high CPC — not the symptoms. Apply even
          half of them consistently and you'll see a meaningful reduction in what you pay per click,
          without pulling back on reach or lead volume.
        </p>
      </section>

      {/* Main: 10 Strategies */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {strategies.map((item) => (
            <div
              key={item.number}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500 opacity-60 leading-none mt-1">
                  {item.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                    <span className="text-xs font-semibold bg-slate-700 text-gray-300 px-2 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1 block">
                      The Tactic
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.tactic}</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1 block">
                      How to Apply It
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.how}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1 block">
                      Why It Reduces CPC
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.why}</p>
                  </div>

                  <Link
                    href="/signup"
                    className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
                  >
                    Fix this in your ads →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="bg-slate-900 border-y border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            CPC Optimization by the Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                stat: "50%",
                label: "lower CPC possible when Quality Score improves from 4 to 8 on the same keyword",
              },
              {
                stat: "30%",
                label: "of Google Ads budget is typically wasted on irrelevant search queries without negatives",
              },
              {
                stat: "3–5×",
                label: "lower CPC for long-tail keywords vs. broad head terms in competitive industries",
              },
            ].map((s) => (
              <div
                key={s.stat}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 text-center"
              >
                <div className="text-4xl font-black text-rose-400 mb-2">{s.stat}</div>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                How Google's Auction Actually Works
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Google Ads doesn't sell clicks to the highest bidder — it sells them to the
                highest Ad Rank. Ad Rank is calculated as: Bid × Quality Score × expected impact of
                extensions. This means a well-optimized campaign with a lower bid can outrank and
                outperform a higher-spending competitor with poor relevance.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The practical implication: improving Quality Score is often worth more than
                increasing your bid. It's the lever that makes your entire campaign more efficient
                without spending an extra dollar.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Quick Wins to Try This Week
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">→</span>
                  Pull your Search Terms report and add 10–20 negative keywords
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">→</span>
                  Check Quality Scores on your top 10 keywords
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">→</span>
                  Review device performance and apply mobile bid adjustments
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">→</span>
                  Pause any keyword with 100+ clicks and zero conversions
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">→</span>
                  Test one long-tail keyword ad group with dedicated landing page
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-slate-800 p-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Lower CPC only matters if your landing page converts the traffic you're sending.
              Make sure post-click experience matches the work you're putting into your campaigns.
            </p>
            <Link
              href="/blog/landing-page-optimization-paid-ads-conversions"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Read: Landing Page Optimization for Paid Ads →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Explore More Ad Examples</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            {
              href: "/ads/google/dentists/new-york/examples",
              label: "Google Ads Examples for Dentists in New York",
              tag: "Local Ads",
            },
            {
              href: "/ads/google/real-estate/mumbai/examples",
              label: "Google Ads Examples for Real Estate in Mumbai",
              tag: "Real Estate",
            },
            {
              href: "/ads/google/lawyers/houston/examples",
              label: "Google Ads Examples for Lawyers in Houston",
              tag: "Legal",
            },
            {
              href: "/blog/best-google-ads-examples-small-businesses-2026",
              label: "Best Google Ads Examples for Small Businesses (2026)",
              tag: "Blog",
            },
            {
              href: "/blog/ab-testing-ads-better-performance-2026",
              label: "How to A/B Test Your Ads for Better Performance",
              tag: "Blog",
            },
            {
              href: "/blog/why-ads-not-converting-how-to-fix",
              label: "Why Your Ads Aren't Converting & How to Fix It",
              tag: "Blog",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-800 px-5 py-4 hover:border-rose-500/40 hover:bg-slate-700 transition group"
            >
              <span className="text-gray-300 text-sm group-hover:text-white transition">
                {link.label}
              </span>
              <span className="text-xs bg-slate-700 group-hover:bg-slate-600 text-gray-400 px-2 py-1 rounded ml-3 whitespace-nowrap transition">
                {link.tag}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/blog/google-ads-vs-facebook-ads-lead-generation"
            className="text-rose-400 hover:text-rose-300"
          >
            Google Ads vs Facebook Ads for Lead Gen →
          </Link>
          <Link
            href="/blog/high-converting-cta-for-ads"
            className="text-rose-400 hover:text-rose-300"
          >
            High-Converting CTAs for Ads →
          </Link>
          <Link
            href="/blog/high-converting-ad-hooks-examples"
            className="text-rose-400 hover:text-rose-300"
          >
            High-Converting Ad Hooks →
          </Link>
          <Link
            href="/blog/best-ad-creatives-facebook-instagram-clicks"
            className="text-rose-400 hover:text-rose-300"
          >
            Best Ad Creatives for Facebook & Instagram →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-slate-900 border-y border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pay Less Per Click. Get More Leads.
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            AdCampin helps you build and optimize Google Ads campaigns that earn lower CPCs through
            relevance — not just lower bids. Set up your first campaign in minutes.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Start Optimizing for Free →
          </Link>
          <p className="text-gray-500 text-sm mt-4">No credit card required. Set up in minutes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
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