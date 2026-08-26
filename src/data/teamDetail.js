export const teamContactDefaults = {
  phone: "1123 445 7890",
  email: "infodomainame@gmail.com",
  address: "123 Creative Lane London, SW1A 1AA United Kingdom",
};

export const teamCareerList = [
  "develop strategic expertise",
  "embrace data-driven decision-making",
  "hone leadership skills",
  "stay current with digital trends",
  "build strong brand narratives",
  "cultivate cross-channel expertise",
];

/** Personal-info paragraphs, personalized with the member's role. */
export function getTeamBio(role) {
  return [
    `I am a dedicated professional with over 8 years of experience in social media marketing, currently serving as ${role}. My passion for innovation and efficiency drives my approach to team management, business development, and client relations.`,
    `As the ${role}, I lead strategic efforts to elevate brand awareness and drive growth through innovative marketing campaigns. With a passion for storytelling and data-driven insights, I oversee cross-channel marketing strategies, including digital, social media, and content creation, ensuring each initiative aligns with the brand's goals.`,
    "My experience in building strong customer relationships and maximizing ROI helps guide our team toward delivering impactful, results-driven solutions that propel the business forward.",
  ];
}

export function getCareerIntro(role) {
  return `As a ${role}, your career path should be shaped by a combination of strategic vision, leadership, and a deep understanding of modern marketing practices. Key guidelines include:`;
}
