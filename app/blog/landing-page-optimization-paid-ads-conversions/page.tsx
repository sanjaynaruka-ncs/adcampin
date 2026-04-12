import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "Landing Page Optimization for Paid Ads: 10 Fixes That Boost Conversions (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn 10 proven landing page optimization fixes that improve paid ad conversions, reduce bounce rates, and maximize ROI in 2026.",
  keywords: [
    "landing page optimization",
    "paid ads landing page",
    "increase landing page conversions",
    "landing page fixes for ads",
    "improve ad conversion rate",
    "landing page best practices",
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
      name: "Why is landing page optimization important for paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing page optimization improves conversion rates by reducing friction and matching visitor intent.",
      },
    },
    {
      "@type": "Question",
      name: "What affects landing page conversion rate the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Headline clarity, CTA placement, page speed, and trust signals have the biggest impact.",
      },
    },
    {
      "@type": "Question",
      name: "How can I improve my landing page quickly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simplify forms, improve headlines, add testimonials, and optimize mobile responsiveness.",
      },
    },
  ],
};

const fixes = [
  {
    number: "01",
    title: "Weak Headline That Doesn't Match the Ad",
    problem:
      "Your ad promised something specific — a discount, a solution, a result — but the landing page headline says something completely different. Visitors feel confused and leave within seconds.",
    fix: "Mirror your ad's headline on the landing page. If your ad says 'Get a Free Legal Consultation Today,' your page headline should echo that exact promise.",
    why: "Message match reduces cognitive friction. When visitors see continuity between the ad and the page, they trust they've landed in the right place — and they stay.",
  },
  {
    number: "02",
    title: "CTA Button Buried Below the Fold",
    problem:
      "Your call-to-action is sitting at the bottom of the page. Most users never scroll that far, especially on mobile.",
    fix: "Place your primary CTA above the fold — visible without scrolling. Add a secondary CTA after social proof sections for users who need more convincing.",
    why: "Eye-tracking studies consistently show users make decisions in the first screen view. A visible CTA captures high-intent clicks before attention drops.",
  },
  {
    number: "03",
    title: "Not Optimized for Mobile",
    problem:
      "Over 60% of paid ad traffic comes from mobile devices in 2026. If your form requires pinching, zooming, or tiny taps — users bounce.",
    fix: "Use a mobile-first layout. Stack elements vertically, use large tap targets (minimum 44px), and test on real devices — not just browser dev tools.",
    why: "Google's mobile-first indexing and ad Quality Score both factor in mobile experience. A broken mobile page is burning your ad budget every single day.",
  },
  {
    number: "04",
    title: "No Trust Signals Near the CTA",
    problem:
      "You're asking strangers to fill out a form or make a purchase — but there's nothing on the page that tells them why they should trust you.",
    fix: "Add trust signals directly around your CTA: customer count, security badges, money-back guarantees, or a recognizable media mention ('As seen on...').",
    why: "Trust is the final barrier before conversion. Removing doubt at the moment of action directly reduces form abandonment and increases submit rates.",
  },
  {
    number: "05",
    title: "Long, Intimidating Lead Form",
    problem:
      "You're asking for name, email, phone, company size, budget range, and a message — all before a user even knows if you're a good fit. That's too much friction.",
    fix: "Start with the fewest fields necessary — usually name and email or phone. Collect additional info after the initial opt-in through a follow-up step or call.",
    why: "Every additional form field reduces conversions by an average of 11%. Shorter forms feel lower risk, which means more people complete them.",
  },
  {
    number: "06",
    title: "Slow Page Load Speed",
    problem:
      "A landing page that takes more than 3 seconds to load loses roughly 53% of mobile visitors. You're paying for clicks that never even see your offer.",
    fix: "Compress all images (use WebP format), eliminate render-blocking scripts, and host on a fast CDN. Aim for under 2 seconds on mobile using Google PageSpeed Insights.",
    why: "Page speed is both a conversion factor and a Google Ads Quality Score factor. Faster pages mean lower cost-per-click and higher conversion rates — double benefit.",
  },
  {
    number: "07",
    title: "Vague or Generic Social Proof",
    problem:
      "'Great service!' with no name, photo, or context doesn't move anyone. Generic testimonials are almost worse than none — they feel fake.",
    fix: "Use specific testimonials with full names, photos, job titles, and measurable outcomes. '3x leads in 30 days — Sarah K., Real Estate Agent, Mumbai' converts far better.",
    why: "Specificity signals authenticity. Prospective customers relate to real outcomes from real people, and it helps them visualize their own results.",
  },
  {
    number: "08",
    title: "Unclear Offer — What Am I Actually Getting?",
    problem:
      "Users land on your page and can't immediately tell what you're offering, who it's for, or what happens after they click. Ambiguity kills conversions.",
    fix: "Use a simple value proposition formula: '[What you get] + [For whom] + [In what timeframe].' Example: 'Get a Custom Dental Website in 7 Days — Built for Practices That Want More Patients.'",
    why: "Clarity is a conversion lever. When visitors immediately understand the offer and see themselves in it, hesitation drops and action increases.",
  },
  {
    number: "09",
    title: "Distracting Navigation and Exit Points",
    problem:
      "You've included your full site navigation, social media icons, and footer links on the landing page. Every one of those is an exit door away from your conversion goal.",
    fix: "Strip navigation completely from paid ad landing pages. Remove social icons, footer links, and any outbound links not related to the conversion goal.",
    why: "Landing pages with navigation have significantly lower conversion rates than those without. Every link is a distraction — and a lost conversion opportunity.",
  },
  {
    number: "10",
    title: "No Urgency or Reason to Act Now",
    problem:
      "Your page is compelling, but it doesn't give visitors a reason to convert today instead of later. 'Later' almost always means never.",
    fix: "Add a genuine urgency element: a limited-time offer, a countdown timer, limited spots available, or a specific deadline tied to a real event or promotion.",
    why: "Loss aversion is one of the strongest psychological motivators. When something is available only for a limited window, people prioritize action to avoid missing out.",
  },
];

