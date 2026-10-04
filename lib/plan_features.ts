export const PLAN_FEATURES = {
  starter: {
    ai_ad_manager: true,
    campaign_analysis: true,
    campaign_optimization: true,
    performance_reporting: true,
    alerts: true,
    approval_workflows: true,
    landing_page: true,
    image_variations: true,
  },

  growth: {
    ai_ad_manager: true,
    campaign_analysis: true,
    campaign_optimization: true,
    performance_reporting: true,
    alerts: true,
    approval_workflows: true,
    landing_page: true,
    image_variations: true,
  },

  professional: {
    ai_ad_manager: true,
    campaign_analysis: true,
    campaign_optimization: true,
    performance_reporting: true,
    alerts: true,
    approval_workflows: true,
    landing_page: true,
    image_variations: true,
  },

  enterprise: {
    ai_ad_manager: true,
    campaign_analysis: true,
    campaign_optimization: true,
    performance_reporting: true,
    alerts: true,
    approval_workflows: true,
    landing_page: true,
    image_variations: true,
  },
} as const;

export type PlanFeatureKey = keyof typeof PLAN_FEATURES;
