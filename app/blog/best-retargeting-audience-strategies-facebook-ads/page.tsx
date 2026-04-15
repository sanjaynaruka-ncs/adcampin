import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "Best Retargeting Audience Strategies for Facebook Ads (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Learn the best retargeting audience strategies for Facebook Ads to improve conversions, lower CPA, and maximize ROAS in 2026.",
  keywords: [
    "facebook retargeting audiences",
    "retargeting facebook ads",
    "facebook ads retargeting strategy",
    "retargeting audiences 2026",
    "facebook remarketing guide",
    "retargeting ad strategy",
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
      name: "What is the best retargeting audience for Facebook Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website visitors and cart abandoners are typically the highest-converting Facebook retargeting audiences.",
      },
    },
    {
      "@type": "Question",
      name: "How long should Facebook retargeting windows be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most advertisers use 7, 30, and 180-day retargeting windows depending on buyer intent and sales cycle.",
      },
    },
    {
      "@type": "Question",
      name: "Should I exclude converters from retargeting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, excluding recent converters prevents wasted ad spend and audience fatigue.",
      },
    },
  ],
};

const strategies = [
  {
    number: "01",
    title: "Website Visitors — Last 30 Days",
    description:
      "People who visited your site in the past 30 days are still warm. They know you exist, they showed intent, and they have not converted yet — that is your sweet spot.",
    explanation:
      "This is usually the first retargeting audience every advertiser should set up. Keep the messaging tight and the offer clear. Do not just repeat your awareness ad — push them toward the next step.",
  },
  {
    number: "02",
    title: "Website Visitors — Last 180 Days",
    description:
      "A broader window captures people who may have visited once, gotten distracted, and quietly forgotten about you. They are cooler than 30-day visitors but still worth re-engaging.",
    explanation:
      "Use softer messaging here — focus on trust-building content, social proof, or a value-add offer rather than a hard sell. Segment this audience away from your 30-day list to avoid overlap and ad fatigue.",
  },
  {
    number: "03",
    title: "Cart Abandoners",
    description:
      "Someone who added a product to their cart and left is one purchase decision away from converting. This is your highest-intent retargeting audience, full stop.",
    explanation:
      "Show them exactly what they left behind. A dynamic product ad with a time-sensitive offer or free shipping nudge can recover a significant chunk of these near-conversions. Do not let them go cold.",
  },
  {
    number: "04",
    title: "Video Viewers (25%, 50%, 75%+)",
    description:
      "If someone watched 50% or more of your video ad, they were genuinely interested. That is a signal worth acting on — and Facebook lets you build audiences around it.",
    explanation:
      "Segment by watch percentage. People who watched 75%+ of a 60-second video are much warmer than someone who watched 10 seconds. Target them with your next-stage offer rather than the same top-of-funnel content.",
  },
  {
    number: "05",
    title: "Instagram Engagers",
    description:
      "Anyone who liked, commented, saved, or sent a DM about your Instagram content has already shown they are interested. That engagement data is a retargeting goldmine.",
    explanation:
      "Build a custom audience of Instagram profile engagers from the last 30 to 90 days. These people are familiar with your brand visually — use that familiarity in your ad creative to drive the next action.",
  },
  {
    number: "06",
    title: "Facebook Page Engagers",
    description:
      "People who have visited your Facebook page, clicked a CTA button, or interacted with any of your posts are already in your orbit. They just need a reason to convert.",
    explanation:
      "This audience is especially useful for local businesses and service providers where brand familiarity drives trust. Combine page engagers with a strong testimonial or limited-time offer ad for best results.",
  },
  {
    number: "07",
    title: "Lead Form Openers (Did Not Submit)",
    description:
      "Someone opened your Facebook Lead Ad form, started filling it in, and then closed it without submitting. That is not a rejection — that is an opportunity.",
    explanation:
      "Facebook lets you retarget people who opened but did not complete your lead form. Hit them again with a simplified form, a stronger incentive, or a direct message angle that addresses common hesitations.",
  },
  {
    number: "08",
    title: "Previous Customers",
    description:
      "Your existing customers already trust you enough to have bought once. That makes them dramatically easier to convert again — and most advertisers completely ignore them.",
    explanation:
      "Upload your customer list as a custom audience. Use it for upsells, cross-sells, loyalty offers, or referral campaigns. Previous customers also make excellent seed audiences for building high-quality Lookalikes.",
  },
  {
    number: "09",
    title: "High Time-on-Site Visitors",
    description:
      "Not all website visitors are equal. Someone who spent 4 minutes reading your pricing page is a completely different prospect than someone who bounced after 5 seconds.",
    explanation:
      "Use your pixel data to build audiences based on top 25% or top 10% of time spent on site. These are your most engaged visitors — treat them as near-converter intent and advertise accordingly.",
  },
  {
    number: "10",
    title: "Lookalikes Built from Retargeting Pools",
    description:
      "Once you have a solid retargeting audience — cart abandoners, customers, high-intent visitors — you can use it as a seed to find millions of people who look just like them.",
    explanation:
      "A 1 to 2% Lookalike built from your cart abandoners or past customers is significantly more powerful than a broad interest-based audience. It is one of the highest-ROI moves in Facebook advertising when done right.",
  },
];

