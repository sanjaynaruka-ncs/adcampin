"use client";

import { Share2 } from "lucide-react";

export default function SEOShareEmbed({
  title,
}: {
  title: string;
}) {
  function handleShare() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("🔗 Page link copied!");
  }

  function handleEmbed() {
    const url = window.location.href;

    const embedCode = `<iframe src="${url}" width="100%" height="600" style="border:none;border-radius:12px;"></iframe>
<p style="text-align:center;font-size:12px;">
Powered by <a href="https://adcampin.com" target="_blank">AdCampin</a>
</p>`;

    navigator.clipboard.writeText(embedCode);
    alert("📋 Embed code copied!");
  }

  return (
    <div className="mt-10 max-w-md flex flex-col gap-3">

      {/* Share */}
      <button
        onClick={handleShare}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <Share2 size={16} />
        Share this page
      </button>

      {/* Embed */}
      <button
        onClick={handleEmbed}
        className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
      >
        📋 Embed {title}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Share or embed these ad examples on your website or blog.
      </p>

    </div>
  );
}