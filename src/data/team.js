/**
 * NOTE: the source template repeats the same 3 names/roles across all 6
 * grid slots on team.html (a placeholder-content limitation in the
 * original design, not something introduced here). The photos and roles
 * are kept faithful to the source; a numeric suffix was added to the
 * slug/id of the repeated entries so each still gets a distinct detail
 * page URL. Swap in real teammates by editing this array — no other
 * file needs to change.
 */
export const team = [
  { slug: "cameron-williamson", image: "/images/team-1.jpg", name: "Cameron Williamson", role: "Social Media Manager" },
  { slug: "savannah-nguyen", image: "/images/team-2.jpg", name: "Savannah Nguyen", role: "Influencer Marketing Coordinator" },
  { slug: "leslie-alexander", image: "/images/team-3.jpg", name: "Leslie Alexander", role: "Digital Marketing Manager" },
  { slug: "cameron-williamson-2", image: "/images/team-4.jpg", name: "Cameron Williamson", role: "Social Media Manager" },
  { slug: "savannah-nguyen-2", image: "/images/team-5.jpg", name: "Savannah Nguyen", role: "Influencer Marketing Coordinator" },
  { slug: "leslie-alexander-2", image: "/images/team-6.jpg", name: "Leslie Alexander", role: "Digital Marketing Manager" },
];

export const teamSocialLinks = [
  { icon: "fa-brands fa-x-twitter", href: "#" },
  { icon: "fa-brands fa-facebook-f", href: "#" },
  { icon: "fa-brands fa-instagram", href: "#" },
  { icon: "fa-brands fa-pinterest-p", href: "#" },
];
