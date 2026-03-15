export const dynamic = "force-dynamic";
import { headers } from "next/headers";

import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function LearnPlayLabPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-10">

      <img
        src="/learnplaylab-logo.webp"
        alt="Learn Play Lab"
        className="w-24 mb-6"
      />

  <h1 className="text-4xl font-bold mb-4">
    Learn Play Lab
  </h1>
      <h1 className="text-4xl font-bold mb-8">Learn Play Lab</h1>

      <p className="text-gray-400 mb-12">
        Mobile Games Studio by AdCampin
      </p>

      <div className="flex flex-col items-center gap-10 mt-10">

  {/* Mathuvo */}
  <a
    href="https://play.google.com/store/apps/details?id=com.adcampin.mathuvo"
    target="_blank"
  >
    <img
      src="/mathuvo.webp"
      alt="Mathuvo"
      className="w-56 rounded-xl shadow-lg hover:scale-105 transition"
    />
  </a>

  {/* Tic Tac Toe */}
  <a
    href="https://play.google.com/store/apps/details?id=com.adcampin.tictactoe_new"
    target="_blank"
  >
    <img
      src="/tictactoe.webp"
      alt="Tic Tac Toe"
      className="w-56 rounded-xl shadow-lg hover:scale-105 transition"
    />
  </a>

</div>
    </div>
  );
}

export default async function Home() {

  const headersList = await headers();
  const host = headersList.get("host");

  if (host?.startsWith("learnplaylab.")) {
    return <LearnPlayLabPage />;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <CTASection />
      <Footer />
    </>
  );
}