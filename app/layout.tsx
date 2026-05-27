import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

import Footer from "@/app/components/Footer";

/**
 * ============================================================================
 * GLOBAL SEO + INDEXING CONFIG
 * ============================================================================
 *
 * PURPOSE:
 * - Fix duplicate indexing signals
 * - Improve canonical consistency
 * - Improve crawl understanding
 * - Strengthen metadata quality sitewide
 * - Keep all existing features fully intact
 *
 * IMPORTANT:
 * - No routing changes
 * - No UI changes
 * - No feature removals
 * - Analytics fully preserved
 * - Existing blog discovery preserved
 * ============================================================================
 */

const siteUrl = "https://www.adcampin.com";

/**
 * ============================================================================
 * GLOBAL METADATA
 * ============================================================================
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AdCampin — AI Ad Generator for High-Converting Ads",
    template: "%s | AdCampin",
  },

  description:
    "Generate high-converting Facebook, Google, Instagram and LinkedIn ads using AI. Create ad copy, targeting strategies and optimized campaigns in seconds with AdCampin.",

  keywords: [
    "AI ad generator",
    "Facebook ads AI",
    "Google ads AI",
    "Instagram ads AI",
    "LinkedIn ads AI",
    "AI advertising tool",
    "ad copy generator",
    "marketing AI",
    "AI marketing platform",
    "ad campaign generator",
    "PPC ad generator",
    "AI ad copy",
    "digital advertising AI",
    "AdCampin",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AdCampin",
    title: "AdCampin — AI Ad Generator",
    description:
      "Launch high-converting advertising campaigns using AI-powered ad generation and optimization.",
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
      "Generate high-converting ad campaigns using AI.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
  },

  verification: {
    google: "rSxHxCVfV9lASsz4y6MeWov8SqtcBEpKP15SHjOC2co",
  },
};

/**
 * ============================================================================
 * FONTS
 * ============================================================================
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * ============================================================================
 * ROOT LAYOUT
 * ============================================================================
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      {/* ================================================================== */}
      {/* GOOGLE ANALYTICS                                                   */}
      {/* ================================================================== */}

      <head>

        {/* Canonical Homepage */}
        <link rel="canonical" href={siteUrl} />

        {/* Theme */}
        <meta name="theme-color" content="#000000" />

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

      </head>

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2ZZQPM9XM9"
        strategy="afterInteractive"
      />

      {/* Google Analytics Config */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag('config', 'G-2ZZQPM9XM9', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* ================================================================== */}
      {/* BODY                                                               */}
      {/* ================================================================== */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >

        {/* ================================================================ */}
        {/* PAGE CONTENT                                                     */}
        {/* ================================================================ */}

        {children}

        {/* ================================================================ */}
        {/* GLOBAL INTERNAL LINKS                                            */}
        {/* ================================================================ */}
        {/* PURPOSE:
            - Improve crawl discovery
            - Improve blog indexing
            - Strengthen internal linking graph
        */}

        <div className="hidden">

          {/* Existing Articles */}

          <Link href="/blog/facebook-ad-copy-real-estate">
            Real Estate Facebook Ads
          </Link>

          <Link href="/blog/google-ads-headlines-local-business">
            Google Ads Headlines
          </Link>

          <Link href="/blog/best-chatgpt-prompts-ad-copy">
            ChatGPT Prompts for Ads
          </Link>

          {/* Additional Articles */}

          <Link href="/blog/google-ads-dentists">
            Google Ads for Dentists
          </Link>

          <Link href="/blog/facebook-ads-lawyers">
            Facebook Ads for Lawyers
          </Link>

          <Link href="/blog/instagram-ads-gyms">
            Instagram Ads for Gyms
          </Link>

        </div>

        {/* ================================================================ */}
        {/* GLOBAL STRUCTURED DATA                                           */}
        {/* ================================================================ */}

        <Script
          id="global-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AdCampin",
              url: siteUrl,
              logo: `${siteUrl}/favicon.png`,
              sameAs: [],
            }),
          }}
        />

        {/* ================================================================ */}
        {/* FOOTER                                                           */}
        {/* ================================================================ */}

        <Footer />

      </body>
    </html>
  );
}