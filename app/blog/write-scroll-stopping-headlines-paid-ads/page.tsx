import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "How to Write Scroll-Stopping Headlines for Paid Ads (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to write scroll-stopping headlines for paid ads that increase CTR, improve engagement, and drive more conversions in 2026.",
  keywords: [
    "scroll stopping headlines",
    "paid ad headlines",
    "how to write ad headlines",
    "high converting headlines",
    "headline writing for ads",
    "facebook google ad copy tips",
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
      name: "What makes a headline scroll-stopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A scroll-stopping headline grabs attention instantly by triggering curiosity, emotion, urgency, or relevance.",
      },
    },
    {
      "@type": "Question",
      name: "How long should paid ad headlines be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most high-performing paid ad headlines are under 10 words and communicate value quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Should ad headlines focus on benefits or curiosity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best ad headlines often combine both—curiosity to grab attention and benefits to drive clicks.",
      },
    },
  ],
};

const strategies = [
  {
    number: "01",
    strategy: "Curiosity Headlines",
    example: '"The One Mistake Costing Your Ads 3x More Per Click"',
    why_grabs:
      "Curiosity creates an open loop in the brain — readers feel compelled to close it by clicking. The moment you introduce something they don't know, you've already won half the battle.",
    how_to_use:
      "Tease the answer without giving it away. Use phrases like 'The one thing…', 'What most advertisers miss…', or 'Why your [X] isn't working'. Make sure the ad delivers on the curiosity — bait-and-switch kills trust.",
    explanation:
      "Curiosity headlines work across every platform but especially in Facebook and Instagram feeds where the visual stops the scroll and the headline seals the click. Keep the gap tight — too vague and people scroll past, too obvious and there's no reason to click.",
    extra_link: {
      href: "/blog/high-converting-ad-hooks-examples",
      label: "See curiosity hooks with real ad examples →",
    },
  },
  {
    number: "02",
    strategy: "Question Headlines",
    example: '"Still Paying Too Much for Google Ads?"',
    why_grabs:
      "Questions are conversational and personal. They make the reader feel like you're talking directly to them — not at them. A well-targeted question instantly qualifies the audience and filters out people who aren't your buyer.",
    how_to_use:
      "Ask questions your ideal customer is already asking themselves. Use pain-point questions ('Tired of…?'), desire questions ('Want to…?'), or challenge questions ('Can you afford not to…?'). Avoid questions with obvious 'no' answers.",
    explanation:
      "Question headlines perform particularly well for Google Search ads where users are already in problem-solving mode. Match the question to the search intent and you'll see CTR climb almost immediately.",
    extra_link: null,
  },
  {
    number: "03",
    strategy: "Problem-Solution Headlines",
    example: '\"No More Wasted Ad Spend — Find Out What\'s Actually Working"',
    why_grabs:
      "This structure speaks directly to the reader's frustration and immediately promises relief. It validates the problem before introducing the solution, making the audience feel understood.",
    how_to_use:
      "Name the exact pain point first, then pivot to the fix. The more specific the problem, the better it performs. 'No more slow website → faster load times' is weak. 'No more losing leads because your page loads in 4 seconds' is strong.",
    explanation:
      "Problem-solution headlines work best for bottom-of-funnel audiences who are actively comparing options. They also pair well with benefit-focused ad body copy that expands on what the solution delivers.",
    extra_link: {
      href: "/blog/why-ads-not-converting-how-to-fix",
      label: "Fix the real reason your ads aren't converting →",
    },
  },
  {
    number: "04",
    strategy: "Number / List Headlines",
    example: '"7 Ways Local Businesses Cut Their CPA in Half"',
    why_grabs:
      "Numbers signal specificity and structure. The brain processes '7 ways' faster than 'several ways' — it knows exactly what it's getting. Lists feel scannable and low-effort, which reduces the perceived cost of clicking.",
    how_to_use:
      "Use odd numbers when possible (they outperform even numbers in most tests). Pair the number with a concrete outcome, not a vague topic. '5 Ad Types' is weak. '5 Ad Types That Cut Cost Per Lead by 40%' is strong.",
    explanation:
      "List headlines are reliable performers across blog ads, lead magnet campaigns, and content promotion. They set clear expectations and attract readers who are solution-oriented and ready to act on information.",
    extra_link: null,
  },
  {
    number: "05",
    strategy: "Urgency Headlines",
    example: '"Only 3 Spots Left: Free Ad Audit for Local Businesses"',
    why_grabs:
      "Urgency triggers loss aversion — the fear of missing out is psychologically stronger than the desire to gain. When something is scarce or time-limited, indecision becomes costly.",
    how_to_use:
      "Use real deadlines or genuine scarcity, not manufactured ones. 'Limited time' with no end date is ignored. 'Offer ends Friday at midnight' is specific and credible. Pair urgency with a strong offer — urgency on a weak offer doesn't work.",
    explanation:
      "Urgency headlines are most effective for retargeting campaigns where the audience already knows your brand. Cold audiences need trust first — urgency comes after. Misused urgency destroys credibility fast.",
    extra_link: {
      href: "/blog/high-converting-cta-for-ads",
      label: "Pair urgency headlines with a CTA that converts →",
    },
  },
  {
    number: "06",
    strategy: "Benefit-Driven Headlines",
    example: '"Get More Local Leads Without Increasing Your Ad Budget"',
    why_grabs:
      "Benefit headlines answer the single question every reader is asking: what's in it for me? They skip the features entirely and lead with the outcome the reader actually wants.",
    how_to_use:
      "Identify the #1 desired outcome for your audience and lead with it. Avoid feature language ('We use AI-powered targeting') and replace with outcome language ('Get twice the leads from the same budget'). Specificity multiplies impact.",
    explanation:
      "Benefit-driven headlines are the safest bet for cold traffic on Google Search and Facebook Feed. They're clear, they're direct, and they're easy to A/B test. Always test two versions — one focused on gaining something, one on avoiding a loss.",
    extra_link: {
      href: "/blog/ab-testing-ads-better-performance-2026",
      label: "How to A/B test your benefit headlines correctly →",
    },
  },
  {
    number: "07",
    strategy: "Negative Framing Headlines",
    example: '\"Stop Wasting Money on Ads That Don\'t Convert"',
    why_grabs:
      "Negative framing activates a protective instinct. People scroll past 'improve your ads' but stop at 'stop wasting money on ads'. Loss language outperforms gain language in roughly 60% of ad tests.",
    how_to_use:
      "Use words like 'stop', 'avoid', 'don't', 'never', 'mistake'. Frame the current behavior as the problem and position your solution as the escape. Don't overuse it — repeated negative framing in a sequence feels aggressive.",
    explanation:
      "This approach works especially well for audiences who've already tried and failed to solve a problem. They've burned budget, been burned by agencies, or watched campaigns flop. Negative framing says 'I understand your frustration' without saying it.",
    extra_link: null,
  },
  {
    number: "08",
    strategy: "Contrarian Headlines",
    example: "\"No More Ad Budget Won\'t Fix a Broken Campaign — Here Is What Will\"",
    why_grabs:
      "Contrarian headlines challenge the conventional wisdom your audience already believes. They create immediate cognitive dissonance — the reader's brain flags it as 'wait, that's not what I thought' and demands resolution.",
    how_to_use:
      "Identify the common belief in your niche and flip it. 'More leads isn't the answer — better leads are.' 'You don't need a bigger budget, you need a better offer.' The contradiction must be defensible — if you can't back it up in the ad, don't use it.",
    explanation:
      "Contrarian headlines attract high-quality readers who are intellectually engaged and skeptical of typical marketing claims. They perform well for expert-positioning campaigns and high-ticket service businesses.",
    extra_link: {
      href: "/blog/best-ad-creatives-facebook-instagram-clicks",
      label: "See contrarian creative examples that actually ran →",
    },
  },
  {
    number: "09",
    strategy: "Testimonial / Social Proof Headlines",
    example: '"How a Dallas HVAC Company Got 47 Leads in 30 Days With Facebook Ads"',
    why_grabs:
      "Third-party validation is more persuasive than first-person claims. When a headline sounds like a result someone else achieved, it's believable in a way that 'We'll get you more leads' never is.",
    how_to_use:
      "Use specific results, real locations, real industries, and real timeframes. '47 leads in 30 days' outperforms 'more leads fast'. Name the niche and city if possible — local businesses respond to local proof. Always have the data to back it up.",
    explanation:
      "Social proof headlines work brilliantly for local business targeting where specificity creates immediate relevance. A dentist in Houston reading about a Houston dental practice's results is far more likely to engage than reading a generic claim.",
    extra_link: {
      href: "/ads/google/dentists/new-york/examples",
      label: "See real dental ad examples with proof-driven headlines →",
    },
  },
  {
    number: "10",
    strategy: "Local / Personalized Headlines",
    example: '"Houston Homeowners: See Why 200+ Families Chose Us Last Year"',
    why_grabs:
      "Personalization creates instant relevance. When someone sees their city, their role, or their situation named in a headline, they stop — because it feels like the ad was written for them specifically, not blasted to a cold list.",
    how_to_use:
      "Use location insertion, audience segment labels ('Small business owners in Austin…'), or life-stage identifiers ('New homeowners in Miami…'). Facebook's dynamic creative and Google's ad customizers make this scalable at no extra design cost.",
    explanation:
      "Local headlines are the single biggest unlock for geotargeted campaigns. A generic headline competes with every other ad in the feed. A headline that names the reader's city or situation cuts through because everything else feels generic by comparison.",
    extra_link: {
      href: "/ads/google/lawyers/houston/examples",
      label: "See localized lawyer ad examples from Houston →",
    },
  },
];

