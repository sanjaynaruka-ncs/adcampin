import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "AdCampin",
  description: "Launch high-converting ads in seconds with AI.",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "rSxHxCVfV9lASsz4y6MeWov8SqtcBEpKP15SHjOC2co",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2ZZQPM9XM9"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2ZZQPM9XM9');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* PAGE CONTENT */}
        {children}

        {/* GLOBAL INTERNAL LINKS (SEO BOOST - BLOG DISCOVERY) */}
        <div className="hidden">
          {/* Existing Articles */}
          <Link href="/blog/facebook-ad-copy-real-estate">Real Estate Facebook Ads</Link>
          <Link href="/blog/google-ads-headlines-local-business">Google Ads Headlines</Link>
          <Link href="/blog/best-chatgpt-prompts-ad-copy">ChatGPT Prompts for Ads</Link>

          {/* NEW ARTICLES ADDED */}
          <Link href="/blog/google-ads-dentists">Google Ads for Dentists</Link>
          <Link href="/blog/facebook-ads-lawyers">Facebook Ads for Lawyers</Link>
          <Link href="/blog/instagram-ads-gyms">Instagram Ads for Gyms</Link>
        </div>

        <Footer />
      </body>
    </html>
  );
}