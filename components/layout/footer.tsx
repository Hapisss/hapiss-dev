import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm font-semibold">
            hapiss<span className="text-accent">.dev</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
