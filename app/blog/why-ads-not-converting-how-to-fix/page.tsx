import Link from "next/link";
export const blogTitle =
  "Why Your Ads Are Not Converting (And How to Fix Them Fast) [2026 Guide]";

export const metadata = {
  title: blogTitle,
  description:
    "Discover why your ads are not converting and learn fast, practical fixes with real examples to improve conversions in 2026.",
  keywords: [
    "ads not converting",
    "why ads fail",
    "fix ad conversions",
    "improve ad performance",
    "low conversion ads",
    "facebook ads not converting",
    "google ads not converting",
    "increase ad conversion rate",
  ],
};

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          Ad<span className="text-rose-400">Campin</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="#examples" className="hover:text-white transition-colors">
            10 Fixes
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
          <a
            href="/signup"
            className="ml-2 px-4 py-1.5 rounded-full bg-rose-500 text-white font-semibold text-sm hover:bg-rose-400 transition-colors"
          >
            Fix My Ads
          </a>
        </div>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const problems = [
  {
    id: 1,
    problem: "Your Hook Doesn't Stop the Scroll",
    category: "Weak Hook",
    badExample:
      "Headline: 'We offer the best dental services in the city at affordable prices.'",
    fix: "Lead with a pain point or a bold, specific claim in the first 3 words. Test: 'Toothache at 2AM? We're Open.' or 'Most Dentists Miss This.'",
    explanation:
      "Users decide in under 1.5 seconds whether to keep scrolling. A generic benefit statement blends into every other ad. A sharp pain point or pattern-interrupt creates an involuntary pause — and that pause is your conversion window.",
  },
  {
    id: 2,
    problem: "You're Targeting Too Broad an Audience",
    category: "Targeting",
    badExample:
      "Facebook campaign targeting: All adults 18–65, United States, interests: fitness, health, wellness.",
    fix: "Narrow to a single persona: Women 30–45, within 10 km of your studio, who follow specific competitor pages. Add an income or behaviour layer if available.",
    explanation:
      "A broad audience forces the algorithm to guess who to show your ad to. It burns budget on low-probability clicks. Tight targeting = higher relevance score = lower CPM = more leads per dollar spent.",
  },
  {
    id: 3,
    problem: "Your Offer Is Vague or Uncommitted",
    category: "Poor Offer",
    badExample:
      "CTA: 'Learn More About Our Services' | Offer: 'Contact us for a quote today.'",
    fix: "Replace with a specific, zero-risk offer: 'Free 15-Minute Consultation — No Obligation', 'Get Your Custom Quote in 60 Seconds', or 'Free Demo Class — Book Now, Pay Never.'",
    explanation:
      "Vague CTAs create decision paralysis. A specific offer tells the visitor exactly what they get and removes the fear of commitment. Specificity signals confidence — and confidence converts.",
  },
  {
    id: 4,
    problem: "Your Landing Page Doesn't Match the Ad",
    category: "Bad Landing Flow",
    badExample:
      "Ad: '$49 First Month at Our Gym — Claim Now' → Landing page: Generic homepage with 8 navigation links and no mention of the $49 offer.",
    fix: "Build or use a dedicated landing page that mirrors the ad headline word-for-word. The offer, the visual, and the CTA must be identical on both sides.",
    explanation:
      "This is called 'message match' — and breaking it causes 70–80% of ad drop-off. When someone clicks expecting a specific offer and lands on a generic page, they bounce instantly. Match = trust = conversion.",
  },
  {
    id: 5,
    problem: "You Have Too Many CTAs on the Page",
    category: "Bad Landing Flow",
    badExample:
      "Landing page with: 'Call Us', 'Book Online', 'Download Brochure', 'Follow on Instagram', 'Subscribe to Newsletter' — all above the fold.",
    fix: "One page, one action. Pick the conversion that matters most (book a call, submit a lead form, buy now) and remove every other link. Use secondary CTAs only below the fold.",
    explanation:
      "Every additional option reduces the probability of any one action being taken — the paradox of choice in action. A single, clear CTA can increase conversions by 30–40% on the same traffic.",
  },
  {
    id: 6,
    problem: "You're Using the Wrong Platform for Your Category",
    category: "Wrong Platform",
    badExample:
      "HVAC repair company running Instagram Story ads to build brand awareness instead of Google Search ads targeting 'AC broken emergency repair.'",
    fix: "Match platform to purchase intent. Emergency/high-intent services (legal, medical, repair) → Google Search. Visual/lifestyle/impulse (salons, food, gyms) → Instagram/Facebook.",
    explanation:
      "Instagram is a discovery platform. Google Search captures active demand. Running brand-awareness ads on Instagram for an AC repair service means you're interrupting someone's scroll — not reaching someone who needs you right now.",
  },
  {
    id: 7,
    problem: "Your Ad Creative Is Stock-Photo Generic",
    category: "Weak Creative",
    badExample:
      "Facebook ad using a royalty-free stock image of a smiling woman in a white lab coat with no context. No text overlay, no brand colours.",
    fix: "Use real photos of your team, your space, or your actual clients (with permission). Add a bold text overlay with your core offer. UGC-style (phone-shot) videos outperform studio shots by 2–3x on Meta.",
    explanation:
      "Users have learned to ignore polished stock imagery — their brains label it as an ad and skip. Authentic, imperfect visuals break the pattern. Real faces and real spaces signal trustworthiness faster than any headline.",
  },
  {
    id: 8,
    problem: "Your Form Is Too Long and Asks Too Much",
    category: "Bad Landing Flow",
    badExample:
      "Lead form: Name, Surname, Phone, Email, Company, Job Title, Budget Range, Timeline, How Did You Hear About Us? — 9 fields for a free consultation.",
    fix: "Cut to 2–3 fields maximum for the first touch: Name + Phone, or Name + Email. Collect additional data on the confirmation page or during the sales call.",
    explanation:
      "Every additional form field drops completion rate by roughly 10–15%. A 9-field form for a free consultation is a credibility mismatch — you're asking for a CV before saying hello. Reduce friction, increase submissions.",
  },
  {
    id: 9,
    problem: "You're Running Ads Without a Retargeting Layer",
    category: "Targeting",
    badExample:
      "Cold traffic campaign only. No retargeting audiences built. No pixel event tracking. Visitors who bounce are never seen again.",
    fix: "Install the Meta Pixel and Google Tag on every page. Build a retargeting audience from page visitors (30-day window) and serve them a different, more specific ad — a testimonial, a discount, or a FAQ-style creative.",
    explanation:
      "Most people don't convert on the first visit — research says 6–8 touchpoints are the average before a B2C purchase decision. Retargeting captures warm leads at a fraction of cold-traffic CPL. Without it, you're leaving 80% of your budget's potential on the table.",
  },
  {
    id: 10,
    problem: "You're Not Testing — You're Guessing",
    category: "No Testing Strategy",
    badExample:
      "Running one ad creative for 3 months with no variation. Adjusting budget up and down based on gut feeling. No A/B test in place.",
    fix: "For every campaign, run 2–3 ad variations: same audience, different hooks. After 7 days and at least 50 impressions each, kill the lowest CTR and double the budget on the winner. Repeat weekly.",
    explanation:
      "Ads that feel right to you are often ignored by your audience — and vice versa. Systematic testing replaces assumptions with data. Even a 0.5% CTR lift compounds into significantly lower CPL over a 30-day campaign.",
  },
];

