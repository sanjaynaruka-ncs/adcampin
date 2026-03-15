export function checkFeature(plan: string, feature: string) {

  const PLAN_FEATURES: any = {
    free: {
      landing_page: false,
      image_variations: false,
      export_ads: false
    },
    pro: {
      landing_page: true,
      image_variations: true,
      export_ads: true
    }
  };

  return PLAN_FEATURES[plan]?.[feature] ?? false;
}