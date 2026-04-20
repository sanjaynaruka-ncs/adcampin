import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "How to A/B Test Your Ads for Better Performance (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to A/B test your ads effectively to improve click-through rates, conversions, and ROAS with proven strategies in 2026.",
  keywords: [
    "a b test ads",
    "how to split test ads",
    "ad testing strategy",
    "improve ad performance",
    "facebook google ads testing",
    "ad optimization guide",
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
    "@id": "https://www.adcampin.com/blog/ab-testing-ads-better-performance-2026",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is A/B testing in ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A/B testing compares two versions of an ad to determine which performs better.",
      },
    },
    {
      "@type": "Question",
      name: "What should I test first in my ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with headlines, creatives, and CTA buttons since they impact performance the most.",
      },
    },
    {
      "@type": "Question",
      name: "How long should an ad test run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run tests until statistically significant results are reached, usually 7–14 days.",
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
      item: "https://www.adcampin.com/blog/ab-testing-ads-better-performance-2026",
    },
  ],
};

const tests = [
  {
    number: "01",
    title: "Test Your Headlines",
    what: "Your headline is the first thing people read. Even a single word change can shift CTR significantly.",
    how: "Run two identical ads with different headlines only — keep everything else (image, CTA, audience) the same. Let them run simultaneously with equal budget split for at least 7 days.",
    why: (
  <>
    Headlines carry the majority of persuasive weight in any ad. Testing them directly reveals what language resonates with your audience — benefit-led vs. curiosity vs. urgency. For example, high-performing campaigns like{" "}
    <Link href="/ads/google/dentists/new-york/examples">
      Google Ads examples for dentists in New York
    </Link>{" "}
    often rely heavily on headline optimization to drive CTR improvements.
  </>
),
  },
  {
    number: "02",
    title: "Test Creatives and Visuals",
    what: "Static image vs. video. Bright colors vs. dark. Person in frame vs. product only. Each creative choice affects scroll-stopping power differently.",
    how: "Create two ad sets with different creative formats. Match the copy exactly. Give each version at least 1,000 impressions before drawing conclusions.",
    why: "Visuals determine whether someone stops scrolling. A winning creative can cut your cost-per-click by 40–60% without touching a single word of your ad copy.",
  },
  {
    number: "03",
    title: "Test CTA Button Text",
    what: "'Get Started' vs. 'Claim Your Free Trial' vs. 'See Pricing' — these aren't interchangeable. Each signals a different commitment level to the user.",
    how: "On platforms like Facebook Ads, test different CTA button options within the same ad. On Google, test different CTA phrases in your description lines.",
    why: "CTA text sets expectations. The right phrase attracts higher-intent clicks and reduces wasted spend on users who weren't ready to convert.",
  },
  {
    number: "04",
    title: "Test Landing Pages",
    what: "Two ads sending traffic to two different landing page variants — different headlines, layouts, or form lengths — to see which converts better post-click.",
    how: "Use UTM parameters to track each ad's landing page separately in Google Analytics. Keep ad copy identical; only the destination URL should differ.",
    why: "Your landing page is where conversions actually happen. A 1% improvement in landing page conversion rate often has more impact than any ad-level change.",
  },
  {
    number: "05",
    title: "Test Audience Targeting",
    what: "Interest-based audience vs. lookalike audience vs. retargeting segment — each will respond differently to the same ad.",
    how: "Run the same creative and copy to different audience sets in separate ad sets. Use identical budgets and let the test run for 10–14 days for meaningful data.",
    why: "The same ad shown to the wrong audience will always underperform. Finding your highest-converting audience segment dramatically reduces cost-per-lead.",
  },
  {
    number: "06",
    title: "Test the Offer Itself",
    what: "'Book a Free Call' vs. '14-Day Free Trial' vs. 'Download the Free Guide' — different offers attract different buyers at different stages of intent.",
    how: "Split your audience evenly across two campaigns promoting different offers. Measure both CTR and downstream conversion quality, not just clicks.",
    why: "Offer framing is often the single biggest conversion lever. A lower-commitment offer may generate more leads; a higher-commitment offer may generate better ones.",
  },
  {
    number: "07",
    title: "Test Ad Formats",
    what: "Single image vs. carousel vs. video vs. collection ads. Each format has different engagement patterns depending on the product and audience.",
    how: "Duplicate your best-performing ad campaign and change only the format. Use the same headline, copy, and offer across each format variant.",
    why: "Ad format affects how much information you can communicate and how users interact. Carousel ads, for example, work well for multi-product or multi-step storytelling.",
  },
  {
    number: "08",
    title: "Test Placement",
    what: "Facebook Feed vs. Instagram Stories vs. Reels vs. Audience Network — each placement has unique user behavior and cost dynamics.",
    how: "Duplicate a winning ad set and isolate placements manually instead of using automatic placements. Compare CPM, CTR, and conversion rate per placement.",
    why: "A placement that works on desktop news feed often fails in Stories and vice versa. Testing isolates where your audience is most receptive — and most cost-efficient.",
  },
  {
    number: "09",
    title: "Test Budget Allocation and Bidding Strategy",
    what: "Lowest cost bidding vs. cost cap vs. bid cap — each strategy performs differently depending on your campaign stage and competition level.",
    how: "Run the same creative with different bid strategies at the campaign level. Monitor cost per result and volume over a 2-week window before declaring a winner.",
    why: "Bidding strategy determines how aggressively the algorithm spends your budget. The wrong strategy at the wrong stage can inflate costs or starve delivery entirely.",
  },
  {
    number: "10",
    title: "Test Timing and Dayparting",
    what: "Are your ads running 24/7 when most conversions happen between 7–10 PM? Or are you burning budget at 3 AM when no one's buying?",
    how: "Pull a breakdown report by hour and day in your ad platform. Identify peak conversion windows, then A/B test a scheduled ad set vs. always-on to compare efficiency.",
    why: "Dayparting can reduce wasted spend by 20–30% in industries with clear buying windows — service businesses, e-commerce, and local businesses especially benefit.",
  },
];

