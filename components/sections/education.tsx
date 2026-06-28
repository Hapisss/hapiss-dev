import { Section } from "@/components/ui/section";
import { certifications, education } from "@/content/education";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-xl border border-hairline bg-surface p-5"
            >
              <h3 className="font-semibold">{item.credential}</h3>
              <p className="mt-1 text-sm text-accent">{item.school}</p>
              <p className="mt-1 font-mono text-xs tracking-wide text-muted">
                {item.period}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Certifications
          </p>
          <ul className="mt-4 space-y-2.5">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-3 text-sm text-muted">
                <span
                  className="mt-[0.55em] h-px w-3 shrink-0 bg-accent"
                  aria-hidden
                />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
