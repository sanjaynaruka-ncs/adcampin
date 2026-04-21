import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle = "Best Facebook Ad Formats for Local Businesses in 2026";

export const metadata = {
  title: blogTitle,
  description:
    "Discover the best Facebook ad formats for local businesses in 2026 to generate leads, boost engagement, and increase ROI.",
  keywords: [
    "best facebook ad formats",
    "facebook ads local business",
    "local business facebook ads",
    "facebook ad types 2026",
    "facebook marketing for local business",
    "facebook lead ads local business",
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
    "@id": "https://www.adcampin.com/blog/best-facebook-ad-formats-local-business-2026",
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
        text: "Lead ads and video ads usually perform best for local businesses because they capture interest quickly and generate inquiries easily.",
      },
    },
    {
      "@type": "Question",
      name: "Are Facebook Lead Ads good for local businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Facebook Lead Ads reduce friction by allowing users to submit contact info without leaving the platform.",
      },
    },
    {
      "@type": "Question",
      name: "Should local businesses use video ads on Facebook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, video ads often improve engagement and trust, especially for service-based local businesses.",
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
      item: "https://www.adcampin.com/blog/best-facebook-ad-formats-local-business-2026",
    },
  ],
};

const formats = [
  {
    number: "01",
    format: "Image Ads",
    best_use: "Brand awareness, promotions, and service announcements",
    why_works:
      "Simple to produce and fast to test. A single strong visual with a clear headline is often enough to stop the scroll and drive clicks from a local audience that already knows your category.",
    explanation: (
  <>
    Image ads are the starting point for most local businesses. Use location-specific copy
    ("Serving Dallas since 2009"), a real photo of your team or space, and a direct CTA.
    Stock photos underperform — authenticity wins locally. For example,{" "}
    <Link href="/ads/google/dentists/new-york/examples">
      Google Ads for dentists in New York examples
    </Link>{" "}
    often perform better when using real clinic visuals instead of generic creatives.
  </>
),
  },
  {
    number: "02",
    format: "Video Ads",
    best_use: "Building trust, showcasing services, and explaining complex offerings",
    why_works:
      "Video holds attention longer than static images and lets local businesses show — not just tell — what makes them different. A 15–30 second clip of real work, real results, or real people consistently outperforms stock creative.",
    explanation:
      "You don't need a production crew. A phone-shot walkthrough of your clinic, kitchen, or job site builds more trust than a polished generic video. Keep it under 30 seconds, open with movement or a hook, and caption it for silent viewing.",
    extra_link: {
      href: "/blog/high-converting-ad-hooks-examples",
      label: "Get proven video hook ideas →",
    },
  },
  {
    number: "03",
    format: "Carousel Ads",
    best_use: "Showcasing multiple services, before/after results, or product ranges",
    why_works:
      "Carousel lets you tell a sequential story across 2–10 cards. For local businesses, this means showing multiple service offerings, a step-by-step process, or a transformation — all in one ad unit.",
    explanation:
      "A landscaping company can show spring cleanup → summer maintenance → fall prep → winter salting across four cards. Each card handles an objection or highlights a benefit. Users who swipe through to card 3+ are highly qualified — retarget them separately.",
    extra_link: null,
  },
  {
    number: "04",
    format: "Lead Ads",
    best_use: "Booking inquiries, quote requests, consultations, and appointment scheduling",
    why_works:
      "Lead Ads pre-fill contact forms with the user's Facebook data, reducing friction to near zero. No landing page needed, no redirects — the form opens natively inside the app and closes in seconds.",
    explanation:
      "This is the highest-volume format for service-based local businesses. A dental clinic asking 'Want a free whitening consultation?' gets far more responses through a Lead Ad than by sending users to a website form. Follow up within 5 minutes for best results.",
    extra_link: {
      href: "/blog/high-converting-cta-for-ads",
      label: "Craft a CTA that drives more lead form opens →",
    },
  },
  {
    number: "05",
    format: "Story Ads",
    best_use: "Time-sensitive offers, behind-the-scenes content, and local event promotion",
    why_works:
      "Stories occupy the full screen with no competing content, creating a focused viewing moment. They feel native to how people already consume content, which lowers resistance and increases engagement.",
    explanation:
      "Use Stories for flash sales, same-day offers, or 'today only' promotions. Film vertically, add text overlay on the first frame (many users watch without sound), and use a swipe-up CTA. Keep it under 15 seconds — urgency drives action here.",
    extra_link: null,
  },
  {
    number: "06",
    format: "Reel Ads",
    best_use: "Reaching new local audiences through interest-based discovery",
    why_works:
      "Reels are Facebook's fastest-growing placement and currently have lower CPMs than Feed. The algorithm surfaces Reels to non-followers based on content signals, giving local businesses genuine organic-like reach with paid amplification.",
    explanation:
      "Reels ads work best when they don't look like ads. Show a satisfying process, a quick tip, or a behind-the-scenes moment. Hook in the first 2 seconds, deliver value by second 8, and close with your CTA. Trending audio helps but isn't required.",
    extra_link: null,
  },
  {
    number: "07",
    format: "Messenger Ads",
    best_use: "Starting direct conversations, booking calls, and qualifying leads",
    why_works:
      "Messenger Ads open a chat window directly when clicked, starting a one-to-one conversation with your business. For service businesses that rely on consultations or quotes, this removes the website entirely from the conversion path.",
    explanation:
      "Set up an automated opening message with 2–3 quick-reply buttons ('Get a Quote', 'Book a Call', 'See Pricing'). Route to a human as fast as possible — speed to response is the single biggest conversion driver in Messenger. Use it for high-ticket services where trust matters.",
    extra_link: null,
  },
  {
    number: "08",
    format: "Collection Ads",
    best_use: "Local retailers, restaurants with menus, or businesses with multiple offerings",
    why_works:
      "Collection Ads combine a hero video or image with a product grid below it — creating a mini storefront inside the Facebook feed. Users can browse without leaving the app, which reduces drop-off dramatically.",
    explanation:
      "A local furniture store can show a living room setup as the hero, with individual items in the grid below. A restaurant can feature a seasonal dish above, with the full menu below. Collection Ads are underused by local businesses and often have lower competition CPMs as a result.",
    extra_link: null,
  },
  {
    number: "09",
    format: "Offer Ads",
    best_use: "Discount promotions, new customer specials, and seasonal deals",
    why_works:
      "Offer Ads let users 'save' a deal directly in their Facebook account and receive reminders before the offer expires. The save mechanic creates intent signals you can retarget, even if the user doesn't convert immediately.",
    explanation:
      "A 'First Visit 20% Off' offer at a local spa performs better as an Offer Ad than a regular image ad because the save action signals real interest. Retarget everyone who saved but didn't redeem within 3 days — those are warm leads sitting on a decision.",
    extra_link: {
      href: "/blog/retargeting-mistakes-waste-ad-budget",
      label: "Avoid wasting your retargeting budget on offer savers →",
    },
  },
  {
    number: "10",
    format: "Event Ads",
    best_use: "Promoting workshops, grand openings, seasonal events, and local pop-ups",
    why_works:
      "Event Ads connect directly to Facebook Events, allowing users to RSVP, get reminders, and share with friends. The social proof of RSVP counts and attendee lists creates compounding visibility that regular ads can't replicate.",
    explanation:
      "A gym running a free open day, a salon hosting a style event, or a restaurant launching a tasting menu night — all benefit from Event Ads because the RSVP mechanism builds a warm audience before the event even happens. Retarget RSVPs who didn't show with a follow-up offer.",
    extra_link: null,
  },
];

