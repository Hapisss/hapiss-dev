import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="home" className="py-20 sm:py-28 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Text */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {profile.name} — {profile.role}
            </p>

            <h1 className="mt-6 max-w-[18ch] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              I build web apps that turn{" "}
              <span className="text-accent">business workflows</span> into software.
            </h1>

            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#contact">
                Get in touch
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href={profile.cvPath}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <Download className="size-4" aria-hidden />
              </ButtonLink>
            </div>

            <p className="mt-8 flex items-center gap-2 font-mono text-xs tracking-wide text-muted">
              <span className="inline-block size-2 rounded-full bg-accent" aria-hidden />
              Currently — {profile.currentRole.title} @ {profile.currentRole.company}
            </p>

            <SocialLinks className="mt-6" />
          </div>

          {/* Portrait */}
          <div className="order-first mx-auto w-full max-w-72 sm:max-w-80 md:order-last md:max-w-88 md:justify-self-end">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-hairline bg-surface">
              <Image
                src="/me.jpeg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 22rem, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