const faqs = [
  {
    q: "What is A/B testing in ads?",
    a: "A/B testing (also called split testing) means running two versions of an ad simultaneously — changing only one variable — to determine which version drives better results. It removes guesswork and lets data make your decisions.",
  },
  {
    q: "What should I test first in my ads?",
    a: "Start with headlines and creatives since they have the most immediate impact on click-through rate. Once CTR is strong, move to testing landing pages and CTAs to improve post-click conversion.",
  },
  {
    q: "How long should an ad test run?",
    a: "Run tests for at least 7–14 days and until each variant has received enough impressions and conversions for statistically significant results. Ending tests too early leads to false conclusions based on noise.",
  },
  {
    q: "Can I test more than one variable at a time?",
    a: "Technically yes — through multivariate testing — but it requires much higher traffic volumes to get reliable results. For most advertisers, testing one variable at a time gives clearer, more actionable data.",
  },
  {
    q: "How much budget do I need to run A/B tests?",
    a: "There's no universal minimum, but each variant needs enough spend to gather meaningful data. A rough rule: aim for at least 50–100 conversions per variant before making a decision.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          2026 Guide · Ad Optimization
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          How to A/B Test Your Ads for{" "}
          <span className="text-rose-400">Better Performance</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Most ad budgets are wasted on assumptions. A/B testing turns opinions into data — and
          data into a lower cost per lead. Here's exactly how to do it in 2026.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-rose-500 hover:bg-rose-400 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Start Testing My Ads →
          </Link>
          <Link
            href="#examples"
            className="border border-white/10 hover:border-white/30 text-gray-300 px-6 py-3 rounded-lg transition"
          >
            See 10 A/B Test Strategies
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-gray-400 text-base leading-relaxed">
          A/B testing isn't just for enterprise brands with massive budgets. Any advertiser spending
          $500/month on ads can — and should — be testing systematically. The problem is most people
          test the wrong things, run tests for too short a time, or change multiple variables at once
          and can't tell what actually caused the difference.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mt-4">
          These 10 strategies cover every major lever in a paid campaign — from creative to
          audiences to timing. Pick the ones most relevant to your current bottleneck and start
          there.
        </p>
      </section>

      {/* Main: 10 A/B Tests */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {tests.map((test) => (
            <div
              key={test.number}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500 opacity-60 leading-none mt-1">
                  {test.number}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-4">{test.title}</h2>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1 block">
                      What to Test
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{test.what}</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1 block">
                      How to Test It
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{test.how}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1 block">
                      Why It Matters
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{test.why}</p>
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
            A/B Testing by the Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                stat: "49%",
                label: "of marketers say A/B testing is the most valuable tool for CRO",
              },
              {
                stat: "7–14",
                label: "days is the recommended minimum test duration for reliable data",
              },
              {
                stat: "3×",
                label: "more improvement seen by advertisers who test systematically vs. guessing",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 text-center"
              >
                <div className="text-4xl font-black text-rose-400 mb-2">{item.stat}</div>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">The Golden Rule of A/B Testing</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Test one variable at a time. Always. If you change your headline and your image
                simultaneously and performance improves, you'll never know which change caused it —
                and you can't replicate the learning.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Build a testing queue: headline first, then creative, then CTA, then landing page.
                This creates a compounding advantage where each test builds on the last winner.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Common A/B Testing Mistakes to Avoid
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  Ending tests too early when one variant is ahead
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  Running tests with unequal budget splits
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  Testing during unusual periods (holidays, sales events)
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  Changing the ad mid-test and invalidating results
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  Not tracking downstream conversions, only surface metrics
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-slate-800 p-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Want to understand why your current ads aren't converting before you start testing?
            </p>
            <Link
              href="/blog/why-ads-not-converting-how-to-fix"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Read: Why Your Ads Aren't Converting & How to Fix It →
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
              href: "/blog/landing-page-optimization-paid-ads-conversions",
              label: "Landing Page Optimization for Paid Ads",
              tag: "Blog",
            },
            {
              href: "/blog/high-converting-cta-for-ads",
              label: "High-Converting CTAs for Paid Ads",
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
            href="/blog/high-converting-ad-hooks-examples"
            className="text-rose-400 hover:text-rose-300"
          >
            High-Converting Ad Hooks →
          </Link>
          <Link
            href="/blog/retargeting-ads-convert-visitors-to-leads-2026"
            className="text-rose-400 hover:text-rose-300"
          >
            Retargeting Ads That Convert →
          </Link>
          <Link
            href="/blog/ad-copy-service-business-examples"
            className="text-rose-400 hover:text-rose-300"
          >
            Ad Copy for Service Businesses →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-slate-900 border-y border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing. Start Testing.
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            AdCampin helps you build, launch, and systematically test ad campaigns — so you always
            know what's working and why. Set up your first A/B test in minutes.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Start Testing for Free →
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}