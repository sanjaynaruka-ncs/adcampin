"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

  async function checkUser() {

    const { data } = await supabase.auth.getUser();

    if (data?.user) {
      router.push("/dashboard");
    }

  }

  checkUser();

}, [router]);

  async function handleLogin() {
  setMessage("");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setMessage(error.message);
    return;
  }

  if (data?.user) {
    router.push("/dashboard");
  } else {
    setMessage("Login failed. Please try again.");
  }
}

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#0b1a33] p-6">

        <div className="w-full max-w-md bg-slate-800/60 backdrop-blur p-8 rounded-xl shadow border border-slate-700">

          <h1 className="text-2xl font-bold mb-8 text-white">
            Login
          </h1>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-yellow-400 underline">
            Create one
          </a>
        </p>

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