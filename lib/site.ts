import { profile } from "@/content/profile";

/** Site-level configuration used for metadata and SEO. */
export const siteConfig = {
  name: profile.name,
  role: profile.role,
  url: "https://hapiss.dev",
  description: profile.summary,
  locale: "en_US",
} as const;
