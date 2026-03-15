"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function LandingPreview() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [landingPage, setLandingPage] = useState("");

  useEffect(() => {
    async function loadLanding() {
      try {

        // Always fetch campaign data first (needed for image)
        const { data, error } = await supabase
          .from("campaigns")
          .select("business, product, image_url")
          .eq("id", params?.id)
          .single();

        if (error) {
          console.error(error);
          return;
        }

        const html = searchParams.get("html");

        const heroImage = `
<div style="width:100%;display:flex;justify-content:center;margin:20px 0 30px 0;">
  <img 
    src="${data?.image_url}" 
    style="max-width:650px;width:100%;border-radius:16px;"
  />
</div>
`;

        // If AI generated HTML is passed in URL
        if (html) {

          const cleanedHtml = html
            .replace(/```html/g, "")
            .replace(/```/g, "")
            .trim();

          setLandingPage(heroImage + cleanedHtml);
          return;
        }

        // Fallback preview (existing behavior preserved)
        setLandingPage(`
          ${heroImage}

          <h1>${data.business}</h1>
          <p>${data.product}</p>
          <p>This is a demo landing page generated for preview.</p>
        `);

      } catch (err) {
        console.error("Landing preview error:", err);
      }
    }

    loadLanding();
  }, [params?.id, searchParams]);

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-8 pt-10 pb-16">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: landingPage }}
        />
      </div>
    </main>
  );
}