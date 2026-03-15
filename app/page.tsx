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
    <div className="min-h-screen bg-black text-white flex flex-col items-center text-center px-6 py-20">

      {/* Logo */}
      <img
        src="/learnplaylab-logo.webp"
        alt="Learn Play Lab"
        className="w-32 mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        Learn Play Lab
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mb-6">
        Learn Play Lab is a mobile game studio by AdCampin focused on creating fun,
        educational, and engaging games for players of all ages.
      </p>

      <p className="text-gray-500 mb-16">
        Mobile Games Studio by AdCampin
      </p>

      {/* Apps Row */}
      <div className="flex flex-wrap justify-center gap-16">

        {/* Mathuvo */}
        <div className="flex flex-col items-center gap-4">

          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.mathuvo"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition"
          >
            <img
              src="/mathuvo.webp"
              alt="Mathuvo"
              className="w-40 rounded-xl shadow-lg"
            />
          </a>

          <a
            href="/mathuvo/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Mathuvo – Privacy Policy
          </a>

        </div>

        {/* Tic Tac Toe */}
        <div className="flex flex-col items-center gap-4">

          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.tictactoe_new"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition"
          >
            <img
              src="/tictactoe.webp"
              alt="Tic Tac Toe"
              className="w-40 rounded-xl shadow-lg"
            />
          </a>

          <a
            href="/tic-tac-toe/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Tic Tac Toe – Privacy Policy
          </a>

        </div>

      </div>

    </div>
  );
}

export default async function Home() {

  const headersList = await headers();

  const hostHeader = headersList.get("host") || "";
  const host = hostHeader.split(":")[0]; // remove port if present

  if (host.startsWith("learnplaylab.")) {
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