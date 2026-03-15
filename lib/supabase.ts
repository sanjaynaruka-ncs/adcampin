import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let _supabaseClient: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_supabaseClient) {

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error(
        "Supabase environment variables are missing. Check Vercel env settings."
      );

      // return a dummy client to prevent runtime crash
      _supabaseClient = createClient(
        "https://placeholder.supabase.co",
        "placeholder-anon-key"
      );

      return _supabaseClient;
    }

    _supabaseClient = createClient(
      supabaseUrl,
      supabaseAnonKey
    );
  }

  return _supabaseClient;
}

// Proxy so existing imports keep working
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getClient() as any)[prop];
  },
});

// Server-side helper (API routes)
export function getSupabaseServer(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase server environment variables are missing."
    );
  }

  return createClient(url, key);
}

// Optional explicit client helper
export function getSupabaseClient(): SupabaseClient {
  return getClient();
}