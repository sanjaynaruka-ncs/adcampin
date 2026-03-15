export default function sitemap() {

  const baseUrl = "https://adcampin.com";

  const platforms = [
    "facebook",
    "google",
    "instagram",
    "linkedin"
  ];

  const industries = [
    "dentists",
    "lawyers",
    "real-estate",
    "restaurants",
    "plumbers",
    "electricians",
    "roofing",
    "car-dealers",
    "auto-repair",
    "car-rentals",
    "gyms",
    "yoga-studios",
    "fitness-coaches",
    "personal-trainers",
    "martial-arts",
    "salons",
    "barbershops",
    "spas",
    "beauty-clinics",
    "cosmetic-surgeons",
    "photographers",
    "videographers",
    "wedding-planners",
    "event-organizers",
    "hotels",
    "resorts",
    "travel-agencies",
    "tour-operators",
    "clinics",
    "chiropractors",
    "physiotherapists",
    "mental-health-therapists",
    "schools",
    "colleges",
    "online-courses",
    "coaching-centers",
    "tutors",
    "consultants",
    "business-coaches",
    "life-coaches",
    "marketing-agencies",
    "seo-agencies",
    "saas",
    "startups",
    "software-companies",
    "it-services",
    "app-development",
    "accountants",
    "tax-consultants",
    "financial-advisors",
    "insurance-agents"
  ];

  const types = [
    "examples",
    "strategy",
    "cost",
    "ideas"
  ];

  const pages = [];

  // Static Pages
  pages.push(
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() }
  );

  // SEO Pages
  platforms.forEach((platform) => {
    industries.forEach((industry) => {

      pages.push({
        url: `${baseUrl}/ads/${platform}/${industry}`,
        lastModified: new Date()
      });

      types.forEach((type) => {
        pages.push({
          url: `${baseUrl}/ads/${platform}/${industry}/${type}`,
          lastModified: new Date()
        });
      });

    });
  });

  return pages;
}