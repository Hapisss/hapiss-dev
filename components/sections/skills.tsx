import { Section } from "@/components/ui/section";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {group.label}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-hairline bg-surface px-3 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
