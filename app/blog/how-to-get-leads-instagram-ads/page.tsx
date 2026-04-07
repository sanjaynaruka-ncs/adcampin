export const blogTitle =
  "How to Get More Leads Using Instagram Ads (Step-by-Step) [2026 Guide]";

export const metadata = {
  title: blogTitle,
  description:
    "Learn how to get more leads using Instagram ads with proven strategies, real examples, and step-by-step tactics for 2026.",
  keywords: [
    "instagram ads leads",
    "instagram ads lead generation",
    "how to get leads instagram",
    "instagram ads strategy 2026",
    "instagram ads examples",
    "lead generation instagram ads",
    "instagram marketing guide",
    "social media lead generation",
  ],
};

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-black tracking-tight text-white">
          Ad<span className="text-pink-400">Campin</span>
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
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold px-4 py-2 rounded-lg transition-all"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Step Badge ────────────────────────────────────────────────────────────────
function StepBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
}

// ─── Example Card ──────────────────────────────────────────────────────────────
function ExampleCard({
  number,
  scenario,
  icon,
  hook,
  creative,
  adCopy,
  cta,
  why,
}: {
  number: number;
  scenario: string;
  icon: string;
  hook: string;
  creative: string;
  adCopy: string;
  cta: string;
  why: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-800 p-6 hover:border-pink-500/30 transition-all">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 flex items-center justify-center text-2xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-xs text-pink-400 font-bold uppercase tracking-widest mb-0.5">
            Example {number}
          </p>
          <h3 className="text-white font-black text-lg leading-tight">
            {scenario}
          </h3>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        <div>
          <StepBadge label="Step 1 · Hook" />
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">{hook}</p>
        </div>
        <div>
          <StepBadge label="Step 2 · Creative" />
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">{creative}</p>
        </div>
        <div>
          <StepBadge label="Step 3 · Ad Copy" />
          <div className="mt-2 bg-slate-900/60 border border-white/10 rounded-md px-4 py-3">
            <p className="text-gray-300 text-sm italic leading-relaxed">
              "{adCopy}"
            </p>
          </div>
        </div>
        <div>
          <StepBadge label="Step 4 · CTA" />
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">{cta}</p>
        </div>
      </div>

      {/* Why it works */}
      <div className="mt-5 flex items-start gap-2 bg-green-950/30 border border-green-500/20 rounded-md px-4 py-3">
        <span className="text-green-400 text-xs font-black mt-0.5 flex-shrink-0">
          ✅ WHY IT WORKS:
        </span>
        <p className="text-green-300/80 text-xs leading-relaxed">{why}</p>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const examples = [
    {
      number: 1,
      scenario: "Local Gym — Free Trial Leads",
      icon: "🏋️",
      hook:
        "Open with a 3-second Reel showing a before/after body transformation with bold text: 'This happened in 8 weeks at [Gym Name].'",
      creative:
        "Short vertical video (15s) — member testimonial walking through the gym floor, ending on the front desk with the offer card in frame.",
      adCopy:
        "Tired of paying for a gym you never visit? Try [Gym Name] FREE for 7 days — no contract, no pressure. Real results or we refund your first month. 💪",
      cta:
        "Instagram Lead Form with 2 fields (Name + Phone). Auto-populates from IG profile for frictionless signup.",
      why:
        "The social proof hook stops the scroll. The free trial removes risk. The lead form keeps friction near zero — all three working together is why this converts above 4%.",
    },
    {
      number: 2,
      scenario: "Dentist — New Patient Bookings",
      icon: "🦷",
      hook:
        "Image carousel opening with: 'Why does everyone in [City] suddenly have perfect teeth?' — pure curiosity gap.",
      creative:
        "3-slide carousel: Slide 1 = question hook, Slide 2 = before/after smile photos, Slide 3 = offer card with clinic branding and urgency.",
      adCopy:
        "Introducing [Clinic Name]'s new patient special — full checkup + cleaning for just $49. Only 20 spots this month. Book yours before they're gone. 🦷✨",
      cta:
        "'Book Appointment' CTA → Instant Form on Instagram with date picker field. Confirmation SMS sent automatically.",
      why:
        "The curiosity hook earns the swipe. The scarcity line ('20 spots') activates loss aversion. Instant forms reduce drop-off by eliminating the landing page redirect.",
    },
    {
      number: 3,
      scenario: "Real Estate Agent — Buyer Leads",
      icon: "🏠",
      hook:
        "Video hook: drone footage of a stunning property with overlay text — 'This 3BR sold in 4 days. Here's why buyers are moving fast in [City].'",
      creative:
        "15-second Reel — walkthrough of a recently sold home, agent voiceover explaining the market insight. Ends with agent on camera building trust.",
      adCopy:
        "The [City] market is moving. Homes under $500K are selling in under a week. Want a list of properties hitting the market before they're public? Drop your email below. 🏡",
      cta:
        "'Get the List' → Lead form collecting Name, Email, Budget Range. Agent gets instant notification to follow up.",
      why:
        "Market urgency triggers FOMO. Insider-access framing ('before they're public') makes the lead feel exclusive, not like a cold funnel.",
    },
    {
      number: 4,
      scenario: "Business Coach — Discovery Call Leads",
      icon: "🎯",
      hook:
        "Text-based Reel with bold caption animation: 'I went from $3K/month to $30K in 6 months. The only thing I changed was this one system.'",
      creative:
        "Talking-head video — coach speaking directly to camera in a clean home office. Raw, unpolished feel intentionally builds authenticity over production value.",
      adCopy:
        "If you're stuck under $10K/month in your business, it's not a traffic problem. It's a conversion system problem. I'll show you exactly how to fix it — free 20-min call. No pitch. Just clarity.",
      cta:
        "'Book My Free Call' → Calendly via lead form. Pre-qualify with 2 questions (revenue range, business type).",
      why:
        "Specific numbers build credibility instantly. 'No pitch' lowers psychological resistance. Pre-qualifying ensures the coach only talks to serious prospects.",
    },
    {
      number: 5,
      scenario: "Hair Salon — New Client Bookings",
      icon: "💇",
      hook:
        "Reel hook: fast-cut transformation video — dull, flat hair → bouncy, vibrant blowout. No words needed for the first 2 seconds.",
      creative:
        "15s transformation Reel with trending audio. Stylist reveals the 'after' at the 8-second mark. End frame: offer card with phone number overlay.",
      adCopy:
        "New in [City]? First blowout + cut at [Salon Name] is on us — just $25 (normally $75). Limited new-client slots this month. Book in the link below 👇",
      cta:
        "'Book Now' → Lead form or DM automation via ManyChat. Auto-reply sends the booking link within 30 seconds.",
      why:
        "Transformation visuals do the selling silently. The new-client angle removes the awkwardness of switching salons. DM automation means zero delay in the lead experience.",
    },
    {
      number: 6,
      scenario: "Online Course Creator — Webinar Sign-Ups",
      icon: "🎓",
      hook:
        "Story ad with text overlay: 'I teach [Skill] for free every Thursday. Last week 847 people showed up. Here's the link if you want in.'",
      creative:
        "Static image with a clean course mockup + the instructor's face in the corner. Minimal design, high contrast, one bold line of copy as the visual.",
      adCopy:
        "Free live training: How to [Outcome] in 30 days without [Common Pain]. No fluff, no upsell — just the exact system I used to [Result]. Thursday 7PM EST. Grab your spot 👇",
      cta:
        "'Save My Seat' → Instant Lead Form (Name + Email). Automated email sequence starts immediately with calendar invite.",
      why:
        "Social proof in the hook ('847 people') removes the risk of wasted time. Webinars are the highest-converting lead magnet for courses because they deliver value before asking for money.",
    },
    {
      number: 7,
      scenario: "HVAC Company — Seasonal Service Leads",
      icon: "❄️",
      hook:
        "Image ad with bold text on a dark background: 'Your AC is going to fail this summer. Here's how to make sure it doesn't.'",
      creative:
        "Split-image: left side shows a sweating family in a hot room, right side shows a cool, comfortable home with HVAC unit visible. Problem vs. solution in one frame.",
      adCopy:
        "Summer is 6 weeks away. Don't wait until your AC dies at 10PM on a Saturday. Book your [City] tune-up now for $89 — and skip the emergency call fee. Spots are limited. ❄️",
      cta:
        "'Schedule My Tune-Up' → Lead form with preferred date/time field. Dispatcher calls within 2 hours to confirm.",
      why:
        "Seasonal fear-based hooks are highly relevant and urgent. The contrast creative does the emotion work. Mentioning the emergency fee makes the $89 offer feel like obvious savings.",
    },
    {
      number: 8,
      scenario: "Immigration Lawyer — Consultation Leads",
      icon: "⚖️",
      hook:
        "Carousel: Slide 1 — 'Denied a visa? You may still have options.' Pure curiosity + hope for a worried audience.",
      creative:
        "3-slide carousel: common visa denial reasons → what the law actually allows → attorney photo with credentials and a free consult offer. Professional, clean, trustworthy.",
      adCopy:
        "A visa denial isn't always the final answer. Our [City] immigration attorneys have helped 1,200+ families find a path forward. Your free 15-min consultation starts here — no obligation.",
      cta:
        "'Book Free Consultation' → Lead form (Name, Phone, Case Type dropdown). Attorney receives instant email + SMS alert.",
      why:
        "Legal leads require maximum trust signals. The case volume number ('1,200+ families') and professional creative do that work. The 'no obligation' line removes the #1 objection.",
    },
    {
      number: 9,
      scenario: "Skincare Brand — Product Sample Leads",
      icon: "✨",
      hook:
        "UGC-style Reel: creator holds up product to camera and says directly: 'I broke out every month for 3 years. This is what finally stopped it.'",
      creative:
        "Authentic, phone-recorded feel. No studio lighting. Creator shows their skin close-up, applies product, walks through the routine in under 15 seconds.",
      adCopy:
        "We're giving away 500 free sample kits of our [Product] — the one that cleared [Creator]'s skin in 21 days. Pay only $4.95 shipping. We cover the rest. Claim yours now 👇",
      cta:
        "'Claim My Free Sample' → Lead form (Name, Shipping Address, Email). Backend triggers fulfilment + email nurture sequence.",
      why:
        "UGC trust + a near-free offer is the highest-converting combination for DTC skincare. The $4.95 covers shipping and filters non-serious leads. The email sequence converts the back-end.",
    },
    {
      number: 10,
      scenario: "Restaurant — Event / Reservation Leads",
      icon: "🍽️",
      hook:
        "Reel: 3 seconds of sizzling steak hitting the grill — no words, just sound and fire. Then text fades in: 'Table for 2 this weekend?'",
      creative:
        "Short food porn video — plating, sauce pour, table ambience at golden hour. Ends on the full table setup with candles. Use trending audio to maximize organic reach boost from IG algorithm.",
      adCopy:
        "Weekend tables at [Restaurant Name] are filling fast. Reserve yours and get a complimentary dessert on us — just mention this ad when you arrive. Friday & Saturday only. 🍷",
      cta:
        "'Reserve My Table' → Lead form (Name, Party Size, Preferred Date). Confirmation message sent via DM within minutes.",
      why:
        "Food ads sell with senses — sound and visuals first, copy second. The complimentary dessert incentivizes action without discounting the core offer. DM confirmation feels personal and premium.",
    },
  ];

  const articleSchema = {
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
        name: "How do Instagram ads generate leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instagram ads generate leads through native Lead Forms (which auto-fill user info), DM automation flows, and click-to-landing-page campaigns. The most efficient method in 2026 is Instagram's Instant Lead Form — users submit their details without leaving the app, dramatically reducing drop-off.",
        },
      },
      {
        "@type": "Question",
        name: "What budget do I need to run Instagram ads for lead generation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start generating leads on Instagram with as little as $10–$20/day. For local businesses, $300–$500/month is enough to run consistent lead campaigns. For coaches, course creators, and service businesses targeting broader audiences, $1,000+/month unlocks meaningful scale and A/B testing.",
        },
      },
      {
        "@type": "Question",
        name: "Do Instagram ads actually work for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Instagram's location-based targeting makes it extremely effective for local businesses like salons, gyms, restaurants, and clinics. A well-structured campaign with a clear local offer and radius targeting of 5–15 miles can consistently deliver leads at $5–$15 per lead for most local service categories.",
        },
      },
    ],
  };

  return (
    <div className="bg-slate-950 min-h-screen text-gray-300">
      <Navbar />

      {/* ── JSON-LD Schemas ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-purple-950/10 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-3 py-1 rounded-full">
                2026 Guide
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full">
                Step-by-Step
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                10 Real Examples
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              {blogTitle}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Instagram is the highest-intent visual platform for lead generation
              in 2026. But most businesses run ads that look good and convert
              terribly. Here are 10 step-by-step examples that actually fill your
              pipeline.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#examples"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-pink-500/20"
              >
                See All 10 Examples ↓
              </a>
              <a
                href="#faq"
                className="border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Common Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-gray-300 text-base leading-relaxed mb-3">
            Most Instagram ad guides stop at "boost your post." That's not a
            strategy — that's just spending money faster. Real lead generation on
            Instagram needs a hook that stops the scroll, a creative that builds
            desire, copy that earns trust, and a CTA that removes every possible
            reason not to act.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            Below are 10 complete step-by-step ad frameworks — one for each
            major business type — built to generate leads, not just impressions.
            Steal the structure for your own campaigns.
          </p>
        </div>
      </section>

      {/* ── Quick Stats Bar ── */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "2B+", label: "Monthly Instagram Users" },
              { stat: "70%", label: "Users Discover Brands Here" },
              { stat: "$5–$15", label: "Avg. Local Lead Cost" },
              { stat: "3×", label: "Higher Engagement vs Facebook" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-black text-white mb-1">
                  {item.stat}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: 10 Examples ── */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-3 py-1 rounded-full mb-3">
            Step-by-Step Examples
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            10 Instagram Ad Lead Generation Frameworks
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Each example walks through the exact hook, creative, copy, and CTA
            structure used in high-converting campaigns. Adapt them to your
            business in minutes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {examples.map((ex) => (
            <ExampleCard key={ex.number} {...ex} />
          ))}
        </div>
      </section>

      {/* ── Patterns / Insights ── */}
      <section className="bg-slate-900 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-3 py-1 rounded-full mb-4">
              Key Patterns
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              What Every High-Converting Instagram Ad Has in Common
            </h2>
            <p className="text-gray-400 text-sm">
              Strip away the industry and the niche — these four elements appear
              in every example above.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "⚡",
                title: "A Visual-First Hook",
                body: "The first 1–3 seconds do all the work. If the creative doesn't stop the thumb, the copy never gets read. Motion, contrast, or emotion — pick one and lead with it.",
              },
              {
                icon: "🎯",
                title: "One Specific Offer",
                body: "Every winning ad in this list promotes a single, concrete thing. Not 'our services' — one offer, one action, one result. Ambiguity kills conversions.",
              },
              {
                icon: "🔒",
                title: "Friction Removal",
                body: "Instagram Lead Forms outperform landing page redirects by up to 3× for cold traffic. Remove every step between the scroll and the submit.",
              },
              {
                icon: "⏱️",
                title: "Built-In Urgency",
                body: "Scarcity ('20 spots'), time ('this month only'), or loss ('before your AC fails') — every ad needs a reason to act now, not later.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-white/10 bg-slate-800 p-6"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Linking: Ad Examples by Industry ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-3 py-1 rounded-full mb-3">
            Explore More Ad Examples
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            Real Ad Examples by Industry & City
          </h2>
          <p className="text-gray-400 text-sm">
            See how top local businesses structure their Google Ads — then apply
            the same thinking to Instagram.
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
              className="group rounded-lg border border-white/10 bg-slate-800 p-5 hover:border-pink-500/40 hover:bg-slate-800/80 transition-all flex items-center gap-4"
            >
              <span className="text-3xl">{link.icon}</span>
              <div>
                <p className="text-white font-bold text-sm group-hover:text-pink-300 transition-colors">
                  {link.label}
                </p>
                <p className="text-gray-500 text-xs">{link.sub}</p>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-pink-400 transition-colors">
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-3 py-1 rounded-full mb-3">
              Related Articles
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Keep Reading
            </h2>
            <p className="text-gray-400 text-sm">
              Go deeper on ad strategy, copy frameworks, and platform comparisons.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                href: "/blog/best-google-ads-examples-small-businesses-2026",
                title: "Best Google Ads Examples for Small Businesses (2026)",
                tag: "Google Ads",
              },
              {
                href: "/blog/how-to-write-facebook-ads-local-business",
                title: "How to Write Facebook Ads for Local Businesses",
                tag: "Facebook Ads",
              },
              {
                href: "/blog/google-ads-vs-facebook-ads-lead-generation",
                title: "Google Ads vs Facebook Ads for Lead Generation",
                tag: "Strategy",
              },
              {
                href: "/blog/top-20-ad-copy-mistakes",
                title: "Top 20 Ad Copy Mistakes That Kill Your Conversions",
                tag: "Ad Copy",
              },
            ].map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="group rounded-lg border border-white/10 bg-slate-800 p-5 hover:border-pink-500/30 transition-all"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 px-2 py-0.5 rounded mb-3">
                  {post.tag}
                </span>
                <h3 className="text-white font-bold text-sm leading-snug group-hover:text-pink-300 transition-colors">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-950/40 via-purple-950/20 to-slate-900 p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-pink-400 font-bold text-sm uppercase tracking-widest mb-4">
              Ready to Run Ads That Actually Convert?
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Generate Instagram Ad Copy in{" "}
              <br className="hidden md:block" />
              60 Seconds — Built to Get Leads
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
              AdCampin creates Instagram ad copy, hooks, and CTA structures
              tailored to your business type and city — so you skip the guessing
              and launch faster.
            </p>
            <a
              href="/signup"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-black text-base px-10 py-4 rounded-xl transition-all shadow-lg shadow-pink-500/25"
            >
              Start Free — No Credit Card Required
            </a>
            <p className="text-gray-600 text-xs mt-4">
              Trusted by 14,000+ businesses running smarter social ads
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 border border-pink-400/20 px-3 py-1 rounded-full mb-3">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How do Instagram ads generate leads?",
                  a: "Instagram ads generate leads through native Lead Forms (which auto-fill user info), DM automation flows, and click-to-landing-page campaigns. The most efficient method in 2026 is Instagram's Instant Lead Form — users submit their details without leaving the app, dramatically reducing drop-off.",
                },
                {
                  q: "What budget do I need to run Instagram ads for lead generation?",
                  a: "You can start generating leads on Instagram with as little as $10–$20/day. For local businesses, $300–$500/month is enough to run consistent lead campaigns. For coaches and service businesses targeting broader audiences, $1,000+/month unlocks meaningful scale and A/B testing.",
                },
                {
                  q: "Do Instagram ads actually work for local businesses?",
                  a: "Yes — Instagram's location-based targeting makes it extremely effective for local businesses like salons, gyms, restaurants, and clinics. A well-structured campaign with a clear local offer and radius targeting of 5–15 miles can consistently deliver leads at $5–$15 per lead for most local service categories.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-lg border border-white/10 bg-slate-800 p-5 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-white font-semibold text-sm list-none">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-gray-500 group-open:text-pink-400 transition-colors text-lg leading-none">
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