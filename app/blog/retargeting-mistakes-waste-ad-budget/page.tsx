import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "7 Retargeting Mistakes That Waste Your Ad Budget (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Avoid these 7 costly retargeting mistakes that waste your ad budget and learn how to improve ROI with smarter remarketing strategies in 2026.",
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
        text: "Showing the same ad to every visitor without segmenting audiences is one of the most common mistakes.",
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
    number: "01",
    mistake: "Retargeting an Audience That's Too Broad",
    why_made:
      "Advertisers want maximum reach and assume more eyeballs means more conversions — so they retarget everyone who touched the site, including 2-second bouncers.",
    why_hurts:
      "You're paying to re-engage people with zero real interest. CPMs climb, conversion rates tank, and budget evaporates chasing cold traffic dressed up as warm.",
    explanation:
      "Effective retargeting starts with intent signals — time on site, pages visited, scroll depth. A visitor who spent 45 seconds on your pricing page is worth 10x more than someone who bounced off the homepage. Filter before you spend.",
    extra_link: null,
  },
  {
    number: "02",
    mistake: "Zero Audience Segmentation",
    why_made:
      "Building one retargeting audience is fast. Most advertisers set it up once and never revisit it, treating all visitors as a single group with the same intent.",
    why_hurts:
      "A first-time blog reader and a cart abandoner are in completely different buying stages. Showing them the same ad wastes budget on the former and under-converts the latter.",
    explanation:
      "Segment at minimum by: top-of-funnel visitors, product/service page viewers, cart or form abandoners, and past buyers. Each group needs a different message, offer, and creative. One audience, one message is a guaranteed ROI leak.",
    extra_link: null,
  },
  {
    number: "03",
    mistake: "Wrong Frequency Caps — Too High or Too Low",
    why_made:
      "Too-high caps happen when advertisers chase impressions. Too-low caps happen when they fear overspend. Both are set without looking at actual frequency data.",
    why_hurts:
      "Too many impressions cause ad fatigue — audiences start hiding or ignoring your ads, tanking CTR and inflating costs. Too few impressions mean you never build enough recall to drive action.",
    explanation:
      "A frequency of 3–7 impressions per week is the sweet spot for most retargeting campaigns. Check your frequency report weekly. If CTR is dropping while frequency climbs, you've hit fatigue — cut the cap immediately.",
    extra_link: null,
  },
  {
    number: "04",
    mistake: "Poor Creative Rotation — Running the Same Ad for Weeks",
    why_made:
      "Launching new creative takes time. Advertisers stick with what was working and assume it'll keep working — especially if the original creative had a strong start.",
    why_hurts:
      "Retargeting audiences are small. They see your creative far more often than cold audiences do. The same image or video burns out in days, not weeks, driving CPAs up fast.",
    explanation:
      "Rotate at least 3 creative variants per retargeting audience and swap visuals every 10–14 days minimum. If a variant starts losing CTR, pause it before the data gets ugly.",
    extra_link: {
      href: "/blog/high-converting-ad-hooks-examples",
      label: "Get fresh hook ideas for your next creative rotation →",
    },
  },
  {
    number: "05",
    mistake: "Same Message to Every Retargeting User",
    why_made:
      "Brands repurpose top-of-funnel creative for retargeting because it's already built and tested. It feels efficient — it isn't.",
    why_hurts:
      "Someone who visited your pricing page doesn't need awareness. They need a reason to decide. Hitting them with a brand-awareness ad is a wasted impression and a missed close.",
    explanation:
      "Match the message to the moment. Pricing page visitors get a limited-time offer or social proof. Blog readers get a lead magnet or demo invite. Cart abandoners get urgency and a direct CTA. Intent dictates message — always.",
    extra_link: {
      href: "/blog/high-converting-cta-for-ads",
      label: "See high-converting CTAs matched to buyer intent →",
    },
  },
  {
    number: "06",
    mistake: "Weak Offer or Generic CTA",
    why_made:
      "Advertisers copy their main campaign CTA into retargeting without adjusting for the fact that these users have already seen the brand and need a stronger push to act.",
    why_hurts:
      "\"Learn More\" or \"Visit Our Site\" doesn't move people who've already been to your site. A warm audience that didn't convert needs more — not the same thing again.",
    explanation:
      "Upgrade the offer specifically for retargeting. A free trial, limited-time discount, case study download, or live demo invite is far more compelling to someone already in your funnel. The bar is higher for warm traffic — clear it.",
    extra_link: {
      href: "/blog/lead-magnet-ideas-for-ads-increase-signups",
      label: "Browse lead magnet ideas that convert warm traffic →",
    },
  },
  {
    number: "07",
    mistake: "No Exclusion Audiences",
    why_made:
      "Setting up exclusions takes an extra step most advertisers skip, especially when rushing campaigns live or duplicating from cold traffic setups.",
    why_hurts:
      "Without exclusions, you're retargeting existing customers (wasted spend), people who just converted (annoying experience), and high-bounce visitors who were never real prospects. Your audience size looks healthy; your ROI says otherwise.",
    explanation:
      "Always exclude: recent converters (30–90 days), existing customers unless cross-selling, and visitors who bounced in under 5 seconds. Exclusions shrink audience size but dramatically improve conversion rates and CPAs across the board.",
    extra_link: null,
  },
];

