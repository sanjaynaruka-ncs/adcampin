import fs from "fs";
import path from "path";

// Dynamically fetch all valid blog posts (folders with a valid page.tsx)
export function getPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  return fs
    .readdirSync(blogDir)
    // Only include directories that contain a valid page.tsx with default export
    .filter((name) => {
      const fullPath = path.join(blogDir, name);
      const pageFile = path.join(fullPath, "page.tsx");

      // Must be a directory + page.tsx must exist
      if (!fs.statSync(fullPath).isDirectory() || !fs.existsSync(pageFile)) {
        return false;
      }

      // Ensure page.tsx contains a default export (prevents Next.js build error)
      const content = fs.readFileSync(pageFile, "utf-8");
      return content.includes("export default");
    })
    .map((slug) => ({
      // Convert slug → readable title (fallback if dynamic title not used)
      title: slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      href: `/blog/${slug}`,
    }));
}