const faqs = [
  {
    q: "Why is landing page optimization important for paid ads?",
    a: "Landing page optimization improves conversion rates by reducing friction and matching visitor intent. Every dollar spent on ads is wasted if the landing page doesn't convert — optimization ensures your ad budget actually produces results.",
  },
  {
    q: "What affects landing page conversion rate the most?",
    a: "Headline clarity, CTA placement, page speed, and trust signals have the biggest impact. These four elements determine whether a visitor stays and converts or bounces within seconds of landing.",
  },
  {
    q: "How can I improve my landing page quickly?",
    a: "Simplify forms, improve headlines to match your ad copy, add specific testimonials, and optimize for mobile responsiveness. These changes can often be implemented in a day and produce measurable lift within the first week.",
  },
  {
    q: "How many CTAs should a landing page have?",
    a: "Ideally one primary CTA with consistent messaging repeated 2–3 times throughout the page. Too many different CTAs create decision paralysis. Keep the action singular and clear.",
  },
  {
    q: "Does landing page speed really affect conversions?",
    a: "Absolutely. Every additional second of load time reduces conversions by up to 7%. For mobile users — who make up the majority of paid ad traffic — speed is often the difference between a lead and a bounce.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          2026 Guide · Paid Ads
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Landing Page Optimization for Paid Ads:{" "}
          <span className="text-rose-400">10 Fixes That Boost Conversions</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Running paid ads without optimizing your landing page is like filling a leaky bucket.
          Here are 10 practical, proven fixes to stop the leak and start converting.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-rose-500 hover:bg-rose-400 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Optimize My Landing Page →
          </Link>
          <Link
            href="#examples"
            className="border border-white/10 hover:border-white/30 text-gray-300 px-6 py-3 rounded-lg transition"
          >
            See the 10 Fixes
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-gray-400 text-base leading-relaxed">
          You can write a perfect ad, nail your targeting, and still lose money — because the
          landing page fails the visitor. In 2026, ad costs are higher than ever, which means every
          conversion matters more. These 10 fixes are based on what actually moves the needle for
          paid campaigns across industries.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mt-4">
          No theory, no fluff. Just the problems, the fixes, and the reason each one works. Apply
          even 3–4 of these and you'll see a measurable difference in your cost per lead.
        </p>
      </section>

      {/* Main: 10 Fixes */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {fixes.map((fix) => (
            <div
              key={fix.number}
              className="rounded-lg border border-white/10 bg-slate-800 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500 opacity-60 leading-none mt-1">
                  {fix.number}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">{fix.title}</h2>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-1 block">
                      The Problem
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{fix.problem}</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1 block">
                      The Fix
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{fix.fix}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1 block">
                      Why It Works
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{fix.why}</p>
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
            Key Insights: What the Data Says
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: "53%",
                label: "of mobile users abandon pages that take over 3 seconds to load",
              },
              {
                stat: "11%",
                label: "average conversion drop for each additional form field added",
              },
              {
                stat: "2.5×",
                label: "more conversions on landing pages with message-matched headlines",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-lg border border-white/10 bg-slate-800 p-6 text-center"
              >
                <div className="text-4xl font-black text-rose-400 mb-2">{item.stat}</div>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-white/10 bg-slate-800 p-6">
            <h3 className="text-lg font-bold text-white mb-3">
              The Real Cost of a Poorly Optimized Landing Page
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              If you're spending $3,000/month on Google Ads with a 2% conversion rate, you're
              getting roughly 60 leads. Improve that to 4% — a realistic outcome with these fixes —
              and you're getting 120 leads from the same budget. That's double the output without
              spending a single extra dollar on ads.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Landing page optimization is the highest-leverage activity for any paid ads campaign.
              It compounds — a better page lowers your cost-per-click via Quality Score, increases
              leads, and improves the ratio of ad spend to revenue.
            </p>
            <Link
              href="/blog/why-ads-not-converting-how-to-fix"
              className="inline-block mt-4 text-sm text-rose-400 hover:text-rose-300"
            >
              Read: Why Your Ads Aren't Converting & How to Fix It →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links: Explore More */}
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
              href: "/blog/high-converting-cta-for-ads",
              label: "High-Converting CTAs for Paid Ads",
              tag: "Blog",
            },
            {
              href: "/blog/retargeting-ads-convert-visitors-to-leads-2026",
              label: "Retargeting Ads: Convert Visitors to Leads in 2026",
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
            href="/blog/ad-copy-service-business-examples"
            className="text-rose-400 hover:text-rose-300"
          >
            Ad Copy for Service Businesses →
          </Link>
          <Link
            href="/blog/facebook-lead-ads-vs-landing-pages"
            className="text-rose-400 hover:text-rose-300"
          >
            Facebook Lead Ads vs Landing Pages →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-slate-900 border-y border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Fix Your Landing Page?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Apply these 10 fixes to your paid ad campaigns and watch your cost per lead drop.
            AdCampin helps you build, test, and optimize landing pages built for conversion.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Start Optimizing for Free →
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