const internalLinks = [
  { label: "Dentist Ads · New York", href: "/ads/google/dentists/new-york/examples", tag: "Local Ads" },
  { label: "Real Estate Ads · Mumbai", href: "/ads/google/real-estate/mumbai/examples", tag: "Local Ads" },
  { label: "Lawyer Ads · Houston", href: "/ads/google/lawyers/houston/examples", tag: "Local Ads" },
  { label: "High-Converting Ad Hooks with Examples", href: "/blog/high-converting-ad-hooks-examples", tag: "Blog" },
  { label: "High-Converting CTAs for Ads", href: "/blog/high-converting-cta-for-ads", tag: "Blog" },
  { label: "Best Ad Creatives for Facebook & Instagram", href: "/blog/best-ad-creatives-facebook-instagram-clicks", tag: "Blog" },
  { label: "Ad Copy for Service Businesses", href: "/blog/ad-copy-service-business-examples", tag: "Blog" },
  { label: "Why Your Ads Aren't Converting", href: "/blog/why-ads-not-converting-how-to-fix", tag: "Blog" },
  { label: "Scale Winning Ads Without Killing ROI", href: "/blog/scale-winning-ads-without-killing-roi-2026", tag: "Blog" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Ad Copywriting · 2026 Guide
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white leading-tight sm:text-5xl">
            How to Write Scroll-Stopping Headlines for Paid Ads
          </h1>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Your headline does 80% of the work. If it doesn't stop the scroll in the first half-second,
            nothing else in your ad gets a chance.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="border-l-2 border-rose-500 pl-5 max-w-2xl">
          <p className="text-gray-400">
            Most advertisers spend hours on creative and targeting — then write a headline in 30 seconds.
            That's the wrong priority.{" "}
            <span className="text-white font-medium">
              The headline is the ad's first job, and it either earns the click or loses it entirely.
            </span>
          </p>
          <p className="mt-3 text-gray-400">
            These 10 headline strategies cover every major psychological trigger used in high-performing
            paid ads — with real examples, clear mechanics, and direction you can use today.
          </p>
        </div>
      </section>

      {/* Main — 10 Strategies */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-8">
          10 Headline Strategies That Stop the Scroll
        </h2>
        <div className="space-y-6">
          {strategies.map((s) => (
            <div key={s.number} className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500/30 leading-none select-none">
                  {s.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{s.strategy}</h3>
                  <p className="mt-1 text-sm font-mono text-rose-300/80 bg-slate-900 inline-block px-3 py-1 rounded">
                    {s.example}
                  </p>
                  <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-400 mb-1">
                        Why it grabs attention
                      </p>
                      <p className="text-sm text-gray-400">{s.why_grabs}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-400 mb-1">
                        How to use it
                      </p>
                      <p className="text-sm text-gray-400">{s.how_to_use}</p>
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
            The Pattern: Every Strong Headline Does One of Three Things
          </h2>
          <p className="text-gray-400 mb-5">
            After analyzing thousands of high-CTR ads, the best headlines reliably do one of the
            following — and the strongest ones do two at once:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "They create an open loop — triggering curiosity the reader has to close by clicking.",
              "They validate a pain — making the reader feel seen before offering any solution.",
              "They promise a specific outcome — not vague improvement, but a concrete result with a number, timeframe, or named audience.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-rose-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 mb-5">
            The biggest headline mistake is writing for yourself — using language that makes sense from
            inside your business instead of language that resonates with your buyer's actual frustration or
            desire. Read your headline out loud. If it sounds like a company brochure, rewrite it.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/blog/ad-copy-service-business-examples"
              className="text-rose-400 hover:text-rose-300"
            >
              Ad copy examples for service businesses →
            </Link>
            <Link
              href="/blog/ab-testing-ads-better-performance-2026"
              className="text-rose-400 hover:text-rose-300"
            >
              How to test two headlines and pick the winner →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-6">Explore More Ad Examples & Guides</h2>
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
            Write Headlines That Actually Get Clicked
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            AdCampin generates scroll-stopping headlines for your paid ads — matched to your business,
            audience, and platform. No copywriting experience needed.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-6 rounded-lg bg-rose-500 px-8 py-3 text-sm font-semibold text-white hover:bg-rose-400 transition-colors"
          >
            Generate My Ad Headlines — Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What makes a headline scroll-stopping?",
              a: "A scroll-stopping headline grabs attention instantly by triggering curiosity, emotion, urgency, or relevance. The best ones do two of these at once — and they're always specific, never vague.",
            },
            {
              q: "How long should paid ad headlines be?",
              a: "Most high-performing paid ad headlines are under 10 words and communicate value quickly. On Google, you're limited by character counts. On Facebook, shorter tends to outperform longer because feeds reward instant clarity.",
            },
            {
              q: "Should ad headlines focus on benefits or curiosity?",
              a: "The best ad headlines often combine both — curiosity to grab attention and benefits to drive clicks. For cold audiences, lean toward curiosity or pain-validation. For warm audiences, lean toward specific benefits and offers.",
            },
            {
              q: "How do I test which headline performs better?",
              a: "Run two ad sets with identical targeting, creative, and budget — changing only the headline. Let each collect at least 50 clicks before drawing conclusions. CTR tells you what stops the scroll; conversion rate tells you what actually works.",
            },
            {
              q: "Do headline formulas work on both Google and Facebook ads?",
              a: "Yes, but with different constraints. Google Search headlines must match search intent closely — curiosity and contrarian angles work less well. Facebook headlines have more creative latitude because you're interrupting a feed, not responding to a query.",
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
    </div>
  );
}