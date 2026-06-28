export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Angular",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Atomic Design",
    ],
  },
  {
    label: "Backend familiarity",
    items: ["NestJS", "Golang", "REST API"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma", "Postman"],
  },
];
