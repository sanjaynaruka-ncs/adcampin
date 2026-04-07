export const blogTitle =
  "Top 20 Ad Copy Mistakes That Kill Your Conversions (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Avoid the top ad copy mistakes that kill conversions. Learn what to fix with real examples and proven strategies for 2026.",
  keywords: [
    "ad copy mistakes",
    "why ads don't convert",
    "improve ad conversions",
    "ad copy tips 2026",
    "high converting ads",
    "ad copywriting mistakes",
    "facebook ads mistakes",
    "google ads mistakes",
  ],
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-black tracking-tight text-white">
          Ad<span className="text-orange-400">Campin</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="/blog" className="hover:text-white transition-colors">
            Blog
          </a>
          <a href="#examples" className="hover:text-white transition-colors">
            Examples
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a
            href="/signup"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Mistake Card ──────────────────────────────────────────────────────────────
function MistakeCard({
  number,
  title,
  badExample,
  explanation,
  fix,
}: {
  number: number;
  title: string;
  badExample: string;
  explanation: string;
  fix?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-800 p-6 hover:border-orange-500/40 transition-colors">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-sm">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-base mb-3 leading-snug">
            {title}
          </h3>
          <div className="bg-red-950/40 border border-red-500/20 rounded-md px-4 py-3 mb-3">
            <p className="text-xs text-red-400 uppercase tracking-widest font-semibold mb-1">
              ❌ Bad Copy
            </p>
            <p className="text-gray-300 text-sm italic">"{badExample}"</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            {explanation}
          </p>
          {fix && (
            <div className="flex items-start gap-2 mt-3">
              <span className="text-green-400 text-xs font-bold mt-0.5">
                ✅ FIX:
              </span>
              <p className="text-green-300/80 text-xs leading-relaxed">{fix}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({
  tag,
  title,
  sub,
}: {
  tag: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mb-8">
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full mb-3">
        {tag}
      </span>
      <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-400 text-sm">{sub}</p>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const clarityMistakes = [
    {
      number: 1,
      title: "Being Vague About What You're Selling",
      badExample: "We offer amazing solutions for your business needs.",
      explanation:
        "If someone can't tell what you sell in under 3 seconds, they're gone. Vague copy forces the reader to work — and they won't.",
      fix: 'Name your product and its #1 outcome. "AI scheduling software that cuts no-shows by 40%."',
    },
    {
      number: 2,
      title: "Burying the Benefit in the Headline",
      badExample: "Our platform has 47+ features including automation tools.",
      explanation:
        "Features are not benefits. Nobody wakes up wanting '47 features'. They want the result those features create.",
      fix: "Lead with the outcome, mention features later. 'Save 10 hrs/week on scheduling — powered by AI.'",
    },
    {
      number: 3,
      title: "Using Insider Jargon Your Audience Doesn't Speak",
      badExample:
        "Leverage synergistic omnichannel KPI optimization for ROI maximization.",
      explanation:
        "Jargon signals laziness. Real people don't talk like this — and they don't buy from copy that does.",
      fix: "Read your copy aloud. If it sounds like a consultant, rewrite it like you're texting a friend.",
    },
    {
      number: 4,
      title: "Weak or Missing Call-to-Action",
      badExample: "Click here to learn more about us.",
      explanation:
        '"Learn more" is the CTA equivalent of a shrug. It creates no urgency and promises nothing.',
      fix: 'Use action + outcome CTAs: "Start Your Free Trial" or "Get My Custom Quote Today."',
    },
    {
      number: 5,
      title: "Headline That Doesn't Match the Landing Page",
      badExample:
        'Ad says "50% Off Today Only" — landing page says "Schedule a Demo."',
      explanation:
        "Message mismatch destroys trust instantly. The user feels tricked and bounces before reading a word.",
      fix: "Mirror your ad headline on the landing page above the fold. Consistency = conversions.",
    },
  ];

  const offerMistakes = [
    {
      number: 6,
      title: "No Clear Offer — Just a Brand Announcement",
      badExample: "XYZ Corp — Trusted by Businesses Everywhere Since 1998.",
      explanation:
        "Brand awareness ads work for Nike. They don't work for SMBs spending $500/month on Google Ads. Lead with an offer.",
      fix: "Always answer: 'What do I get, and why now?' in your copy.",
    },
    {
      number: 7,
      title: "Offer Has No Urgency",
      badExample: "Sign up whenever you're ready.",
      explanation:
        "Without a deadline or scarcity signal, people bookmark you and forget. Procrastination is the silent conversion killer.",
      fix: "Add time or quantity limits: 'Only 12 spots left this month' or 'Offer ends Friday.'",
    },
    {
      number: 8,
      title: "Hiding the Price When Price Is a Selling Point",
      badExample:
        "Premium quality services — contact us for pricing information.",
      explanation:
        "If your price is competitive, show it. Hidden pricing creates friction and looks evasive.",
      fix: "Add 'Plans from $29/mo' or 'Free — no credit card required' directly in the ad.",
    },
    {
      number: 9,
      title: "Offering Too Many Things at Once",
      badExample:
        "Get our eBook, webinar, free trial, consultation, and checklist now!",
      explanation:
        "Too many offers dilute all of them. The paradox of choice is real — more options = fewer clicks.",
      fix: "Pick ONE lead offer per ad. Test others in separate campaigns.",
    },
    {
      number: 10,
      title: "The Offer Doesn't Match the Funnel Stage",
      badExample:
        'Cold traffic ad: "Book a $2,000 Strategy Package Today!" — no warmup.',
      explanation:
        "Asking a stranger to marry you on the first date never works. Cold traffic needs low-friction offers first.",
      fix: "Cold traffic → free value (guide, quiz, tool). Warm traffic → demo/trial. Hot traffic → purchase.",
    },
  ];

  const targetingMistakes = [
    {
      number: 11,
      title: "Writing for Everyone = Writing for No One",
      badExample: "Perfect for individuals, teams, enterprises, and students!",
      explanation:
        "The more you try to speak to everyone, the less anyone feels spoken to. Narrow your audience, sharpen your copy.",
      fix: "Write one ad per audience segment. A dentist ad should sound nothing like a SaaS ad.",
    },
    {
      number: 12,
      title: "Ignoring the Customer's Core Pain Point",
      badExample: "Our software has a clean, modern interface.",
      explanation:
        "Nobody buys software for a 'clean interface.' They buy it to stop wasting time, lose fewer leads, or look more professional.",
      fix: "Interview 3 real customers. Use their exact language about their problem in your headline.",
    },
    {
      number: 13,
      title: "Running the Same Ad to All Demographics",
      badExample:
        'Single ad: "Best Gym in Dallas" shown to 18-year-olds and 55-year-olds identically.',
      explanation:
        "A 22-year-old and a 52-year-old have completely different motivations, fears, and language patterns.",
      fix: "Segment by age, intent, or life stage. Create 2–3 ad variants per campaign minimum.",
    },
    {
      number: 14,
      title: "Geo Mismatch — Running Local Copy to Non-Local Audiences",
      badExample:
        '"Best Dentist in Brooklyn" shown to users in Los Angeles on Google Ads.',
      explanation:
        "Irrelevant geo targeting burns budget and drives up your CPC with zero chance of conversion.",
      fix: "Use dynamic location insertion in Google Ads or tightly defined radius targeting on Meta.",
    },
    {
      number: 15,
      title: "Talking About Yourself Instead of the Customer",
      badExample:
        "We are a family-owned business with 25 years of award-winning experience.",
      explanation:
        "Your prospect doesn't care about your backstory — they care about their problem. Shift the lens.",
      fix: "Replace every 'We' with 'You'. Rewrite: 'You get 25 years of proven expertise working for your home.'",
    },
  ];

  const conversionKillers = [
    {
      number: 16,
      title: "No Social Proof Anywhere in the Ad",
      badExample: "Try our weight loss program today!",
      explanation:
        "Without proof, your ad is just a claim. Claims are ignored. Proof is believed.",
      fix: 'Add a number or quote: "Joined by 14,000+ members" or "Lost 22 lbs in 8 weeks — Sarah T."',
    },
    {
      number: 17,
      title: "Slow Load on Mobile After Ad Click",
      badExample: "Great ad — landing page loads in 8 seconds on mobile.",
      explanation:
        "53% of mobile users abandon pages that take over 3 seconds. Your ad can be perfect and still lose.",
      fix: "Test landing page speed with PageSpeed Insights. Aim under 2.5s. Compress images and remove bloat.",
    },
    {
      number: 18,
      title: "Copy That Sounds Like Every Competitor",
      badExample: '"Fast, Affordable, Reliable Service — Call Us Today!"',
      explanation:
        "This is the most common ad copy on the internet. It blends into noise and triggers zero emotional response.",
      fix: "Find your ONE differentiator and hammer it. 'The only HVAC company in Dallas with same-day guarantees.'",
    },
    {
      number: 19,
      title: "Not Testing Ad Variations (Running One Version Forever)",
      badExample:
        "Running the same single ad creative for 6 months without testing.",
      explanation:
        "Ad fatigue is real. Even good copy dies. Without A/B tests, you'll never know what 'better' looks like.",
      fix: "Run at least 2 headlines and 2 descriptions per ad group. Let data pick the winner, not your gut.",
    },
    {
      number: 20,
      title: "Optimizing for Clicks, Not Conversions",
      badExample:
        '"FREE PIZZA 🍕🍕🍕" — huge CTR, zero relevant leads for your law firm.',
      explanation:
        "High CTR is vanity if the clicks don't convert. Clickbait attracts the wrong audience and wastes every dollar.",
      fix: "Optimize your bidding for conversions (leads/sales), not traffic. Pre-qualify in the copy itself.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogTitle,
    description: metadata.description,
    author: { "@type": "Organization", name: "AdCampin" },
    publisher: { "@type": "Organization", name: "AdCampin" },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why don't my ads convert even with high clicks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "High clicks with low conversions usually signal a mismatch between your ad promise and your landing page, a weak or unclear offer, or targeting the wrong audience. Fix the message-to-market match first.",
        },
      },
      {
        "@type": "Question",
        name: "How do I fix bad ad copy fast?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by rewriting your headline to focus on ONE clear benefit or outcome. Add a specific number, a social proof signal, and a strong CTA with urgency. Then A/B test two versions.",
        },
      },
      {
        "@type": "Question",
        name: "What actually improves CTR on Google and Facebook ads in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strong emotional hooks, local specificity, social proof numbers, clear offers with urgency, and relevant audience targeting all drive CTR up. Avoid generic copy — specificity always wins.",
        },
      },
    ],
  };

  return (
    <div className="bg-slate-950 min-h-screen text-gray-300">
      <Navbar />

      {/* ── JSON-LD Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full">
                2026 Guide
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-400/10 border border-red-400/20 px-3 py-1 rounded-full">
                Ad Copywriting
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              {blogTitle}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Most ads fail before anyone even reads the landing page. The copy
              itself kills the click — or kills the conversion. Here are the 20
              mistakes costing you money right now, with real examples and fast
              fixes.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#mistakes"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                See All 20 Mistakes ↓
              </a>
              <a
                href="#examples"
                className="border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Browse Ad Examples
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-gray-300 text-base leading-relaxed mb-3">
            You can have perfect targeting, a huge budget, and a beautiful
            landing page — and still get zero conversions if your ad copy is
            broken. The words are the first handshake. Get them wrong, and
            everything else is irrelevant.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            We analyzed hundreds of underperforming Google and Facebook ad
            campaigns and found the same 20 mistakes showing up again and again.
            Here's what to fix — and exactly how to fix it.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section id="mistakes" className="max-w-6xl mx-auto px-6 pb-16">
        {/* Group 1 */}
        <div className="mb-16">
          <SectionHeader
            tag="Mistakes 1–5"
            title="Clarity Issues"
            sub="If your audience can't understand what you're offering in 3 seconds, the ad has already failed."
          />
          <div className="grid gap-4">
            {clarityMistakes.map((m) => (
              <MistakeCard key={m.number} {...m} />
            ))}
          </div>
        </div>

        {/* Group 2 */}
        <div className="mb-16">
          <SectionHeader
            tag="Mistakes 6–10"
            title="Offer Issues"
            sub="A confusing or weak offer kills conversions before the user even thinks about clicking."
          />
          <div className="grid gap-4">
            {offerMistakes.map((m) => (
              <MistakeCard key={m.number} {...m} />
            ))}
          </div>
        </div>

        {/* Group 3 */}
        <div className="mb-16">
          <SectionHeader
            tag="Mistakes 11–15"
            title="Targeting & Message Mismatch"
            sub="The right message to the wrong person is still a failed ad. Match your copy to your audience's reality."
          />
          <div className="grid gap-4">
            {targetingMistakes.map((m) => (
              <MistakeCard key={m.number} {...m} />
            ))}
          </div>
        </div>

        {/* Group 4 */}
        <div className="mb-16">
          <SectionHeader
            tag="Mistakes 16–20"
            title="Conversion Killers"
            sub="These are the silent deal-breakers that turn ad spend into wasted budget with nothing to show."
          />
          <div className="grid gap-4">
            {conversionKillers.map((m) => (
              <MistakeCard key={m.number} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Patterns / Insights ── */}
      <section className="bg-slate-900 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full mb-4">
              Key Patterns
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              What All 20 Mistakes Have in Common
            </h2>
            <p className="text-gray-400 text-sm">
              Strip them down and three root causes explain 90% of ad copy
              failures.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "No Empathy",
                body: "Winning copy starts with the customer's pain, not the brand's features. Most failed ads are written from the inside out.",
              },
              {
                icon: "⚡",
                title: "No Urgency",
                body: "Humans procrastinate by default. Without a deadline, scarcity signal, or compelling reason to act now — they don't.",
              },
              {
                icon: "🔗",
                title: "No Continuity",
                body: "Ad copy, landing page, and offer must be a seamless chain. Break any link — the conversion dies right there.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 text-center"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Linking: Ad Examples ── */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full mb-3">
            Explore More Ad Examples
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            See High-Converting Ad Copy by Industry
          </h2>
          <p className="text-gray-400 text-sm">
            Real ad examples broken down with analysis — steal what works for
            your niche.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              href: "/ads/google/dentists/new-york/examples",
              label: "Dentists — New York",
              sub: "Google Ads Examples",
              icon: "🦷",
            },
            {
              href: "/ads/google/lawyers/houston/examples",
              label: "Lawyers — Houston",
              sub: "Google Ads Examples",
              icon: "⚖️",
            },
            {
              href: "/ads/google/real-estate/mumbai/examples",
              label: "Real Estate — Mumbai",
              sub: "Google Ads Examples",
              icon: "🏠",
            },
            {
              href: "/ads/google/restaurants/jaipur/examples",
              label: "Restaurants — Jaipur",
              sub: "Google Ads Examples",
              icon: "🍽️",
            },
            {
              href: "/ads/google/hvac/dallas/examples",
              label: "HVAC — Dallas",
              sub: "Google Ads Examples",
              icon: "❄️",
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-white/10 bg-slate-800 p-5 hover:border-orange-500/40 hover:bg-slate-800/80 transition-all flex items-center gap-4"
            >
              <span className="text-3xl">{link.icon}</span>
              <div>
                <p className="text-white font-bold text-sm group-hover:text-orange-300 transition-colors">
                  {link.label}
                </p>
                <p className="text-gray-500 text-xs">{link.sub}</p>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-orange-400 transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Blog-to-Blog Internal Links ── */}
      <section className="bg-slate-900 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full mb-3">
              Related Articles
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Keep Reading
            </h2>
            <p className="text-gray-400 text-sm">
              Go deeper on ad copy strategy, platform comparisons, and
              real-world examples.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                href: "/blog/best-google-ads-examples-small-businesses-2026",
                title: "Best Google Ads Examples for Small Businesses (2026)",
                sub: "Real campaigns, real results — modeled for SMBs.",
                tag: "Google Ads",
              },
              {
                href: "/blog/how-to-write-facebook-ads-local-business",
                title: "How to Write Facebook Ads for Local Businesses",
                sub: "Step-by-step copy framework for local campaigns.",
                tag: "Facebook Ads",
              },
              {
                href: "/blog/google-ads-vs-facebook-ads-lead-generation",
                title: "Google Ads vs Facebook Ads for Lead Generation",
                sub: "Which platform actually wins for your industry?",
                tag: "Strategy",
              },
            ].map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="group rounded-lg border border-white/10 bg-slate-800 p-6 hover:border-orange-500/30 transition-all"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded mb-3">
                  {post.tag}
                </span>
                <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-orange-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs">{post.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-950/40 to-slate-900 p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
          <div className="relative">
            <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">
              Stop Guessing. Start Converting.
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Generate High-Converting Ad Copy <br className="hidden md:block" />
              in Under 60 Seconds
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
              AdCampin uses AI trained on thousands of top-performing ads to
              write copy that avoids every mistake on this list — automatically.
            </p>
            <a
              href="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-black text-base px-10 py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/20"
            >
              Start Free — No Credit Card Required
            </a>
            <p className="text-gray-600 text-xs mt-4">
              Join 14,000+ businesses already running smarter ads
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        id="faq"
        className="bg-slate-900 border-t border-white/10 max-w-full"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1 rounded-full mb-3">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Why don't my ads convert even with high click-through rates?",
                  a: "High CTR with low conversions almost always means a message mismatch between your ad and your landing page, or a weak offer once users arrive. Fix your landing page headline to mirror your ad copy first.",
                },
                {
                  q: "How do I fix my ad copy fast without starting over?",
                  a: "Rewrite just the headline to focus on one specific benefit or outcome. Add a number ('Save 3 hours/day'), proof ('Trusted by 5,000+ businesses'), and urgency ('Offer ends Sunday'). Test two versions and let data decide.",
                },
                {
                  q: "What actually improves CTR on Google and Facebook ads in 2026?",
                  a: "Specificity beats everything. Local callouts, real numbers, strong emotional hooks tied to a pain point, and clear urgency signals consistently outperform generic copy. Run at least 2 variants per ad set to find the winner.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-lg border border-white/10 bg-slate-800 p-5 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-white font-semibold text-sm list-none">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-gray-500 group-open:text-orange-400 transition-colors">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026{" "}
            <span className="text-gray-400 font-semibold">AdCampin</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="/blog" className="hover:text-gray-400 transition-colors">
              Blog
            </a>
            <a href="/signup" className="hover:text-gray-400 transition-colors">
              Sign Up
            </a>
            <a
              href="/privacy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}