import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <CTASection />

      {/* Latest Guides Section (SEO Boost for Blog Indexing) */}
      <section className="mt-16 max-w-5xl mx-auto px-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Latest Guides</h2>

        <ul className="space-y-2 text-gray-300">
          <li>
            <a
              href="/blog/facebook-ad-copy-real-estate"
              className="hover:underline"
            >
              10 Real Estate Facebook Ads That Actually Convert
            </a>
          </li>

          <li>
            <a
              href="/blog/google-ads-headlines-local-business"
              className="hover:underline"
            >
              10 Google Ads Headlines That Get More Clicks (Local Businesses)
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}