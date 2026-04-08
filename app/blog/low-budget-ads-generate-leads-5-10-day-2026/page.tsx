import Link from "next/link";
export const blogTitle =
  "Low Budget Ads: How to Generate Leads with $5–$10/Day (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to generate leads with low budget ads using $5–$10/day strategies, real examples, and proven tactics for 2026.",
  keywords: [
    "low budget ads",
    "ads with $5 per day",
    "generate leads cheap ads",
    "low budget facebook ads",
    "low budget google ads",
    "lead generation on small budget",
    "cheap ads strategy 2026",
    "ads for small business low budget",
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
          Ad<span className="text-emerald-400">Campin</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="#examples" className="hover:text-white transition-colors">Examples</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link
            href="/signup"
            className="ml-2 px-4 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const examples = [
  {
    id: 1,
    scenario: "Local Dentist",
    budget: "$7/day",
    platform: "Google Ads",
    strategy:
      "Run a Search campaign targeting high-intent keywords like 'emergency dentist near me' and 'teeth cleaning [city]'. Use a lead form extension directly on the ad.",
    adIdea:
      "Headline: 'Same-Day Dental Appointments – [City]' | Angle: Urgency + convenience for people actively searching.",
    explanation:
      "Dentistry searches are high-intent — the person needs help NOW. A tight geo-radius (5 km) and a single keyword cluster keep spend focused. Lead forms remove friction, so one click becomes a booked call.",
  },
  {
    id: 2,
    scenario: "Local Gym / Fitness Studio",
    budget: "$5/day",
    platform: "Facebook & Instagram Ads",
    strategy:
      "Run a Lead Generation campaign targeting women 25–45 within 8 km of the studio. Use a free 7-day trial offer and a native lead form so they never leave Facebook.",
    adIdea:
      "Headline: 'Free 7-Day Pass — No Commitment' | Angle: Zero-risk trial eliminates the biggest objection.",
    explanation:
      "Gyms win on impulse + proximity. A free trial lowers the decision barrier to almost zero. Hyper-local targeting means every rupee/dollar hits someone who could actually walk in tomorrow.",
  },
  {
    id: 3,
    scenario: "Independent Insurance Broker",
    budget: "$10/day",
    platform: "Google Ads",
    strategy:
      "Target bottom-funnel keywords: 'term life insurance quote', 'cheap car insurance [city]'. Send traffic to a single-field quote form landing page.",
    adIdea:
      "Headline: 'Compare Insurance Quotes in 60 Seconds' | Angle: Speed + savings promise.",
    explanation:
      "Insurance shoppers want comparison, not education. One tight ad group per product (life, car, health) prevents budget dilution. A minimal form (just name + phone) maximises completion rate.",
  },
  {
    id: 4,
    scenario: "Online Business Coach",
    budget: "$8/day",
    platform: "Facebook Ads",
    strategy:
      "Run a Lead Ad campaign offering a free '5-Day Revenue Challenge' PDF. Target self-employed people and small business owners aged 28–50, interest-layered with entrepreneurship.",
    adIdea:
      "Headline: 'Double Your Consulting Revenue in 90 Days' | Angle: Specific outcome + timeframe.",
    explanation:
      "Coaches need email leads, not random traffic. A free lead magnet pre-qualifies the audience and fills a nurture sequence. Interest layering narrows the pool to people who are already thinking about growth.",
  },
  {
    id: 5,
    scenario: "Hair Salon / Beauty Studio",
    budget: "$5/day",
    platform: "Instagram Ads",
    strategy:
      "Use a short Reel (15 sec before/after transformation) with a 'Book Now' CTA linking to an Instagram lead form offering a ₹200/$ discount on the first appointment.",
    adIdea:
      "Headline: 'Your Best Hair Day Starts Here — ₹200 Off Today' | Angle: Visual proof + instant incentive.",
    explanation:
      "Beauty is a visual category — Reels outperform static images 3:1 for engagement. A discount creates urgency. The lead form captures name + phone inside Instagram, so zero landing-page drop-off.",
  },
  {
    id: 6,
    scenario: "Real Estate Agent",
    budget: "$10/day",
    platform: "Facebook & Instagram Ads",
    strategy:
      "Run a Lead Generation ad targeting home buyers/renters aged 27–55 in a specific PIN code. Offer a free 'Neighbourhood Price Report' PDF as the lead magnet.",
    adIdea:
      "Headline: 'What Are Homes Selling for in [Neighbourhood]?' | Angle: Curiosity + local authority.",
    explanation:
      "Real estate buyers do weeks of research. Offering hyper-local data positions the agent as the expert before any sales call. PIN-code targeting ensures every lead is in the agent's actual catchment area.",
  },
  {
    id: 7,
    scenario: "HVAC / AC Repair Service",
    budget: "$6/day",
    platform: "Google Ads",
    strategy:
      "Run Search ads targeting '[city] AC repair', 'air conditioner not cooling', 'HVAC service near me'. Use call-only ads so leads ring directly — no landing page needed.",
    adIdea:
      "Headline: 'AC Repair Today — 1-Hour Response in [City]' | Angle: Speed + reliability.",
    explanation:
      "HVAC is an emergency category. Call-only ads eliminate every click-to-lead step and connect the customer directly to the business. Seasonal spikes (summer/winter) mean $6/day can yield multiple daily calls.",
  },
  {
    id: 8,
    scenario: "Immigration Lawyer",
    budget: "$10/day",
    platform: "Google Ads",
    strategy:
      "Target high-intent terms: 'immigration lawyer [city]', 'visa rejection appeal', 'work permit help'. Use a lead form extension and offer a free 15-minute consultation.",
    adIdea:
      "Headline: 'Free 15-Min Visa Consultation — Talk to a Lawyer Today' | Angle: Low commitment + expert access.",
    explanation:
      "Legal searches skew high-intent and high-value. Even one retained client can justify months of ad spend. A free consult removes the cost objection and builds trust before the sales conversation.",
  },
  {
    id: 9,
    scenario: "Online Tutoring / EdTech",
    budget: "$5/day",
    platform: "Facebook Ads",
    strategy:
      "Run a Lead Ad targeting parents of school-age children (6–16) within a specific city. Offer a free demo class. Use a carousel showing subject options (Maths, Science, English).",
    adIdea:
      "Headline: 'Free Demo Class for Your Child — Book in 30 Seconds' | Angle: Zero risk + fast action.",
    explanation:
      "Parents respond to zero-risk offers for their kids' education. Carousel format lets one ad serve multiple subjects, multiplying relevance without extra budget. Demo class = qualified, warm lead.",
  },
  {
    id: 10,
    scenario: "Restaurant / Cloud Kitchen",
    budget: "$5/day",
    platform: "Instagram Ads",
    strategy:
      "Run a photo/video ad showcasing the most photogenic dish, targeting foodies within 5 km. CTA: 'Order Now' linking to a WhatsApp lead form or direct menu link with first-order discount.",
    adIdea:
      "Headline: 'Best [Cuisine] in [City] — 20% Off Your First Order' | Angle: Appetite appeal + discount.",
    explanation:
      "Food is impulse-driven. A 5-km geo radius means every impression is a potential delivery. WhatsApp CTAs have 40–60% higher open rates than email, making follow-up almost instant.",
  },
];

