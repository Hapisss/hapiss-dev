import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const links = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon, external: true },
  { label: "Email", href: profile.socials.email, Icon: Mail, external: false },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-2.5", className)}>
      {links.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="inline-flex size-9 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon className="size-4" aria-hidden />
        </a>
      ))}
    </div>
  );
}
