import Navbar from "../../components/navbar";

export const metadata = {
  title: "Google Ads for Dentists (Complete Strategy + Examples)",
  description:
    "Learn how to run high-converting Google Ads for dentists with real examples, strategy and proven templates.",
};

export default function GoogleAdsDentists() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Google Ads for Dentists (Complete Strategy + Examples)",
    description:
      "Learn how to run high-converting Google Ads for dentists.",
    author: {
      "@type": "Organization",
      name: "AdCampin",
    },
    publisher: {
      "@type": "Organization",
      name: "AdCampin",
    },
    mainEntityOfPage: "https://www.adcampin.com/blog/google-ads-dentists",
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      <main className="max-w-4xl mx-auto px-6 py-12 text-white">

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Google Ads for Dentists (Complete Strategy + Examples)
        </h1>

        {/* Intro */}
        <p className="text-gray-300 mb-10 border-l-2 border-gray-600 pl-4 italic">
    Patients don't flip through phone books anymore — they Google "dentist near me" and book the first result that earns their trust. If you're running a dental practice or managing one, Google Ads is the fastest way to show up at that exact moment. 

    You can <a href="/signup" className="text-yellow-400 underline hover:text-yellow-300">start generating ads instantly</a> using AI. 

    Also check how we approach{" "}
    <a href="/blog/facebook-ad-copy-real-estate" className="text-yellow-400 underline hover:text-yellow-300">
        ad copy for high-intent audiences
    </a>{" "}
    and our breakdown of{" "}
    <a href="/blog/google-ads-headlines-local-business" className="text-yellow-400 underline hover:text-yellow-300">
        Google Ads headlines for local businesses
    </a>.
    </p>

        {/* Section 1: 10 Examples */}
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
          10 Google Ads Examples for Dentists
        </h2>

        {/* Ad Card 1 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            1. Emergency Dental — Walk-Ins Welcome
          </h3>
          <p className="text-white font-medium mb-1">Headline: Same-Day Emergency Dentist | Open Now · No Wait List</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Severe toothache or broken tooth? We see emergency patients today. Call now and get seen within the hour. Trusted by 2,000+ patients in [City].
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Emergency searches are high-urgency, high-conversion. The person searching is in pain and ready to book right now — your ad just needs to confirm you're available and fast. "Open Now" and "same-day" do most of the heavy lifting.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Urgency + Relief</p>
          </div>
        </div>

        {/* Ad Card 2 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            2. Teeth Whitening Special Offer
          </h3>
          <p className="text-white font-medium mb-1">Headline: Professional Teeth Whitening | $99 New Patient Special</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Get a brighter smile in one visit. In-office whitening with long-lasting results. Limited spots available — book your appointment online today.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Cosmetic services are price-sensitive and comparison-heavy. Leading with a clear price anchor removes the biggest barrier to clicking. "Limited spots" nudges fence-sitters into acting sooner rather than later.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Scarcity + Price anchoring</p>
          </div>
        </div>

        {/* Ad Card 3 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            3. Family Dentist — All Ages Welcome
          </h3>
          <p className="text-white font-medium mb-1">Headline: Family Dentist in [City] | Kids & Adults Welcome</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> One dental home for the whole family. Gentle care for kids, comprehensive treatment for adults. Accepting new patients — evenings & weekends available.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Parents searching for a dentist often want one place for everyone. "Gentle care for kids" directly addresses their top concern. Evening and weekend availability signals that you work around real life, not just office hours.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Convenience + Trust</p>
          </div>
        </div>

        {/* Ad Card 4 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            4. Invisalign Provider
          </h3>
          <p className="text-white font-medium mb-1">Headline: Invisalign in [City] | Free Smile Consultation</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Straighten your teeth without metal braces. Certified Invisalign provider with flexible payment plans. Book your free consultation — results start in weeks.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              "Free consultation" dramatically lowers commitment friction. Mentioning flexible payment plans speaks to adults who want the treatment but hesitate on cost. Certification adds authority and separates you from general practitioners.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Low risk entry + Authority</p>
          </div>
        </div>

        {/* Ad Card 5 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            5. Dental Implants
          </h3>
          <p className="text-white font-medium mb-1">Headline: Dental Implants That Look & Feel Real | Starting $X</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Replace missing teeth permanently. Natural-looking implants placed by an experienced oral surgeon. Financing available. Free X-ray & consultation for new patients.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Implant seekers are often anxious about cost and pain. Addressing both upfront — "financing available" and "experienced surgeon" — makes this feel safer. A free X-ray sweetens the deal and gives them a tangible first step.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Pain point reduction + Value stacking</p>
          </div>
        </div>

        {/* Ad Card 6 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            6. Anxiety-Free / Sedation Dentistry
          </h3>
          <p className="text-white font-medium mb-1">Headline: Nervous About the Dentist? We Get It. | Sedation Available</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Our anxiety-friendly practice makes dental visits calm and comfortable. Sedation options available for all procedures. You're in safe, gentle hands — book today.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Dental anxiety affects a huge chunk of the population. Acknowledging it directly in your headline builds instant empathy. This ad targets people who've been avoiding the dentist for years — they convert well once trust is established.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Empathy + Safety</p>
          </div>
        </div>

        {/* Ad Card 7 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            7. New Patient Special
          </h3>
          <p className="text-white font-medium mb-1">Headline: New Patient Special: Exam + X-Rays for $49</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> New to [City] or just looking for a better dental experience? Get a full exam, X-rays, and cleaning consultation for only $49. No insurance needed — easy online booking.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              A loss-leader new patient offer works because the lifetime value of a dental patient is high. The "no insurance needed" line removes a common objection that stops uninsured patients from even calling. Easy booking removes the final friction.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Barrier removal + Perceived value</p>
          </div>
        </div>

        {/* Ad Card 8 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            8. Pediatric Dentist
          </h3>
          <p className="text-white font-medium mb-1">Headline: Kid-Friendly Dentist in [City] | They'll Actually Enjoy It</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Colorful, fun environment built for little ones. Our pediatric team makes first dental visits stress-free for kids (and parents). Book your child's first visit today.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Parents aren't just choosing a dentist — they're managing a child's fear. "They'll actually enjoy it" is a bold, specific promise that cuts through generic "gentle care" claims. It signals a purpose-built experience, not just a regular office that happens to see kids.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Specificity + Parental reassurance</p>
          </div>
        </div>

        {/* Ad Card 9 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            9. Veneers / Smile Makeover
          </h3>
          <p className="text-white font-medium mb-1">Headline: Transform Your Smile with Porcelain Veneers | See Results</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Chipped, stained, or uneven teeth? Veneers can fix all of it in just 2 visits. View our before & after gallery and book a free smile design consultation.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              Cosmetic patients are visual decision-makers. Pointing them to a before/after gallery pre-qualifies their interest and warms them up before they even call. Naming the specific problems (chipped, stained, uneven) makes the ad feel personally relevant.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Aspiration + Social proof</p>
          </div>
        </div>

        {/* Ad Card 10 */}
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            10. Insurance-Friendly Dental Office
          </h3>
          <p className="text-white font-medium mb-1">Headline: We Accept Most Insurance Plans | No Surprise Bills</p>
          <p className="text-gray-300 mb-4">
            <strong>Description:</strong> Accepting Delta Dental, Cigna, Aetna & more. Transparent pricing — we explain costs before treatment, always. Accepting new patients this week.
          </p>
          <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm">
              "No surprise bills" is one of the most powerful phrases in healthcare advertising right now. Insurance confusion is a top reason patients delay care. Naming specific plans builds immediate trust with people who've been burned before.
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-medium">🧠 Psychological trigger: Transparency + Trust</p>
          </div>
        </div>

        {/* Mid-content internal link */}
        <p className="text-gray-400 text-sm mt-2 mb-8">
          Need help writing strong ad copy fast? Check out our guide on{" "}
          <a href="/blog/best-chatgpt-prompts-ad-copy" className="text-yellow-400 underline hover:text-yellow-300">
            the best ChatGPT prompts for ad copy
          </a>{" "}
          — it pairs well with the examples above.
        </p>

        {/* Section 2: Strategy */}
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
          Complete Google Ads Strategy for Dentists
        </h2>

        <div className="space-y-5 text-gray-300 mb-8">
          <p>
            Most dental clinics waste money on Google Ads because they target too broadly, use generic headlines, or send traffic to a homepage that doesn't convert. The fix isn't complicated — it's about matching intent to message to landing page. Start with tightly themed ad groups: one for emergency dental, one for cosmetic services, one for new patient offers. Don't lump them together. Each group should have its own keywords, its own ad copy, and ideally its own landing page (or at minimum, a dedicated section of your site). Your Quality Score — which directly affects your cost-per-click — improves dramatically when Google sees tight alignment between keyword, ad, and page content.
          </p>
          <p>
            On bidding: if you're just starting out, use Maximize Clicks with a reasonable daily budget ($30–$60/day for a local market) until you gather conversion data. Once you have 30+ conversions tracked, switch to Target CPA and let Google's algorithm optimize for actual booked appointments. Always track calls as conversions — most dental bookings happen by phone, not form. Use Google's call tracking or a third-party call tracking tool. And don't neglect negative keywords: "dental school," "free dental," "dental memes," and similar terms can drain your budget fast if left unchecked. Run a search terms report weekly in the first month and build your negative keyword list aggressively.{" "}
            <a href="/signup" className="text-yellow-400 underline hover:text-yellow-300">
              Start your first campaign on AdCampin
            </a>{" "}
            and we'll help you set this up without the guesswork.
          </p>
        </div>

        {/* Pre-CTA internal link */}
        <p className="text-gray-400 text-sm mb-8">
          For more headline inspiration, read our detailed post on{" "}
          <a href="/blog/google-ads-headlines-local-business" className="text-yellow-400 underline hover:text-yellow-300">
            Google Ads headlines that work for local businesses
          </a>
          .
        </p>

        {/* CTA Section */}
        <div className="bg-white/5 border border-gray-700 rounded-2xl p-8 my-12">
          <h2 className="text-2xl font-semibold mb-3 text-white">Ready to Run Smarter Dental Ads?</h2>
          <p className="text-gray-300 mb-6">
            <a href="/pricing" className="text-yellow-400 font-semibold underline hover:text-yellow-300">
              AdCampin
            </a>{" "}
            is built for clinics, local businesses, and marketing agencies that want Google Ads that actually convert — not just get clicks. Get pre-built dental ad templates, keyword suggestions, and a campaign structure that's ready to launch in minutes. No agency fees. No bloated retainers. Just campaigns that work.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Start Free on AdCampin →
          </a>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 text-gray-300 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              How much should a dental practice spend on Google Ads per month?
            </h3>
            <p>
              It depends on your market size and the services you're promoting. For a mid-sized city, $1,000–$3,000/month is a reasonable starting range for general dentistry. High-value cosmetic services like implants or veneers can justify higher spend because the return on a single patient is much larger. Start smaller, prove ROI, then scale. What matters more than total budget is how tightly you target — $500 well-targeted will outperform $2,000 wasted on broad, irrelevant clicks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              What keywords should dentists target in Google Ads?
            </h3>
            <p>
              Focus on high-intent, location-specific keywords: "dentist near me," "emergency dentist [city]," "teeth whitening [city]," "Invisalign provider [city]." Avoid overly generic terms like "dental health" or "tooth care" — those attract researchers, not patients ready to book. Use exact match and phrase match types to maintain control, and build out a negative keyword list from day one to avoid irrelevant searches draining your budget.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Do Google Ads actually work for dental practices?
            </h3>
            <p>
              Yes — consistently, when done right. Dental services are high-intent by nature: someone searching "emergency dentist open now" isn't browsing casually. They need help today. Google Ads puts you directly in front of that person. The practices that struggle with Google Ads usually have weak landing pages, poor ad-to-keyword alignment, or no conversion tracking in place. Fix those three things and the results follow. A single new implant or Invisalign patient can pay for months of ad spend on its own.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} AdCampin. All rights reserved. |{" "}
            <a href="/privacy" className="hover:text-gray-300 underline">Privacy Policy</a> ·{" "}
            <a href="/pricing" className="hover:text-gray-300 underline">Pricing</a> ·{" "}
            <a href="/signup" className="hover:text-gray-300 underline">Get Started</a>
          </p>
        </footer>

      </main>
    </>
  );
}