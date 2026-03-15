"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function Navbar() {

  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    }

    getUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <nav className="sticky top-0 z-50 max-w-5xl mx-auto px-6 md:px-10 py-5 border-b bg-black/90 backdrop-blur text-white">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1
          className="text-4xl font-bold tracking-tight cursor-pointer"
          onClick={() => router.push("/")}
        >
          AdCampin
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">

          {user && (
            <Link
              href="/dashboard"
              className="text-white text-sm hover:text-gray-300"
            >
              Dashboard
            </Link>
          )}

          <Link
            href="/pricing"
            className="text-white text-sm hover:text-gray-300"
          >
            Pricing
          </Link>

          {!user && (
            <button
              onClick={() => router.push("/login")}
              className="text-white text-sm hover:text-gray-300"
            >
              Login
            </button>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
            >
              Logout
            </button>
          )}

          <button
            onClick={() => router.push("/signup")}
            className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            Start Trial
          </button>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-6">

          {user && (
            <Link
              href="/dashboard"
              className="text-white text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}

          <Link
            href="/pricing"
            className="text-white text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>

          {!user && (
            <button
              onClick={() => {
                router.push("/login");
                setMenuOpen(false);
              }}
              className="text-white text-sm text-left"
            >
              Login
            </button>
          )}

          {user && (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
            >
              Logout
            </button>
          )}

          <button
            onClick={() => {
              router.push("/signup");
              setMenuOpen(false);
            }}
            className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            Start Trial
          </button>

        </div>
      )}

    </nav>
  );
}