import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";

import fs from "fs";
import path from "path";

import Link from "next/link";

import type { Metadata } from "next";

/**
 * ============================================================================
 * HOMEPAGE SEO + INDEXING OPTIMIZATION
 * ============================================================================
 *
 * PURPOSE:
 * - Strengthen homepage indexing signals
 * - Improve crawl distribution
 * - Improve blog discovery
 * - Improve homepage semantic relevance
 * - Reduce thin-content risk
 * - Improve internal linking architecture
 *
 * IMPORTANT:
 * - Existing UI fully preserved
 * - Existing functionality fully preserved
 * - Existing components fully preserved
 * - Existing blog logic fully preserved
 * ============================================================================
 */

/**
 * ============================================================================
 * SEO METADATA
 * ============================================================================
 */

const siteUrl = "https://www.adcampin.com";

export const metadata: Metadata = {
  title:
    "AdCampin — AI Ad Generator for Facebook, Google & Instagram Ads",

  description:
    "Generate high-converting Facebook, Google, Instagram and LinkedIn ads using AI. Create ad copy, targeting strategies, campaign ideas and optimized advertising campaigns instantly with AdCampin.",

  keywords: [
    "AI ad generator",
    "Facebook ads AI",
    "Google ads AI",
    "Instagram ads AI",
    "LinkedIn ads AI",
    "AI ad copy generator",
    "digital advertising AI",
    "PPC ad generator",
    "AI marketing platform",
    "advertising automation",
    "marketing AI tool",
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
    title: "AdCampin — AI Ad Generator",
    description:
      "Create high-converting ad campaigns in seconds using AI-powered advertising tools.",
    url: siteUrl,
    siteName: "AdCampin",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdCampin AI Advertising Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AdCampin — AI Ad Generator",
    description:
      "Generate high-converting ads using AI-powered advertising tools.",
    images: ["/og-image.png"],
  },
};

/**
 * ============================================================================
 * DYNAMIC BLOG POST FETCHER
 * ============================================================================
 */

function getLatestPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  return fs
    .readdirSync(blogDir)

    // Exclude blog index page
    .filter((name) => name !== "page.tsx")

    // Latest 6 posts
    .slice(-6)

    .map((slug) => ({
      title: slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),

      href: `/blog/${slug}`,
    }));
}

/**
 * ============================================================================
 * HOMEPAGE
 * ============================================================================
 */

export default function Home() {
  const posts = getLatestPosts();

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
      {/* PURPOSE:
          - Improve homepage semantic depth
          - Improve indexing quality
          - Strengthen topical authority
          - Reduce thin homepage signals
      */}

      <section className="bg-black text-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            AI Advertising Platform for High-Converting Campaigns
          </h2>

          <div className="space-y-8 text-gray-300 leading-8 text-lg">

            <p>
              AdCampin helps businesses create high-converting advertising
              campaigns using artificial intelligence. Generate optimized
              Facebook ads, Google ads, Instagram ads and LinkedIn advertising
              campaigns in seconds using AI-powered ad generation tools.
            </p>

            <p>
              Businesses use AdCampin to create ad copy, campaign structures,
              audience targeting strategies, conversion-focused creatives and
              marketing ideas designed to improve campaign performance and
              generate more qualified leads.
            </p>

            <p>
              The platform supports advertising strategies for multiple
              industries including real estate, healthcare, gyms, legal
              services, education, restaurants, salons, e-commerce businesses
              and local service providers.
            </p>

            <p>
              AI-powered optimization helps advertisers improve click-through
              rates, reduce customer acquisition costs and generate more
              conversions through smarter campaign structures and targeted
              advertising strategies.
            </p>

          </div>

        </div>

      </section>

      {/* ================================================================== */}
      {/* LATEST GUIDES SECTION                                               */}
      {/* ================================================================== */}

      <section className="pt-10 pb-20 bg-black text-white">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Latest Advertising Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {posts.map((post, index) => (

              <Link
                key={index}
                href={post.href}
                className="block rounded-lg border border-white/10 bg-slate-800 p-5 hover:bg-slate-700 transition"
              >

                <h3 className="text-lg font-semibold text-white">
                  {post.title}
                </h3>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================================== */}
      {/* INTERNAL SEO LINKS                                                  */}
      {/* ================================================================== */}
      {/* PURPOSE:
          - Improve crawl discovery
          - Improve page distribution
          - Improve indexing signals
      */}

      <section className="hidden">

        <Link href="/blog/google-ads-dentists">
          Google Ads for Dentists
        </Link>

        <Link href="/blog/facebook-ads-lawyers">
          Facebook Ads for Lawyers
        </Link>

        <Link href="/blog/instagram-ads-gyms">
          Instagram Ads for Gyms
        </Link>

        <Link href="/blog/best-chatgpt-prompts-ad-copy">
          ChatGPT Prompts for Ad Copy
        </Link>

        <Link href="/blog/google-ads-headlines-local-business">
          Google Ads Headlines for Local Businesses
        </Link>

      </section>

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
              "AI-powered advertising platform for generating high-converting ad campaigns.",

            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },

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