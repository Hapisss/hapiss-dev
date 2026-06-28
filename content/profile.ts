/**
 * Single source of truth for personal/profile data.
 * Kept separate from presentation so a future CMS can replace this module
 * without touching components.
 */
export const profile = {
  name: "Muhammad Hafizh Fadhlurrahman",
  shortName: "Hafizh",
  role: "Frontend Engineer",
  location: "Jakarta, Indonesia",

  tagline: "I build web apps that turn business workflows into software.",
  summary:
    "Frontend engineer with 5 years building React applications for banking, enterprise, and internal business systems — with growing depth in NestJS and Go.",

  currentRole: {
    title: "Frontend / Full Stack Developer",
    company: "PT Victoria Investama Tbk",
  },

  email: "kakakhafizh16@gmail.com",
  phone: "+62 813-1926-9250",
  phoneHref: "tel:+6281319269250",
  cvPath: "/cv.pdf",

  socials: {
    github: "https://github.com/Hapisss",
    linkedin: "https://www.linkedin.com/in/muhammad-hafizh-fadhlurrahman/",
    email: "mailto:kakakhafizh16@gmail.com",
  },
} as const;
