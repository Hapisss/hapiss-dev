import { Section } from "@/components/ui/section";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="space-y-12">
        {experience.map((role) => (
          <div
            key={role.company}
            className="grid gap-x-8 gap-y-3 sm:grid-cols-[10rem_1fr]"
          >
            <p className="font-mono text-xs tracking-wide text-muted sm:pt-1">
              {role.period}
            </p>

            <div>
              <h3 className="text-lg font-semibold">{role.company}</h3>
              <p className="mt-0.5 text-sm text-accent">{role.title}</p>

              <ul className="mt-4 space-y-2.5">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight.slice(0, 24)}
                    className="relative pl-5 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="absolute left-0 top-[0.6em] h-px w-3 bg-accent"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
