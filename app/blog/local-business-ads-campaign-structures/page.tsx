import Link from "next/link";

export const blogTitle =
  "How to Reduce Cost Per Lead in Google & Facebook Ads (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to reduce cost per lead in Google and Facebook ads with proven strategies, real examples, and practical fixes for 2026.",
  keywords: [
    "reduce cost per lead",
    "lower CPL google ads",
    "lower CPL facebook ads",
    "reduce ad costs",
    "improve ad performance",
    "lead generation cost optimization",
    "facebook ads CPL reduction",
    "google ads CPL tips",
  ],
};

const strategies = [
  {
    title: "1. Tighten targeting before you raise budget",
    problem:
      "A high CPL usually starts with loose targeting. Broad locations, weak audience filters, and mixed intent keywords bring clicks from people who were never likely to become leads.",
    fix: "Narrow by buyer intent, geography, device, schedule, and audience quality. In Google Ads, split high-intent search terms from research terms. In Facebook Ads, separate cold, warm, and lookalike audiences instead of blending them into one ad set.",
    explanation:
      "Better targeting cuts wasted spend and shifts delivery toward users more likely to convert. When more of your clicks come from the right people, conversion rate improves and your cost per lead drops without needing lower traffic volume.",
  },
  {
    title: "2. Remove low-intent keywords and placements",
    problem:
      "Many accounts keep paying for traffic that looks active but does not convert. Broad match drift, irrelevant search queries, low-quality placements, and accidental audience expansion quietly push CPL higher every week.",
    fix: "Review search term reports, placement reports, and audience breakdowns weekly. Add negative keywords, exclude bad placements, pause weak audience segments, and cut terms that drive spend without qualified leads.",
    explanation:
      "Lower CPL often comes from subtraction, not addition. Removing junk traffic protects budget for the queries, audiences, and placements that already show conversion potential, which improves efficiency fast.",
  },
  {
    title: "3. Match ad creative to funnel stage",
    problem:
      "CPL rises when one message is forced on every audience. A cold user seeing a hard sales offer or a warm user seeing generic awareness copy creates friction and weak conversion rates.",
    fix: "Build separate creative angles for awareness, consideration, and decision stages. Use pain-point hooks for cold traffic, proof-led messaging for warm traffic, and urgency or offer-led copy for retargeting audiences.",
    explanation:
      "When the message matches user intent, more people click for the right reason and more of them convert after the click. That means less wasted budget and a healthier lead acquisition cost across both Google and Facebook.",
  },
  {
    title: "4. Test more hooks, not just more designs",
    problem:
      "A lot of advertisers keep changing colors, layouts, or button styles while the real issue is weak positioning. If the opening hook does not stop attention or signal value, CPL keeps climbing.",
    fix: "Test multiple hooks around urgency, curiosity, savings, pain points, speed, and proof. Keep the offer consistent while changing the first line, headline angle, primary visual, and first three seconds of video creative.",
    explanation:
      "Creative testing works best when you test the reason someone should care, not only the decoration. A stronger hook improves click quality and conversion intent, which usually lowers CPL faster than cosmetic edits.",
  },
  {
    title: "5. Improve the offer, not only the ad",
    problem:
      "Sometimes the ads are doing their job, but the offer is too weak. If users see a generic consultation, vague demo, or boring lead magnet, they hesitate and your CPL increases.",
    fix: "Make the offer easier to say yes to. Replace generic forms with specific value: free audit, custom estimate, quick strategy session, pricing breakdown, case study pack, or localized quote.",
    explanation:
      "A stronger offer raises conversion rate because the user understands the benefit immediately. Even when CPC stays the same, more conversions from the same traffic base brings cost per lead down.",
  },
  {
    title: "6. Cut friction on the landing page",
    problem:
      "A campaign can attract decent clicks and still produce expensive leads if the landing page is slow, cluttered, or confusing. Too many form fields, weak headlines, and mobile friction push visitors away.",
    fix: "Align the page headline with the ad, reduce distractions, speed up mobile load time, keep forms short, and place trust signals near the CTA. Make the next step obvious above the fold and easy to complete.",
    explanation:
      "Landing page improvements often produce the fastest CPL gains because they affect every paid click. Stronger page conversion rates mean you need fewer clicks to generate each lead, reducing acquisition cost directly.",
  },
  {
    title: "7. Use retargeting to recover lost demand",
    problem:
      "Most prospects do not convert on the first visit. If you only run cold traffic campaigns, you keep paying to replace visitors who already showed interest but were never followed up.",
    fix: "Run retargeting for page visitors, video viewers, engaged users, and form abandoners. Show a different message from the first touch, such as proof, objections handled, testimonials, urgency, or a simplified next step.",
    explanation:
      "Retargeting usually reaches warmer users at a better conversion rate than cold acquisition. That extra layer captures missed opportunities and reduces blended CPL across the full account.",
  },
  {
    title: "8. Shift budget toward winners faster",
    problem:
      "CPL gets inflated when too much budget stays in average campaigns. Many advertisers spread spend evenly, even when one ad set, keyword cluster, or creative angle is clearly outperforming the rest.",
    fix: "Move budget based on conversion efficiency, not vanity metrics. Increase spend on campaigns with stable lead quality and lower CPL, and cut or cap spend where results stay expensive after enough data.",
    explanation:
      "Smart allocation compounds what is already working. Instead of forcing every test to scale, you concentrate budget on proven areas and reduce the blended cost per lead at the account level.",
  },
  {
    title: "9. Optimize for qualified leads, not cheap leads",
    problem:
      "A falling CPL can still hide poor performance if the leads are low quality. This happens often with broad Meta lead forms or cheap search traffic that fills the CRM with weak prospects.",
    fix: "Track lead quality using offline conversions, CRM stages, call outcomes, or qualification status. Feed that data back into platform optimization and compare campaigns by cost per qualified lead, not just raw CPL.",
    explanation:
      "Platforms optimize better when they learn which leads actually matter. Over time, this reduces waste, improves downstream conversion rates, and helps you lower real acquisition cost instead of just buying more form fills.",
  },
  {
    title: "10. Refresh campaigns before fatigue spikes costs",
    problem:
      "Even strong campaigns get more expensive when frequency rises, click-through rate falls, or search ads lose relevance. Audience fatigue and stale messaging can slowly increase CPL without obvious warning.",
    fix: "Refresh creatives, rotate offers, test new angles, and review frequency, CTR, and conversion rate trends every week. For Google Ads, improve ad relevance and asset variety. For Facebook Ads, rotate winning themes before fatigue becomes severe.",
    explanation:
      "Regular refreshes protect efficiency by keeping relevance high. When ads stay useful and engaging, platforms reward them with stronger delivery and better conversion economics, which helps keep CPL under control.",
  },
];

