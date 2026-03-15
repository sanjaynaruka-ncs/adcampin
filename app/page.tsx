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
      <h1 className="text-4xl font-bold mb-8">Learn Play Lab</h1>

      <p className="text-gray-400 mb-12">
        Mobile Games Studio by AdCampin
      </p>

      <div className="space-y-6">

        <a
          href="/mathuvo/privacy-policy"
          className="block bg-blue-600 px-6 py-4 rounded-lg hover:bg-blue-500"
        >
          Mathuvo – Privacy Policy
        </a>

        <a
          href="/tic-tac-toe/privacy-policy"
          className="block bg-blue-600 px-6 py-4 rounded-lg hover:bg-blue-500"
        >
          Tic Tac Toe – Privacy Policy
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