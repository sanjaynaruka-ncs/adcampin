import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host");

  if (host?.startsWith("learnplaylab.")) {
    return {
      title: "Learn Play Lab",
      icons: {
        icon: "/learnplaylab-favicon.webp",
      },
    };
  }

  return {
    title: "AdCampin",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