const faqs = [
  {
    q: "Can $5/day ads actually generate leads?",
    a: "Yes — but only with tight targeting. A $5/day budget spread across a broad audience is wasted. Focused on one city, one service, and one offer, $5/day can generate 2–5 quality leads daily, especially on Google Search where intent is already high.",
  },
  {
    q: "Which platform is best for low-budget lead generation?",
    a: "Google Search Ads win for high-intent, emergency, or B2B services (dentists, lawyers, HVAC). Facebook and Instagram win for lifestyle, visual, or impulse products (gyms, salons, food). Lead forms on both platforms remove landing page costs — critical when budget is tight.",
  },
  {
    q: "How do I reduce cost per lead on a small budget?",
    a: "Three levers: (1) Narrow your audience — smaller radius, tighter demographics. (2) Use native lead forms instead of external landing pages to cut drop-off. (3) Start with one single offer and one ad creative. Testing too many variables burns budget fast. Once a winner is found, scale.",
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
      {/* JSON-LD */}
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.15),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              2026 Guide · Paid Ads · Lead Generation
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {blogTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              You don't need a big agency or a massive budget to run ads that work.{" "}
              <span className="text-white font-medium">$5–$10 a day</span> is enough — if you
              know exactly where to put it. Here are 10 real scenarios that prove it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="#examples"
                className="px-5 py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
              >
                See 10 Examples ↓
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
            Most small businesses think paid ads require hundreds of dollars a day. They don't.
            The secret is{" "}
            <span className="text-white font-semibold">intent targeting + a single offer</span>.
            Spend your $5–$10 reaching people who already want what you sell — not everyone on
            the internet.
          </p>
        </section>

        {/* ── 10 Examples ── */}
        <section id="examples" className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            10 Low-Budget Lead Generation Examples
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            Real scenarios · $5–$10/day · Platforms: Google, Facebook, Instagram
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {examples.map((ex) => (
              <div
                key={ex.id}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 flex flex-col gap-4 hover:border-emerald-500/30 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                      Example {ex.id}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-0.5">{ex.scenario}</h3>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {ex.budget}
                  </span>
                </div>

                {/* Platform badge */}
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-slate-700 text-gray-400 text-xs">
                    📣 {ex.platform}
                  </span>
                </div>

                {/* Strategy */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Strategy
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{ex.strategy}</p>
                </div>

                {/* Ad Idea */}
                <div className="rounded-md bg-slate-900 border border-white/5 p-3">
                  <p className="text-xs font-semibold text-emerald-400 mb-1">💡 Ad Idea</p>
                  <p className="text-gray-300 text-sm italic">{ex.adIdea}</p>
                </div>

                {/* Why it works */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Why it works
                  </p>
                    <Link
                    href="/signup"
                    className="inline-block mt-3 text-sm text-emerald-400 hover:text-emerald-300"
                    >
                    Generate similar ads →
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pattern / Insights ── */}
        <section className="bg-slate-900 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What All 10 Examples Have in Common
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "One Audience, One Offer",
                  body: "Every winning low-budget campaign targets a single, specific audience with a single, specific offer. Trying to sell everything to everyone is how you burn $10/day and get zero leads.",
                },
                {
                  icon: "📍",
                  title: "Hyper-Local Targeting",
                  body: "Restricting your ad radius to 5–10 km means your budget only reaches people who can physically use your service. Less waste, lower CPL, higher conversion.",
                },
                {
                  icon: "📋",
                  title: "Native Lead Forms",
                  body: "Facebook, Instagram, and Google all offer in-platform lead forms. No landing page = no bounce. Removing one step in the funnel can double your lead volume overnight.",
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

        {/* ── Internal Linking: Related Articles ── */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">Related Articles</h2>
          <p className="text-gray-500 text-sm mb-8">
            Deepen your paid ads knowledge with these guides.
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
                className="rounded-lg border border-white/10 bg-slate-800 p-4 text-sm text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors flex items-start gap-2"
              >
                <span className="text-emerald-500 mt-0.5 shrink-0">→</span>
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
              Browse industry and city-specific ad example libraries to steal proven strategies.
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
                  className="px-4 py-2 rounded-full border border-white/10 bg-slate-800 text-sm text-gray-300 hover:text-white hover:border-emerald-500/30 hover:bg-slate-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="cta" className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              Start Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Run Ads on $5–$10/Day?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              AdCampin helps small businesses launch high-intent, low-budget campaigns in
              minutes — no agency, no guesswork. Sign up free and launch your first ad today.
            </p>
            <a
              href="/signup"
              className="inline-block px-8 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-base hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Create Free Account →
            </a>
            <p className="mt-4 text-xs text-gray-600">No credit card required · Setup in 2 minutes</p>
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