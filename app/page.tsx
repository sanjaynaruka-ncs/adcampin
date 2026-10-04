import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";

import type { Metadata } from "next";

const siteUrl = "https://www.adcampin.com";

export const metadata: Metadata = {
  title: "AdCampin — AI Ad Manager",

  description:
    "AdCampin is an AI Ad Manager that helps businesses analyze, optimize and manage advertising campaigns across Google Ads, Meta Ads and other advertising platforms.",

  keywords: [
    "AI Ad Manager",
    "AI advertising platform",
    "AI ads manager",
    "Google Ads AI",
    "Meta Ads AI",
    "Facebook Ads AI",
    "AI campaign optimization",
    "AI advertising automation",
    "ad campaign management",
    "AI marketing platform",
    "advertising automation",
    "AdCampin",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AdCampin — AI Ad Manager",
    description:
      "Analyze, optimize and manage advertising campaigns with an AI-powered Ad Manager.",
    url: siteUrl,
    siteName: "AdCampin",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdCampin AI Ad Manager",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AdCampin — AI Ad Manager",
    description:
      "Analyze, optimize and manage advertising campaigns with an AI-powered Ad Manager.",
    images: ["/og-image.png"],
  },
};

/**
 * ============================================================================
 * HOMEPAGE
 * ============================================================================
 */

export default function Home() {
  return (
    <>
      {/* ================================================================== */}
      {/* NAVBAR                                                             */}
      {/* ================================================================== */}

      <Navbar />

      {/* ================================================================== */}
      {/* MAIN LANDING COMPONENTS                                            */}
      {/* ================================================================== */}

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <PricingPreviewSection />

      <CTASection />

      {/* ================================================================== */}
      {/* SEO CONTENT SECTION                                                 */}
      {/* ================================================================== */}
      {/*
        PURPOSE:
        - Improve homepage semantic depth
        - Explain the current AdCampin product
        - Improve topical relevance
        - Support organic discovery

        NOTE:
        This content is intentionally aligned with the new AI Ad Manager
        positioning rather than the previous AI ad-generator-only model.
      */}

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            AI Ad Manager for Smarter Advertising Campaigns
          </h2>

          <div className="space-y-8 text-gray-300 leading-8 text-lg">
            <p>
              AdCampin is an AI-powered Ad Manager designed to help businesses
              analyze, optimize and manage their advertising campaigns.
              Instead of simply generating ad copy, AdCampin is built to work
              with real advertising campaign data and help advertisers make
              better decisions.
            </p>

            <p>
              AdCampin can help advertisers understand campaign performance,
              identify inefficient spending, evaluate advertising metrics and
              recommend optimization actions across supported advertising
              platforms.
            </p>

            <p>
              The platform is designed around the complete advertising
              management workflow: connecting advertising accounts, analyzing
              campaign performance, generating recommendations, taking
              approved actions, verifying results and maintaining an audit
              history of campaign activity.
            </p>

            <p>
              AdCampin is being built for businesses that want the benefits of
              AI-powered advertising management without having to manually
              monitor every campaign, budget, bid, audience and performance
              signal themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LATEST GUIDES SECTION                                               */}
      {/* ================================================================== */}
      {/*
        The previous dynamic blog section has intentionally been removed.
        The old blog articles and /blog directory are no longer part of the
        application. A new blog/content system will be added later.
      */}

      {/* ================================================================== */}
      {/* INTERNAL SEO LINKS                                                  */}
      {/* ================================================================== */}
      {/*
        The previous hidden internal SEO links pointed to deleted blog
        articles. They have intentionally been removed so the homepage does
        not contain links to non-existent routes.
      */}

      {/* ================================================================== */}
      {/* JSON-LD STRUCTURED DATA                                             */}
      {/* ================================================================== */}

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "SoftwareApplication",

            name: "AdCampin",

            applicationCategory: "BusinessApplication",

            operatingSystem: "Web",

            url: siteUrl,

            description:
              "AI-powered advertising platform for analyzing, optimizing and managing advertising campaigns.",

            publisher: {
              "@type": "Organization",
              name: "AdCampin",
            },
          }),
        }}
      />
    </>
  );
}