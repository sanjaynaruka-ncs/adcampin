import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "Lead Magnet Ideas for Ads: 15 Offers That Increase Signups (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover 15 proven lead magnet ideas for ads that increase signups, improve conversion rates, and generate better leads in 2026.",
  keywords: [
    "lead magnet ideas for ads",
    "best lead magnets for paid ads",
    "increase signups with lead magnets",
    "lead generation offers",
    "high converting lead magnets",
    "ad offers that convert",
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
      name: "What is a lead magnet in advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lead magnet is a free offer or incentive used to encourage users to provide their contact information.",
      },
    },
    {
      "@type": "Question",
      name: "What type of lead magnet converts best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Offers like free consultations, audits, discounts, and templates typically convert the best.",
      },
    },
    {
      "@type": "Question",
      name: "Do lead magnets improve ad ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, strong lead magnets increase signup rates and lower cost per lead significantly.",
      },
    },
  ],
};

const magnets = [
  {
    number: "01",
    title: "Free Consultation",
    type: "Service-based offer",
    useCase:
      "Law firms, dental practices, financial advisors, coaches, home service businesses — any high-ticket or relationship-driven service.",
    why: "A free consultation removes all financial risk from the first step. Prospects who are curious but hesitant will opt in because the downside is zero. It pre-qualifies leads and puts your sales process in motion.",
    badge: "📞 Service",
  },
  {
    number: "02",
    title: "Discount or Promotional Offer",
    type: "Incentive-based offer",
    useCase:
      "E-commerce, local businesses, restaurants, gyms, salons — anywhere price sensitivity is a primary purchase barrier.",
    why: "Discounts convert because they create immediate, tangible value. '20% off your first order' answers the 'why now?' question that every prospect is asking. Pair it with urgency and the conversion rate spikes further.",
    badge: "🏷️ Discount",
  },
  {
    number: "03",
    title: "Free Audit",
    type: "Diagnostic offer",
    useCase:
      "SEO agencies, ad agencies, accountants, HR consultants, IT firms — businesses where the value of finding a problem justifies the cost of fixing it.",
    why: "An audit creates perceived value before any money changes hands. It positions you as the expert and naturally transitions into a paid engagement once the prospect sees what needs fixing.",
    badge: "🔍 Audit",
  },
  {
    number: "04",
    title: "Ebook or Definitive Guide",
    type: "Educational content offer",
    useCase:
      "SaaS companies, marketing agencies, B2B services, real estate — industries where buyers need education before they buy.",
    why: "A well-titled guide (not a generic 'whitepaper') signals authority and attracts prospects at the research stage. These leads may not be ready to buy today, but they're in the funnel and can be nurtured.",
    badge: "📘 Ebook",
  },
  {
    number: "05",
    title: "Checklist",
    type: "Actionable quick-win offer",
    useCase:
      "Any industry with a clear process: home buyers, startup founders, job seekers, event planners, e-commerce operators.",
    why: "Checklists convert because they're immediately useful and take 60 seconds to consume. Low time commitment = low barrier to opt-in. The person gets a win, and you get a lead with demonstrated intent.",
    badge: "✅ Checklist",
  },
  {
    number: "06",
    title: "Free Template",
    type: "Done-for-you resource",
    useCase:
      "Agencies, freelancers, HR teams, project managers, content creators — anyone whose audience needs to produce a specific document or output regularly.",
    why: "Templates save people real time — which makes them feel genuinely valuable, not gimmicky. A 'Cold Email Template That Gets Replies' or 'Social Media Content Calendar' has obvious, specific utility that drives opt-ins.",
    badge: "📄 Template",
  },
  {
    number: "07",
    title: "Webinar or Live Training",
    type: "Event-based offer",
    useCase:
      "Coaches, course creators, SaaS platforms, B2B services — any business that benefits from demonstrating expertise live.",
    why: "Webinars attract high-intent leads willing to give up 60 minutes of their day. That level of commitment signals genuine interest. They also create natural selling opportunities at the end of the session.",
    badge: "🎙️ Webinar",
  },
  {
    number: "08",
    title: "Case Study",
    type: "Social proof offer",
    useCase:
      "Agencies, consultants, B2B services — any business where results and credibility close deals.",
    why: "Case studies convert skeptical, high-intent prospects. Someone already considering your service but needing proof will opt in readily. It's proof before the pitch — and it sets the conversion expectation.",
    badge: "📊 Case Study",
  },
  {
    number: "09",
    title: "Free Trial or Demo",
    type: "Product experience offer",
    useCase:
      "SaaS companies, software tools, apps, platforms — any product where using it is the best argument for buying it.",
    why: "The best way to sell a product is to let someone experience it. A free trial eliminates the 'what if it doesn't work for me?' objection before it's raised. It also creates switching cost psychology once users are set up.",
    badge: "🧪 Trial",
  },
  {
    number: "10",
    title: "Coupon or Voucher",
    type: "Purchase incentive offer",
    useCase:
      "Retail, food & beverage, beauty, fitness, local services — businesses with repeat purchase potential.",
    why: "Coupons drive first-time purchases and build the customer relationship that enables upsells and retention. They work especially well in ads retargeting people who've visited your site but haven't bought.",
    badge: "🎟️ Coupon",
  },
  {
    number: "11",
    title: "Quiz or Assessment",
    type: "Interactive diagnostic offer",
    useCase:
      "Health & wellness, skincare, financial planning, career coaching, marketing — any field where personalization adds value.",
    why: "Quizzes generate curiosity-driven opt-ins. The prospect wants to see their result, which makes form completion feel like a reward rather than a cost. Personalized results also increase the perceived value of the follow-up.",
    badge: "🧠 Quiz",
  },
  {
    number: "12",
    title: "Free Strategy Session",
    type: "High-touch service offer",
    useCase:
      "Business coaches, marketing consultants, financial planners, sales trainers — premium service providers.",
    why: "Unlike a generic 'free call,' a strategy session implies structured value delivery. It attracts prospects who are serious and pre-disposed to invest. The word 'strategy' filters out tire-kickers.",
    badge: "🗺️ Strategy",
  },
  {
    number: "13",
    title: "Free Report or Research",
    type: "Data-driven content offer",
    useCase:
      "B2B companies, research firms, investment platforms, industry consultants — sectors where data drives decisions.",
    why: "Proprietary data is a uniquely powerful lead magnet because it can't be found anywhere else. A report titled '2026 State of [Your Industry]' positions you as the authority and earns opt-ins from decision-makers.",
    badge: "📑 Report",
  },
  {
    number: "14",
    title: "Giveaway or Contest",
    type: "Engagement-driven offer",
    useCase:
      "Consumer brands, e-commerce, local businesses, fitness brands — wherever brand awareness and list building are primary goals.",
    why: "Giveaways generate volume at low cost per entry. They work best when the prize is highly relevant to your target customer — a generic iPad attracts everyone; a product-specific prize attracts buyers.",
    badge: "🎁 Giveaway",
  },
  {
    number: "15",
    title: "Resource Toolkit or Bundle",
    type: "High-value content bundle",
    useCase:
      "Agencies, educators, productivity tools, marketers — audiences that benefit from a curated collection of assets.",
    why: "A toolkit bundles multiple resources into a single high-perceived-value offer. '7 Templates, 3 Checklists, and a Swipe File for Running Profitable Ads' has far more perceived value than any single asset alone.",
    badge: "🧰 Toolkit",
  },
];

