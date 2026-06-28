export interface Project {
  name: string;
  stack: string[];
  description: string;
}

export const projects: Project[] = [
  {
    name: "Meeting Room Booking System",
    stack: ["React.js", "Go"],
    description:
      "A booking platform used by 5 entities within Victoria Group. Worked closely with stakeholders to translate operational workflows into a reliable, easy-to-use tool.",
  },
  {
    name: "Risk Management System",
    stack: ["React.js"],
    description:
      "A web application for risk reporting and monitoring, focused on usability, workflow design, and maintainable frontend architecture.",
  },
  {
    name: "Internet Business Banking",
    stack: ["React.js"],
    description:
      "Reusable frontend modules and integrated banking APIs, built within an enterprise development environment for a national bank.",
  },
];
