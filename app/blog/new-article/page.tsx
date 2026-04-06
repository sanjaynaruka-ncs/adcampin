import fs from "fs";
import path from "path";

function getPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  return fs
    .readdirSync(blogDir)
    .filter((name) => name !== "page.tsx")
    .map((slug) => ({
      title: slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      href: `/blog/${slug}`,
    }));
}