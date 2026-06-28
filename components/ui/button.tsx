import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-[transform,color,background-color,border-color] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:-translate-y-0.5",
  ghost:
    "border border-hairline-strong text-foreground hover:border-accent hover:text-accent",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function Button({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & ComponentProps<"button">) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & ComponentProps<"a">) {
  return <a className={buttonClasses(variant, className)} {...props} />;
}