const faqs = [
  {
    q: "Why are my ads not converting?",
    a: "The most common culprits are: a weak or generic hook that fails to stop the scroll, targeting an audience that's too broad or wrong for your offer, a landing page that doesn't match the ad's promise, or an offer that's too vague to prompt action. Most ad failures trace back to one of these four areas — fix them in order.",
  },
  {
    q: "How do I fix low-converting ads quickly?",
    a: "Start with the lowest-effort, highest-impact change: tighten your audience targeting and ensure your ad headline matches your landing page headline word-for-word (message match). Then reduce your lead form to 2–3 fields. These three changes alone can double conversion rate within 48–72 hours without touching your creative.",
  },
  {
    q: "What is a good conversion rate for paid ads?",
    a: "It depends heavily on industry and platform. For Google Search ads, 5–10% conversion-to-lead is solid. For Facebook lead gen campaigns, 10–20% on a native lead form is achievable. Landing page conversion rates typically range from 2–5% for cold traffic. If you're below 1%, you have a targeting or message-match problem — not a budget problem.",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function BlogPage() {
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogTitle,
    description: metadata.description,
    author: { "@type": "Organization", name: "AdCampin" },
    publisher: { "@type": "Organization", name: "AdCampin" },
    datePublished: "2026-01-01",
    dateModified: "2026-04-08",
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <div className="min-h-screen bg-slate-950 text-gray-300 font-sans">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-slate-950 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(244,63,94,0.14),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold tracking-widest uppercase">
              2026 Guide · Ad Optimization · Conversion Fix
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {blogTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              Burning budget with nothing to show for it is the most frustrating part of running
              ads. The good news?{" "}
              <span className="text-white font-medium">
                Most conversion problems have a fast, specific fix.
              </span>{" "}
              Here are the 10 most common reasons — and exactly what to do about each one.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="#examples"
                className="px-5 py-2.5 rounded-full bg-rose-500 text-white font-bold hover:bg-rose-400 transition-colors"
              >
                See 10 Fixes ↓
              </a>
              <a
                href="#faq"
                className="px-5 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors"
              >
                Jump to FAQ
              </a>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
            The problem is almost never your budget. It's one of a handful of fixable mistakes —
            a mismatched landing page, a weak hook, the wrong platform, a form that asks too
            much. Identify the right culprit and you can{" "}
            <span className="text-white font-semibold">turn a failing campaign around in 48 hours</span>.
          </p>
        </section>

        {/* ── 10 Problems + Fixes ── */}
        <section id="examples" className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            10 Reasons Your Ads Aren't Converting (+ Fast Fixes)
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            Each problem includes a real bad example, the fix, and why it works.
          </p>

          <div className="flex flex-col gap-6">
            {problems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 hover:border-rose-500/30 transition-colors"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-extrabold flex items-center justify-center">
                      {item.id}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-snug">
                      {item.problem}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-700 border border-white/5 text-gray-400 text-xs font-semibold whitespace-nowrap">
                    {item.category}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Bad example */}
                  <div className="rounded-md bg-rose-950/30 border border-rose-500/20 p-4">
                    <p className="text-xs font-semibold text-rose-400 mb-2 flex items-center gap-1.5">
                      <span>✗</span> What People Do Wrong
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      {item.badExample}
                    </p>
                  </div>

                  {/* Fix */}
                  <div className="rounded-md bg-emerald-950/30 border border-emerald-500/20 p-4">
                    <p className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                      <span>✓</span> The Fast Fix
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.fix}</p>
                  </div>
                </div>

                {/* Explanation */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Why This Fix Works
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.explanation}</p>
                  <Link
                    href="/signup"
                    className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
                    >
                    Fix this in your ads →
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pattern / Insights ── */}
        <section className="bg-slate-900 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Pattern Behind Every Failing Ad
            </h2>
            <p className="text-gray-400 max-w-2xl mb-10 text-sm leading-relaxed">
              After studying thousands of underperforming campaigns, the same root causes appear
              again and again. Fix these first before adjusting your budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎣",
                  title: "Hook → Offer → Action",
                  body: "Every converting ad follows this exact sequence. If any one of these three steps is weak, the chain breaks. Audit your ad against each step before changing anything else.",
                },
                {
                  icon: "🔗",
                  title: "Message Match is Non-Negotiable",
                  body: "The #1 silent conversion killer. If your ad says one thing and your landing page says another, you've already lost the click. Every word, visual, and offer must carry through from ad to confirmation page.",
                },
                {
                  icon: "📊",
                  title: "Data Beats Gut Feel, Every Time",
                  body: "The ad that feels right to you is the least reliable signal. Run controlled tests — same audience, different creatives — and let click-through rate and CPL tell you what's working.",
                },
              ].map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-lg border border-white/10 bg-slate-800 p-6"
                >
                  <div className="text-3xl mb-3">{insight.icon}</div>
                  <h3 className="text-white font-bold mb-2">{insight.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{insight.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Articles ── */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">Related Articles</h2>
          <p className="text-gray-500 text-sm mb-8">
            Go deeper on specific platforms and tactics.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/blog/best-google-ads-examples-small-businesses-2026",
                label: "Best Google Ads Examples for Small Businesses (2026)",
              },
              {
                href: "/blog/how-to-write-facebook-ads-local-business",
                label: "How to Write Facebook Ads for Local Businesses",
              },
              {
                href: "/blog/google-ads-vs-facebook-ads-lead-generation",
                label: "Google Ads vs Facebook Ads for Lead Generation",
              },
              {
                href: "/blog/top-20-ad-copy-mistakes",
                label: "Top 20 Ad Copy Mistakes (And How to Fix Them)",
              },
              {
                href: "/blog/how-to-get-leads-instagram-ads",
                label: "How to Get Leads with Instagram Ads",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-slate-800 p-4 text-sm text-gray-300 hover:text-rose-400 hover:border-rose-500/30 transition-colors flex items-start gap-2"
              >
                <span className="text-rose-500 mt-0.5 shrink-0">→</span>
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* ── Explore More Ad Examples (Indexing Booster) ── */}
        <section className="bg-slate-900 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Explore More Ad Examples</h2>
            <p className="text-gray-500 text-sm mb-8">
              See real, proven ad structures by industry and city — ready to adapt.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  href: "/ads/google/dentists/new-york/examples",
                  label: "Dentists · New York",
                },
                {
                  href: "/ads/google/lawyers/houston/examples",
                  label: "Lawyers · Houston",
                },
                {
                  href: "/ads/google/real-estate/mumbai/examples",
                  label: "Real Estate · Mumbai",
                },
                {
                  href: "/ads/google/restaurants/jaipur/examples",
                  label: "Restaurants · Jaipur",
                },
                {
                  href: "/ads/google/hvac/dallas/examples",
                  label: "HVAC · Dallas",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full border border-white/10 bg-slate-800 text-sm text-gray-300 hover:text-white hover:border-rose-500/30 hover:bg-slate-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="cta" className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(244,63,94,0.12),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold tracking-widest uppercase">
              Fix Your Ads Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Stop Guessing. Start Converting.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              AdCampin diagnoses underperforming campaigns and gives you a step-by-step fix —
              tailored to your industry, platform, and budget. No agency. No guesswork.
            </p>
            <a
              href="/signup"
              className="inline-block px-8 py-3.5 rounded-full bg-rose-500 text-white font-extrabold text-base hover:bg-rose-400 transition-colors shadow-lg shadow-rose-500/20"
            >
              Fix My Ads Free →
            </a>
            <p className="mt-4 text-xs text-gray-600">
              No credit card required · Results in minutes
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="bg-slate-900 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-slate-800 p-6"
                >
                  <h3 className="text-white font-semibold text-base mb-3">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/10 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <span>© 2026 AdCampin. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/blog" className="hover:text-gray-400 transition-colors">
                Blog
              </Link>
              <Link href="/signup" className="hover:text-gray-400 transition-colors">
                Sign Up
              </Link>
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}