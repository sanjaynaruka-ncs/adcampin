export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#0b1a33] text-white py-28 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Launch high-converting ads in 60 seconds with AI
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Generate ad creatives, targeting strategies, landing pages,
          and campaign predictions automatically using AI.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium"
          >
            Start Free Trial
          </a>

          <a
            href="/pricing"
            className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800"
          >
            View Pricing
          </a>

        </div>

      </div>

    </section>
  );
}