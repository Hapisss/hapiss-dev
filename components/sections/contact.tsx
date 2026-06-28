import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/ui/social-links";
import { profile } from "@/content/profile";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="max-w-[46ch] leading-relaxed text-muted">
            Have a role, a project, or just want to say hello? Send a message or
            reach me directly.
          </p>

          <dl className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-hairline text-accent">
                <Mail className="size-4" aria-hidden />
              </span>
              <a
                href={profile.socials.email}
                className="text-sm transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-hairline text-accent">
                <Phone className="size-4" aria-hidden />
              </span>
              <a
                href={profile.phoneHref}
                className="text-sm transition-colors hover:text-accent"
              >
                {profile.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-hairline text-accent">
                <MapPin className="size-4" aria-hidden />
              </span>
              <span className="text-sm text-muted">{profile.location}</span>
            </div>
          </dl>

          <SocialLinks className="mt-8" />
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