const internalLinks = [
  { label: "Dentist Ads · New York", href: "/ads/google/dentists/new-york/examples", tag: "Local Ads" },
  { label: "Real Estate Ads · Mumbai", href: "/ads/google/real-estate/mumbai/examples", tag: "Local Ads" },
  { label: "Lawyer Ads · Houston", href: "/ads/google/lawyers/houston/examples", tag: "Local Ads" },
  { label: "Retargeting Ads: Convert Visitors to Leads 2026", href: "/blog/retargeting-ads-convert-visitors-to-leads-2026", tag: "Blog" },
  { label: "Why Your Ads Aren't Converting", href: "/blog/why-ads-not-converting-how-to-fix", tag: "Blog" },
  { label: "High-Converting CTAs for Ads", href: "/blog/high-converting-cta-for-ads", tag: "Blog" },
  { label: "High-Converting Ad Hooks with Examples", href: "/blog/high-converting-ad-hooks-examples", tag: "Blog" },
  { label: "A/B Testing Ads for Better Performance 2026", href: "/blog/ab-testing-ads-better-performance-2026", tag: "Blog" },
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
            Retargeting · 2026 Guide
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white leading-tight sm:text-5xl">
            7 Retargeting Mistakes That Waste Your Ad Budget
          </h1>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Retargeting should be your highest-ROI channel. For most brands, it's a slow budget drain
            they don't notice until the numbers get embarrassing.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="border-l-2 border-rose-500 pl-5 max-w-2xl">
          <p className="text-gray-400">
            Warm audiences are your most valuable asset — people who already know your brand and showed
            real interest. But the wrong retargeting setup doesn't just underperform,{" "}
            <span className="text-white font-medium">
              it actively annoys your best prospects
            </span>{" "}
            and trains them to ignore you.
          </p>
          <p className="mt-3 text-gray-400">
            Here are the seven mistakes draining retargeting budgets in 2026, and exactly how to fix each
            one before it costs you another week of wasted spend.
          </p>
        </div>
      </section>

      {/* Main — 7 Mistakes */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-8">
          7 Retargeting Mistakes Killing Your ROI
        </h2>
        <div className="space-y-6">
          {mistakes.map((m) => (
            <div key={m.number} className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500/30 leading-none select-none">
                  {m.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{m.mistake}</h3>
                  <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-400 mb-1">
                        Why advertisers make it
                      </p>
                      <p className="text-sm text-gray-400">{m.why_made}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-rose-400 mb-1">
                        Why it hurts ROI
                      </p>
                      <p className="text-sm text-gray-400">{m.why_hurts}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">{m.explanation}</p>
                  {m.extra_link && (
                    <Link
                      href={m.extra_link.href}
                      className="inline-block mt-2 text-sm text-rose-400 hover:text-rose-300"
                    >
                      {m.extra_link.label}
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
            The Pattern Behind Wasted Retargeting Budgets
          </h2>
          <p className="text-gray-400 mb-4">
            Every one of these mistakes comes down to one root cause: treating retargeting like a copy of
            your cold campaign instead of a fundamentally different strategy.
          </p>
          <p className="text-gray-400 mb-5">
            Cold audiences need awareness and interest. Warm audiences need{" "}
            <span className="text-white font-medium">specificity, urgency, and relevance</span>. The
            moment you blur that line, you're burning money.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Segment before you spend — intent signals are worth more than audience size.",
              "Match the message to the buyer's stage, not your campaign's theme.",
              "Exclusions and frequency caps aren't optional — that's where ROI lives.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-rose-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/blog/retargeting-ads-convert-visitors-to-leads-2026"
              className="text-rose-400 hover:text-rose-300"
            >
              Full retargeting playbook for 2026 →
            </Link>
            <Link
              href="/blog/google-ads-vs-facebook-ads-lead-generation"
              className="text-rose-400 hover:text-rose-300"
            >
              Google Ads vs Facebook Ads for retargeting →
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
            Stop Losing Budget to Retargeting Mistakes
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            AdCampin audits your retargeting setup, flags what's leaking budget, and gives you a
            fix-first priority list. No guesswork, no wasted impressions.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-6 rounded-lg bg-rose-500 px-8 py-3 text-sm font-semibold text-white hover:bg-rose-400 transition-colors"
          >
            Fix My Retargeting — Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Why is retargeting important in advertising?",
              a: "Retargeting helps convert warm visitors who already interacted with your brand but didn't convert initially. These audiences have a far higher intent baseline than cold traffic — every impression is worth more when used correctly.",
            },
            {
              q: "What is the biggest retargeting mistake?",
              a: "Showing the same ad to every visitor without segmenting audiences is one of the most common mistakes. A checkout abandoner and a first-time blog reader are not the same audience and should never see the same creative or offer.",
            },
            {
              q: "How do I improve retargeting ROI?",
              a: "Improve retargeting ROI by segmenting audiences, rotating creatives every 10–14 days, capping frequency between 3–7 impressions per week, and matching offers to buyer intent. Start with exclusions — remove converters and bouncers before anything else.",
            },
            {
              q: "How often should I change retargeting creatives?",
              a: "Rotate creatives every 10–14 days for active retargeting campaigns. Monitor CTR and frequency together — if CTR drops while frequency climbs, the audience has fatigued. Swap creative immediately rather than waiting for CPA data to confirm it.",
            },
            {
              q: "What audiences should I exclude from retargeting?",
              a: "Always exclude recent converters (last 30–90 days), existing customers unless cross-selling, users who bounced in under 5 seconds, and anyone who has opted out. Smaller, cleaner audiences consistently outperform large, noisy ones.",
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