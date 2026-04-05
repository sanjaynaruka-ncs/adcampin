export const metadata = {
  title: "Facebook Ad Copy for Real Estate (10 High-Converting Examples)",
  description:
    "10 high-converting real estate Facebook ad copy examples with templates.",
};

const ads = [
  {
    id: 1,
    headline: "3BHK in [City] — Priced to Move This Week",
    primaryText:
      "Spacious 3-bedroom home in [Neighborhood]. New kitchen. Big backyard. Walking distance to schools.\n\nOnly 2 units left at this price. Serious buyers, let's talk.",
    cta: "Book a Viewing",
    explanation:
      "Short sentences mirror how people actually read on mobile. The phrase 'only 2 units left' creates real scarcity without being overdramatic.",
    trigger: "Scarcity + Specificity",
  },
  {
    id: 2,
    headline: "Stop Paying Rent. Start Building Equity.",
    primaryText:
      "Your monthly rent could be covering a mortgage — and building something that's yours.\n\nWe'll show you exactly what you can afford, with zero pressure. Free consultation, this week only.",
    cta: "Get Free Consultation",
    explanation:
      "This flips the renter's mindset without being preachy. The 'zero pressure' line reduces the sales fear that usually stops clicks.",
    trigger: "Loss Aversion + Reassurance",
  },
  {
    id: 3,
    headline: "New Listing: [City] Home — Open House This Saturday",
    primaryText:
      "4 bed | 2 bath | 2-car garage | Quiet cul-de-sac\n\nThis one won't last the weekend. Come see it Saturday, 11am–3pm. No appointment needed.",
    cta: "Get Directions",
    explanation:
      "Bullet-style specs let scanners quickly qualify themselves. Predicting it won't last adds urgency without a fake countdown timer.",
    trigger: "Urgency + Ease of Action",
  },
  {
    id: 4,
    headline: "What's Your Home Actually Worth Right Now?",
    primaryText:
      "The market has shifted. That estimate from 18 months ago? Probably not accurate anymore.\n\nGet a free, no-strings valuation based on real recent sales in your area. Takes 60 seconds.",
    cta: "Get My Home Value",
    explanation:
      "Sellers are always curious about their home's value — this hooks them with a question, then disqualifies the old data they're anchored to.",
    trigger: "Curiosity + Anchoring Disruption",
  },
  {
    id: 5,
    headline: "First-Time Buyer? We've Got You.",
    primaryText:
      "Most first-time buyers don't know about the grants, low-deposit options, and local programs available to them.\n\nWe walk you through everything — from pre-approval to keys in hand. No jargon, no pressure.",
    cta: "Learn More",
    explanation:
      "First-time buyers are anxious and overwhelmed. This ad speaks directly to that feeling and positions the agent as a guide, not a salesperson.",
    trigger: "Empathy + Authority",
  },
  {
    id: 6,
    headline: "Sold 3 Homes on This Street Last Month. Yours Could Be Next.",
    primaryText:
      "When buyers are searching [Neighborhood], they're finding our listings first.\n\nWe know this market inside out — and we get results. Find out what your home could sell for in this market.",
    cta: "Request Free Valuation",
    explanation:
      "Hyper-local social proof is far more convincing than generic stats. Saying 'this street' is specific enough to feel credible.",
    trigger: "Social Proof + Local Authority",
  },
  {
    id: 7,
    headline: "Move In Before the School Year Starts",
    primaryText:
      "Looking for a family home in [School District]? We have 6 listings ready to go — all within the catchment area, all move-in ready.\n\nLet's get you settled before September.",
    cta: "View Available Homes",
    explanation:
      "Deadline-linked copy tied to a life event (school year) feels natural, not pushy. It segments the audience cleanly — only parents with school-age kids will care.",
    trigger: "Deadline + Life-Stage Targeting",
  },
  {
    id: 8,
    headline: "Luxury Living Under $[Price] — Yes, Really.",
    primaryText:
      "High ceilings. Marble counters. Private rooftop. And still under your budget?\n\nThis [City] penthouse is priced below what you'd expect. Click to see why buyers are moving fast.",
    cta: "See the Listing",
    explanation:
      "The 'Yes, Really' in the headline signals the agent knows the price sounds too good — and uses that disbelief to drive clicks. It teases without giving everything away.",
    trigger: "Curiosity + Value Perception",
  },
  {
    id: 9,
    headline: "Thinking of Selling? Here's What Buyers Are Paying Right Now.",
    primaryText:
      "In [Neighborhood], the average days-on-market is down to 11. Buyers are competing.\n\nIf you've been waiting for the right time — this might be it. Let's talk numbers.",
    cta: "Talk to an Agent",
    explanation:
      "Data-led copy builds credibility fast. The phrase 'if you've been waiting' acknowledges the seller's hesitation and gently nudges without pressuring.",
    trigger: "Data Trust + Timing Nudge",
  },
  {
    id: 10,
    headline: "We Sold 47 Homes Last Year. Here's What That Means for You.",
    primaryText:
      "Experience means fewer surprises, smoother negotiations, and a faster close.\n\nWhether you're buying or selling, you deserve an agent who's done this — a lot. Let's see how we can help.",
    cta: "Book a Free Call",
    explanation:
      "Specific numbers (47, not 'dozens') build trust instantly. Framing experience as a benefit to the client — not just a credential — makes this feel less like bragging.",
    trigger: "Authority + Client-First Framing",
  },
];

