export const metadata = {
  title: "Best ChatGPT Prompts for Ad Copy (With Results)",
  description:
    "10 proven ChatGPT prompts to generate high-converting ad copy with real examples and results.",
};

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Best ChatGPT Prompts for Ad Copy (With Results)
      </h1>

      <p className="text-gray-300 mb-10 border-l-2 border-gray-600 pl-4 italic">
        Writing ad copy that actually converts is hard. ChatGPT makes it faster—but only if you
        prompt it right. Here are 10 prompts that work, with real output examples so you know
        exactly what to expect. Or skip ahead and{" "}
        <a href="/create-campaign" className="text-yellow-400 underline hover:text-yellow-300">
          create your campaign now
        </a>
        .
      </p>

      {/* Prompts Section */}
      <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
        10 ChatGPT Prompts for Ad Copy (Copy-Paste Ready)
      </h2>

      {/* Prompt 1 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          1. The Problem-Solution Hook
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a Facebook ad for [product] that opens with a relatable problem the target
            audience faces, then positions the product as the obvious solution. Keep it under 90
            words. Audience: [describe audience]. Tone: direct and empathetic."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Tired of spending hours writing ads that don't convert? You're not alone. Most
            marketers waste 3+ hours a week on copy that gets ignored. AdCampin generates
            scroll-stopping ads in seconds—trained on what actually works. Start free today."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            This structure works because it mirrors how people think—they recognize the pain before
            they're ready to hear a solution. The empathy hook builds trust before you pitch
            anything. Great for cold audiences who don't know your brand yet.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Pain agitation → relief
          </p>
        </div>
      </div>

      {/* Prompt 2 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          2. The Social Proof Angle
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a Google ad headline and two description lines for [product] using a social proof
            angle—mention number of users, reviews, or results achieved. Make it feel credible, not
            braggy. Max 30 characters for headline, 90 characters per description."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            Headline: "Trusted by 50,000 Marketers"
            <br />
            Desc 1: "Join teams that cut ad creation time by 80%. Results guaranteed or money back."
            <br />
            Desc 2: "Rated 4.9 stars across 3,200+ reviews. Start your free trial—no card needed."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Numbers do the heavy lifting here. Specificity beats vague claims every time—"50,000
            marketers" lands harder than "thousands of users." Ask ChatGPT to pull real-looking
            stats from your actual data before running this.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Herd behavior / bandwagon effect
          </p>
        </div>
      </div>

      {/* Prompt 3 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          3. The Urgency & Scarcity Play
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a short Instagram ad for [product/offer] using urgency or limited availability as
            the core hook. Don't make it sound desperate or fake. Audience: [describe]. Keep it
            under 75 words with a punchy CTA."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "We opened 200 spots for our early access plan—and 160 are already gone. If you've been
            waiting to try AdCampin, now's your window. Lock in 40% off before it closes Friday.
            Tap to claim your spot."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Urgency works—but only when it's believable. The key is grounding scarcity in something
            real (spots, time, inventory). Fake countdown timers have trained people to ignore empty
            pressure. Keep it honest and specific.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: FOMO / loss aversion
          </p>
        </div>
      </div>

      {/* Prompt 4 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          4. The Benefit-Stack Format
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a LinkedIn ad for [product] that stacks 3 key benefits in a scannable format.
            Each benefit should be one line with a short explanation. Target audience: B2B decision
            makers. End with a CTA focused on ROI."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "✅ Cut ad production time by 80% — no more briefs, revisions, or waiting on designers.
            <br />
            ✅ Run 10x more tests — see what converts without burning your budget.
            <br />
            ✅ Scale without hiring — one tool handles what a full team used to.
            <br />
            See the ROI for yourself. Book a 15-min demo."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Decision-makers skim. This format respects their time and delivers value in the first
            three lines. The ROI-focused CTA works especially well for LinkedIn where people are in
            a professional mindset.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Value stacking / cognitive ease
          </p>
        </div>
      </div>

      {/* Prompt 5 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          5. The Curiosity Gap Opener
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a Facebook ad that opens with a curiosity-gap headline—something that makes
            people stop scrolling because they need to know what comes next. Product: [product].
            Don't reveal the answer in the first line. Keep total copy under 100 words."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Most marketers write 6 ads to find one that works. The top 1% use a different method.
            They don't guess—they generate, test, and scale in hours. AdCampin shows you exactly
            which angle wins before you spend a dollar. Try it free and see the difference."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Curiosity gaps are one of the oldest tricks in direct response—and they still work.
            The brain hates unfinished loops. Once you open one, people read to close it. Just make
            sure the payoff actually delivers.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Zeigarnik effect / open loop
          </p>
        </div>
      </div>

      {/* Prompt 6 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          6. The Comparison Disruptor
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write an ad that positions [product] against the 'old way' of doing things—without
            naming competitors. Highlight what's broken about the status quo and why [product] is
            the upgrade. Tone: confident, not arrogant. Under 90 words."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "The old playbook: hire a copywriter, wait a week, revise three times, spend $800, hope
            it converts. The new one: describe your offer, pick your platform, get 10 ad variations
            in 60 seconds. AdCampin isn't just faster—it's a fundamentally different way to run
            paid ads. Try the new way free."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Contrast is a powerful persuasion tool. When you make the old way feel painful and slow,
            your product becomes the natural escape. This works especially well for SaaS and tools
            replacing manual workflows.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Contrast effect / status quo bias
          </p>
        </div>
      </div>

      {/* Prompt 7 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          7. The Specific Result Promise
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a Google search ad for [product] that leads with a specific, measurable outcome
            the user can expect. Make it feel achievable and real—not hype. Include a headline under
            30 characters and two descriptions under 90 characters each."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            Headline: "Your First Ad in 60 Seconds"
            <br />
            Desc 1: "Describe your offer. Pick your platform. Get ready-to-publish ad copy instantly."
            <br />
            Desc 2: "No agency. No freelancer. No delay. Start free—first 5 ads on us."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Specificity signals credibility. "60 seconds" is more believable and compelling than
            "fast results." Whenever possible, replace adjectives with numbers—your CTR will thank
            you.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Specificity bias / instant gratification
          </p>
        </div>
      </div>

      {/* Prompt 8 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          8. The Identity-Based CTA
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write an ad for [product] that speaks to who the buyer wants to become—not just what
            the product does. Frame the CTA around identity, not action. Audience: [describe].
            Keep it under 80 words."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "The best marketers don't spend hours writing ads. They spend that time on strategy,
            creative direction, and scaling what works. AdCampin handles the copy so you can focus
            on being the marketer you actually want to be. Join 50,000 pros who already made the
            switch."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            People buy who they want to be, not just what they want to have. This prompt taps into
            aspiration—it sells the identity upgrade, not the feature list. Particularly effective
            for tools, courses, and premium services.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Identity signaling / aspirational self
          </p>
        </div>
      </div>

      {/* Prompt 9 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          9. The Risk Reversal Close
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a retargeting ad for [product] aimed at people who visited but didn't convert.
            Lead with removing the biggest objection—risk, price, or complexity. End with a
            low-friction CTA. Under 85 words."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Still thinking about it? Fair. Here's what most people want to know before they start:
            No credit card. No long setup. No learning curve. Just sign up, describe your offer,
            and your first ad is ready in under a minute. If it doesn't work for you, no harm done.
            Give it one try."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Retargeting audiences already know you—they just need the last nudge. This prompt
            addresses unspoken hesitation directly, which feels more honest than another generic
            pitch. Removing perceived risk lowers the barrier to clicking.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Risk aversion removal / commitment reduction
          </p>
        </div>
      </div>

      {/* Prompt 10 */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          10. The Story Micro-Format
        </h3>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 my-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">Prompt</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Write a short-form story ad for [product] using a before/after narrative. One sentence
            for the before state, one for the turning point, one for the result. End with a
            one-line CTA. Keep it under 70 words total."
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">Output Example</p>
          <p className="mt-1 text-lg font-semibold text-white">
            "Six months ago, I was spending $2,000/month on ad copywriters and still missing
            deadlines. Then I started using AdCampin for every new campaign. Now I publish five
            tested ad variants before lunch—and my ROAS is up 3x. Want the same? Start free today."
          </p>
        </div>
        <div className="bg-white/5 border-l-2 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-gray-300 text-sm">
            Humans are wired for story. Even a three-sentence arc activates more engagement than a
            feature list. This works across every platform—Facebook, TikTok, email, you name it.
            Keep it grounded in specific, realistic outcomes.
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Psychological trigger: Narrative transportation / vicarious experience
          </p>
        </div>
      </div>

      {/* SEO Section */}
      <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
        How to Write High-Converting ChatGPT Prompts for Ad Copy
      </h2>
      <p className="text-gray-300 mb-8">
        The quality of your output is entirely determined by the quality of your input. Vague
        prompts produce vague ads. The prompts that work share a few things in common: they specify
        the platform, the audience, the emotional angle, and the word count. They also give ChatGPT
        a role—"you are a direct response copywriter" before the ask changes the register
        entirely. Once you have a strong base prompt, test 3–5 variations by swapping the hook
        style or CTA, then run them against each other. That's how good copy becomes great
        copy. If you'd rather skip the iteration and go straight to results,{" "}
        <a href="/create-campaign" className="text-yellow-400 underline hover:text-yellow-300">
          create your campaign on AdCampin
        </a>{" "}
        and get platform-ready ad copy in seconds.
      </p>

      {/* CTA Section */}
      <div className="bg-white/5 border border-gray-700 rounded-2xl p-8 my-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Stop Prompting. Start Publishing.
        </h2>
        <p className="text-gray-300 mb-6">
          These prompts will get you far—but if you want ad copy that's already optimized for your
          platform, audience, and offer,{" "}
          <a href="/pricing" className="text-yellow-400 underline hover:text-yellow-300 font-medium">
            AdCampin
          </a>{" "}
          does the heavy lifting for you. Describe your product, pick your platform, and get
          10 high-converting ad variations in under a minute. No prompt engineering required.
        </p>
        
          <a 
          href="/create-campaign"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
          Generate Your Ads Now →
        </a>
      </div>

      {/* FAQ Section */}
      <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-3">
        Frequently Asked Questions
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          Can ChatGPT really write good ad copy?
        </h3>
        <p className="text-gray-300">
          Yes—with the right prompts. Out-of-the-box, ChatGPT tends toward generic output. But
          when you specify the platform, audience, emotional hook, and desired length, the quality
          improves dramatically. The prompts above are structured to get you 80% of the way there;
          you refine the last 20% based on your brand voice and offer specifics.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          What's the best ChatGPT prompt for Facebook ads?
        </h3>
        <p className="text-gray-300">
          For Facebook, the problem-solution hook and curiosity gap formats tend to outperform
          others because the feed is interruptive—you're competing with friends' posts, not search
          intent. Lead with something emotionally resonant, keep it under 100 words, and make the
          CTA feel low-risk. Prompts #1 and #5 from this list are strong starting points.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">
          How do I make AI-generated ad copy sound more human?
        </h3>
        <p className="text-gray-300">
          Add constraints. Tell ChatGPT to avoid buzzwords, use short sentences, and write like a
          founder talking to a customer—not a marketer pitching to a demographic. Reading the output
          out loud is the fastest way to catch anything that sounds robotic. If it feels unnatural
          spoken, it won't convert written.
        </p>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} AdCampin · AI-Powered Ad Copy Generation ·{" "}
          <a href="/pricing" className="underline hover:text-gray-300">
            Pricing
          </a>{" "}
          ·{" "}
          <a href="/create-campaign" className="underline hover:text-gray-300">
            Create Campaign
          </a>
        </p>
      </footer>
    </main>
  );
}