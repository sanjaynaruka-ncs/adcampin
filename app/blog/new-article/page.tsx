import fs from "fs";
import path from "path";

// Dynamically fetch all valid blog posts (folders with page.tsx)
export function getPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  return fs
    .readdirSync(blogDir)
    // Ensure it's a folder AND contains page.tsx
    .filter((name) => {
      const fullPath = path.join(blogDir, name);
      return (
        fs.statSync(fullPath).isDirectory() &&
        fs.existsSync(path.join(fullPath, "page.tsx"))
      );
    })
    .map((slug) => ({
      // Convert slug → readable title (fallback if no dynamic title yet)
      title: slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      href: `/blog/${slug}`,
    }));
}