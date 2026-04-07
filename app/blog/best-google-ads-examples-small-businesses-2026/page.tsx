import Link from "next/link";
import Navbar from "@/app/components/navbar";

export const blogTitle = "Best Google Ads Examples for Small Businesses (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Explore the best Google Ads examples for small businesses with real ad copy, strategies, and tips to boost conversions in 2026.",
  keywords: [
    "google ads examples",
    "small business ads",
    "google ads copy",
    "google ads examples 2026",
    "ad copy examples",
  ],
};

const examples = [
  {
    id: 1,
    category: "Auto Repair",
    headline: "Honest Auto Repair Since 1985 | Family-Owned, AAA Approved",
    description:
      "Free diagnostic with repair. All work guaranteed. Book trusted local service today.",
    explanation:
      "This ad works because it sounds real. It leads with trust, uses a strong credibility marker, and gives people one simple reason to click now.",
    href: "/ads/google/auto-repair/phoenix/examples",
  },
  {
    id: 2,
    category: "HVAC",
    headline: "Emergency AC Repair Near You | 24/7 Local Technicians",
    description:
      "Fast response, licensed pros, upfront pricing. Call now for same-day service.",
    explanation:
      "Great Google Ads often match urgency with clarity. This one speaks to a problem people want solved immediately, so the message is fast, direct, and local.",
    href: "/ads/google/hvac/dallas/examples",
  },
  {
    id: 3,
    category: "House Cleaning",
    headline: "Reliable House Cleaning Service | Bonded, Insured, Top Rated",
    description:
      "Same-day booking available. Friendly local cleaners. Get your free quote now.",
    explanation:
      "For cleaning services, trust beats cleverness. Words like bonded, insured, and top rated lower hesitation and make the ad feel safer to click.",
    href: "/ads/google/cleaning-services/chicago/examples",
  },
  {
    id: 4,
    category: "Plumbing",
    headline: "24/7 Emergency Plumber Near You | Fast Local Help",
    description:
      "Burst pipe or blocked drain? Licensed technicians ready now. Call for immediate repair.",
    explanation:
      "This is the kind of ad that wins on intent. It mirrors exactly what a stressed customer is searching for and removes extra thinking.",
    href: "/ads/google/plumbers/los-angeles/examples",
  },
  {
    id: 5,
    category: "Dentists",
    headline: "Gentle Family Dentist in New York | Book Same-Week Visits",
    description:
      "Teeth cleaning, checkups, and emergency care. Trusted local dental team. Schedule online.",
    explanation:
      "Dental ads perform better when they feel calm and practical. This one balances service variety with reassurance, which helps both families and urgent patients.",
    href: "/ads/google/dentists/new-york/examples",
  },
  {
    id: 6,
    category: "Real Estate",
    headline: "Modern Apartments in Mumbai | Browse New Listings Today",
    description:
      "2-3 BHK homes in prime locations. Virtual tours available. Talk to an expert now.",
    explanation:
      "Real estate ads need a clear picture fast. Location, property type, and next step are all visible here, so qualified buyers know what to expect before clicking.",
    href: "/ads/google/real-estate/mumbai/examples",
  },
  {
    id: 7,
    category: "Small Business Loans",
    headline: "Small Business Loans | Requires $100K+ Annual Revenue",
    description:
      "Fast decisions, flexible funding, simple application. See if your business qualifies.",
    explanation:
      "This ad filters clicks on purpose. That may sound risky, but pre-qualifying traffic usually improves conversion quality and protects budget.",
    href: "/ads/google/business-loans/miami/examples",
  },
  {
    id: 8,
    category: "Landscaping",
    headline: "Award-Winning Landscape Design | Free Estimates Available",
    description:
      "Custom patios, garden makeovers, and yard design. Local experts ready to help.",
    explanation:
      "This one is strong because it blends aspiration with action. People see quality first, then a low-friction next step through the free estimate.",
    href: "/ads/google/landscaping/seattle/examples",
  },
  {
    id: 9,
    category: "Restaurant",
    headline: "Weekend Brunch in Jaipur | Reserve Your Table Online",
    description:
      "Fresh seasonal menu, family-friendly seating, easy reservations. Book your spot now.",
    explanation:
      "Restaurant ads do well when they sell an experience in a few words. This copy gives a clear occasion, a benefit, and a friction-free booking action.",
    href: "/ads/google/restaurants/jaipur/examples",
  },
  {
    id: 10,
    category: "Legal Services",
    headline: "Free Consultation With Local Lawyers | Bilingual Staff Available",
    description:
      "Speak with an experienced legal team today. Quick response and clear pricing.",
    explanation:
      "Legal ads need trust and accessibility. Free consultation reduces friction, while bilingual support makes the ad feel more relevant to a wider audience.",
    href: "/ads/google/lawyers/houston/examples",
  },
];