const faqs = [
  {
    q: "How long should a Facebook ad for real estate be?",
    a: "Keep the primary text under 150 words for feed placements. Mobile users skim — your hook needs to land in the first two lines before the 'See More' cut. Save longer copy for retargeting ads shown to warm audiences.",
  },
  {
    q: "What's the best CTA for real estate Facebook ads?",
    a: "'Book a Viewing' and 'Get Free Valuation' consistently outperform generic CTAs like 'Contact Us'. Match the CTA to the stage of the buyer journey — early awareness needs low-friction actions, late-stage needs direct booking options.",
  },
  {
    q: "Should I use video or image ads for real estate on Facebook?",
    a: "Both work, but short walkthrough videos (under 60 seconds) tend to get higher engagement for listings. Static images with strong headlines perform well for lead gen campaigns like free valuations or consultations.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-white">
      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Facebook Ad Copy for Real Estate (10 High-Converting Examples)
      </h1>

      {/* Intro */}
      <p className="mt-1 text-lg font-semibold text-white">
        Most real estate Facebook ads are forgettable — vague, pushy, or just a
        listing photo with a phone number. These 10 examples are different.
        They're built around actual buyer and seller psychology, and you can
        adapt every one of them today. Or generate similar ads instantly using our <a href="/create-campaign">AI ad generator</a>.
      </p>

      {/* Main Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
          10 Real Estate Facebook Ad Copy Examples That Actually Convert
        </h2>

        {ads.map((ad, index) => (
          <article
            key={ad.id}
            style={{
              marginBottom: "52px",
              paddingBottom: "40px",
              borderBottom: index < ads.length - 1 ? "1px solid #e8e0d5" : "none",
            }}
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Example {ad.id}
            </h3>

            {/* Ad Card */}
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
              {/* Headline */}
              <div style={{ marginBottom: "14px" }}>
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Headline
                </span>
                <p className="mt-1 text-lg font-semibold text-white">
                  {ad.headline}
                </p>
              </div>

              {/* Divider */}
              <hr style={{ border: "none", borderTop: "1px solid #e2d9cc", margin: "14px 0" }} />

              {/* Primary Text */}
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#999",
                    fontFamily: "'Arial', sans-serif",
                  }}
                >
                  Primary Text
                </span>
                <p className="mt-1 text-lg font-semibold text-white">
                  {ad.primaryText}
                </p>
              </div>

              {/* CTA */}
              <div
                style={{
                  display: "inline-block",
                  marginTop: "4px",
                  padding: "8px 20px",
                  background: "#1877f2",
                  color: "#fff",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  fontFamily: "'Arial', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {ad.cta}
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
              <p className="mt-1 text-lg font-semibold text-white">
                {ad.explanation}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Psychological Trigger: {ad.trigger}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA / AdCampin Section */}
      <section className="bg-white/5 border border-gray-700 rounded-2xl p-8 my-12">
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
          Want to Generate Ads Like These in Seconds?
        </h2>
        <p className="mt-1 text-lg font-semibold text-white">
          Writing ad copy from scratch takes time — and testing 10 variations
          takes even more. <a href="/pricing"><strong>AdCampin</strong></a>{" "}
          is built specifically for real estate marketers who need high-quality
          Facebook ad copy without the back-and-forth. Pick your goal (buyer
          leads, seller valuations, open house traffic), and get ready-to-use
          copy in under a minute.
        </p>
        <a
        href="/create-campaign"
        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Generate Your First Ad Free →
        </a>
      </section>

      <h2>How to Write High-Converting Real Estate Facebook Ads</h2>
<p>Focus on clarity, local specificity, and emotional triggers like urgency, trust, and curiosity. Avoid generic phrases and always match your copy to the buyer's stage.</p>

      {/* FAQ Section */}
      <section style={{ marginTop: "60px" }}>
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "32px",
            }}
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              {faq.q}
            </h3>
            <p className="mt-1 text-lg font-semibold text-white">
              {faq.a}
            </p>
          </div>
        ))}
      </section>

      {/* Footer note */}
      <footer className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
        <p>
          All ad copy examples are templates. Replace bracketed placeholders
          like [City] and [Price] with your actual listing details before
          publishing.
        </p>
      </footer>
    </main>
  );
}