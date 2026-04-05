import Link from "next/link";

export default function BlogIndex() {
  const posts = [
    {
      title: "Facebook Ad Copy for Real Estate (10 High-Converting Examples)",
      href: "/blog/facebook-ad-copy-real-estate",
    },
    {
      title: "Google Ads Headlines for Local Businesses (Proven Templates)",
      href: "/blog/google-ads-headlines-local-business",
    },
    {
      title: "Best ChatGPT Prompts for Ad Copy (With Results)",
      href: "/blog/best-chatgpt-prompts-ad-copy",
    },
  ];

  return (
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
  );
}