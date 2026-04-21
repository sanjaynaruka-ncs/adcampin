import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "Best Facebook Ad Formats for Local Businesses (2026 Guide)";

export const metadata = {
  title: blogTitle,
  description:
    "Discover the best Facebook ad formats for local businesses to drive leads, boost engagement, and increase ROI in 2026.",
  keywords: [
    "facebook ad formats",
    "best facebook ads for local business",
    "facebook local business ads",
    "facebook advertising 2026",
    "facebook lead ads",
    "facebook ad strategy local business",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blogTitle,
  description: metadata.description,
  author: {
    "@type": "Organization",
    name: "AdCampin",
  },
  publisher: {
    "@type": "Organization",
    name: "AdCampin",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.adcampin.com/blog/best-facebook-ad-formats-local-business",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Facebook ad format works best for local businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lead ads and video ads usually perform best for local businesses because they capture attention and generate inquiries quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Are Facebook Lead Ads good for local businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Facebook Lead Ads reduce friction by letting users submit contact details without leaving Facebook.",
      },
    },
    {
      "@type": "Question",
      name: "Should local businesses use video ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, video ads often improve engagement and trust, especially for service-based businesses.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.adcampin.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.adcampin.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: blogTitle,
      item: "https://www.adcampin.com/blog/best-facebook-ad-formats-local-business",
    },
  ],
};

