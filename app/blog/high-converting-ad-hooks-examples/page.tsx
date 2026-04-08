import Link from "next/link";

export const blogTitle =
  "High-Converting Ad Hooks: 25 Examples That Stop the Scroll (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover 25 high-converting ad hooks that instantly grab attention and stop the scroll with real examples and proven frameworks for 2026.",
  keywords: [
    "ad hooks examples",
    "high converting ad hooks",
    "scroll stopping ads",
    "facebook ad hooks",
    "instagram ad hooks",
    "google ads hooks",
    "ad copy hooks 2026",
    "improve ad ctr",
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
          Ad<span className="text-violet-400">Campin</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="#examples" className="hover:text-white transition-colors">25 Hooks</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link
            href="/signup"
            className="ml-2 px-4 py-1.5 rounded-full bg-violet-500 text-white font-semibold text-sm hover:bg-violet-400 transition-colors"
          >
            Use These Hooks
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const curiosityHooks = [
  {
    id: 1,
    hook: "The dentist trick that big clinics don't want you to know about.",
    context: "Healthcare / Local Services",
    explanation:
      "Positions the brand as an insider revealing suppressed information. The word 'trick' implies a shortcut — exactly what a busy person wants. The implied adversary (big clinics) adds tension that forces a click to resolve.",
  },
  {
    id: 2,
    hook: "We tried 47 gym memberships in [City]. Here's the only one worth it.",
    context: "Fitness / Local Discovery",
    explanation:
      "Specificity (47) signals real research, not opinion. The 'only one' framing creates exclusivity and urgency. Readers feel they're getting a curated answer to a decision they've been avoiding.",
  },
  {
    id: 3,
    hook: "Nobody talks about this real estate loophole in Mumbai.",
    context: "Real Estate / Finance",
    explanation:
      "The word 'loophole' implies a legal advantage most buyers miss. Geo-specificity (Mumbai) filters for the exact audience. Curiosity is weaponised — you must click to find out what you're missing.",
  },
  {
    id: 4,
    hook: "What happens when you stop eating breakfast? (Not what you think.)",
    context: "Health / Nutrition / Supplements",
    explanation:
      "Contradicts a widely-held belief, triggering cognitive dissonance. The parenthetical '(Not what you think)' is a direct curiosity gap — it promises the reader they're about to be surprised, making the click feel low-effort and high-reward.",
  },
  {
    id: 5,
    hook: "Most lawyers lose your case before the first hearing. Here's why.",
    context: "Legal Services",
    explanation:
      "Alarming premise that applies to anyone who has or might hire a lawyer. The 'here's why' framing signals an explanation is coming, which the brain automatically wants to complete. Drives clicks from a high-intent, anxious audience.",
  },
  {
    id: 6,
    hook: "I spent $10,000 on Google Ads and got zero leads. Then I changed one thing.",
    context: "B2B / Marketing Services",
    explanation:
      "First-person failure story followed by a redemption tease. The dollar amount ($10,000) makes the failure feel real and relatable. The 'one thing' framework is a classic curiosity loop — the reader cannot close it without clicking.",
  },
  {
    id: 7,
    hook: "Your HVAC company is leaving money on the table every summer. Proof inside.",
    context: "Home Services / HVAC",
    explanation:
      "Direct address ('Your') creates personal relevance immediately. Loss-framing (leaving money) is more motivating than gain-framing for business owners. 'Proof inside' signals evidence, not just opinion — reducing scepticism.",
  },
  {
    id: 8,
    hook: "3 questions your immigration lawyer should answer before you pay anything.",
    context: "Legal / Immigration",
    explanation:
      "Empowers the reader with insider knowledge before a high-stakes financial decision. The number (3) sets clear expectations for a short read. Clicks come from people already in the decision funnel — your warmest prospects.",
  },
];

const painPointHooks = [
  {
    id: 9,
    hook: "Still paying full price for car insurance? You're probably overpaying by ₹4,000+.",
    context: "Insurance / Finance",
    explanation:
      "Calls out a behaviour (paying full price) and immediately assigns a specific cost to it. The '+' after the number implies the reality could be worse. Loss aversion kicks in — no one wants to be the person wasting ₹4,000 a year.",
  },
  {
    id: 10,
    hook: "Running ads that don't convert? This is the exact reason why.",
    context: "Marketing / Agency Services",
    explanation:
      "Diagnoses a pain the reader already feels without asking them to admit it first. 'Exact reason' implies a specific, actionable answer — not generic advice. Appeals to the frustration of wasted budget, a visceral emotion for small business owners.",
  },
  {
    id: 11,
    hook: "Tired of chasing clients? Here's how coaches get leads to come to them.",
    context: "Coaching / Consulting",
    explanation:
      "The word 'tired' does the heavy lifting — it validates exhaustion before offering relief. The contrast (chasing vs. coming to them) reframes the desired outcome clearly. Perfect for a cold audience that hasn't yet discovered inbound strategies.",
  },
  {
    id: 12,
    hook: "Your salon is empty on Tuesdays. We know why — and we can fix it.",
    context: "Beauty / Local Retail",
    explanation:
      "Hyper-specific pain point (slow mid-week days) that only a salon owner would feel. The 'we know why' phrase signals expertise without bragging. 'We can fix it' is a confident offer, not a vague promise — confidence converts.",
  },
  {
    id: 13,
    hook: "Losing sleep over your business finances? You're not alone — and it's fixable.",
    context: "Accounting / Finance / B2B",
    explanation:
      "Emotional validation before solution. 'You're not alone' removes shame and builds instant rapport. 'Fixable' introduces hope without overpromising. This hook converts because it meets the reader exactly where they are emotionally.",
  },
  {
    id: 14,
    hook: "Your child is struggling in school. Every month you wait makes it harder.",
    context: "EdTech / Tutoring",
    explanation:
      "Activates parental anxiety — one of the most powerful emotional levers in consumer advertising. The second sentence adds urgency without a deadline, which feels organic rather than manufactured. Creates immediate desire to act.",
  },
  {
    id: 15,
    hook: "Ordered food that arrived cold, late, and wrong? We built something different.",
    context: "Food Delivery / Restaurant",
    explanation:
      "Recaps a near-universal frustration in vivid, specific detail (cold, late, wrong). 'We built something different' positions the brand as a direct response to industry failure — not just another option. Makes the alternative feel meaningful.",
  },
  {
    id: 16,
    hook: "Your AC broke in a heatwave. The repair guy said 4 days. That's not okay.",
    context: "HVAC / Emergency Services",
    explanation:
      "Reconstructs the exact moment of maximum pain for an HVAC customer. 'That's not okay' validates the reader's frustration without them having to say it. This hook pre-loads emotional urgency, making the follow-up offer feel like a rescue.",
  },
];

const benefitHooks = [
  {
    id: 17,
    hook: "Get your first 10 leads in 7 days — or we work for free until you do.",
    context: "Marketing / Lead Gen Agency",
    explanation:
      "Specific outcome (10 leads), specific timeline (7 days), and a risk-reversal guarantee in one sentence. Every word reduces a conversion barrier. The guarantee signals confidence — only businesses that actually deliver make this offer.",
  },
  {
    id: 18,
    hook: "Lose 5kg in 30 days without giving up rice. Proven plan inside.",
    context: "Health / Nutrition / Fitness",
    explanation:
      "Quantified result + relatable constraint (rice is a cultural staple for a large audience). Overcomes the most common diet objection before it's raised. 'Proven plan inside' rewards the click with the promise of a complete solution.",
  },
  {
    id: 19,
    hook: "We'll write your entire Google Ads campaign in 24 hours. You approve, we launch.",
    context: "Marketing Services / SaaS",
    explanation:
      "Speed (24 hours) plus control (you approve) addresses the two biggest objections to hiring an ad agency: time and trust. The two-sentence structure mimics a conversation, making the offer feel personal rather than transactional.",
  },
  {
    id: 20,
    hook: "Book 3 new clients this month using only Instagram. No cold calls. No chasing.",
    context: "Coaching / Service Businesses",
    explanation:
      "Specific, believable outcome (3 clients) paired with a clear platform and two explicit 'no' statements that remove feared effort. The negatives do as much work as the positives — they eliminate objections before the reader forms them.",
  },
  {
    id: 21,
    hook: "Your teeth can look 10 years younger after one appointment. See real results.",
    context: "Dentistry / Cosmetic Services",
    explanation:
      "Vanity + time travel framing — 'younger' is one of the highest-performing emotional triggers in beauty and health advertising. 'One appointment' removes the barrier of a long commitment. 'Real results' signals social proof is available on click.",
  },
  {
    id: 22,
    hook: "Launch your online store in 48 hours. No tech skills needed.",
    context: "eCommerce / SaaS / Business Tools",
    explanation:
      "Speed promise (48 hours) demolishes the assumption that starting is hard. 'No tech skills needed' directly removes the #1 objection for non-technical entrepreneurs. This hook is effective precisely because it sounds too easy — the gap between that and believability drives the click.",
  },
  {
    id: 23,
    hook: "Property prices in [Neighbourhood] just dropped. Here's what smart buyers are doing.",
    context: "Real Estate",
    explanation:
      "News-style hook anchored in market timing creates immediate relevance. 'Smart buyers' is aspirational framing — the reader wants to be in that group. The open-ended 'here's what' is a classic curiosity bridge that demands resolution.",
  },
  {
    id: 24,
    hook: "₹500/month for a legal team on call. No retainers. No surprise bills.",
    context: "Legal / LegalTech",
    explanation:
      "Concrete price point makes the offer immediately evaluable — no information gap around cost, which is the leading reason people avoid lawyers. The two 'No' statements eliminate the two biggest fears around legal services in a single line.",
  },
  {
    id: 25,
    hook: "From zero followers to 10,000 in 90 days. Here's the exact content plan.",
    context: "Social Media / Creator Economy",
    explanation:
      "Before-and-after in numerical form — the brain processes numbers faster than descriptive language. 'Exact content plan' promises a tangible deliverable, not vague advice. Works because it's specific enough to be believable and aspirational enough to be desired.",
  },
];

const faqs = [
  {
    q: "What is an ad hook?",
    a: "An ad hook is the first line, image, or few seconds of your ad — the element designed to interrupt a user's scroll and pull them into the rest of your message. A hook doesn't sell; it earns the next second of attention. Without a strong hook, even the best offer in the world goes unread.",
  },
  {
    q: "How do you write high-converting ad hooks?",
    a: "The most effective hooks do one of three things: open a curiosity gap the reader must close, articulate a pain point more precisely than the reader could themselves, or present a specific outcome the reader deeply wants. Avoid starting with your company name or a generic benefit — lead with the reader's world, not yours.",
  },
  {
    q: "Why are hooks so important in ads?",
    a: "On social platforms, users make scroll-or-stop decisions in under 1.5 seconds. On Google, a headline either matches the searcher's intent immediately or gets ignored. The hook is the only part of your ad that every single viewer sees — everything else (the offer, the CTA, the landing page) only matters if the hook succeeds. Improving your hook is the highest-leverage change you can make to any campaign.",
  },
];

// ---------------------------------------------------------------------------
// Hook Card Component
// ---------------------------------------------------------------------------
function HookCard({ item }: { item: { id: number; hook: string; context: string; explanation: string } }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-800 p-6 hover:border-violet-500/30 transition-colors flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-extrabold flex items-center justify-center">
          {item.id}
        </span>
        <div className="flex-1">
          <p className="text-white font-bold text-base leading-snug">"{item.hook}"</p>
          <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-slate-700 text-gray-400 text-xs">
            {item.context}
          </span>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{item.explanation}</p>
      <Link
        href="/signup"
        className="inline-block mt-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
      >
        Use this hook in your ads →
      </Link>
    </div>
  );
}

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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.15),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold tracking-widest uppercase">
              2026 Guide · Ad Copywriting · Scroll-Stopping Hooks
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {blogTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              Your ad has{" "}
              <span className="text-white font-medium">1.5 seconds</span> to earn attention before
              the thumb moves on. These 25 hooks are built to win that moment — grouped by type,
              explained by psychology, ready to copy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="#examples"
                className="px-5 py-2.5 rounded-full bg-violet-500 text-white font-bold hover:bg-violet-400 transition-colors"
              >
                See All 25 Hooks ↓
              </Link>
              <Link
                href="#faq"
                className="px-5 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors"
              >
                What Is a Hook?
              </Link>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
            The best offer in the world fails if no one reads past the first line. A great hook
            doesn't just grab attention — it{" "}
            <span className="text-white font-semibold">
              pre-qualifies your audience, sets up your offer, and earns the click
            </span>{" "}
            before your competitor's ad even loads. Here are 25 that do exactly that.
          </p>
        </section>

        {/* ── Hook Groups ── */}
        <section id="examples" className="max-w-6xl mx-auto px-6 pb-20">

          {/* Group 1: Curiosity */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🧲</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hooks 1–8: Curiosity Hooks
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              These open a gap in the reader's mind that they feel compelled to close. They don't
              answer — they tease. Best used on cold audiences who don't know your brand yet.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {curiosityHooks.map((item) => (
                <HookCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Group 2: Pain Point */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🔥</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hooks 9–16: Pain Point Hooks
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              These articulate the reader's frustration more precisely than they could themselves.
              When someone reads a pain hook and thinks "how did they know?" — you've already won
              the click. Best for warm or retargeting audiences.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {painPointHooks.map((item) => (
                <HookCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Group 3: Benefit / Outcome */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🚀</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hooks 17–25: Benefit &amp; Outcome Hooks
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              These lead with a specific, desirable result — and make it feel achievable. The key
              is specificity: "lose 5kg" beats "get fit". Works best when paired with a risk
              reversal or proof element in the ad body.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {benefitHooks.map((item) => (
                <HookCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Pattern / Insights ── */}
        <section className="bg-slate-900 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Every Great Hook Has in Common
            </h2>
            <p className="text-gray-400 max-w-2xl mb-10 text-sm leading-relaxed">
              Across all 25 examples, three principles appear consistently. Master these and you
              can write a high-converting hook for any product, niche, or platform.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "👁️",
                  title: "It's About the Reader, Not You",
                  body: "Not a single high-performing hook starts with the brand name or 'We offer…'. Every one opens in the reader's world — their pain, their curiosity, their desired outcome. Your product is the solution; the hook establishes the problem.",
                },
                {
                  icon: "🔢",
                  title: "Specificity Signals Truth",
                  body: "Hooks that use specific numbers ('47 gyms', '₹4,000+', '90 days', '1.5 seconds') outperform vague claims because specificity feels researched, not invented. The brain trusts a number it wasn't expecting more than a round one.",
                },
                {
                  icon: "⚡",
                  title: "Create a Loop That Needs Closing",
                  body: "The most clicked hooks create an open question the reader's brain wants to resolve — a curiosity gap. Whether it's a surprising premise, an unfinished story, or a counter-intuitive claim, the click feels like a relief, not an effort.",
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
            Turn your hook into a full campaign with these guides.
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
              {
                href: "/blog/why-ads-not-converting-how-to-fix",
                label: "Why Your Ads Are Not Converting (And How to Fix Them)",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-slate-800 p-4 text-sm text-gray-300 hover:text-violet-400 hover:border-violet-500/30 transition-colors flex items-start gap-2"
              >
                <span className="text-violet-500 mt-0.5 shrink-0">→</span>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Explore More Ad Examples (Indexing Booster) ── */}
        <section className="bg-slate-900 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Explore More Ad Examples</h2>
            <p className="text-gray-500 text-sm mb-8">
              See how these hooks work inside full campaigns — by industry and city.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/ads/google/dentists/new-york/examples", label: "Dentists · New York" },
                { href: "/ads/google/lawyers/houston/examples", label: "Lawyers · Houston" },
                { href: "/ads/google/real-estate/mumbai/examples", label: "Real Estate · Mumbai" },
                { href: "/ads/google/restaurants/jaipur/examples", label: "Restaurants · Jaipur" },
                { href: "/ads/google/hvac/dallas/examples", label: "HVAC · Dallas" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full border border-white/10 bg-slate-800 text-sm text-gray-300 hover:text-white hover:border-violet-500/30 hover:bg-slate-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="cta" className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.12),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold tracking-widest uppercase">
              Launch Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Got Your Hook? Now Build the Campaign.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              AdCampin takes your hook and builds a complete, launch-ready ad campaign around it
              — targeting, creative, copy, and budget strategy. No agency required.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-3.5 rounded-full bg-violet-500 text-white font-extrabold text-base hover:bg-violet-400 transition-colors shadow-lg shadow-violet-500/20"
            >
              Build My Campaign Free →
            </Link>
            <p className="mt-4 text-xs text-gray-600">
              No credit card required · Launch in under 10 minutes
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
                <div key={i} className="rounded-lg border border-white/10 bg-slate-800 p-6">
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
              <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
              <Link href="/signup" className="hover:text-gray-400 transition-colors">Sign Up</Link>
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}