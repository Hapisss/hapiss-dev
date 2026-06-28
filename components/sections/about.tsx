import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { about } from "@/content/about";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="How I approach building software">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-pretty leading-relaxed text-muted md:col-span-3">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ul className="space-y-3 md:col-span-2">
          {about.values.map((value) => (
            <li key={value} className="flex gap-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
