import Link from "next/link";

export const blogTitle =
  "Local Business Ads: 10 Proven Campaign Structures That Work (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover 10 proven campaign structures for local business ads that consistently generate leads and conversions in 2026.",
  keywords: [
    "local business ads",
    "ad campaign structure",
    "google ads structure local business",
    "facebook ads structure",
    "lead generation campaigns",
    "local ads strategy 2026",
    "campaign structure examples",
    "ads for small business",
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
          Ad<span className="text-amber-400">Campin</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="#examples" className="hover:text-white transition-colors">
            10 Structures
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
          <Link
            href="/signup"
            className="ml-2 px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors"
          >
            Build My Campaign
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const campaigns = [
  {
    id: 1,
    type: "Google Search — Single Keyword Ad Group (SKAG)",
    tag: "Google Ads",
    structure:
      "One campaign → one ad group per service keyword → 2–3 tightly matched ads → dedicated landing page per group.",
    useCase:
      "Dentists, lawyers, HVAC companies — any local service with high-intent, transactional search terms.",
    explanation:
      "SKAGs give you maximum control over Quality Score because every keyword, ad, and landing page are perfectly aligned. Google rewards relevance with lower CPCs. For local businesses where one booked appointment can be worth hundreds of dollars, even a marginal CPL improvement compounds significantly.",
  },
  {
    id: 2,
    type: "Facebook Lead Generation — Single Offer, Narrow Radius",
    tag: "Facebook Ads",
    structure:
      "One campaign → one ad set targeting a 5–8 km radius, single age/gender persona → one lead form offer (free trial, free consult, discount) → two creative variants (A/B).",
    useCase:
      "Gyms, salons, yoga studios, tutoring centres — lifestyle businesses where proximity drives decisions.",
    explanation:
      "Hyper-local radius targeting keeps every impression within actual driving distance of your location. A single offer removes decision fatigue. Two variants let you identify the winning creative within 7 days without burning budget on a 5-way test.",
  },
  {
    id: 3,
    type: "Google Search — Emergency / High-Intent Call-Only",
    tag: "Google Ads",
    structure:
      "One campaign → call-only ads only → keywords: '[service] near me', '[service] emergency [city]' → ad scheduling: business hours + evenings → call conversion tracking.",
    useCase:
      "Plumbers, locksmiths, HVAC repair, emergency dentists — any service where the customer needs to speak to someone immediately.",
    explanation:
      "Call-only ads eliminate the landing page entirely. For emergency services, removing a single step in the funnel directly increases conversion rate because the customer's intent is at its peak at the moment of search. Calls convert to booked jobs 5–10x more than form submissions for this category.",
  },
  {
    id: 4,
    type: "Facebook + Instagram Retargeting — Warm Audience Re-Engagement",
    tag: "Facebook / Instagram Ads",
    structure:
      "Retargeting campaign → audiences: website visitors (30 days) + video viewers (75%) + lead form openers who didn't submit → exclusion: existing customers → ad: testimonial or FAQ-style creative → CTA: re-offer or limited-time incentive.",
    useCase:
      "Any local business running cold traffic campaigns. Essential layer for reducing wasted cold-traffic budget.",
    explanation:
      "Most first-time visitors don't convert. Retargeting recaptures people who already showed intent — at a fraction of the cold traffic CPL. A testimonial or objection-handling creative at this stage addresses why they didn't convert the first time, making it the highest-ROI campaign type in any local ad stack.",
  },
  {
    id: 5,
    type: "Google Performance Max — Local Store / Service Area",
    tag: "Google Ads",
    structure:
      "One PMax campaign → asset group per service category → upload: headlines (15), descriptions (4), images (lifestyle + product), logo, video (15-sec optional) → audience signals: in-market + competitor website visitors → conversion goal: lead form or phone call.",
    useCase:
      "Restaurants, retail shops, multi-service clinics — businesses with multiple offerings that benefit from Google's cross-channel machine learning.",
    explanation:
      "PMax runs across Search, Display, YouTube, Maps, and Gmail simultaneously using one budget. For local businesses that can't afford separate campaigns per channel, PMax does the distribution automatically. The key is feeding it strong audience signals and creative assets upfront — without them, it optimises blind.",
  },
  {
    id: 6,
    type: "Facebook Lookalike Audience Expansion — Cloning Your Best Customers",
    tag: "Facebook Ads",
    structure:
      "Custom audience: upload 500–1,000 existing customer phone numbers/emails → create 1% Lookalike audience in the same country/region → run lead gen campaign to Lookalike only → separate from cold interest-based campaigns.",
    useCase:
      "Businesses with an existing customer base of 500+ — real estate agents, established clinics, subscription services.",
    explanation:
      "A 1% Lookalike built from real customers is statistically your best cold audience because Meta finds people who share behaviours, demographics, and online patterns with people who already bought from you. It consistently outperforms interest-based targeting by 20–40% CPL for established local businesses.",
  },
  {
    id: 7,
    type: "Google Ads — Competitor Conquest Campaign",
    tag: "Google Ads",
    structure:
      "Separate campaign → keywords: competitor brand names (exact and phrase match) → ads: highlight your differentiation (price, speed, guarantee) → landing page: direct comparison or superior offer → separate budget from primary campaign.",
    useCase:
      "Law firms, dental clinics, insurance brokers, gyms — categories with strong brand-aware competitors where searchers are already in buy mode.",
    explanation:
      "Someone searching a competitor by name has already decided they want a solution — they just haven't committed to a provider. Intercepting this search with a compelling differentiator (better price, faster service, stronger guarantee) converts at a high rate because the intent is pure. Keep this in a separate campaign to protect your primary Quality Score.",
  },
  {
    id: 8,
    type: "Instagram Reels Lead Ad — Visual Proof + Instant Form",
    tag: "Instagram Ads",
    structure:
      "One campaign → Reels placement only → creative: 15–30 sec before/after or process video → overlay text: hook in first 2 seconds → CTA: 'Book Now' or 'Claim Offer' → native instant form: 2–3 fields max (name, phone, service interest).",
    useCase:
      "Salons, cosmetic clinics, home renovation companies, personal trainers — any business where transformation is visible and emotionally compelling.",
    explanation:
      "Reels receive 3x the organic reach of static posts, and Instagram's algorithm prioritises Reels in paid distribution too. A visual transformation in the first 2 seconds does the hook's job. The native form keeps leads inside Instagram — removing the landing page means zero bounce rate from ad to lead.",
  },
  {
    id: 9,
    type: "Google Display Remarketing — Local Awareness Reinforcement",
    tag: "Google Display Ads",
    structure:
      "Display remarketing campaign → audience: all website visitors (14 days) + Google Maps searchers (if enabled) → ad sizes: responsive display → creative: logo + offer + 'Still looking?' headline → frequency cap: 3–5 impressions/day → exclusions: converted users.",
    useCase:
      "Real estate agents, educational institutions, dental clinics — services with a longer consideration phase (3–30 days).",
    explanation:
      "Display remarketing keeps your brand visible during the consideration window between first search and final decision. At $2–5 CPM, it's the cheapest way to maintain top-of-mind awareness with people who already know you exist. The frequency cap prevents ad fatigue while ensuring consistent exposure across news sites, YouTube, and apps.",
  },
  {
    id: 10,
    type: "Multi-Platform Funnel — Search → Social → Retarget",
    tag: "Google + Facebook + Instagram",
    structure:
      "Stage 1: Google Search (capture active demand) → Stage 2: Facebook/Instagram (nurture non-converters with social proof) → Stage 3: Retargeting on both platforms (convert warm audience with time-sensitive offer) → unified conversion tracking across all stages.",
    useCase:
      "Established local businesses with $30–$50/day budget — clinics, coaching businesses, premium service providers who want a full-funnel approach.",
    explanation:
      "No single platform captures all your potential customers at every stage of their decision journey. Google catches those actively searching; Facebook and Instagram warm up those who weren't ready; retargeting closes those who considered but didn't act. This structure typically achieves the lowest blended CPL of any setup because each stage does only the job it's best at.",
  },
];

const faqs = [
  {
    q: "What is the best campaign structure for local ads?",
    a: "For most local businesses starting with a limited budget, the Single Keyword Ad Group (SKAG) on Google Search paired with a Facebook Lead Ad to a hyper-local radius gives the fastest, most measurable results. Once you have conversion data, layer in retargeting. The 'best' structure depends on your category — high-intent services (HVAC, legal, dental) favour Google Search; lifestyle and visual services (gyms, salons, food) favour Instagram and Facebook.",
  },
  {
    q: "How do I structure Google Ads for a local business?",
    a: "Start with one campaign per service category, not one campaign for everything. Inside each campaign, create tightly themed ad groups — one ad group per core keyword cluster. Each ad group should have 2–3 responsive search ads and point to a dedicated landing page that matches the keyword and ad headline exactly. Add location extensions, call extensions, and a negative keyword list from day one. This structure keeps Quality Score high and CPCs low.",
  },
  {
    q: "Which ad types work best for generating local leads?",
    a: "Google Search call-only ads and lead form extensions work best for emergency and high-intent services. Facebook and Instagram native lead forms work best for lifestyle and considered-purchase services. Retargeting — on both platforms — consistently delivers the lowest CPL of any format for local businesses because it targets people who already showed intent. The highest-performing local businesses run all three simultaneously.",
  },
];

// ---------------------------------------------------------------------------
// Campaign Card
// ---------------------------------------------------------------------------
function CampaignCard({
  item,
}: {
  item: {
    id: number;
    type: string;
    tag: string;
    structure: string;
    useCase: string;
    explanation: string;
  };
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-800 p-6 hover:border-amber-500/30 transition-colors flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold flex items-center justify-center">
            {item.id}
          </span>
          <h3 className="text-white font-bold text-base leading-snug">{item.type}</h3>
        </div>
        <span className="px-2.5 py-1 rounded-md bg-slate-700 border border-white/5 text-amber-400 text-xs font-semibold whitespace-nowrap">
          {item.tag}
        </span>
      </div>

      {/* Structure */}
      <div className="rounded-md bg-slate-900 border border-white/5 p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
          Campaign Structure
        </p>
        <p className="text-gray-300 text-sm leading-relaxed font-mono">{item.structure}</p>
      </div>

      {/* Two-col: use case + explanation */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Best For
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{item.useCase}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Why It Works
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{item.explanation}</p>
        </div>
      </div>

      <Link
        href="/signup"
        className="inline-block mt-1 text-sm text-amber-400 hover:text-amber-300 transition-colors"
      >
        Use this structure in your campaign →
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.13),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              2026 Guide · Local Ads · Campaign Strategy
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {blogTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              Most local businesses don't have a budget problem — they have a{" "}
              <span className="text-white font-medium">structure problem</span>. The same $20/day
              can generate 2 leads or 20, depending entirely on how the campaign is built. Here
              are 10 structures that consistently deliver results.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="#examples"
                className="px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
              >
                See 10 Structures ↓
              </Link>
              <Link
                href="#faq"
                className="px-5 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors"
              >
                Jump to FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
            A campaign structure is the skeleton of your ad strategy — how you organise
            campaigns, ad sets, audiences, and creatives to reach the right person at the right
            moment. Get it wrong and money leaks at every stage. Get it right and{" "}
            <span className="text-white font-semibold">
              your budget works harder with every passing week
            </span>
            . These 10 structures are battle-tested across Google, Facebook, and Instagram for
            local businesses in 2026.
          </p>
        </section>

        {/* ── 10 Campaign Structures ── */}
        <section id="examples" className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            10 Proven Campaign Structures for Local Businesses
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Sorted from single-platform fundamentals to full multi-channel funnels.
          </p>
          <div className="flex flex-col gap-6">
            {campaigns.map((item) => (
              <CampaignCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── Pattern / Insights ── */}
        <section className="bg-slate-900 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The 3 Principles Behind Every Structure That Works
            </h2>
            <p className="text-gray-400 max-w-2xl mb-10 text-sm leading-relaxed">
              Across 10 different structures, three rules never break. Violate any one of them
              and your structure will underperform — regardless of budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "One Goal Per Campaign",
                  body: "Every campaign must optimise toward a single conversion event — a call, a form submission, or a purchase. Campaigns that chase multiple goals split the algorithm's learning and converge on no goal at all. One campaign, one signal, one outcome.",
                },
                {
                  icon: "🧩",
                  title: "Audience × Message × Destination Must Match",
                  body: "The audience you target, the message in your ad, and the page they land on must all say the same thing. Any mismatch — even a subtle one — creates a trust gap that drops conversion rate. Message match is not a copywriting trick; it's a structural principle.",
                },
                {
                  icon: "📈",
                  title: "Build for Learning, Then Scale",
                  body: "Every platform's algorithm needs 30–50 conversions before it exits the learning phase. Structure your campaigns to hit that threshold fast — consolidate, don't fragment. Once the algorithm is out of learning, scaling budget produces predictable results instead of noise.",
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
            Build on these structures with platform-specific guides and copy frameworks.
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
              {
                href: "/blog/high-converting-ad-hooks-examples",
                label: "High-Converting Ad Hooks: 25 Examples That Stop the Scroll",
              },
              {
                href: "/blog/reduce-cost-per-lead-google-facebook-ads-2026",
                label: "How to Reduce Cost Per Lead on Google & Facebook Ads (2026)",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-slate-800 p-4 text-sm text-gray-300 hover:text-amber-400 hover:border-amber-500/30 transition-colors flex items-start gap-2"
              >
                <span className="text-amber-500 mt-0.5 shrink-0">→</span>
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
              See these campaign structures applied to real industries and cities.
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full border border-white/10 bg-slate-800 text-sm text-gray-300 hover:text-white hover:border-amber-500/30 hover:bg-slate-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="cta" className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(245,158,11,0.10),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Launch Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Build a Campaign That Actually Works?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              AdCampin applies the right campaign structure for your business type, location, and
              budget — and launches it in minutes. No agency fees, no guesswork.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-base hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            >
              Build My Campaign Free →
            </Link>
            <p className="mt-4 text-xs text-gray-600">
              No credit card required · Live in under 10 minutes
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