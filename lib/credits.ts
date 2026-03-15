export const CREDIT_COST = {
  GENERATE_CAMPAIGN: 5,
  AD_OPTIMIZATION: 2,
  AD_VARIATIONS: 2,
  IMAGE_VARIATIONS: 4,
  LANDING_PAGE: 3,
};

export async function deductCredits(
  supabase: any,
  userId: string,
  cost: number
) {

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  console.log("STEP 20: Profile query result:", data);

  if (error || !data) {
    console.log("PROFILE NOT FOUND");
    return { success: false, error: "User profile not found" };
  }

  const profile = data;

  if (profile.ai_lock) {
    console.log("AI LOCK ACTIVE");
    return { success: false, error: "AI request already in progress" };
  }

  if (profile.ai_credits < cost) {
    console.log("STEP 21: Credits before deduction:", profile.ai_credits);
    return { success: false, error: "Not enough AI credits" };
  }

  console.log("STEP 22: Credits deducted successfully");

  await supabase
    .from("profiles")
    .update({ ai_lock: true })
    .eq("id", userId);

  await supabase
    .from("profiles")
    .update({
      ai_credits: profile.ai_credits - cost,
      ai_lock: false
    })
    .eq("id", userId);

  console.log("CREDITS UPDATED");

  return { success: true };
}