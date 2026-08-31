export const pricingPlans = [
  {
    icon: "/images/icon-pricing-1.svg",
    name: "simple plan",
    tagline: "Start at $29 included 3 client",
    price: 29,
    highlighted: false,
    features: ["24/7 customer support", "Multi-platform integration", "Free initial consultation"],
  },
  {
    icon: "/images/icon-pricing-2.svg",
    name: "Standard Plan",
    tagline: "Start at $39 included 3 client",
    price: 39,
    highlighted: true,
    features: ["Diseños personalizados", "creacion de branding completo", "Diseño web profesional"],
  },
  {
    icon: "/images/icon-pricing-1.svg",
    name: "premium plan",
    tagline: "Start at $49 included 3 client",
    price: 49,
    highlighted: false,
    features: ["SEO, Analisis de la competencia", "Campañas en meta ads"],
  },
];

// Used by the Home page preview (first 2 plans only)
export const pricingPreview = pricingPlans.slice(0, 2);

export const pricingBodyList = [
  {
    title: "Customizable packages",
    excerpt:
      "Our customizable packages are designed to meet your unique marketing needs. Whether you're a startup.",
  },
  {
    title: "Flexible subscription options",
    excerpt:
      "Our subscription plans are designed to meet your unique marketing needs, and they are flexible enough to adjust as your business grows.",
  },
];
