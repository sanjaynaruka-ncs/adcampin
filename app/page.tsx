import { headers } from "next/headers";

import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default async function Home() {

const headersList = await headers();
const host = headersList.get("host");

// LearnPlayLab Apps Landing Page
if (host === "learnplaylab.adcampin.com") {
return ( <div className="min-h-screen bg-gradient-to-b from-[#0b1120] to-black text-white">

```
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">

      <h1 className="text-4xl font-bold mb-4">
        Learn Play Lab
      </h1>

      <p className="text-gray-400 mb-12">
        Mobile Games Studio by AdCampin
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Tic Tac Toe */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-8">

          <img
            src="/tic-tac-toe.png"
            alt="Tic Tac Toe App"
            className="w-24 mx-auto mb-4"
          />

          <h2 className="text-xl font-semibold mb-3">
            Tic Tac Toe
          </h2>

          <p className="text-gray-400 mb-6">
            Classic Tic Tac Toe game with a clean interface and smooth gameplay.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
            target="_blank"
            className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            View on Play Store
          </a>

        </div>

        {/* Mathuvo */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-8">

          <img
            src="/mathuvo.png"
            alt="Mathuvo App"
            className="w-24 mx-auto mb-4"
          />

          <h2 className="text-xl font-semibold mb-3">
            Mathuvo
          </h2>

          <p className="text-gray-400 mb-6">
            A fun math adventure game designed to improve kids' math skills.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
            target="_blank"
            className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            View on Play Store
          </a>

        </div>

      </div>

      <div className="mt-16 text-gray-500 text-sm">
        © 2026 Learn Play Lab • A division of AdCampin
      </div>

    </div>

  </div>
);

}

// Default AdCampin Homepage (unchanged)
return (
<> <Navbar /> <HeroSection /> <FeaturesSection /> <HowItWorksSection /> <PricingPreviewSection /> <CTASection /> <Footer />
</>
);
}
