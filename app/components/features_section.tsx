export default function FeaturesSection() {
  const features = [
    {
      title: "AI Ad Generator",
      desc: "Create high-converting ad copy instantly using AI."
    },
    {
      title: "Ad Variations",
      desc: "Generate multiple ad versions for A/B testing."
    },
    {
      title: "AI Optimization",
      desc: "Improve existing ads with AI suggestions."
    },
    {
      title: "Landing Page Generator",
      desc: "Automatically generate campaign landing pages."
    },
    {
      title: "Campaign Strategy",
      desc: "AI suggests targeting and campaign strategy."
    },
    {
      title: "Performance Prediction",
      desc: "Predict campaign success before spending money."
    }
  ];

  return (
    <section className="bg-[#0b1220] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Powerful AI Marketing Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {f.title}
              </h3>

              <p className="text-gray-400">
                {f.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}