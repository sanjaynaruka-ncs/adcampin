"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ImageVariationsTab({ campaign, plan }: any) {

  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [creditError, setCreditError] = useState(false);

  const isLocked = plan === "free";

  async function generateImages() {

    if (isLocked) {
      router.push("/pricing");
      return;
    }

    try {

      const { data: userData } = await supabase.auth.getUser();

      if (!userData?.user) {
        alert("User session not loaded. Please refresh the page.");
        return;
      }

      setCreditError(false);
      setLoading(true);

      const res = await fetch("/api/image-variations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business: campaign?.business,
          product: campaign?.product,
          userId: userData.user.id
        }),
      });

      let data: any = null;

      try {
        data = await res.json();
      } catch {
        console.error("Image variations API returned invalid JSON");
        return;
      }

      if (!res.ok) {
        console.error("Image variations API error:", data);
        return;
      }

      // Handle credit error
      if (
        data?.error === "Not enough AI credits" ||
        data?.error === "Campaign limit reached for your plan."
      ) {
        setCreditError(true);
        return;
      }

      if (data?.error) {
        console.error(data.error);
        return;
      }

      setImages(data?.images || []);

    } catch (error) {

      console.error("Image generation failed:", error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">

      <button
        onClick={loading ? undefined : generateImages}
        disabled={loading || isLocked}
        className={`px-6 py-3 rounded-lg mb-6 text-white ${
          isLocked
            ? "bg-gray-500 cursor-not-allowed"
            : loading
            ? "bg-purple-400 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {isLocked
          ? "🔒 Generate Image Variations (Pro)"
          : loading
          ? "Generating..."
          : "Generate Image Variations"}
      </button>

      {isLocked && (
        <div className="text-yellow-400 text-sm mb-4">
          🔒 Image Variations are available in the Pro plan.{" "}
          <span
            onClick={() => router.push("/pricing")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Upgrade
          </span>
        </div>
      )}

      {creditError && !isLocked && (
        <div className="text-sm text-red-400 mb-4">
          AI usage limit reached.{" "}
          <span
            onClick={() => router.push("/pricing")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Upgrade to Pro
          </span>
        </div>
      )}

      {loading && (
        <div className="text-gray-400 text-sm space-y-1 mt-2">
          <p>This may take a few seconds</p>
        </div>
      )}

      {!loading && images.length === 0 && !creditError && !isLocked && (
        <p className="text-gray-400">
          Click "Generate Image Variations" to create ad creatives.
        </p>
      )}

      {images.length > 0 && (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {images.map((img: string, i: number) => (

            <div key={i} className="bg-slate-900 p-3 rounded-lg">

              <img
                src={img}
                className="rounded-lg mb-3"
                alt="Ad variation"
              />

              <a
                href={img}
                download
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-1 rounded"
              >
                Download
              </a>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}