const faqs = [
  {
    q: "What is a lead magnet in advertising?",
    a: "A lead magnet is a free offer or incentive — a guide, tool, consultation, discount, or resource — that you promote in your ads in exchange for a prospect's contact information. It lowers the barrier to entry and gives prospects a reason to engage before they're ready to buy.",
  },
  {
    q: "What type of lead magnet converts best?",
    a: "It depends on your industry and funnel stage, but free consultations, audits, discounts, and templates consistently convert well across most verticals. The best lead magnet is one that solves an immediate, specific problem your target audience already has.",
  },
  {
    q: "Do lead magnets improve ad ROI?",
    a: "Significantly. A strong lead magnet can cut your cost per lead by 30–60% compared to sending cold ad traffic directly to a 'Contact Us' page. More opt-ins from the same spend means a lower effective CPL and more pipeline for your sales process.",
  },
  {
    q: "Should my lead magnet be free?",
    a: "Yes — for paid ad campaigns, the lead magnet itself should always be free. The goal is to remove all friction from the first conversion. You'll monetize through the nurture sequence, follow-up calls, or upsells after the relationship is established.",
  },
  {
    q: "How do I promote a lead magnet in ads?",
    a: "Lead your ad creative and headline with the lead magnet offer, not your brand. 'Download the Free 2026 Home Buyer Checklist' outperforms 'Learn About Our Real Estate Services' every time. The offer is the hook — make it impossible to ignore.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          2026 Guide · Lead Generation
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Lead Magnet Ideas for Ads:{" "}
          <span className="text-rose-400">15 Offers That Increase Signups</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The offer inside your ad determines whether someone gives you their contact details or
          keeps scrolling. Here are 15 lead magnet ideas that work — with the right use case and
          the reason each one converts.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-rose-500 hover:bg-rose-400 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Build My Lead Magnet Ad →
          </Link>
          <Link
            href="#examples"
            className="border border-white/10 hover:border-white/30 text-gray-300 px-6 py-3 rounded-lg transition"
          >
            See 15 Lead Magnet Ideas
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-gray-400 text-base leading-relaxed">
          Most ads fail not because of targeting or budget — but because the offer isn't compelling
          enough. Asking someone to 'Contact Us' or 'Get a Quote' is a big ask from a cold
          prospect. A lead magnet changes the equation: instead of asking for a commitment, you're
          offering something valuable first.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mt-4">
          These 15 lead magnet types cover every stage of the funnel and every major business
          category. Each one includes who it works best for and the psychological reason it drives
          signups — so you can pick the right offer, not just any offer.
        </p>
      </section>

      {/* Main: 15 Lead Magnets */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {magnets.map((item) => (
            <div
              key={item.number}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500 opacity-60 leading-none mt-1">
                  {item.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                    <span className="text-xs font-semibold bg-slate-700 text-gray-300 px-2 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1 block">
                      Offer Type
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.type}</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1 block">
                      Best Use Case
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.useCase}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1 block">
                      Why It Increases Signups
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.why}</p>
                  </div>

                  <Link
                    href="/signup"
                    className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
                  >
                    Fix this in your ads →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="bg-slate-900 border-y border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Lead Magnet Performance Benchmarks
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                stat: "3–5×",
                label:
                  "more leads generated by ads with a lead magnet vs. direct 'contact us' CTAs",
              },
              {
                stat: "60%",
                label:
                  "lower cost per lead on average when a compelling offer replaces a generic form",
              },
              {
                stat: "7 sec",
                label:
                  "is the average time a prospect takes to decide whether your lead magnet is worth their email",
              },
            ].map((s) => (
              <div
                key={s.stat}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 text-center"
              >
                <div className="text-4xl font-black text-rose-400 mb-2">{s.stat}</div>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                What Makes a Lead Magnet Actually Work?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                The best lead magnets share three qualities: they solve a specific problem, they
                deliver value immediately, and they attract the right type of prospect — not just
                the highest volume of signups.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A generic 'Free Guide to Marketing' attracts everyone and converts no one. A 'Free
                30-Point Google Ads Audit for Dental Practices' attracts exactly who you want and
                pre-qualifies them in the process.
              </p>
              <Link
                href="/blog/high-converting-cta-for-ads"
                className="inline-block mt-4 text-sm text-rose-400 hover:text-rose-300"
              >
                Read: High-Converting CTAs for Ads →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Lead Magnet Checklist Before You Launch
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  Offer solves a specific, named problem for a specific audience
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  Value is immediately obvious from the title alone
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  Can be delivered instantly (no waiting for a callback)
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  Landing page headline matches the ad offer exactly
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  Follow-up sequence ready before traffic is turned on
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  Offer attracts buyers, not just browsers
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-slate-800 p-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Even the best lead magnet won't convert if the landing page experience is poor. Make
              sure your post-click page is built to convert.
            </p>
            <Link
              href="/blog/landing-page-optimization-paid-ads-conversions"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Read: Landing Page Optimization for Paid Ads →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Explore More Ad Examples</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            {
              href: "/ads/google/dentists/new-york/examples",
              label: "Google Ads Examples for Dentists in New York",
              tag: "Local Ads",
            },
            {
              href: "/ads/google/real-estate/mumbai/examples",
              label: "Google Ads Examples for Real Estate in Mumbai",
              tag: "Real Estate",
            },
            {
              href: "/ads/google/lawyers/houston/examples",
              label: "Google Ads Examples for Lawyers in Houston",
              tag: "Legal",
            },
            {
              href: "/blog/best-google-ads-examples-small-businesses-2026",
              label: "Best Google Ads Examples for Small Businesses (2026)",
              tag: "Blog",
            },
            {
              href: "/blog/ab-testing-ads-better-performance-2026",
              label: "How to A/B Test Your Ads for Better Performance",
              tag: "Blog",
            },
            {
              href: "/blog/lower-cpc-google-ads-without-losing-traffic",
              label: "How to Lower CPC in Google Ads Without Losing Traffic",
              tag: "Blog",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-800 px-5 py-4 hover:border-rose-500/40 hover:bg-slate-700 transition group"
            >
              <span className="text-gray-300 text-sm group-hover:text-white transition">
                {link.label}
              </span>
              <span className="text-xs bg-slate-700 group-hover:bg-slate-600 text-gray-400 px-2 py-1 rounded ml-3 whitespace-nowrap transition">
                {link.tag}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/blog/google-ads-vs-facebook-ads-lead-generation"
            className="text-rose-400 hover:text-rose-300"
          >
            Google Ads vs Facebook Ads for Lead Gen →
          </Link>
          <Link
            href="/blog/high-converting-ad-hooks-examples"
            className="text-rose-400 hover:text-rose-300"
          >
            High-Converting Ad Hooks →
          </Link>
          <Link
            href="/blog/why-ads-not-converting-how-to-fix"
            className="text-rose-400 hover:text-rose-300"
          >
            Why Your Ads Aren't Converting →
          </Link>
          <Link
            href="/blog/high-converting-cta-for-ads"
            className="text-rose-400 hover:text-rose-300"
          >
            High-Converting CTAs for Ads →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-slate-900 border-y border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Turn Your Lead Magnet Into a High-Converting Ad
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            AdCampin helps you build, launch, and optimize lead magnet ads on Google and Facebook —
            so you spend less per lead and attract better prospects. Set up your campaign in
            minutes.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Start Generating Leads for Free →
          </Link>
          <p className="text-gray-500 text-sm mt-4">No credit card required. Set up in minutes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
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