const faqs = [
  {
    q: "What is the best retargeting audience for Facebook Ads?",
    a: "Website visitors and cart abandoners are typically the highest-converting Facebook retargeting audiences. Cart abandoners in particular show purchase-ready intent and often convert with a single well-timed ad.",
  },
  {
    q: "How long should Facebook retargeting windows be?",
    a: "Most advertisers use 7, 30, and 180-day retargeting windows depending on buyer intent and sales cycle. Short windows (7 to 30 days) are best for high-intent actions; longer windows work for awareness and re-engagement.",
  },
  {
    q: "Should I exclude converters from retargeting?",
    a: "Yes, always exclude recent converters from your retargeting campaigns. Showing purchase ads to people who already bought wastes budget and damages brand perception.",
  },
  {
    q: "How big does a retargeting audience need to be?",
    a: "Facebook generally needs at least 1,000 people in a custom audience for ads to deliver effectively. Smaller audiences can work but may face limited reach and higher CPMs.",
  },
  {
    q: "Can I retarget Instagram engagers on Facebook?",
    a: "Yes. Since Facebook and Instagram share the same Ads Manager, you can build custom audiences from Instagram profile engagers and serve ads to them across both platforms.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-900 min-h-screen text-gray-300">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
          Facebook Ads · Retargeting Strategy · 2026
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Best Retargeting Audience Strategies <br className="hidden md:block" />
          for Facebook Ads
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Most advertisers retarget everyone the same way. The ones who win
          know exactly which audience to hit, with what message, at the right
          moment.
        </p>
        <div className="flex justify-center gap-4 mt-6 text-sm text-gray-500">
          <span>9 min read</span>
          <span>·</span>
          <span>Updated April 2026</span>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-gray-400 leading-relaxed mb-4">
          Retargeting is one of the highest-ROI moves in Facebook advertising
          — but only if you are targeting the right people with the right
          message. Blasting the same ad at every past visitor is how you burn
          budget and annoy potential customers.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          Below are the 10 retargeting audience strategies that consistently
          drive results — from quick-win setups to advanced plays most
          advertisers have not tried yet.
        </p>
        <p className="text-gray-400 leading-relaxed">
          If retargeting is new territory for you, start with our{" "}
          <Link
            href="/blog/retargeting-ads-convert-visitors-to-leads-2026"
            className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
          >
            guide to converting visitors into leads with retargeting
          </Link>
          . And if you want to know what mistakes to avoid first, the{" "}
          <Link
            href="/blog/retargeting-mistakes-waste-ad-budget"
            className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
          >
            retargeting mistakes that waste ad budget
          </Link>{" "}
          post is worth reading before you spend another dollar.
        </p>
      </section>

      <section
        id="examples"
        className="max-w-4xl mx-auto px-6 pb-16 scroll-mt-20"
      >
        <div className="space-y-12">
          {strategies.map((item, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-black text-slate-600 leading-none select-none">
                  {item.number}
                </span>
                <h2 className="text-xl font-bold text-white leading-snug mt-1">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed">
                {item.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.explanation}
              </p>
              <Link
                href="/signup"
                className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
              >
                Fix this in your ads →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Pattern Behind Every Winning Retargeting Strategy
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Every high-performing retargeting setup has one thing in common:
            it treats different audiences differently. The mistake most
            advertisers make is using one retargeting campaign to reach
            everyone — cart abandoners, cold visitors, video viewers, and past
            customers all lumped together with the same ad.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Segment by intent. Someone who abandoned their cart needs a
            different message than someone who watched 30 seconds of your brand
            video. Match the ad to where the person actually is in their
            decision process, and your conversion rates will reflect that.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Also worth reading:{" "}
            <Link
              href="/blog/facebook-lead-ads-vs-landing-pages"
              className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
            >
              Facebook Lead Ads vs. Landing Pages
            </Link>{" "}
            — because where you send your retargeting traffic matters just as
            much as who you target. And if CTR is your challenge, our{" "}
            <Link
              href="/blog/improve-ctr-on-ads-without-increasing-budget"
              className="text-rose-400 hover:text-rose-300 underline underline-offset-2"
            >
              CTR improvement guide
            </Link>{" "}
            covers actionable fixes that do not require increasing spend.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-3">
          Explore Real Ad Examples by Industry
        </h2>
        <p className="text-gray-400 mb-8">
          See how top-performing paid ad campaigns are structured across
          different industries and markets.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/ads/google/dentists/new-york/examples"
            className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-rose-500 transition-colors group"
          >
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Google Ads
            </span>
            <p className="text-white font-semibold mt-2 group-hover:text-rose-300 transition-colors">
              Dentist Ads · New York
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Real examples from NYC dental campaigns
            </p>
          </Link>
          <Link
            href="/ads/google/real-estate/mumbai/examples"
            className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-rose-500 transition-colors group"
          >
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Google Ads
            </span>
            <p className="text-white font-semibold mt-2 group-hover:text-rose-300 transition-colors">
              Real Estate Ads · Mumbai
            </p>
            <p className="text-sm text-gray-500 mt-1">
              High-converting real estate examples
            </p>
          </Link>
          <Link
            href="/ads/google/lawyers/houston/examples"
            className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-rose-500 transition-colors group"
          >
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Google Ads
            </span>
            <p className="text-white font-semibold mt-2 group-hover:text-rose-300 transition-colors">
              Lawyer Ads · Houston
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Legal campaign examples from Houston
            </p>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-bold text-white mb-5">Keep Reading</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              href: "/blog/best-facebook-ad-formats-local-business",
              label: "Best Facebook Ad Formats for Local Businesses",
            },
            {
              href: "/blog/high-converting-cta-for-ads",
              label: "How to Write High-Converting CTAs for Ads",
            },
            {
              href: "/blog/why-ads-not-converting-how-to-fix",
              label: "Why Your Ads Are Not Converting (And How to Fix It)",
            },
            {
              href: "/blog/scale-winning-ads-without-killing-roi",
              label: "How to Scale Winning Ads Without Killing ROI",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-2 border-b border-slate-800"
            >
              <span className="text-rose-500">→</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section
        id="cta"
        className="max-w-4xl mx-auto px-6 pb-16 scroll-mt-20"
      >
        <div className="bg-gradient-to-br from-rose-900/40 to-slate-800 rounded-lg p-10 border border-rose-800/40 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Build Smarter Retargeting Audiences
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Stop guessing which audiences convert. AdCampin helps you set up,
            segment, and optimize Facebook retargeting campaigns built around
            your actual customer journey.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Get Started Free →
          </Link>
          <p className="text-xs text-gray-600 mt-4">No credit card required</p>
        </div>
      </section>

      <section
        id="faq"
        className="max-w-4xl mx-auto px-6 pb-20 scroll-mt-20"
      >
        <h2 className="text-2xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-slate-800 pb-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}