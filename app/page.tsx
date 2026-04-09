import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import fs from "fs";
import path from "path";
import Link from "next/link";

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

      {/* Latest Guides Section (Improved spacing + alignment fix) */}
      <section className="pt-10 pb-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Latest Guides
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

      <Footer />
    </>
  );
}