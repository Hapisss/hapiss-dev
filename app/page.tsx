import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { profile } from "@/content/profile";
import { siteConfig } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.role,
  url: siteConfig.url,
  email: profile.email,
  telephone: profile.phone,
  image: `${siteConfig.url}/me.jpeg`,
  description: profile.summary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  worksFor: { "@type": "Organization", name: profile.currentRole.company },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: [
    "Frontend Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Go",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Structured data for search engines (Person schema).
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
