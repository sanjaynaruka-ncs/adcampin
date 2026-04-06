import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import fs from "fs";
import path from "path";

// Dynamically fetch latest blog posts
function getLatestPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  return fs
    .readdirSync(blogDir)
    // Exclude blog index file
    .filter((name) => name !== "page.tsx")
    // Get latest 6 posts
    .slice(-6)
    .map((slug) => ({
      title: slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      href: `/blog/${slug}`,
    }));
}

export default function Home() {
  const posts = getLatestPosts();

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
          {posts.map((post, index) => (
            <li key={index}>
              <a href={post.href} className="hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}