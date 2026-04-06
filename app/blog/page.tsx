import Link from "next/link";
import Navbar from "../components/navbar";
import fs from "fs";
import path from "path";

// Dynamically read all blog folders and generate posts with real titles
async function getPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  const slugs = fs
    .readdirSync(blogDir)
    // Only include valid blog folders (exclude index file)
    .filter((name) => {
      const fullPath = path.join(blogDir, name);
      const pageFile = path.join(fullPath, "page.tsx");

      return (
        name !== "page.tsx" &&
        fs.statSync(fullPath).isDirectory() &&
        fs.existsSync(pageFile)
      );
    });

  const posts = slugs.map(async (slug) => {
    try {
      // ✅ FIX: Use absolute import path (prevents fallback bug)
      const mod = await import(`@/app/blog/${slug}/page`);

      return {
        title:
          mod.blogTitle ||
          slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
        href: `/blog/${slug}`,
      };
    } catch {
      // Fallback to slug-based title (only if import fails)
      return {
        title: slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        href: `/blog/${slug}`,
      };
    }
  });

  return Promise.all(posts);
}

export default async function BlogIndex() {
  // Use dynamic posts with real titles
  const posts = await getPosts();

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400 max-w-2xl">
            Practical guides and proven templates to help you create high-converting ads faster.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Link key={index} href={post.href} className="block">
              <div className="bg-white/5 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition cursor-pointer h-full">
                
                <h2 className="text-lg font-semibold text-white mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm">
                  Click to read →
                </p>

              </div>
            </Link>
          ))}
        </div>

      </main>
    </>
  );
}