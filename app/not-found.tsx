import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-dvh flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-[42ch] text-muted">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back home
      </ButtonLink>
    </Container>
  );
}
