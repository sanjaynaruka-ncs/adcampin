import Link from "next/link";

export default function BlogIndex() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Blog</h1>

      <ul>
        <li>
          <Link href="/blog/facebook-ad-copy-real-estate">
            Facebook Ad Copy for Real Estate (10 High-Converting Examples)
          </Link>
        </li>
      </ul>
    </main>
  );
}