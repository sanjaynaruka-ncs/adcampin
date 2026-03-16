"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

export default function ContactPage() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      form.reset();
    }
  }

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-4 text-white">
          Contact Us
        </h1>

        <p className="text-gray-400 mb-10">
          Have questions about AdCampin? Send us a message and our team will
          get back to you as soon as possible.
        </p>

        {success && (
          <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
            ✅ Your message has been sent successfully. We’ll get back to you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur"
        >

          {/* NAME */}

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>

            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* EMAIL */}

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="john@email.com"
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* MESSAGE */}

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can we help you?"
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </main>
    </>
  );
}