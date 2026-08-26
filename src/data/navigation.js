// Single source of truth for the main menu. Both the desktop hover
// dropdown (Header.jsx) and the mobile accordion (MobileMenu.jsx)
// render from this array, so a link only ever needs to be added once.
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Pages",
    children: [
      { label: "Service Details", href: "/services/social-media-strategy-development" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Details", href: "/blog/how-to-craft-engaging-content-for-instagram" },
      { label: "Projects", href: "/projects" },
      { label: "Project Details", href: "/projects/dynamic-e-commerce-platform" },
      { label: "Team", href: "/team" },
      { label: "Team Details", href: "/team/cameron-williamson" },
      { label: "Pricing Plan", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Image Gallery", href: "/gallery/image" },
      { label: "Video Gallery", href: "/gallery/video" },
      { label: "FAQs", href: "/faqs" },
      { label: "404", href: "/404" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