const internalLinks = [
  { label: "Dentist Ads · New York", href: "/ads/google/dentists/new-york/examples", tag: "Local Ads" },
  { label: "Real Estate Ads · Mumbai", href: "/ads/google/real-estate/mumbai/examples", tag: "Local Ads" },
  { label: "Lawyer Ads · Houston", href: "/ads/google/lawyers/houston/examples", tag: "Local Ads" },
  { label: "Facebook Ads for Lawyers", href: "/blog/facebook-ads-lawyers", tag: "Blog" },
  { label: "How to Write Facebook Ads for Local Business", href: "/blog/how-to-write-facebook-ads-local-business", tag: "Blog" },
  { label: "High-Converting CTAs for Ads", href: "/blog/high-converting-cta-for-ads", tag: "Blog" },
  { label: "Best Ad Creatives for Facebook & Instagram", href: "/blog/best-ad-creatives-facebook-instagram-clicks", tag: "Blog" },
  { label: "Why Your Ads Aren't Converting", href: "/blog/why-ads-not-converting-how-to-fix", tag: "Blog" },
  { label: "Scale Winning Ads Without Killing ROI", href: "/blog/scale-winning-ads-without-killing-roi-2026", tag: "Blog" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Facebook Ads · Local Business · 2026
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white leading-tight sm:text-5xl">
            Best Facebook Ad Formats for Local Businesses in 2026
          </h1>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Not every ad format works the same way for a local business. The wrong format wastes budget
            on impressions that never convert. The right one fills your calendar.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="border-l-2 border-rose-500 pl-5 max-w-2xl">
          <p className="text-gray-400">
            Facebook offers more ad formats than most local businesses ever explore — and each one is
            engineered for a different stage of the buyer journey.{" "}
            <span className="text-white font-medium">
              Matching the format to the goal is what separates a $10 CPA from a $90 one.
            </span>
          </p>
          <p className="mt-3 text-gray-400">
            Here are the 10 formats that work best for local businesses in 2026, what each one is built
            for, and how to use them without burning budget on guesswork.
          </p>
        </div>
      </section>

      {/* Main — 10 Formats */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-8">
          10 Facebook Ad Formats Built for Local Businesses
        </h2>
        <div className="space-y-6">
          {formats.map((f) => (
            <div key={f.number} className="rounded-lg border border-white/10 bg-slate-800 p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-rose-500/30 leading-none select-none">
                  {f.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{f.format}</h3>
                  <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-400 mb-1">
                        Best use case
                      </p>
                      <p className="text-sm text-gray-400">{f.best_use}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400 mb-1">
                        Why it works
                      </p>
                      <p className="text-sm text-gray-400">{f.why_works}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">{f.explanation}</p>
                  {f.extra_link && (
                    <Link
                      href={f.extra_link.href}
                      className="inline-block mt-2 text-sm text-rose-400 hover:text-rose-300"
                    >
                      {f.extra_link.label}
                    </Link>
                  )}
                  <div>
                    <Link
                      href="/signup"
                      className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
                    >
                      Fix this in your ads →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pattern / Insights */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-lg border border-white/10 bg-slate-900 p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            The Pattern: Match Format to Intent, Not Budget
          </h2>
          <p className="text-gray-400 mb-4">
            Local businesses that consistently get low CPAs on Facebook share one habit — they pick the
            format based on where the buyer is in their journey, not on what's easiest to produce.
          </p>
          <p className="text-gray-400 mb-5">
            Cold audiences get Reels and Video to build awareness. Warm audiences get Lead Ads and Offer
            Ads to convert. Past visitors get Messenger Ads to close. That layered approach is what
            turns Facebook into a{" "}
            <span className="text-white font-medium">predictable lead channel</span> instead of a
            money pit.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Top of funnel: Reel Ads, Video Ads, Story Ads — build trust and awareness cheaply.",
              "Middle of funnel: Carousel Ads, Image Ads, Event Ads — drive consideration and engagement.",
              "Bottom of funnel: Lead Ads, Messenger Ads, Offer Ads — convert interest into booked appointments.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-rose-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/blog/how-to-write-facebook-ads-local-business"
              className="text-rose-400 hover:text-rose-300"
            >
              How to write copy for each format →
            </Link>
            <Link
              href="/blog/retargeting-mistakes-waste-ad-budget"
              className="text-rose-400 hover:text-rose-300"
            >
              Retargeting mistakes to avoid after the click →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-6">Explore More Ad Examples & Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/10 bg-slate-800 p-4 hover:border-rose-500/40 transition-colors group"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-rose-400">
                {link.tag}
              </span>
              <p className="mt-1 text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {link.label} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-lg border border-rose-500/30 bg-slate-900 p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Pick the Right Format. Fill Your Calendar.
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            AdCampin helps local businesses launch the right Facebook ad format for their goal — with
            copy, creative direction, and targeting built in. No agency needed.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-6 rounded-lg bg-rose-500 px-8 py-3 text-sm font-semibold text-white hover:bg-rose-400 transition-colors"
          >
            Start My Local Facebook Ads — Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Facebook ad format works best for local businesses?",
              a: "Lead ads and video ads usually perform best for local businesses because they capture interest quickly and generate inquiries easily. Lead Ads are especially effective for service businesses that rely on bookings or consultations.",
            },
            {
              q: "Are Facebook Lead Ads good for local businesses?",
              a: "Yes, Facebook Lead Ads reduce friction by allowing users to submit contact info without leaving the platform. Pre-filled forms mean fewer drop-offs, and the native experience tends to generate more volume at lower CPAs than landing page campaigns.",
            },
            {
              q: "Should local businesses use video ads on Facebook?",
              a: "Yes, video ads often improve engagement and trust, especially for service-based local businesses. A short, authentic clip of your work, team, or space builds more credibility than any stock image — and video consistently outperforms static creative for cold audiences.",
            },
            {
              q: "How much should a local business spend on Facebook ads?",
              a: "Most local service businesses see results starting at $15–30/day per campaign. The key is starting focused — one format, one audience, one offer — then scaling what works. Spreading a small budget across multiple formats dilutes everything.",
            },
            {
              q: "What's the difference between Story Ads and Reel Ads?",
              a: "Story Ads appear in the Stories feed and disappear after 24 hours — they're best for time-sensitive offers. Reel Ads appear in the Reels tab and are algorithmically surfaced to non-followers, making them better for reaching new local audiences at scale.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-slate-800 p-5">
              <h3 className="text-sm font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.a}</p>
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