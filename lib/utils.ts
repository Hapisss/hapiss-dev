type ClassValue = string | false | null | undefined;

/** Join conditional class names. Zero-dependency stand-in for clsx. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
