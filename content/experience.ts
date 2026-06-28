export interface ExperienceRole {
  company: string;
  title: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceRole[] = [
  {
    company: "PT Victoria Investama Tbk",
    title: "Frontend / Full Stack Developer",
    period: "2025 — Present",
    highlights: [
      "Developed internal business applications using React, Angular, NestJS, and Go.",
      "Built and maintained a Meeting Room Booking System adopted by multiple entities within the group.",
      "Collaborated directly with stakeholders to translate operational workflows into software.",
      "Designed and integrated REST APIs across frontend and backend services.",
    ],
  },
  {
    company: "PT Infosys Solusi Terpadu",
    title: "Frontend Developer",
    period: "2024 — 2025",
    highlights: [
      "Developed frontend modules for Internet Business Banking and Portal Bank Jatim using React.js.",
      "Built reusable UI components following Atomic Design principles.",
      "Integrated secure APIs and collaborated with backend teams to deliver banking applications.",
    ],
  },
  {
    company: "PT Paramadaksa Teknologi Nusantara",
    title: "Frontend Developer",
    period: "2020 — 2023",
    highlights: [
      "Developed and maintained multiple B2B web applications.",
      "Translated Figma designs into responsive React interfaces.",
      "Built reusable UI components using Tailwind CSS and Ant Design.",
      "Integrated backend APIs and maintained frontend architecture.",
    ],
  },
];
