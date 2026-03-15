"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import Navbar from "../components/navbar";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

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

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#0b1a33] p-6">

        <div className="w-full max-w-md bg-slate-800/60 backdrop-blur p-8 rounded-xl shadow border border-slate-700">

          <h1 className="text-2xl font-bold mb-8 text-white">
            Create Account
          </h1>

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

          {message && (
            <p className="mt-4 text-sm text-gray-300">
              {message}
            </p>
          )}

        </div>

      </main>
    </>
  );
}