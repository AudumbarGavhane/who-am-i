"use client";

import { useState, type FormEvent } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fieldStyles =
  "rounded-md border border-border bg-background-subtle px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const mailSubject = encodeURIComponent(subject || `Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${mailSubject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldStyles}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldStyles}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className={fieldStyles}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={cn(fieldStyles, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
      >
        Send Message
      </button>
    </form>
  );
}
