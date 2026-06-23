import Link from "next/link";
import Navbar from "../../components/navbar";

export const blogTitle =
  "15 Facebook Ads for Restaurants That Actually Work in 2026";

export const metadata = {
  title: blogTitle,
  description:
    "Discover 15 Facebook Ads for Restaurants that drive real results in 2026. From grand openings to retargeting, see what works and why.",
  keywords: [
    "Facebook Ads for Restaurants",
    "Restaurant Facebook Ad Examples",
    "Restaurant Advertising Ideas",
    "Facebook Restaurant Marketing",
    "Restaurant Lead Generation Ads",
    "Restaurant Promotion Ideas",
    "restaurant social media ads",
    "best restaurant Facebook campaigns",
    "restaurant digital advertising 2026",
    "local restaurant Facebook marketing",
  ],
  alternates: {
    canonical:
      "https://www.adcampin.com/blog/facebook-ads-restaurants-examples-that-work",
  },
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Facebook Ads work for restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Facebook Ads remain one of the most cost-effective channels for restaurants because of granular local targeting. You can reach people within a specific radius of your location, filter by dining interests, and retarget visitors who've already shown intent. Restaurants with a clear offer and a compelling visual consistently see measurable foot traffic and reservation lifts.",
      },
    },
    {
      "@type": "Question",
      name: "How much should restaurants spend on Facebook Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most independent restaurants see meaningful results starting at $300–$800/month. Chains or multi-location operators typically allocate $1,500–$5,000/month per market. The key is starting with a single campaign, proving the unit economics, and then scaling what works rather than spreading budget thin across multiple untested audiences.",
      },
    },
    {
      "@type": "Question",
      name: "What type of restaurant ads perform best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Limited-time offer ads and retargeting ads consistently outperform awareness-only creatives. Offers create urgency, while retargeting catches people who already know your restaurant but haven't committed. Seasonal menu ads and user-generated content ads also tend to punch above their weight because they feel native to the feed rather than obviously promotional.",
      },
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-gray-300">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest text-rose-400 uppercase mb-4">
          Restaurant Marketing · Facebook Ads
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          15 Facebook Ads for Restaurants That Actually Work in 2026
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Real ad concepts. Real reasons they convert. No fluff—just what's
          working right now for restaurants running paid social.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="max-w-3xl">
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Most restaurant Facebook ads fail because they look like every other
            restaurant Facebook ad. A stock photo of pasta, a generic "Visit Us
            Today" CTA, and a $5/day budget spread across the entire city. The{" "}
            <Link
              href="/ads/facebook/restaurants"
              className="text-rose-400 hover:text-rose-300"
            >
              Facebook Ads for Restaurants
            </Link>{" "}
            that actually drive covers and reservations do three things
            differently: they lead with a specific offer, they target a tight
            radius, and they give someone a real reason to act today.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            We analyzed ad patterns across independent restaurants, regional
            chains, and fast-casual operators to build this list. Each example
            below is a realistic concept you can adapt, not a made-up case study
            with invented numbers. You'll see the headline, the ad angle, why it
            works, and one practical insight you can implement this week.
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Whether you're running ads for the first time or trying to fix a
            campaign that's burning budget without results, these 15 examples
            cover the full funnel—from awareness to retargeting.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mt-4">
            Looking for more restaurant-specific campaigns? Browse our{" "}
            <Link
                href="/ads/facebook/restaurants/new-york/examples"
                className="text-rose-400 hover:text-rose-300"
            >
                restaurant Facebook ad examples
            </Link>{" "}
            or explore location-specific strategies for major cities.
            </p>
        </div>
      </section>

      {/* Main Content: 15 Examples */}
      <section id="examples" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-10">
          15 Facebook Ads for Restaurants That Actually Work in 2026
        </h2>

        <div className="space-y-8">
          {/* 1 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 01
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Grand Opening Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "We're Open. Come See What the Buzz Is About."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A short
              15-second Reel showing the kitchen prepping, the dining room set,
              and the chef plating the signature dish—ending on the address and
              opening date.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Curiosity
              does the heavy lifting. People in a 3-mile radius will click just
              to find out what opened near them. The video format builds trust
              faster than a static image ever could.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Run
              this as a reach campaign with a 2-mile radius targeting ages 25–55.
              Add a "Save the Date" event CTA to build a warm audience you can
              retarget post-opening.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 2 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 02
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Limited-Time Offer Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "48 Hours Only: Free Dessert With Any Entrée"
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> Bold text
              overlay on a close-up of your best dessert. Copy: "This weekend
              only. No code needed. Just show up and mention this ad."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Urgency +
              zero friction. The offer is time-boxed, the redemption is frictionless,
              and there's no coupon to forget. People share these with friends
              because they feel like insider knowledge.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Set the
              campaign end date 48 hours out and watch your frequency climb. If
              CTR drops after the first day, increase your daily budget
              slightly—you want the offer to feel urgent, not forgotten.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 3 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 03
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Weekend Special Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Your Saturday Night Sorted. Book a Table Before It's
              Gone."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A carousel
              showing three weekend dishes with short, appetite-driven
              descriptions. Final card: a reservation CTA with an OpenTable or
              Resy embed link.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> People make
              weekend dinner plans between Wednesday and Friday. Running this ad
              with a Thursday–Friday daypart means you're in the feed exactly
              when the decision is happening.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Use
              Facebook's ad scheduling to run this exclusively Thursday 6 PM
              through Friday midnight. You'll reduce wasted spend and hit people
              in planning mode.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 4 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 04
            </p>
            <h3 className="text-xl font-bold text-white mb-1">Happy Hour Ad</h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "$5 Cocktails. 3–6 PM. Every Weekday. You Know Where to
              Be."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A short video
              of two drinks being poured with ambient bar noise. Overlay text
              with the hours and a map pin of your location.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Happy hour
              ads work because the offer is immediately legible. Price, time,
              and place in one sentence. No one needs to think—they just need to
              decide.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Target
              office workers by layering "commuter" behavioral interests with
              your location radius. Run the ads 1–3 PM so they hit when people
              are already thinking about their post-work plans.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 5 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 05
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Family Dining Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Kids Eat Free on Sundays. Tables Go Fast—Reserve Yours."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A warm,
              well-lit photo of a family laughing at a table—authentic, not
              stock-photo stiff. Copy calls out the kids-eat-free detail and a
              simple reservation link.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Parents are
              constantly solving the "where do we take the kids Sunday?" problem.
              You're answering it before they have to ask Google.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Target
              parents of children under 12 using Facebook's parenting interest
              segments. Exclude ages 18–24 to sharpen relevance and reduce
              wasted impressions.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 6 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 06
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Local Awareness Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Locals Know. Now You Do Too—[Restaurant Name] Is Right
              Around the Corner."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A
              neighborhood-feel photo of your exterior or street-facing patio.
              Copy mentions the cross street. CTA: "Get Directions."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> The "Get
              Directions" objective feeds Facebook's algorithm exactly the signal
              it needs to optimize for in-person visits. Local awareness ads with
              map CTAs consistently outperform generic "Learn More" placements.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Set a
              1-mile radius and let the campaign run on a low daily budget for
              30 days. The goal is saturation within your immediate neighborhood,
              not reach across the city.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 7 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 07
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Delivery Promotion Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "No Plans? No Problem. We Deliver to Your Door in Under
              40 Minutes."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A flat-lay
              photo of your most popular delivery order, packaged and ready.
              Copy highlights speed, the delivery zone, and a direct order link
              (not a third-party app if you can avoid it).
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Delivery
              decisions happen in the evening, often impulsively. A strong
              evening daypart with a speed-focused message meets people exactly
              at that moment of low decision resistance.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> If
              you're using your own ordering system, drive directly to it—you
              keep the margin. If you're on a third-party platform, still run
              the ad but test both destinations to see which converts better.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 8 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 08
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Loyalty Program Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Eat Here. Earn Points. Get Free Food. It's That Simple."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A clean
              graphic showing the loyalty tier breakdown—visit 5 times, get a
              free appetizer. CTA: "Join Free." Link to your loyalty signup page
              or app.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Loyalty ads
              work best as retargeting. Someone who's visited once but hasn't
              come back is the perfect audience—you already have social proof,
              you just need a reason for them to return.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Build a
              custom audience from your email list or POS data and serve this ad
              only to lapsed customers (visited 30–90 days ago). Your CPL will
              be far lower than cold traffic.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 9 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 09
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Seasonal Menu Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Summer Menu Is Here. Same Kitchen, New Obsessions."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A carousel of
              three new seasonal dishes—real photos, not renders. Each card
              names the dish and one key ingredient. Final card: "See the Full
              Menu."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Seasonal
              menus create a natural reason to visit that doesn't feel like a
              promotion. It's news, not a discount—which means you're not
              training customers to wait for deals.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Run
              this to your existing page followers first (it's cheap and warms
              your most loyal audience), then expand to lookalikes of your best
              customers.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 10 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 10
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Event Promotion Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Live Jazz + Dinner This Friday. Limited Seats—Don't Wait."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A Facebook
              Event ad with a photo of a previous live event (or the venue
              dressed up), the event details, and a "Reserve Your Seat" CTA
              linking directly to a ticketing or booking page.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Events
              justify a higher ticket price and attract new customers who
              wouldn't normally try a new restaurant just for dinner. The
              entertainment is the hook; your food is the conversion.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Use
              Facebook's Event objective so people can RSVP without leaving the
              platform. Follow up with an event reminder ad 24 hours before to
              reduce no-shows.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 11 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 11
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Catering Service Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Corporate Lunch? Office Party? We Handle the Food—You
              Handle Everything Else."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A photo of a
              catering spread set up for an office or event. Copy lists the
              minimum headcount, cuisine options, and a lead form CTA to get a
              quote.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> B2B
              catering leads are high-value and often repeat. One corporate
              account can be worth more than dozens of individual tables. Lead
              generation ads with an instant form dramatically lower the barrier
              to inquiry.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Target
              by job title (office manager, executive assistant, event planner)
              within a 10-mile radius. These are the gatekeepers for food
              decisions at most companies.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 12 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 12
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Chef Spotlight Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "Meet Chef Maria. She's Been Perfecting This Recipe for
              12 Years."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A short
              30-second video of your chef explaining the inspiration behind one
              signature dish—in their own words, unscripted. No production
              needed; a phone camera works.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> People eat
              at restaurants, not from brands. When a real person is behind the
              food, trust goes up and price sensitivity goes down. This type of
              ad also performs well as organic content, giving you double value.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Keep it
              under 45 seconds. The first 3 seconds need to feature the chef
              speaking—not a logo or title card—or you'll lose the scroll.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 13 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 13
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              User Generated Content Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "This Is What Our Regulars Keep Ordering."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A real
              customer's photo of your dish (with permission), posted with their
              caption or a short quote. Minimal brand overlay—let the authentic
              content lead.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> UGC ads
              don't look like ads. They blend into the feed and carry implicit
              social proof. Audiences trust a real customer photo more than a
              professional food shoot, even when the quality is lower.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Build a
              simple workflow: ask for photo permission when a customer tags you,
              save the best ones, and rotate them into your ad creative monthly.
              Always credit the customer in the copy.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 14 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 14
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              Review Testimonial Ad
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "'Best Dinner We've Had in Years.' — Google Review,
              March 2026"
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A dark
              background with the review in large white text, a photo of the
              dish being reviewed, your star rating, and a reservation CTA
              underneath.
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Third-party
              validation converts skeptics. Someone on the fence about trying a
              new restaurant doesn't need another food photo—they need to know
              other people have been there and loved it.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Use
              reviews that mention a specific dish, not just vague praise.
              "The tacos changed my life" outperforms "Great service and
              atmosphere" because it's specific and memorable.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>

          {/* 15 */}
          <div className="rounded-lg border border-slate-700 p-6">
            <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Example 15
            </p>
            <h3 className="text-xl font-bold text-white mb-1">Retargeting Ad</h3>
            <p className="text-sm text-gray-500 mb-3">
              Headline: "You Checked Us Out. Ready to Come In?"
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Ad Example:</strong> A simple
              image ad showing your most popular dish with a gentle nudge in the
              copy: "You've seen the menu. We've saved a table. Make a
              reservation in under a minute." CTA: "Book Now."
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Why It Works:</strong> Retargeting
              ads target people who already know you—they visited your website,
              engaged with your page, or watched a video. The cost per result is
              lower because trust is already partially built.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Practical Insight:</strong> Create
              a custom audience from website visitors in the last 30 days and
              exclude people who've already completed a reservation. Run a 7-day
              window with a $10–$20/day budget—this is often your
              highest-ROAS campaign if you set it up correctly.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-3 text-sm text-rose-400 hover:text-rose-300"
            >
              Fix this in your ads →
            </Link>
          </div>
        </div>
      </section>

      {/* Key Patterns Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-lg border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Key Patterns We Found
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-semibold text-rose-400 mb-3">
                Best Performing Ad Types
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  • Retargeting ads consistently deliver the lowest cost per
                  reservation—sometimes 60–70% cheaper than cold traffic
                </li>
                <li>
                  • Limited-time offer ads get the highest CTR when the time
                  window is 48–72 hours, not "this month"
                </li>
                <li>
                  • Video ads (even short, unpolished ones) outperform static
                  images on mobile placements
                </li>
                <li>
                  • UGC and testimonial ads see stronger engagement rates than
                  professionally shot food photography
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-rose-400 mb-3">
                Common Restaurant Marketing Mistakes
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  • Targeting the whole city when 80% of your customers live
                  within 3 miles
                </li>
                <li>
                  • Running ads 24/7 when your offer is only relevant Thursday
                  through Saturday
                </li>
                <li>
                  • Using "Learn More" as a CTA when "Reserve a Table" or "Get
                  Directions" is far more specific
                </li>
                <li>
                  • Skipping the Facebook Pixel entirely, which kills retargeting
                  and lookalike capability
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-rose-400 mb-3">
                Budget Recommendations
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Start with $300–$500/month and one campaign objective</li>
                <li>
                  • Allocate 60% to acquisition, 40% to retargeting once your
                  Pixel has data
                </li>
                <li>
                  • Increase budget on campaigns with a CPA below your average
                  table value
                </li>
                <li>
                  • Don't split budget across 5 campaigns—go deeper on 1–2 that
                  are working
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-rose-400 mb-3">
                Offer Ideas That Convert
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• "Kids eat free" tied to a specific day</li>
                <li>• Free appetizer with reservation (no minimum spend)</li>
                <li>• Early bird discount before 6 PM on weekdays</li>
                <li>• Birthday month special for loyalty members</li>
                <li>
                  • Bring-a-friend offer (two entrées, one price on Tuesdays)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
        Facebook Ads for Restaurants in 2026: Average CPC, CPM, CTR & ROAS Benchmarks
        </h2>
        <div className="rounded-lg border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800">
                <th className="text-left px-6 py-4 font-semibold text-white">
                  Metric
                </th>
                <th className="text-left px-6 py-4 font-semibold text-white">
                  Typical Range
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 text-gray-300">
                  Click-Through Rate (CTR)
                </td>
                <td className="px-6 py-4 text-gray-300">0.8% – 2.4%</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 text-gray-300">
                  Cost Per Click (CPC)
                </td>
                <td className="px-6 py-4 text-gray-300">$0.45 – $1.80</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 text-gray-300">
                  CPM (Cost Per 1,000 Impressions)
                </td>
                <td className="px-6 py-4 text-gray-300">$6 – $18</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 text-gray-300">
                  Lead Cost (Catering / Inquiry)
                </td>
                <td className="px-6 py-4 text-gray-300">$4 – $22</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 text-gray-300">
                  Reservation Cost
                </td>
                <td className="px-6 py-4 text-gray-300">$1.50 – $8</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 text-gray-300">
                  ROAS (Return on Ad Spend)
                </td>
                <td className="px-6 py-4 text-gray-300">3x – 9x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Ranges reflect independent restaurants and regional chains running
          local awareness and conversion campaigns. Retargeting campaigns
          typically sit at the better end of these ranges.
        </p>
      </section>

      {/* Explore More Ad Examples */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Explore More Ad Examples
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/ads/facebook/restaurants#examples"
            className="rounded-lg border border-slate-700 p-6 hover:border-rose-500 transition-colors block"
          >
            <p className="text-sm text-rose-400 font-semibold mb-2">
            Facebook Ads for Restaurants →
            </p>
            <h3 className="text-white font-semibold mb-1">
              Restaurant Facebook Ad Library
            </h3>
            <p className="text-sm text-gray-400">
              The full collection of restaurant Facebook ad concepts, filtered
              by format and objective.
            </p>
          </Link>
          <Link
            href="/ads/facebook/restaurants/new-york#examples"
            className="rounded-lg border border-slate-700 p-6 hover:border-rose-500 transition-colors block"
          >
            <p className="text-sm text-rose-400 font-semibold mb-2">
              By City →
            </p>
            <h3 className="text-white font-semibold mb-1">
              New York Restaurant Ads
            </h3>
            <p className="text-sm text-gray-400">
              Ad examples tailored to competitive urban restaurant markets with
              dense local targeting.
            </p>
          </Link>
          <Link
            href="/ads/facebook/restaurants/new-york/examples#examples"
            className="rounded-lg border border-slate-700 p-6 hover:border-rose-500 transition-colors block"
          >
            <p className="text-sm text-rose-400 font-semibold mb-2">
            Restaurant Ad Examples →
            </p>
            <h3 className="text-white font-semibold mb-1">
              NYC Restaurant Ad Examples
            </h3>
            <p className="text-sm text-gray-400">
              Specific creative examples from the New York restaurant market you
              can model your own ads on.
            </p>
          </Link>
        </div>
        <div className="flex gap-4 mt-6 text-sm">
          <a href="#examples" className="text-rose-400 hover:text-rose-300">
            Jump to Examples ↑
          </a>
          <a href="#faq" className="text-rose-400 hover:text-rose-300">
            See FAQs ↓
          </a>
          <a href="#cta" className="text-rose-400 hover:text-rose-300">
            Get Started ↓
          </a>
        </div>
      </section>

      {/* Related Resources */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Related Resources
        </h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/ads/facebook/restaurants"
              className="text-rose-400 hover:text-rose-300 text-sm"
            >
              Facebook Ads for Restaurants — Full Ad Library
            </Link>
          </li>
          <li>
            <Link
              href="/ads/facebook/restaurants/new-york"
              className="text-rose-400 hover:text-rose-300 text-sm"
            >
              New York Restaurant Facebook Ads
            </Link>
          </li>
          <li>
            <Link
              href="/ads/facebook/restaurants/new-york/examples"
              className="text-rose-400 hover:text-rose-300 text-sm"
            >
              New York Restaurant Ad Examples
            </Link>
          </li>
          <li>
            <Link
            href="/ads/facebook/restaurants/los-angeles/examples"
              className="text-rose-400 hover:text-rose-300 text-sm"
            >
              Los Angeles Restaurant Facebook Ads
            </Link>
          </li>
          <li>
            <Link
            href="/ads/facebook/restaurants/chicago/examples"
              className="text-rose-400 hover:text-rose-300 text-sm"
            >
              Chicago Restaurant Facebook Ads
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="max-w-6xl mx-auto px-6 pb-16"
      >
        <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Better Facebook Ads for Your Restaurant?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            AdCampin helps restaurant owners build, launch, and optimize
            Facebook ad campaigns without needing an agency or a marketing
            degree. Set up your first campaign in minutes, not days.
          </p>
          <ul className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-300 mb-8">
            <li>✓ Pre-built restaurant ad templates</li>
            <li>✓ Local radius targeting tools</li>
            <li>✓ Retargeting setup included</li>
          </ul>
          <Link
            href="/signup"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Free — No Credit Card Required
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl">
          <div className="rounded-lg border border-slate-700 p-6">
            <h3 className="text-white font-semibold mb-3">
              Do Facebook Ads work for restaurants?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Yes. Facebook Ads remain one of the most cost-effective channels
              for restaurants because of granular local targeting. You can reach
              people within a specific radius of your location, filter by dining
              interests, and retarget visitors who've already shown intent.
              Restaurants with a clear offer and a compelling visual consistently
              see measurable foot traffic and reservation lifts.
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 p-6">
            <h3 className="text-white font-semibold mb-3">
              How much should restaurants spend on Facebook Ads?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Most independent restaurants see meaningful results starting at
              $300–$800/month. Chains or multi-location operators typically
              allocate $1,500–$5,000/month per market. The key is starting with
              a single campaign, proving the unit economics, and then scaling
              what works rather than spreading budget thin across multiple
              untested audiences.
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 p-6">
            <h3 className="text-white font-semibold mb-3">
              What type of restaurant ads perform best?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Limited-time offer ads and retargeting ads consistently outperform
              awareness-only creatives. Offers create urgency, while retargeting
              catches people who already know your restaurant but haven't
              committed. Seasonal menu ads and user-generated content ads also
              tend to punch above their weight because they feel native to the
              feed rather than obviously promotional.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </div>
  );
}