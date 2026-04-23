import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "Google Ads Quality Score Explained: Improve Rankings & Lower Costs (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how Google Ads Quality Score works, how it impacts rankings and CPC, and proven ways to improve it while lowering ad costs in 2026.",
  keywords: [
    "google ads quality score",
    "improve quality score google ads",
    "lower google ads cost",
    "quality score explained",
    "google ads rankings factors",
    "google ads optimization guide",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blogTitle,
  description: metadata.description,
  author: {
    "@type": "Organization",
    name: "AdCampin",
  },
  publisher: {
    "@type": "Organization",
    name: "AdCampin",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.adcampin.com/blog/google-ads-quality-score-explained",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good Google Ads Quality Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Quality Score of 7–10 is generally considered strong and indicates good ad relevance and performance.",
      },
    },
    {
      "@type": "Question",
      name: "Does Quality Score lower CPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, higher Quality Scores often reduce CPC because Google rewards relevant ads with lower costs.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I improve Quality Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can often see improvements within days to weeks after optimizing ads, keywords, and landing pages.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.adcampin.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.adcampin.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: blogTitle,
      item: "https://www.adcampin.com/blog/google-ads-quality-score-explained",
    },
  ],
};

const strategies = [
  {
    number: "01",
    factor: "Expected Click-Through Rate (CTR)",
    why_matters:
      "Expected CTR is Google's prediction of how likely your ad is to be clicked when shown for a given keyword. It's the most heavily weighted component of Quality Score and directly affects your Ad Rank and the CPC you pay.",
    how_to_improve:
      "Write headlines that tightly match what the user searched. Use numbers, brackets, and action verbs. Test emotional triggers alongside rational benefits. Pause keywords with chronically low CTR and replace them with tighter, more specific terms.",
    explanation: (
      <>
        A low expected CTR signals to Google that your ad isn't relevant to the query
        — even if you think it is. The algorithm has seen millions of similar searches
        and knows whether users click ads like yours. For example,{" "}
        <Link href="/ads/google/dentists/new-york/examples">
          Google Ads for dentists in New York examples
        </Link>{" "}
        often achieve higher CTR by tightly matching search intent with ad messaging.
        If your CTR is below 2% on core keywords, treat it as a structural problem,
        not just a copy issue.
      </>
    ),
    extra_link: {
      href: "/blog/lower-cpc-google-ads-without-losing-traffic",
      label: "Lower your CPC without cutting traffic →",
    },
  },
  {
    number: "02",
    factor: "Ad Relevance",
    why_matters:
      "Ad relevance measures how closely your ad copy matches the intent behind the keyword being triggered. A 'Below Average' rating here means Google thinks your ad is too generic or misaligned with what users actually want.",
    how_to_improve:
      "Include the exact keyword (or close variant) in your headline 1. Mirror the language your audience uses — not industry jargon. If one ad group covers too many intent types, split it into tighter groups with dedicated copy for each.",
    explanation:
      "The fastest way to fix ad relevance is to ensure your headline answers the implicit question behind the search. 'Emergency Plumber Houston — Available 24/7' answers 'emergency plumber near me' far better than 'Professional Plumbing Services in Houston'.",
    extra_link: null,
  },
  {
    number: "03",
    factor: "Landing Page Experience",
    why_matters:
      "Google evaluates whether your landing page delivers on what the ad promises — in terms of content, load speed, mobile usability, and ease of navigation. Poor landing page experience drags down Quality Score even if your ad copy is excellent.",
    how_to_improve:
      "Match the landing page headline to your ad headline. Remove friction — no forced sign-ups before showing value. Ensure the page loads in under 3 seconds on mobile. Include the keyword prominently in the page copy and title tag.",
    explanation:
      "Google's crawlers assess landing pages independently of your ad account. A high-converting page with slow load time or thin content still gets penalized. Treat your landing page as part of the ad — because Google does.",
    extra_link: {
      href: "/blog/landing-page-optimization-paid-ads-conversions",
      label: "Optimize your landing page for paid traffic →",
    },
  },
  {
    number: "04",
    factor: "Keyword Grouping (Ad Group Tightness)",
    why_matters:
      "When one ad group contains 50 loosely related keywords, your single ad can't possibly be relevant to all of them. Bloated ad groups are one of the most common causes of low Quality Scores across entire accounts.",
    how_to_improve:
      "Use single keyword ad groups (SKAGs) or tightly themed clusters of 3–5 keywords per ad group. Each group should have a dedicated ad set written specifically for those terms. This lets you maximize relevance across CTR, ad copy, and landing page simultaneously.",
    explanation:
      "A tight ad group means every element — keyword, ad, landing page — is aligned. Google sees this alignment as a signal of quality. As a bonus, tighter groups make A/B testing far more actionable because you're isolating real variables.",
    extra_link: null,
  },
  {
    number: "05",
    factor: "Negative Keywords",
    why_matters:
      "Every irrelevant click lowers your CTR — which lowers your expected CTR score — which lowers your Quality Score. Negative keywords prevent your ads from showing on searches that will never convert, protecting your CTR and your budget simultaneously.",
    how_to_improve:
      "Pull your Search Terms report weekly. Add anything non-commercial (informational queries, competitor brand names you don't want, irrelevant industries) as negatives at the campaign or ad group level. Build a shared negative keyword list for account-wide protection.",
    explanation:
      "Negative keywords are free money. Every irrelevant impression that doesn't click costs you nothing in spend but costs you in Quality Score. Cleaning them out consistently is the most underused lever in Google Ads optimization.",
    extra_link: {
      href: "/blog/why-ads-not-converting-how-to-fix",
      label: "Fix what's stopping your Google Ads from converting →",
    },
  },
  {
    number: "06",
    factor: "Match Types — Control What Triggers Your Ads",
    why_matters:
      "Using broad match for all keywords without strong negatives is a Quality Score nightmare. You get impressions on tangentially related searches, CTR drops, relevance drops, and Quality Score follows. Match type strategy directly controls the quality of your impression pool.",
    how_to_improve:
      "Start core campaigns on exact and phrase match to establish Quality Score baselines. Use broad match only on campaigns with strong conversion history and robust negative keyword lists. Review search terms weekly regardless of match type.",
    explanation:
      "Broad match in 2026 is more aggressive than ever — Google will match to queries that share 'similar meaning' by its interpretation. That's powerful when you have data, dangerous when you don't. Build Quality Score on tight match types first, then expand.",
    extra_link: null,
  },
  {
    number: "07",
    factor: "Ad Copy Optimization",
    why_matters:
      "Weak copy produces weak CTR, which suppresses expected CTR scores account-wide over time. Strong copy that matches user intent, includes proof points, and uses all available extensions is the single highest-leverage Quality Score lever you control directly.",
    how_to_improve:
      "Pin your most keyword-relevant headline in position 1. Use the description lines for social proof, urgency, or specific offers. Fill every headline and description slot in Responsive Search Ads. Add sitelinks, callouts, and structured snippets — extensions improve CTR and signal quality.",
    explanation:
      "Google's RSA system learns which headline combinations perform best over time. But it can only optimize what you give it. More high-quality, varied headline options = better optimization signal = higher CTR = higher Quality Score.",
    extra_link: {
      href: "/blog/high-converting-cta-for-ads",
      label: "Write CTAs that drive higher ad CTR →",
    },
  },
  {
    number: "08",
    factor: "Mobile Optimization",
    why_matters:
      "More than 60% of Google searches happen on mobile. If your landing page is slow, hard to read, or requires pinching and zooming, Google's mobile usability assessment tanks your landing page experience score — regardless of how good your desktop experience is.",
    how_to_improve:
      "Run your URLs through Google's Mobile-Friendly Test. Ensure tap targets are large enough, text is readable without zooming, and CTAs are thumb-accessible. Consider mobile-specific ad variations with shorter headlines that render cleanly on small screens.",
    explanation:
      "Mobile optimization isn't optional — it's scored. A page that loads in 2.1 seconds on desktop and 6.8 seconds on mobile is a mobile-bad page in Google's evaluation. Core Web Vitals on mobile are now a direct input into landing page experience ratings.",
    extra_link: null,
  },
  {
    number: "09",
    factor: "Page Speed",
    why_matters:
      "Page speed is assessed as part of landing page experience and affects both Quality Score and conversion rate simultaneously. A 1-second delay in mobile load time reduces conversions by an average of 20%. Slow pages cost you twice — in Quality Score and in revenue.",
    how_to_improve:
      "Run PageSpeed Insights on every landing page URL in your account. Prioritize: compress images (use WebP), eliminate render-blocking JavaScript, enable browser caching, and use a CDN. Aim for a Largest Contentful Paint (LCP) under 2.5 seconds.",
    explanation:
      "Page speed improvements have compounding benefits. Faster pages → better Quality Score → lower CPC → more budget efficiency → more conversions. It's the one technical fix that directly improves both your Google Ads performance and your bottom line.",
    extra_link: {
      href: "/blog/best-google-ads-examples-small-businesses-2026",
      label: "See fast-loading Google Ads examples that convert →",
    },
  },
  {
    number: "10",
    factor: "A/B Testing Ads Systematically",
    why_matters:
      "Without structured testing, you can't separate what's improving Quality Score from what's just noise. Systematic A/B testing isolates the variables that drive CTR and relevance gains, giving you a repeatable process instead of a one-time fix.",
    how_to_improve:
      "Test one variable at a time: headline 1 vs. headline 1 variant, with everything else held constant. Run tests until statistical significance is reached (minimum 100 clicks per variant). Document winners and apply learnings across similar ad groups.",
    explanation:
      "Most Google Ads accounts run no structured tests. They change multiple things simultaneously and have no idea what moved the needle. A disciplined testing cadence — even one test per month — compounds into measurably better Quality Scores over a quarter.",
    extra_link: {
      href: "/blog/ab-testing-ads-better-performance-2026",
      label: "Run A/B tests that actually improve your Quality Score →",
    },
  },
];

