import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "How to Scale Winning Ads Without Killing ROI in 2026";

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
    number: "01",
    tactic: "Gradual Budget Increases (10–20% Rule)",
    how: "Increase your daily or campaign budget by 10–20% every 3–5 days instead of doubling it overnight.",
    why: "Sudden budget spikes trigger platform re-learning phases, which tank efficiency and inflate CPAs temporarily.",
    explanation:
      "Most platforms (Meta, Google) use machine learning to find your ideal audience. Jumping budgets too fast resets that progress. Small, consistent increases let the algorithm keep learning without losing momentum.",
  },
  {
    number: "02",
    tactic: "Vertical Scaling — Spend More on What Works",
    how: "Identify your best-performing ad sets by ROAS or CPA, then increase budget exclusively on those.",
    why: "You're putting more fuel into an already-efficient engine, not rebuilding from scratch.",
    explanation:
      "Vertical scaling is the cleanest way to grow. You already know the creative works, the audience converts, and the offer resonates. More budget = more of what's already profitable.",
  },
  {
    number: "03",
    tactic: "Horizontal Scaling — Duplicate Into New Audiences",
    how: "Clone your winning ad set and point it at a new but similar audience — different interest stacks, age brackets, or lookalikes.",
    why: "One saturated audience caps your growth. Horizontal scaling opens new pools without disrupting existing campaigns.",
    explanation:
      "When frequency rises and performance dips, the audience is exhausted. Duplicating into fresh segments extends the winning creative's lifespan without touching the original.",
  },
  {
    number: "04",
    tactic: "Audience Expansion — Loosen Targeting Gradually",
    how: "Broaden your targeting layer by layer — remove one restrictive interest, widen age range, or try broad match targeting.",
    why: "Tight targeting eventually saturates. Controlled expansion finds adjacent buyers while keeping CPAs in check.",
    explanation:
      "A winning ad can often convert beyond its original audience. Test broader targeting in a separate campaign first. If CPA holds, roll it into the main budget.",
  },
  {
    number: "05",
    tactic: "Creative Refreshes — Prevent Ad Fatigue",
    how: "Introduce 2–3 new creative variants every 2 weeks for high-spend campaigns. Keep the hook, swap the format or visual.",
    why: "Ad fatigue is the silent ROI killer. Frequency climbs, CTR drops, and CPAs spike — all because the same image ran too long.",
    explanation:
      "You don't need to reinvent the offer. Test a new thumbnail, flip the headline, or switch from static to video. If the core message is proven, a creative refresh buys weeks of strong performance.",
  },
{
  number: "06",
  tactic: "Offer Testing — Scale the Best Offer, Not Just the Ad",
  how: "A/B test the offer itself — free trial vs. demo, discount vs. bonus, one-time vs. subscription — before scaling budget.",
  why: "Scaling a mediocre offer burns budget. The right offer multiplies every dollar you spend.",
  explanation: (
    <>
      Most brands blame the ad creative when conversions plateau. Often it's the
      offer. Test offers at low spend first, then scale aggressively on the
      winner. See our guide on{" "}
      <Link
        href="/blog/high-converting-cta-for-ads"
        className="text-rose-400 hover:text-rose-300"
      >
        high-converting CTAs for ads
      </Link>{" "}
      for offer-framing tactics.
    </>
  ),
},
{
  number: "07",
  tactic: "Bid Adjustments — Protect Margins as You Scale",
  how: "Use target CPA or target ROAS bidding and adjust targets by 5–10% as you increase spend, instead of switching to max conversions.",
  why: "Uncapped bidding strategies can overspend to hit volume goals. Setting clear targets keeps ROI anchored even at scale.",
  explanation:
    "As budgets grow, platforms get more aggressive in auctions. Manual bid floors or tROAS caps keep you out of expensive inventory that doesn't convert. Tighten before loosening.",
},
{
  number: "08",
  tactic: "Placement Expansion — Go Beyond Your Default Placements",
  how: "Test your winning creative in placements you've ignored — Reels, Search Partners, Display Network, or YouTube Shorts.",
  why: "Default placements get crowded. Expansion placements often have lower CPMs and untapped audiences.",
  explanation:
    "Most advertisers only run Facebook Feed or Google Search. Winning creative often performs on Reels or YouTube at a fraction of the CPM. Run placement-specific campaigns to test without muddying your best performers.",
},
{
  number: "09",
  tactic: "Campaign Duplication — Scale Without Touching Winners",
  how: "Duplicate your entire winning campaign, give it a fresh budget, and let it run in parallel.",
  why: "Editing a live, optimized campaign risks resetting the learning phase. Duplication protects the original while scaling spend.",
  explanation:
    "This is especially effective on Meta. Your duplicate starts with no history, but the creative and audience are proven. It enters the auction independently, often finding new inventory your original missed.",
},
{
  number: "10",
  tactic: "Retargeting Scaling — Convert the Warm Audience",
  how: "As top-of-funnel spend grows, proportionally increase retargeting budgets to capture the larger pool of warm visitors.",
  why: "Scaling cold traffic without scaling retargeting wastes the leads you paid to generate.",
  explanation:
    "Every dollar spent on awareness creates a retargeting pool. If you scale cold traffic 3x but don't touch retargeting, you're leaking revenue. Match retargeting growth to TOF growth to close the loop.",
},
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Ad Strategy · 2026
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white leading-tight sm:text-5xl">
            How to Scale Winning Ads Without Killing ROI in 2026
          </h1>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            You found an ad that works. Now you want to pour budget into it — but every time you try,
            performance tanks. Here's exactly why that happens and how to scale without torching your returns.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="border-l-2 border-rose-500 pl-5 max-w-2xl">
          <p className="text-gray-400">
            Scaling ads isn't just about spending more — it's about spending more{" "}
            <span className="text-white font-medium">without disrupting what's already working</span>. Most
            brands destroy their winning campaigns by scaling too fast, too broad, or with the wrong strategy.
          </p>
          <p className="mt-3 text-gray-400">
            These 10 tactics are used by media buyers managing millions in ad spend. They're practical,
            specific, and built for the way platforms work in 2026.
          </p>
        </div>
      </section>

      {/* Main Strategies */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-8">
          10 Ad Scaling Strategies That Protect ROI
        </h2>
        <div className="space-y-6">
          {strategies.map((s) => (
            <div
              key={s.number}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500/30 leading-none select-none">
                  {s.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{s.tactic}</h3>
                  <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-rose-400 mb-1">
                        How it works
                      </p>
                      <p className="text-sm text-gray-400">{s.how}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400 mb-1">
                        Why it protects ROI
                      </p>
                      <p className="text-sm text-gray-400">{s.why}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {s.explanation}
                  </p>
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

      {/* Pattern / Insights */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-lg border border-white/10 bg-slate-900 p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            The Pattern Behind Every Successful Scale
          </h2>
          <p className="text-gray-400 mb-4">
            After reviewing hundreds of ad accounts, the pattern is consistent: brands that scale
            successfully share three habits.
          </p>
          <ul className="space-y-3">
            {[
              "They never touch a winning campaign. They duplicate, expand, or complement it instead.",
              "They scale creative and audience in parallel — not just budget.",
              "They track CPA and ROAS at the ad set level, not just campaign-wide averages.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-rose-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-400">
            Want to go deeper on testing methodology?{" "}
            <Link
              href="/blog/ab-testing-ads-better-performance-2026"
              className="text-rose-400 hover:text-rose-300"
            >
              Read our A/B testing guide for 2026 →
            </Link>
          </p>
        </div>
      </section>

      {/* Internal Linking Block */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-6">Explore More Ad Examples</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              label: "Dentist Ads · New York",
              href: "/ads/google/dentists/new-york/examples",
              tag: "Local Ads",
            },
            {
              label: "Real Estate Ads · Mumbai",
              href: "/ads/google/real-estate/mumbai/examples",
              tag: "Local Ads",
            },
            {
              label: "Lawyer Ads · Houston",
              href: "/ads/google/lawyers/houston/examples",
              tag: "Local Ads",
            },
            {
              label: "Best Google Ads for Small Businesses 2026",
              href: "/blog/best-google-ads-examples-small-businesses-2026",
              tag: "Blog",
            },
            {
              label: "Google Ads vs Facebook Ads for Lead Gen",
              href: "/blog/google-ads-vs-facebook-ads-lead-generation",
              tag: "Blog",
            },
            {
              label: "Why Your Ads Aren't Converting",
              href: "/blog/why-ads-not-converting-how-to-fix",
              tag: "Blog",
            },
            {
              label: "High-Converting Ad Hooks with Examples",
              href: "/blog/high-converting-ad-hooks-examples",
              tag: "Blog",
            },
            {
              label: "Lower CPC Without Losing Traffic",
              href: "/blog/lower-cpc-google-ads-without-losing-traffic",
              tag: "Blog",
            },
            {
              label: "Lead Magnet Ideas to Increase Signups",
              href: "/blog/lead-magnet-ideas-for-ads-increase-signups",
              tag: "Blog",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/10 bg-slate-800 p-4 hover:border-rose-500/40 transition-colors group"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-rose-400">
                {link.tag}
              </span>
              <p className="mt-1 text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {link.label} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-lg border border-rose-500/30 bg-slate-900 p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Scale Your Winning Ads?
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            AdCampin helps you identify what's working, when to scale, and how to do it without losing ROI.
            No guesswork, no blown budgets.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-6 rounded-lg bg-rose-500 px-8 py-3 text-sm font-semibold text-white hover:bg-rose-400 transition-colors"
          >
            Start Scaling Smarter — Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How fast should I scale winning ads?",
              a: "Scale gradually by increasing budgets 10–20% every few days to avoid disrupting platform optimization. Patience here directly protects your CPA.",
            },
            {
              q: "Why does ROI drop when scaling ads?",
              a: "ROI often drops because scaling too quickly resets learning phases and forces platforms into less efficient auctions. The algorithm loses its calibration when budgets change too sharply.",
            },
            {
              q: "What is the safest way to scale ad campaigns?",
              a: "The safest method is gradual vertical scaling combined with testing new audiences and creatives. Never touch a live winner — duplicate and expand instead.",
            },
            {
              q: "Should I scale budget or audiences first?",
              a: "If your current audience isn't saturated (low frequency, healthy CPMs), scale budget first. If frequency is rising above 3–4, expand audiences while holding budget steady.",
            },
            {
              q: "How do I know when an ad is ready to scale?",
              a: "An ad is ready to scale when it has at least 30–50 conversions at a stable CPA over 7+ days. Below that threshold, the algorithm hasn't optimized enough to scale reliably.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-slate-800 p-5"
            >
              <h3 className="text-sm font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.a}</p>
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