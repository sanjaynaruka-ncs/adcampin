import Navbar from "../components/navbar";
import Script from "next/script";

export default function AboutPage() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AdCampin",
            url: "https://adcampin.com",
            logo: "https://adcampin.com/logo-v2.webp",
            description:
              "AdCampin is an AI-powered platform that helps businesses generate high-converting advertising campaigns in seconds.",
            sameAs: [],
          }),
        }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20 text-white">

        <h1 className="text-4xl font-bold mb-10">
          About AdCampin
        </h1>

        <p className="text-gray-300 mb-6">
          AdCampin is an AI-powered platform designed to help businesses
          create high-converting advertising campaigns in seconds.
          Instead of spending hours researching strategies, writing ad copy,
          and configuring targeting options, businesses can generate
          complete campaigns instantly using AI.
        </p>

        <p className="text-gray-300 mb-6">
          Our mission is to simplify digital advertising for businesses
          of all sizes. Many companies struggle with marketing because
          advertising platforms are complex and constantly evolving.
          AdCampin solves this problem by combining artificial intelligence
          with proven marketing frameworks to produce optimized campaigns
          quickly and efficiently.
        </p>

        <p className="text-gray-300 mb-6">
          With AdCampin, users can generate ad copy, targeting strategies,
          campaign structures, and creative ideas tailored to their
          specific industry. Whether you are running ads for a local
          service business or scaling campaigns for a global brand,
          AdCampin helps streamline the process.
        </p>

        <p className="text-gray-300 mb-6">
          Our platform is designed for startup founders, marketers,
          agencies, and small business owners who want to launch
          effective advertising campaigns without needing deep
          expertise in digital marketing platforms.
        </p>

        <p className="text-gray-300 mb-6">
          AdCampin supports advertising strategies across multiple
          platforms including Facebook, Google, Instagram, and
          LinkedIn. By analyzing proven campaign structures and
          advertising best practices, our AI helps generate
          campaigns that are designed to attract attention,
          drive engagement, and convert potential customers.
        </p>

        <p className="text-gray-300">
          Our vision is to make advanced marketing tools accessible
          to everyone. By combining automation with intelligent
          campaign generation, AdCampin empowers businesses to
          grow faster while saving valuable time and resources.
        </p>

      </main>
    </>
  );
}