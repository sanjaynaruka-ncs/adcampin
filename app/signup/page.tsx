"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import Navbar from "../components/navbar";
import { useSearchParams } from "next/navigation";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

const platform = searchParams.get("platform") || "Facebook";
const industry = searchParams.get("industry") || "Dentists";

  async function handleSignup() {

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Signup successful! Check your email.");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#0b1a33] p-6 flex flex-col items-center justify-center">

        {/* HEADLINE */}

        <div className="text-center max-w-3xl mb-10">

          <h1 className="text-4xl font-bold text-white mb-4">
            Create High-Converting Ads in Seconds
          </h1>

          <p className="text-gray-300">
            Generate ad copy, targeting strategy, campaign structure and optimization
            instantly with AI using AdCampin.
          </p>

        </div>


        {/* BENEFITS */}

        <div className="text-gray-300 text-sm mb-10 text-center space-y-2">

          <p>✔ Generate complete advertising campaigns instantly</p>
          <p>✔ Works for Facebook, Google, Instagram & LinkedIn</p>
          <p>✔ Built for marketers, agencies and startups</p>

        </div>


        {/* AI CAMPAIGN PREVIEW */}

        <div className="w-full max-w-2xl bg-slate-900/70 border border-slate-700 rounded-xl p-6 mb-12 text-left">

          <h2 className="text-white font-semibold mb-4">
            Example AI Generated Campaign
          </h2>

          <div className="text-gray-300 text-sm space-y-3">

            <p>
              <strong>Campaign:</strong>{" "}
              {(platform || "facebook")
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")} Lead Generation
            </p>

            <p>
              <strong>Industry:</strong>{" "}
              {(industry || "dentists")
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </p>

            <p>
              <strong>Ad Copy:</strong><br/>
              Looking for a trusted dentist near you?  
              Book your appointment today and get a free consultation.
            </p>

            <p>
              <strong>Targeting:</strong><br/>
              Location: 10km around clinic<br/>
              Age: 25–55<br/>
              Interests: Dental care, oral hygiene
            </p>

            <p>
              <strong>Recommended Budget:</strong> $20/day<br/>
              <strong>Estimated Leads:</strong> 10–20 per week
            </p>

          </div>

        </div>


        {/* SIGNUP FORM */}

        <div className="w-full max-w-md bg-slate-800/60 backdrop-blur p-8 rounded-xl shadow border border-slate-700">

          <h2 className="text-2xl font-bold mb-8 text-white text-center">
            Create Account
          </h2>

          {/* Full Name */}

          <div className="mb-5">
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          {/* Email */}

          <div className="mb-5">
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          {/* Password */}

          <div className="mb-5">
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          {/* Confirm Password */}

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>


          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          <p className="text-xs text-gray-400 text-center mt-3">
            No credit card required
          </p>

          {message && (
            <p className="mt-4 text-sm text-gray-300 text-center">
              {message}
            </p>
          )}

        </div>

      </main>
    </>
  );
}