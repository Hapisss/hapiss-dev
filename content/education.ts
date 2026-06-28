export interface EducationItem {
  school: string;
  credential: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    school: "Universitas Terbuka",
    credential: "Bachelor of Information Systems",
    period: "Ongoing",
  },
  {
    school: "SMK Telkom Sandhy Putra Jakarta",
    credential: "Software Engineering",
    period: "2017 — 2020",
  },
];

export const certifications: string[] = [
  "HackerRank — JavaScript (Basic)",
  "HackerRank — Java (Basic)",
  "Dicoding — Frontend Web Development",
  "TOEIC — Score 900",
  "LPIA — English Proficiency",
  "SMK Telkom — Certificate of Competence",
];
