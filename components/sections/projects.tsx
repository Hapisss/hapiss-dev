import { Section } from "@/components/ui/section";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Highlighted projects">
      <p className="-mt-4 mb-10 max-w-[60ch] leading-relaxed text-muted">
        Most of my work is internal banking and enterprise software, so these are
        described at a high level rather than linked publicly.
      </p>

      <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-3 bg-surface p-6 transition-colors hover:bg-surface-2"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