const internalLinks = [
  { label: "Google Ads for Dentists in New York Examples", href: "/ads/google/dentists/new-york/examples"},
  { label: "Google Ads for Real Estate in Mumbai Examples", href: "/ads/google/real-estate/mumbai/examples", tag: "Local Ads" },
  { label: "Google Ads for Lawyers in Houston Examples", href: "/ads/google/lawyers/houston/examples", tag: "Local Ads" },
  { label: "Google Ads for Dentists", href: "/blog/google-ads-dentists", tag: "Blog" },
  { label: "Best Google Ads Examples for Small Businesses 2026", href: "/blog/best-google-ads-examples-small-businesses-2026", tag: "Blog" },
  { label: "Lower CPC Without Losing Traffic", href: "/blog/lower-cpc-google-ads-without-losing-traffic", tag: "Blog" },
  { label: "Google Ads vs Facebook Ads for Lead Gen", href: "/blog/google-ads-vs-facebook-ads-lead-generation", tag: "Blog" },
  { label: "Why Your Ads Aren't Converting", href: "/blog/why-ads-not-converting-how-to-fix", tag: "Blog" },
  { label: "Landing Page Optimization for Paid Ads", href: "/blog/landing-page-optimization-paid-ads-conversions", tag: "Blog" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Google Ads · Optimization · 2026
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white leading-tight sm:text-5xl">
            Google Ads Quality Score Explained: Improve Rankings & Lower Costs
          </h1>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Quality Score is the hidden multiplier that determines how much you pay per click and where
            your ad appears. Ignore it and you're paying a premium for every impression.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="border-l-2 border-rose-500 pl-5 max-w-2xl">
          <p className="text-gray-400">
            Quality Score (1–10) is Google's rating of how relevant your keyword, ad, and landing page
            are to the user's search. A score of 7 vs. 4 on the same keyword can mean paying{" "}
            <span className="text-white font-medium">30–50% less per click</span> while ranking higher
            than competitors with bigger budgets.
          </p>
          <p className="mt-3 text-gray-400">
            Here are the 10 factors that move Quality Score — what each one means, why Google cares about
            it, and exactly how to improve it without rebuilding your entire account from scratch.
          </p>
        </div>
      </section>

      {/* Quality Score Quick Reference */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { score: "1–3", label: "Below Average", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
            { score: "4–6", label: "Average", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
            { score: "7–10", label: "Above Average", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
          ].map((tier) => (
            <div key={tier.score} className={`rounded-lg border p-5 text-center ${tier.bg}`}>
              <p className={`text-3xl font-black ${tier.color}`}>{tier.score}</p>
              <p className="mt-1 text-sm font-semibold text-gray-300">{tier.label}</p>
              <p className="mt-1 text-xs text-gray-500">Quality Score Range</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main — 10 Strategies */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-8">
          10 Ways to Improve Your Google Ads Quality Score
        </h2>
        <div className="space-y-6">
          {strategies.map((s) => (
            <div key={s.number} className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500/30 leading-none select-none">
                  {s.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{s.factor}</h3>
                  <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-400 mb-1">
                        Why it matters
                      </p>
                      <p className="text-sm text-gray-400">{s.why_matters}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-400 mb-1">
                        How to improve it
                      </p>
                      <p className="text-sm text-gray-400">{s.how_to_improve}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">{s.explanation}</p>
                  {s.extra_link && (
                    <Link
                      href={s.extra_link.href}
                      className="inline-block mt-2 text-sm text-rose-400 hover:text-rose-300"
                    >
                      {s.extra_link.label}
                    </Link>
                  )}
                  <div>
                    <Link
                      href="/signup"
                      className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
                    >
                      Fix this in your ads →
                    </Link>
                  </div>
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
            The Pattern: Quality Score Is a Relevance Signal, Not a Vanity Metric
          </h2>
          <p className="text-gray-400 mb-4">
            Every component of Quality Score — expected CTR, ad relevance, landing page experience — is
            Google asking the same underlying question:{" "}
            <span className="text-white font-medium">
              does this ad genuinely serve what the user is looking for?
            </span>
          </p>
          <p className="text-gray-400 mb-5">
            Accounts that chase Quality Score through tricks (keyword stuffing, misleading headlines, bait
            landing pages) see short-term gains and long-term penalties. Accounts that optimize for
            genuine relevance see compounding gains — lower CPCs, better positions, and higher conversion
            rates from better-qualified traffic.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Fix keyword grouping first — it unlocks relevance gains across CTR, copy, and landing page simultaneously.",
              "Landing page experience is the most ignored and highest-impact lever for most advertisers.",
              "Negative keywords are free — not adding them is paying Google to lower your Quality Score.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-rose-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/blog/ab-testing-ads-better-performance-2026"
              className="text-rose-400 hover:text-rose-300"
            >
              How to A/B test ads to improve CTR and Quality Score →
            </Link>
            <Link
              href="/blog/google-ads-vs-facebook-ads-lead-generation"
              className="text-rose-400 hover:text-rose-300"
            >
              Google Ads vs Facebook Ads — which is right for your goal? →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-6">Explore More Google Ads Examples & Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {internalLinks.map((link) => (
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
            Higher Quality Score. Lower Costs. Better Results.
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            AdCampin audits your Google Ads account for Quality Score issues, flags what's costing you
            extra, and gives you a prioritized fix list — no agency fees required.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-6 rounded-lg bg-rose-500 px-8 py-3 text-sm font-semibold text-white hover:bg-rose-400 transition-colors"
          >
            Audit My Quality Score — Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is a good Google Ads Quality Score?",
              a: "A Quality Score of 7–10 is generally considered strong and indicates good ad relevance and performance. Scores of 8–10 on your most important keywords can reduce CPC by 30–50% compared to a score of 4–5.",
            },
            {
              q: "Does Quality Score lower CPC?",
              a: "Yes, higher Quality Scores often reduce CPC because Google rewards relevant ads with lower costs. Your Ad Rank is calculated as Max CPC × Quality Score, so a higher score directly reduces what you need to bid to achieve the same position.",
            },
            {
              q: "How fast can I improve Quality Score?",
              a: "You can often see improvements within days to weeks after optimizing ads, keywords, and landing pages. CTR improvements reflect quickly (within days). Landing page experience and historical CTR changes take a few weeks to fully register in the score.",
            },
            {
              q: "What are the three components of Quality Score?",
              a: "Quality Score is made up of Expected CTR (most heavily weighted), Ad Relevance, and Landing Page Experience. Each component is rated Above Average, Average, or Below Average. Any 'Below Average' rating is a priority fix.",
            },
            {
              q: "Can I see Quality Score in Google Ads?",
              a: "Yes. In your Google Ads account, go to Keywords → Columns → Modify Columns → Quality Score. You can add Quality Score, Expected CTR, Ad Relevance, and Landing Page Experience as columns to your keyword view.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-slate-800 p-5">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}