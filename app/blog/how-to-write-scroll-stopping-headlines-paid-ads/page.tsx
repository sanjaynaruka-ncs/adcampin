import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "How to Write Scroll-Stopping Headlines for Paid Ads (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to write scroll-stopping headlines for paid ads that grab attention, boost CTR, and drive more conversions in 2026.",
  keywords: [
    "scroll stopping headlines",
    "paid ad headlines",
    "ad copy headlines",
    "headline writing for ads",
    "high converting headlines",
    "facebook google ad headlines",
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
        text: "A strong hook, curiosity, emotional triggers, and clear value make headlines scroll-stopping.",
      },
    },
    {
      "@type": "Question",
      name: "How long should ad headlines be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most high-performing ad headlines stay under 10 words for maximum readability.",
      },
    },
    {
      "@type": "Question",
      name: "Do headlines affect CTR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, headlines are one of the biggest factors influencing ad click-through rates.",
      },
    },
  ],
};

const strategies = [
  {
    id: 1,
    tag: "Curiosity",
    headline: "Curiosity Headlines: Make Them Need to Know More",
    description:
      "Curiosity headlines withhold just enough information to make clicking feel irresistible. They open a loop the brain desperately wants to close.",
    example: "\"The One Word That Makes Customers Buy Instantly\"",
    explanation:
      "The key to a curiosity headline is the gap between what the reader knows and what they suspect you know. Tease the insight without revealing it. \"The thing most dentists won't tell you about whitening\" works because it implies privileged information. Use this format sparingly — pair it with a landing page that actually delivers on the promise, or you'll generate clicks without conversions.",
  },
  {
    id: 2,
    tag: "Question",
    headline: "Question Headlines: Make the Reader Answer 'Yes' in Their Head",
    description:
      "A well-aimed question instantly qualifies your reader and makes them feel like the ad was written specifically for them.",
    example: "\"Still Paying Too Much for Car Insurance?\"",
    explanation:
      "The best question headlines are ones where your target audience answers yes automatically — and immediately wants to know what comes next. Avoid vague questions like \"Want to grow your business?\" Anyone could say yes. Get specific: \"Tired of Google Ads that eat budget without leads?\" That question self-selects. Only the right people will keep reading.",
  },
  {
    id: 3,
    tag: "Benefit",
    headline: "Benefit Headlines: Lead With the Outcome, Not the Feature",
    description:
      "Nobody buys a drill — they buy the hole. Benefit headlines skip straight to what the customer actually wants to experience.",
    example: "\"Get a Full Mouth Restoration in One Day\"",
    explanation:
      "The difference between a feature headline and a benefit headline is the difference between \"24/7 customer support\" and \"Never wait on hold again.\" One describes what you offer; the other describes what the customer feels. Always reframe your headline around the end result — the emotion, the time saved, the problem solved. That's what converts.",
  },
  {
    id: 4,
    tag: "Urgency",
    headline: "Urgency Headlines: Give People a Reason to Act Right Now",
    description:
      "Without urgency, the easiest decision is to do nothing. A deadline — real or perceived — forces the reader to act or consciously opt out.",
    example: "\"Offer Ends Sunday: 40% Off First Month\"",
    explanation:
      "Urgency works when it's specific and credible. \"Limited time offer\" is ignored. \"Pricing increases on May 1st\" is not. Tie your urgency to something real — a seasonal promotion, a capped number of spots, an expiring discount. If you manufacture fake urgency repeatedly, your audience learns to ignore it. Use it when you mean it, and it will move people.",
  },
  {
    id: 5,
    tag: "Numbers",
    headline: "Number Headlines: Specificity Builds Trust and Sets Expectations",
    description:
      "Numbers stop the eye. They signal concrete, digestible information — and specific numbers convert better than round ones.",
    example: "\"11 Ways to Cut Your Google Ads Spend by 34%\"",
    explanation:
      "\"11\" feels more credible than \"10\" because it doesn't feel manufactured. \"34%\" lands harder than \"over 30%\" for the same reason. Numbers also manage expectation — the reader knows exactly what they're getting before they click. Use numbers in headlines whenever you can attach them to a real data point, list length, timeframe, or result. They consistently outperform headlines without them.",
  },
  {
    id: 6,
    tag: "Problem/Solution",
    headline: "Problem/Solution Headlines: Name the Pain, Then Promise the Fix",
    description:
      "If you can describe your customer's problem better than they can, they'll assume you have the solution. This headline format does exactly that.",
    example: "\"Leaking Roof? We Fix It in 24 Hours — Guaranteed\"",
    explanation:
      "Problem/solution headlines work because they meet the reader exactly where they are. Someone searching for a plumber at 10 PM isn't looking for brand awareness — they have a specific, stressful problem. The moment your headline names that problem clearly, you have their full attention. Follow it immediately with the solution and a trust signal, and you've done 80% of the conversion work in one line.",
  },
  {
    id: 7,
    tag: "Contrarian",
    headline: "Contrarian Headlines: Challenge What Everyone Else Is Saying",
    description:
      "In a feed full of ads that all sound the same, a headline that goes against conventional wisdom stands out instantly.",
    example: "\"Stop Posting on Social Media — Do This Instead\"",
    explanation:
      "Contrarian headlines work because they create cognitive dissonance. When a headline contradicts something the reader believes or has been told, the brain flags it as worth investigating. The bar is high — your contrarian position needs to be defensible. If the landing page doesn't deliver a compelling argument, you'll lose credibility fast. But when it lands, this format generates significantly higher engagement than safe, consensus-driven messaging.",
  },
  {
    id: 8,
    tag: "FOMO",
    headline: "FOMO Headlines: Let Them Feel What They're Missing",
    description:
      "Fear of missing out isn't manipulation — it's pointing at something real that your prospect hasn't yet taken advantage of.",
    example: "\"Your Competitors Are Already Using This. Are You?\"",
    explanation:
      "FOMO headlines tap into a core human motivation: not being left behind. The most effective version of this isn't a generic \"don't miss out\" — it's naming exactly who is ahead and what advantage they have. Social comparison is a powerful motivator for business owners and consumers alike. Pair this with a concrete proof point — a stat, a customer count, or a specific result — and it becomes a genuine reason to act.",
  },
  {
    id: 9,
    tag: "Social Proof",
    headline: "Social Proof Headlines: Let Your Customers Write the Pitch",
    description:
      "A headline built on real numbers or real customer results is more persuasive than anything you could claim about yourself.",
    example: "\"4,200 Homeowners in Austin Trust Us for Pest Control\"",
    explanation:
      "Social proof headlines borrow authority from the crowd. When a reader sees a specific number of customers, a star rating, or a named outcome, their skepticism drops because someone else has already validated the claim. The more local and specific the proof, the better it works — \"12,000 customers\" is impressive, but \"847 clients in Phoenix last year\" hits closer to home for a Phoenix resident.",
  },
  {
    id: 10,
    tag: "Local/Personal",
    headline: "Personalization & Local Headlines: Speak Directly to Where They Are",
    description:
      "Mentioning a specific city, neighborhood, or demographic in your headline immediately increases relevance — and relevance is the fastest path to a click.",
    example: "\"Best-Rated Family Dentist in Midtown — Now Accepting Patients\"",
    explanation:
      "Localized headlines outperform generic ones for local businesses because they filter the audience instantly. A resident of Midtown sees that headline and knows it's for them. Dynamic keyword insertion on Google Ads and city-specific ad sets on Meta both let you scale this personalization without rewriting every ad manually. The more specifically your headline speaks to someone's context — their city, their role, their situation — the more clicks you earn.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/60">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            2026 Guide · Ad Copywriting
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            How to Write Scroll-Stopping Headlines for Paid Ads
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Your headline is doing 80% of the work. It determines whether someone stops or
            scrolls, clicks or ignores. Here are 10 headline strategies — with real examples —
            that consistently drive higher CTR and lower cost-per-click.
          </p>
          <div className="flex gap-4 mt-8 text-sm text-gray-500">
            <span>10 strategies with examples</span>
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
          Most ad budgets don't fail because of targeting or bidding strategy. They fail because
          the headline didn't earn a second look. In a feed where the average user makes a
          scroll decision in under a second, your opening line is everything.
        </p>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl mt-4">
          Below are 10 headline formulas that work across Facebook, Google, and Instagram — with
          real-world examples and the psychology behind why each one stops the scroll.
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
                  <div className="inline-block mb-3 px-3 py-2 rounded bg-slate-900/70 border border-slate-700/60 text-rose-300 text-sm font-medium italic">
                    {s.example}
                  </div>
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
          <h2 className="text-2xl font-bold text-white mb-3">
            What All Great Ad Headlines Have in Common
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mb-8">
            The format matters less than the fundamentals. Whether you're writing curiosity
            headlines or social proof headlines, every high-performing ad headline shares the
            same three traits.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Immediate Relevance",
                body: "The best headlines make the reader feel seen in under a second. They reference a specific pain, desire, or identity — not a broad category. Specificity is what creates relevance.",
              },
              {
                label: "One Clear Promise",
                body: "Strong headlines don't try to say everything. They make one specific claim and make it undeniably well. A muddled headline with three messages converts worse than a focused headline with one.",
              },
              {
                label: "A Reason to Keep Reading",
                body: "Every headline is really a gateway. Its job isn't to sell — it's to earn the next line. The best headlines always leave something unsaid that the reader needs to click to find out.",
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
          See how real businesses across industries write headlines and structure winning
          campaigns.
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
            { href: "/blog/high-converting-ad-hooks-examples", label: "High-Converting Ad Hooks with Examples" },
            { href: "/blog/high-converting-cta-for-ads", label: "High-Converting CTAs for Ads" },
            { href: "/blog/ad-copy-service-business-examples", label: "Ad Copy Examples for Service Businesses" },
            { href: "/blog/best-ad-creatives-facebook-instagram-clicks", label: "Best Ad Creatives for Facebook & Instagram Clicks" },
            { href: "/blog/why-ads-not-converting-how-to-fix", label: "Why Your Ads Aren't Converting (And How to Fix It)" },
            { href: "/blog/ab-testing-ads-better-performance-2026", label: "A/B Testing Ads for Better Performance in 2026" },
            { href: "/blog/facebook-ads-lawyers", label: "Facebook Ads for Lawyers: What Works in 2026" },
            { href: "/blog/scale-winning-ads-without-killing-roi", label: "How to Scale Winning Ads Without Killing ROI" },
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
            Write Headlines That Actually Stop the Scroll
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
            AdCampin gives you headline frameworks, creative templates, and A/B testing tools
            built for paid ad campaigns — without needing a copywriter on staff. No credit card
            required.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-semibold text-base transition-colors shadow-lg shadow-rose-500/20"
          >
            Start Writing Better Ads →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What makes a headline scroll-stopping?",
              a: "A strong hook, curiosity, emotional triggers, and clear value make headlines scroll-stopping. The best headlines are specific, promise something the reader wants, and leave just enough unsaid to make clicking feel necessary.",
            },
            {
              q: "How long should ad headlines be?",
              a: "Most high-performing ad headlines stay under 10 words for maximum readability. Google Ads headlines can go up to 30 characters per headline, but the principle holds — shorter, punchier headlines consistently outperform longer ones in split tests.",
            },
            {
              q: "Do headlines affect CTR?",
              a: "Yes, headlines are one of the biggest factors influencing ad click-through rates. A headline change alone can double or halve your CTR without touching your creative, audience, or budget. It's the highest-leverage variable to test first.",
            },
            {
              q: "Should I use the same headline for Facebook and Google Ads?",
              a: "Not exactly. Google Ads headlines need to match search intent closely — people are looking for something specific. Facebook headlines need to interrupt a passive scroll, so curiosity and emotion work better there. Adapt the same core message to fit the context of each platform.",
            },
            {
              q: "How do I test which headline performs best?",
              a: "Run A/B tests with one variable changed at a time — keep the creative, audience, and offer identical and change only the headline. Give each variant at least 200–500 impressions before drawing conclusions. On Meta, use the built-in creative A/B test tool. On Google, use ad variations in the campaign settings.",
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