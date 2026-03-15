"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingTab({
  landingPage,
  generateLandingPage,
  generatingPage,
  params,
  plan
}: any) {

  const router = useRouter();
  const [creditError, setCreditError] = useState(false);

  const isLocked = plan === "free";

  async function handleGenerateLandingPage() {

    if (isLocked) {
      router.push("/pricing");
      return;
    }

    setCreditError(false);

    const result = await generateLandingPage();

    if (result?.error) {
      setCreditError(true);
    }

    return result;
  }

  return (
    <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">

      <div className="flex flex-col gap-4">

        {/* Buttons Row */}
        <div className="flex gap-4 flex-wrap items-center">

          <button
            onClick={async () => {

              console.log("Landing button clicked");

              const result = await handleGenerateLandingPage();

              console.log("Landing handler result:", result);

            }}

            disabled={isLocked || generatingPage}

            className={`px-6 py-3 rounded-lg text-white font-medium ${
              isLocked
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isLocked
              ? "🔒 Landing Page (Pro)"
              : generatingPage
              ? "Generating..."
              : "Generate Landing Page"}
          </button>

          {landingPage && (
            <>
              <button
                onClick={() =>
                  window.open(
                    `/landing-preview/${params?.id}?html=${encodeURIComponent(landingPage)}`
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white font-medium"
              >
                View Demo Landing Page
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(landingPage);
                  alert("Copied to Clipboard");
                }}
                className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-lg text-white font-medium"
              >
                Download HTML
              </button>
            </>
          )}

        </div>

        {/* Status Messages */}
        <div className="text-gray-400 text-sm space-y-1">

          {isLocked && (
            <div className="text-yellow-400">
              🔒 Landing Page Generator is available in Pro plan.{" "}
              <span
                onClick={() => router.push("/pricing")}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                Upgrade
              </span>
            </div>
          )}

          {creditError && !isLocked && (
            <div className="text-red-400">
              AI usage limit reached.{" "}
              <span
                onClick={() => router.push("/pricing")}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                Upgrade to Pro
              </span>
            </div>
          )}

          {generatingPage && (
            <p>This may take a few seconds</p>
          )}

          {!generatingPage && !landingPage && !creditError && !isLocked && (
            <p>
              Click "Generate Landing Page" to create demo landing page.
            </p>
          )}

        </div>

      </div>

    </div>
  );
}