const faqs = [
  {
    question: "What is a good cost per lead?",
    answer:
      "A good cost per lead depends on your industry, offer, and lead quality. Broad 2026 references show Google Ads CPLs can average around $70 across industries, while Facebook lead campaigns often sit far lower on average, but qualified lead value matters more than a universal number.",
  },
  {
    question: "How to reduce CPL quickly?",
    answer:
      "The fastest wins usually come from tightening targeting, cutting irrelevant spend, improving the offer, and fixing landing page friction. These changes can improve conversion rate without waiting for a full account rebuild.",
  },
  {
    question: "Why is my CPL increasing?",
    answer:
      "CPL usually rises because of audience fatigue, weaker traffic quality, poor landing page performance, rising competition, or an offer that no longer feels compelling. It can also happen when campaigns generate more low-intent clicks than before.",
  },
];

export default function BlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogTitle,
    description: metadata.description,
    author: { "@type": "Organization", name: "AdCampin" },
    publisher: { "@type": "Organization", name: "AdCampin" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-gray-300">
        <Navbar />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

        <main>
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="rounded-lg border border-white/10 bg-slate-900 p-8 md:p-12">
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="rounded-full border border-white/10 bg-slate-800 px-3 py-1">
                  Google Ads
                </span>
                <span className="rounded-full border border-white/10 bg-slate-800 px-3 py-1">
                  Facebook Ads
                </span>
                <span className="rounded-full border border-white/10 bg-slate-800 px-3 py-1">
                  2026 Guide
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {blogTitle}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                If your paid campaigns are bringing clicks but not affordable
                leads, the issue is usually not just budget. The real fix is
                better targeting, better messaging, a better offer, and a
                cleaner path from click to conversion.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                In 2026, average CPL benchmarks still vary a lot by platform and
                industry, which makes efficiency improvements far more useful
                than chasing generic numbers. This guide breaks down 10 proven
                ways to reduce cost per lead in Google Ads and Facebook Ads with
                practical actions you can apply now.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <a
                  href="#examples"
                  className="rounded-lg bg-rose-500 px-5 py-3 font-medium text-white transition hover:bg-rose-400"
                >
                  Jump to strategies
                </a>
                <a
                  href="#faq"
                  className="rounded-lg border border-white/10 bg-slate-800 px-5 py-3 font-medium text-gray-200 transition hover:bg-slate-700"
                >
                  Go to FAQ
                </a>
                <a
                  href="#cta"
                  className="rounded-lg border border-white/10 bg-slate-800 px-5 py-3 font-medium text-gray-200 transition hover:bg-slate-700"
                >
                  Get help
                </a>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16 pt-0">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
              <article className="rounded-lg border border-white/10 bg-slate-900 p-8">
                <p className="text-base leading-8 text-gray-300">
                  Across industries, Google Ads CPL averages can sit around
                  $70.11, while Facebook lead campaign averages are often much
                  lower on paper, though quality differs by funnel and offer. At
                  the same time, landing pages convert very differently based on
                  clarity, speed, and message match, which is why reducing CPL
                  usually requires fixing the full system instead of tweaking one
                  metric in isolation.
                </p>
              </article>

              <aside className="rounded-lg border border-white/10 bg-slate-800 p-6">
                <h2 className="text-lg font-semibold text-white">In this guide</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                  <li>
                    <Link href="#examples" className="hover:text-white">
                      10 proven strategies
                    </Link>
                  </li>
                  <li>
                    <Link href="#insights" className="hover:text-white">
                      Patterns that raise CPL
                    </Link>
                  </li>
                  <li>
                    <Link href="#links" className="hover:text-white">
                      Internal resources
                    </Link>
                  </li>
                  <li>
                    <Link href="#cta" className="hover:text-white">
                      CTA
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section id="examples" className="max-w-6xl mx-auto px-6 py-16 pt-0">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white">
                10 Proven Strategies to Reduce Cost Per Lead
              </h2>
              <p className="mt-4 max-w-3xl text-gray-300">
                These are the highest-impact fixes for lowering CPL in Google
                and Facebook ads without guessing. Each one targets a common
                reason lead generation costs drift upward.
              </p>
            </div>

            <div className="grid gap-6">
              {strategies.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-slate-800 p-6"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-rose-300">
                        Problem
                      </p>
                      <p className="mt-2 leading-8 text-gray-300">
                        {item.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-rose-300">
                        Fix
                      </p>
                      <p className="mt-2 leading-8 text-gray-300">{item.fix}</p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-rose-300">
                        Why this lowers CPL
                      </p>
                      <p className="mt-2 leading-8 text-gray-300">
                        {item.explanation}
                      </p>
                    </div>

                    <Link
                      href="/signup"
                      className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
                    >
                      Fix this in your ads →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="insights" className="max-w-6xl mx-auto px-6 py-16">
            <div className="rounded-lg border border-white/10 bg-slate-900 p-8">
              <h2 className="text-3xl font-bold text-white">
                Patterns and Insights
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Most CPL problems start before the click
                  </h3>
                  <p className="mt-3 leading-8 text-gray-300">
                    Bad audience selection, weak hooks, and poor offer framing
                    create low-quality clicks. When the wrong people enter the
                    funnel, every later metric looks more expensive.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Landing pages multiply every ad decision
                  </h3>
                  <p className="mt-3 leading-8 text-gray-300">
                    Even strong campaigns struggle when the page feels slow,
                    generic, or hard to trust. Better page conversion rates make
                    the same ad traffic more profitable.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    The cheapest lead is not always the best lead
                  </h3>
                  <p className="mt-3 leading-8 text-gray-300">
                    Real performance improves when you optimize for qualified
                    leads and downstream outcomes. That shift usually reduces
                    waste and protects long-term acquisition efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="links" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-slate-900 p-8">
                <h2 className="text-3xl font-bold text-white">
                  Explore More Ad Examples
                </h2>
                <p className="mt-4 text-gray-300">
                  Browse industry-specific ad inspiration and campaign examples
                  to improve your targeting, hooks, and landing page alignment.
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  <Link
                    href="/ads/google/dentists/new-york/examples"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Google Ads examples for dentists in New York
                  </Link>
                  <Link
                    href="/ads/google/lawyers/houston/examples"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Google Ads examples for lawyers in Houston
                  </Link>
                  <Link
                    href="/ads/google/real-estate/mumbai/examples"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Google Ads examples for real estate in Mumbai
                  </Link>
                  <Link
                    href="/ads/google/restaurants/jaipur/examples"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Google Ads examples for restaurants in Jaipur
                  </Link>
                  <Link
                    href="/ads/google/hvac/dallas/examples"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Google Ads examples for HVAC in Dallas
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-slate-900 p-8">
                <h2 className="text-3xl font-bold text-white">
                  Related Articles
                </h2>
                <p className="mt-4 text-gray-300">
                  Keep building your paid ads system with these practical guides.
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  <Link
                    href="/blog/best-google-ads-examples-small-businesses-2026"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Best Google Ads Examples for Small Businesses (2026)
                  </Link>
                  <Link
                    href="/blog/how-to-write-facebook-ads-local-business"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    How to Write Facebook Ads for Local Business
                  </Link>
                  <Link
                    href="/blog/google-ads-vs-facebook-ads-lead-generation"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Google Ads vs Facebook Ads for Lead Generation
                  </Link>
                  <Link
                    href="/blog/top-20-ad-copy-mistakes"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Top 20 Ad Copy Mistakes
                  </Link>
                  <Link
                    href="/blog/how-to-get-leads-instagram-ads"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    How to Get Leads with Instagram Ads
                  </Link>
                  <Link
                    href="/blog/why-ads-not-converting-how-to-fix"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    Why Ads Are Not Converting and How to Fix It
                  </Link>
                  <Link
                    href="/blog/high-converting-ad-hooks-examples"
                    className="rounded-lg border border-white/10 bg-slate-800 px-4 py-3 hover:bg-slate-700"
                  >
                    High-Converting Ad Hooks Examples
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="cta" className="max-w-6xl mx-auto px-6 py-16">
            <div className="rounded-lg border border-white/10 bg-slate-900 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white">
                Want to Lower CPL Faster in 2026?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-gray-300">
                The fastest path is fixing targeting, creative, offer, and
                landing page issues together instead of treating them as separate
                problems. A cleaner paid funnel usually reduces lead costs
                faster than endlessly increasing spend.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex rounded-lg bg-rose-500 px-6 py-3 font-medium text-white transition hover:bg-rose-400"
                >
                  Start optimizing your ads
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
            <div className="rounded-lg border border-white/10 bg-slate-900 p-8">
              <h2 className="text-3xl font-bold text-white">FAQ</h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border border-white/10 bg-slate-800 p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-3 leading-8 text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          AdCampin
        </Link>

        <nav className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/ads" className="hover:text-white">
            Ad Examples
          </Link>
          <Link
            href="/signup"
            className="rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}