import type { ReactNode } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

/** Standard section shell: hairline top rule, consistent padding, and a
 *  mono eyebrow + heading. Keeps every section visually consistent. */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("border-t border-hairline py-20 sm:py-28", className)}
    >
      <Container>
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-[24ch] text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="reveal mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
