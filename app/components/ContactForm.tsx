"use client";

import { LINKS } from "../content";

export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Message to UCA Massachusetts from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} action={`mailto:${LINKS.email}`} method="post" encType="text/plain" data-reveal>
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field field-wide">
        <span>Message</span>
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit" className="field-submit">
        Send message
      </button>
      <p className="small form-note">
        Sending opens your email app with your message addressed to {LINKS.email}.
      </p>
    </form>
  );
}