const faqs = [
  {
    question: "What makes a Google ad good for a small business?",
    answer:
      "A good Google ad is clear, specific, and close to the search intent. It usually highlights one benefit, one trust signal, and one strong next step without sounding overloaded.",
  },
  {
    question: "Should small businesses use local keywords in ad copy?",
    answer:
      "Yes. Local words like city names, “near me,” service areas, and neighborhood references can improve click-through rate because the ad feels more relevant right away.",
  },
  {
    question: "How many headlines should I test in Google Ads?",
    answer:
      "Start with several headline angles around trust, urgency, offer, and location. Then keep the winners and refresh weak variations instead of rewriting everything at once.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blogTitle,
  description:
    "Explore the best Google Ads examples for small businesses with real ad copy, strategies, and tips to boost conversions in 2026.",
  author: {
    "@type": "Organization",
    name: "AdCampin",
  },
  publisher: {
    "@type": "Organization",
    name: "AdCampin",
  },
};

const faqJsonLd = {
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

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <section className="border-b border-white/10 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                2026 Google Ads Playbook
              </div>
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {blogTitle}
                </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
                Looking for Google Ads that actually feel clickable? Here are 10
                smart examples small businesses can learn from and model in
                2026.
              </p>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-300">
                You will see the ad copy, why it works, and how to turn the same
                ideas into better campaigns for your niche.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-400">
                <a
                  href="#examples"
                  className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 hover:border-cyan-400/40 hover:text-white"
                >
                  Jump to examples
                </a>
                <a
                  href="#faq"
                  className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 hover:border-cyan-400/40 hover:text-white"
                >
                  Read FAQ
                </a>
                <a
                  href="#cta"
                  className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 hover:border-cyan-400/40 hover:text-white"
                >
                  Build your ads faster
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              10 Google Ads examples worth stealing
            </h2>
            <p className="mt-4 text-gray-300">
              The best ad copy is not always flashy. Most of the time, it wins
              because it feels specific, useful, and easy to trust. That is why
              these examples matter for small businesses.
            </p>
            <p className="mt-3 text-gray-300">
              As you read, notice the repeated patterns: local intent, urgency,
              credibility, clear offers, and simple next steps. Those are the
              building blocks behind high-CTR Google Ads in 2026.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {examples.map((example) => (
              <article
                key={example.id}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Example {example.id}
                  </span>
                  <span className="text-sm text-gray-400">{example.category}</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold leading-8 text-white">
                    {example.headline}
                  </h3>
                  <p className="mt-4 rounded-lg border border-white/10 bg-slate-900 px-4 py-4 text-gray-300">
                    {example.description}
                  </p>
                  <p className="mt-5 text-gray-300">{example.explanation}</p>
                  <p className="mt-4 text-gray-400">
                    If you want to generate similar ads quickly:
                    </p>

                    <Link
                    href="/signup"
                    className="inline-block mt-2 text-sm text-cyan-300 hover:text-cyan-200"
                    >
                    Generate similar ads →
                    </Link>

                    <p className="mt-2 text-gray-400">
                    Or explore the matching niche example below.
                    </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={example.href}
                    className="inline-flex items-center text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    View niche example
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-white/10 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold text-white">
              What these ads have in common
            </h3>
            <p className="mt-4 text-gray-300">
              First, they do not try to say everything. Each ad leads with one
              strong angle, such as speed, trust, price clarity, or local
              relevance. That makes the message easier to scan on a crowded
              search results page.
            </p>
            <p className="mt-3 text-gray-300">
              Second, they reduce doubt fast. Phrases like “licensed,” “family
              owned,” “free estimate,” “same-day service,” or “virtual tours”
              help people feel they are clicking on a real business, not generic
              ad copy.
            </p>
            <p className="mt-3 text-gray-300">
              Third, they make the next step obvious. Strong Google Ads usually
              end with a simple action like call now, get a quote, reserve your
              table, or browse listings. Clear intent drives better clicks.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white">Use local proof</h3>
              <p className="mt-3 text-gray-300">
                Add city names, service areas, ratings, or trust badges when
                relevant. Local relevance makes a small business ad feel more
                immediate.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white">Write for intent</h3>
              <p className="mt-3 text-gray-300">
                Urgent searches need direct copy. Research-heavy searches need
                clarity and qualification. Match the mood behind the keyword.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white">Keep testing</h3>
              <p className="mt-3 text-gray-300">
                Even a solid ad can improve. Test headlines around urgency,
                pricing, trust, offer framing, and location instead of changing
                everything blindly.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-white/10 bg-slate-800 p-8">
            <h3 className="text-2xl font-semibold text-white">
              Related reads for more ad ideas
            </h3>
            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="#examples"
                className="rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-gray-300 hover:border-cyan-400/40 hover:text-white"
              >
                Best local search ad patterns
              </a>
              <a
                href="#cta"
                className="rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-gray-300 hover:border-cyan-400/40 hover:text-white"
              >
                How to generate ad copy faster
              </a>
              <a
                href="#faq"
                className="rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-gray-300 hover:border-cyan-400/40 hover:text-white"
              >
                Google Ads FAQ for beginners
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12 rounded-lg border border-white/10 bg-slate-800 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
                Explore More Ad Examples
            </h3>

            <div className="flex flex-wrap gap-3">
                <Link href="/ads/google/dentists/new-york/examples" className="text-cyan-300 hover:text-cyan-200">
                Dentist Ads New York
                </Link>
                <Link href="/ads/google/real-estate/mumbai/examples" className="text-cyan-300 hover:text-cyan-200">
                Real Estate Ads Mumbai
                </Link>
                <Link href="/ads/google/lawyers/houston/examples" className="text-cyan-300 hover:text-cyan-200">
                Lawyer Ads Houston
                </Link>
            </div>
            </div>

        <section id="cta" className="border-y border-white/10 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="rounded-lg border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-slate-800 p-8 md:p-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  Want ads like these without writing from scratch?
                </h2>
                <p className="mt-4 text-gray-300">
                  AdCampin helps you create better Google Ads faster, whether
                  you run campaigns for dentists, real estate, local services,
                  or any small business niche. Instead of staring at a blank
                  page, you can build high-intent ad copy in minutes.
                </p>
                <p className="mt-3 text-gray-300">
                  If your goal is higher CTR, cleaner messaging, and more
                  conversion-focused campaigns, this is the easiest next step.
                </p>
                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="inline-flex items-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Start free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              FAQ
            </h2>
            <p className="mt-4 text-gray-300">
              Here are a few quick answers small business owners usually need
              before they start writing or testing Google Ads.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-white/10 bg-slate-800 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}