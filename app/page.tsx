export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import Image from "next/image";

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

      <Image
          src="/learnplaylab-logo.webp"
          alt="Mathuvo"
          width={220}
          height={220}
        />

      <h1 className="text-4xl font-bold mb-8">Learn Play Lab</h1>

      <p className="text-gray-400 max-w-xl mb-12">
        Learn Play Lab is a mobile game studio by AdCampin focused on creating fun,
        educational, and engaging games for players of all ages.
      </p>

      <p className="text-gray-400 mb-12">
        Mobile Games Studio by AdCampin
      </p>

      <div className="flex flex-col items-center gap-10 mt-10">

  {/* Mathuvo */}
  <a
    href="https://play.google.com/store/apps/details?id=com.adcampin.mathuvo"
    target="_blank"
  >
    <Image
      src="/mathuvo.webp"
      alt="Mathuvo"
      width={220}
      height={220}
    />
  </a>

  {/* Tic Tac Toe */}
  <a
    href="https://play.google.com/store/apps/details?id=com.adcampin.tictactoe_new"
    target="_blank"
  >

    <Image
      src="/tictactoe.webp"
      alt="Mathuvo"
      width={220}
      height={220}
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