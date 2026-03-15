export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Launch Ads in 3 Simple Steps
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          AdCampin uses AI to generate complete ad campaigns in seconds —
          from copywriting to targeting strategy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* STEP 1 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-blue-500 transition">

            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
              1
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Enter Your Product
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Provide your business name, product details, and campaign
              objective. AdCampin uses this data to understand your offer.
            </p>

          </div>


          {/* STEP 2 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-blue-500 transition">

            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
              2
            </div>

            <h3 className="text-xl font-semibold mb-3">
              AI Generates Campaign
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Our AI generates ad copy, creative suggestions, targeting
              strategy, and performance predictions automatically.
            </p>

          </div>


          {/* STEP 3 */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-blue-500 transition">

            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
              3
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Launch & Optimize
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Launch your campaign and continuously improve results using
              AI-powered optimization insights.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}