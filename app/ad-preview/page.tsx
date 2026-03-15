"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function AdPreviewContent() {

  const searchParams = useSearchParams();
  const [adHtml, setAdHtml] = useState("");

  useEffect(() => {

    try {

      const ad = searchParams.get("ad");

      if (!ad) return;

      // Remove markdown bold formatting
      const cleanAd = ad.replace(/\*\*/g, "");

      const headlineMatch = cleanAd.match(/Headline:\s*(.*)/i);
      const primaryMatch = cleanAd.match(/Primary Text:\s*([\s\S]*?)(Call to Action:|$)/i);
      const ctaMatch = cleanAd.match(/Call to Action:\s*(.*)/i);

      const headline = headlineMatch?.[1]?.trim() || "";
      const primary = primaryMatch?.[1]?.trim() || "";
      const cta = ctaMatch?.[1]?.trim() || "";

      let html = "";

      // Structured Ad (Headline + Primary + CTA)
      if (headline || primary || cta) {

        html = `
          <div style="text-align:center">

            ${headline ? `
              <h1 style="
                font-size:40px;
                font-weight:700;
                margin-bottom:24px;
              ">
                ${headline}
              </h1>
            ` : ""}

            ${primary ? `
              <p style="
                font-size:18px;
                color:#475569;
                margin-bottom:40px;
                line-height:1.6;
              ">
                ${primary}
              </p>
            ` : ""}

            ${cta ? `
              <button style="
                background:#2563eb;
                color:white;
                padding:14px 28px;
                border-radius:8px;
                font-weight:600;
                border:none;
                cursor:pointer;
              ">
                ${cta}
              </button>
            ` : ""}

          </div>
        `;

      } else {

        // Fallback preview (strategy / funnel / performance ads)
        const formatted = cleanAd
          .replace(/### (.*)/g, "<h3>$1</h3>")
          .replace(/## (.*)/g, "<h2>$1</h2>")
          .replace(/# (.*)/g, "<h1>$1</h1>")
          .replace(/\n/g, "<br>");

        html = `<div>${formatted}</div>`;
      }

      setAdHtml(html);

    } catch (err) {

      console.error("Ad preview error:", err);

    }

  }, [searchParams]);

  return (
    <main className="min-h-screen bg-white text-black">

      <div className="max-w-4xl mx-auto px-8 py-16">

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: adHtml }}
        />

      </div>

    </main>
  );
}

export default function AdPreview() {

  return (
    <Suspense fallback={<div className="p-10 text-center">Loading preview...</div>}>
      <AdPreviewContent />
    </Suspense>
  );

}