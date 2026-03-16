import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";

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

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} AdCampin. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>

              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}