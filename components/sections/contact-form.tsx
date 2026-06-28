"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "rounded-lg border border-hairline bg-surface px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage("");

    const data = new FormData(form);
    if (ACCESS_KEY) data.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success: boolean; message?: string };

      if (json.success) {
        setStatus("success");
        setMessage("Thanks — I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real users, catches bots (Web3Forms). */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <Field id="name" label="Name" type="text" autoComplete="name" />
      <Field id="email" label="Email" type="email" autoComplete="email" />
      <Field id="subject" label="Subject" type="text" />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wide text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${fieldClass} min-h-28 resize-y`}
        />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Send message
            <Send className="size-4" aria-hidden />
          </>
        )}
      </Button>

      <p aria-live="polite" className="min-h-5 text-sm">
        {status === "success" && <span className="text-accent">{message}</span>}
        {status === "error" && <span className="text-red-500">{message}</span>}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wide text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}
