export const PRICING = {
  starter: {
    key: "starter",
    name: "Starter",
    monthly: 4999,
    yearly: 3999,
  },

  growth: {
    key: "growth",
    name: "Growth",
    monthly: 9999,
    yearly: 7999,
  },

  professional: {
    key: "professional",
    name: "Professional",
    monthly: 14999,
    yearly: 11999,
  },

  enterprise: {
    key: "enterprise",
    name: "Enterprise",
    monthly: null,
    yearly: null,
  },
} as const;

export type PlanKey = keyof typeof PRICING;

export function getPlanPrice(
  plan: PlanKey,
  billing: "monthly" | "yearly"
) {
  const pricing = PRICING[plan];

  if (!pricing) {
    throw new Error("Invalid plan");
  }

  if (plan === "enterprise") {
    return null;
  }

  return billing === "yearly"
    ? pricing.yearly
    : pricing.monthly;
}