const formats = [
  {
    id: 1,
    tag: "Image Ads",
    headline: "Image Ads: Simple, Fast, and Still Effective",
    description:
      "A single high-quality photo with a sharp headline and clear CTA can outperform complex formats — especially when the creative is hyper-local.",
    explanation: (
  <>
    Image ads are the easiest to produce and the fastest to test. For local businesses,
    showing a recognizable location, a real team photo, or a before/after transformation
    builds immediate trust. Keep the visual clean, the text minimal, and always include a
    local anchor — the neighborhood name, a landmark, or a recognizable storefront. For example,{" "}
    <Link href="/ads/google/dentists/new-york/examples">
      Google Ads for dentists in New York examples
    </Link>{" "}
    often rely on familiar visuals to increase conversions. This isn't about being flashy.
    It's about being familiar.
  </>
),
  },
  {
    id: 2,
    tag: "Video Ads",
    headline: "Video Ads: Let Prospects See You Before They Meet You",
    description:
      "A 15–30 second video showing your service, your team, or a customer result builds more trust than any static image — and Facebook rewards it with cheaper reach.",
    explanation:
      "Video doesn't have to be expensive or over-produced. A smartphone walkthrough of your workspace, a quick client testimonial, or a before/after timelapse often outperforms polished agency content for local audiences. Hook the viewer in the first 3 seconds — lead with the result, not the backstory. Facebook's algorithm actively pushes video content further than static, so the extra effort usually pays off in reach and cost.",
  },
  {
    id: 3,
    tag: "Carousel Ads",
    headline: "Carousel Ads: Show Multiple Services Without Multiple Campaigns",
    description:
      "Carousel lets you feature 2–10 cards in a single ad — perfect for showcasing different services, locations, products, or testimonials without overwhelming the viewer.",
    explanation:
      "For a local business with multiple offerings — say, a dental clinic running cleanings, whitening, and implants — carousel gives each service its own card, its own headline, and its own CTA link. Users swipe at their own pace, which increases engagement time. Each card can link to a different landing page, letting you track which service is generating the most interest. It's one ad unit doing the work of several.",
  },
  {
    id: 4,
    tag: "Lead Ads",
    headline: "Lead Ads: Collect Inquiries Without Sending People Off Facebook",
    description:
      "Facebook pre-fills contact forms with the user's info from their profile. One tap to confirm, one tap to submit — frictionless lead generation for local service businesses.",
    explanation:
      "Lead ads are purpose-built for businesses that need phone numbers, emails, or appointment requests. The form never opens a browser tab — everything happens inside Facebook — which dramatically reduces drop-off. For local businesses running special offers, free consultations, or quote requests, this format consistently delivers lower cost-per-lead than sending cold traffic to an external landing page. Connect your CRM directly to the lead form for instant follow-up.",
  },
  {
    id: 5,
    tag: "Story Ads",
    headline: "Story Ads: Full-Screen Attention in a Swipe-Friendly Format",
    description:
      "Stories take up the entire phone screen and play between organic content — they're impossible to scroll past without noticing, making them ideal for high-impact local offers.",
    explanation:
      "The story format rewards urgency. Use countdown overlays for limited-time offers, location stickers to reinforce local relevance, and direct CTAs like \"Swipe up to book\" or \"DM us today.\" Keep it under 15 seconds and front-load the offer — don't build up to it. Story ads work especially well for flash promotions, seasonal campaigns, and anything with a genuine deadline attached.",
  },
  {
    id: 6,
    tag: "Reel Ads",
    headline: "Reel Ads: Reach New Local Audiences Through Short-Form Video",
    description:
      "Reels are Meta's fastest-growing placement. Local businesses that create authentic, engaging short clips get extended organic-like reach at paid-ad costs.",
    explanation:
      "Reel ads show up in the Reels tab, Feed, and Explore — giving you three placements for one creative. For local businesses, the winning formula is authentic over polished: show your process, share a quick tip, or highlight a community moment. Reels with native-looking content (no hard sell in the first 3 seconds) tend to get watched longer, which reduces cost and increases brand recognition in your local market.",
  },
  {
    id: 7,
    tag: "Messenger Ads",
    headline: "Messenger Ads: Start a Conversation That Leads to a Booking",
    description:
      "Messenger ads open a direct chat thread instead of a landing page — turning ad clicks into real conversations with qualified local prospects.",
    explanation:
      "This format works especially well for high-consideration local services: legal consultations, medical appointments, home renovation quotes. A prospect clicks the ad, a chat window opens with a pre-written opener, and your team (or a chatbot) can qualify and convert in real time. Response time matters here — if you can reply within minutes, conversion rates from Messenger ads are consistently higher than from cold landing pages.",
  },
  {
    id: 8,
    tag: "Collection Ads",
    headline: "Collection Ads: Create a Mini Storefront Inside Facebook",
    description:
      "Collection ads combine a hero video or image with a grid of product or service tiles below — giving local businesses a mobile shopping experience without needing an app.",
    explanation:
      "Originally built for e-commerce, collection ads work surprisingly well for local service businesses when repurposed for service packages, pricing tiers, or case study showcases. The format is immersive — tapping the ad opens a full-screen \"Instant Experience\" where users can browse without leaving Facebook. For local businesses with a clear menu of services and strong visual assets, this is one of the most engaging formats available.",
  },
  {
    id: 9,
    tag: "Offer Ads",
    headline: "Offer Ads: Give People a Coupon They Can Actually Use",
    description:
      "Facebook Offer Ads let you distribute discount codes, special deals, or limited-time promotions that users can save to their profile and redeem in-store or online.",
    explanation:
      "What makes Offer Ads different from a regular ad with a promo code? Users receive a notification when the offer is about to expire, giving you a second touchpoint without additional spend. Saved offers also show up in users' Saved Items, keeping your business top of mind. For local brick-and-mortar businesses — restaurants, salons, gyms — this format directly drives foot traffic in a trackable, time-bound way.",
  },
  {
    id: 10,
    tag: "Event Ads",
    headline: "Event Ads: Fill Seats, Boost Attendance, Build Community",
    description:
      "Promoting a local event — an open house, a grand opening, a free workshop — with Facebook Event Ads connects you to people in your area who are actively looking for things to do.",
    explanation:
      "Event Ads pull from your Facebook Event page and let users RSVP directly from the ad. Every RSVP creates a notification touchpoint and shows your event in the user's calendar — passive remarketing at zero extra cost. For local businesses trying to build community presence and capture first-time visitors, an event is often a lower-barrier entry point than a direct sales push. And the attendee list becomes your next retargeting audience.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/60">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/25 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            2026 Guide · Facebook Ads
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            Best Facebook Ad Formats for Local Businesses
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Not every Facebook ad format works the same for a local business. Some are built for
            brand reach, others for direct leads, and a few are criminally underused by small
            businesses that could benefit most from them. Here's the complete breakdown.
          </p>
          <div className="flex gap-4 mt-8 text-sm text-gray-500">
            <span>10 formats covered</span>
            <span>·</span>
            <span>~8 min read</span>
            <span>·</span>
            <Link href="#faq" className="text-rose-400 hover:text-rose-300 transition-colors">
              Skip to FAQ ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
          Facebook gives you more ad format options than almost any other platform. That's great
          when you know what you're doing — and overwhelming when you don't. Most local
          businesses default to a basic image ad and wonder why results are underwhelming.
        </p>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl mt-4">
          The format you choose shapes how people interact with your ad, how much you pay for
          attention, and what action they take next. Below are 10 formats that actually work for
          local businesses in 2026 — and exactly how to use each one.
        </p>
      </section>

      {/* Main Content */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6">
          {formats.map((f) => (
            <div
              key={f.id}
              className="rounded-lg bg-slate-800/60 border border-slate-700/50 p-6 hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">
                  {f.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-700 text-slate-400 uppercase tracking-wider">
                      {f.tag}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2 leading-snug">
                    {f.headline}
                  </h2>
                  <p className="text-gray-300 font-medium mb-3">{f.description}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.explanation}</p>
                  <Link
                    href="/signup"
                    className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Fix this in your ads →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pattern / Insights */}
      <section className="border-t border-b border-slate-700/60 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-white mb-3">
            How to Choose the Right Format for Your Business
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mb-8">
            There's no single best format — the right choice depends on your goal, your asset
            library, and where your audience is in the buying journey. Here's a quick framework
            to narrow it down.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "For Lead Generation",
                body: "Lead Ads and Messenger Ads are your highest-leverage formats. Both minimize friction and are designed to capture contact information without requiring a landing page.",
              },
              {
                label: "For Brand Awareness",
                body: "Video Ads and Reel Ads get the most reach per dollar and build the kind of familiarity that makes your other campaigns convert better. Run these continuously at a low budget.",
              },
              {
                label: "For Promotions and Events",
                body: "Offer Ads and Event Ads have built-in re-engagement mechanics — saved offers and RSVPs create notification touchpoints that keep your business visible without extra spend.",
              },
            ].map((insight) => (
              <div
                key={insight.label}
                className="rounded-lg bg-slate-900/60 border border-slate-700/50 p-5"
              >
                <div className="w-1.5 h-6 bg-rose-500 rounded mb-4" />
                <h3 className="text-white font-semibold mb-2">{insight.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-white mb-2">Explore More Ad Examples</h2>
        <p className="text-gray-400 text-sm mb-8">
          See how local businesses in specific industries and cities structure their winning ad
          campaigns.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            {
              href: "/ads/google/dentists/new-york/examples",
              label: "Google Ads for Dentists — New York",
              sub: "Local lead gen examples",
            },
            {
              href: "/ads/google/real-estate/mumbai/examples",
              label: "Google Ads for Real Estate — Mumbai",
              sub: "Property campaign examples",
            },
            {
              href: "/ads/google/lawyers/houston/examples",
              label: "Google Ads for Lawyers — Houston",
              sub: "Legal lead gen examples",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-slate-700/50 bg-slate-800/40 p-5 hover:border-rose-500/40 hover:bg-slate-800/70 transition-all"
            >
              <p className="text-white font-medium group-hover:text-rose-300 transition-colors mb-1">
                {link.label}
              </p>
              <p className="text-gray-500 text-xs">{link.sub}</p>
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">Related Guides</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { href: "/blog/facebook-ads-lawyers", label: "Facebook Ads for Lawyers: What Works in 2026" },
            { href: "/blog/how-to-write-facebook-ads-local-business", label: "How to Write Facebook Ads for Local Businesses" },
            { href: "/blog/high-converting-cta-for-ads", label: "High-Converting CTAs for Ads" },
            { href: "/blog/high-converting-ad-hooks-examples", label: "High-Converting Ad Hooks with Examples" },
            { href: "/blog/best-ad-creatives-facebook-instagram-clicks", label: "Best Ad Creatives for Facebook & Instagram Clicks" },
            { href: "/blog/why-ads-not-converting-how-to-fix", label: "Why Your Ads Aren't Converting (And How to Fix It)" },
            { href: "/blog/retargeting-mistakes-waste-ad-budget", label: "7 Retargeting Mistakes That Waste Your Ad Budget" },
            { href: "/blog/scale-winning-ads-without-killing-roi", label: "How to Scale Winning Ads Without Killing ROI" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-rose-300 transition-colors py-2 border-b border-slate-800"
            >
              <span className="text-rose-500">→</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="border-t border-slate-700/60 bg-gradient-to-b from-slate-800/50 to-slate-900"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-6">
            Start Free
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Build Better Facebook Ads for Your Local Business
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
            AdCampin helps local businesses create, test, and scale Facebook ads across every
            format — without needing a full-time marketing team. No credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-semibold text-base transition-colors shadow-lg shadow-rose-500/20"
          >
            Start Building Ads Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Facebook ad format works best for local businesses?",
              a: "Lead ads and video ads usually perform best for local businesses because they capture attention and generate inquiries quickly. Lead ads minimize friction for contact form submissions, while video builds trust and brand familiarity in your local market.",
            },
            {
              q: "Are Facebook Lead Ads good for local businesses?",
              a: "Yes, Facebook Lead Ads reduce friction by letting users submit contact details without leaving Facebook. The pre-filled form fields dramatically reduce drop-off, making them one of the most cost-effective formats for appointment-based and service businesses.",
            },
            {
              q: "Should local businesses use video ads?",
              a: "Yes, video ads often improve engagement and trust, especially for service-based businesses. Even a simple smartphone video of your team, workspace, or a customer testimonial can outperform polished static ads by building the human connection that local businesses rely on.",
            },
            {
              q: "How much should a local business spend on Facebook ads?",
              a: "Most local businesses can start seeing meaningful results with $15–30/day. The key is concentrating budget on 1–2 formats that match your goal rather than spreading a small budget thin across too many campaigns.",
            },
            {
              q: "What's the difference between Carousel and Collection Ads?",
              a: "Carousel Ads show 2–10 swipeable cards in the main feed and each card can link to a different URL. Collection Ads open a full-screen Instant Experience when tapped — better for immersive browsing but requiring more creative assets to build.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-6"
            >
              <h3 className="text-white font-semibold mb-3">{item.q}</h3>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}