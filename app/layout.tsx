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
        <Footer />
      </body>
    </html>
  );
}