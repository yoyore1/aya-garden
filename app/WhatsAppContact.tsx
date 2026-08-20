"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "";
const WHATSAPP_INTRO =
  "Hello Aya Garden, I would like to discuss a commercial landscaping project in Mauritius.";

function openWhatsApp(message = WHATSAPP_INTRO) {
  const destination = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(destination, "_blank", "noopener,noreferrer");
}

export function WhatsAppContact() {
  function handleProjectInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Aya Garden, I would like to discuss a commercial landscaping project.",
      `Project type: ${data.get("project-type") || "Not specified"}`,
      `Name: ${data.get("name") || "Not specified"}`,
      `Contact: ${data.get("contact") || "Not specified"}`,
      `Location: ${data.get("location") || "Not specified"}`,
      `Project brief: ${data.get("brief") || "Not specified"}`,
    ].join("\n");
    openWhatsApp(message);
  }

  return (
    <>
      <form className="projectForm" onSubmit={handleProjectInquiry}>
        <div className="formHeader">
          <span>Project enquiry</span>
          <b>Usually starts with a site walk.</b>
        </div>
        <label>
          Project type
          <select name="project-type" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Hotel or resort</option>
            <option>Mall or retail centre</option>
            <option>Condo or residential development</option>
            <option>Corporate or institutional</option>
            <option>Other large-scale project</option>
          </select>
        </label>
        <div className="formRow">
          <label>Your name<input name="name" placeholder="Name" autoComplete="name" required /></label>
          <label>Phone / email<input name="contact" placeholder="Best way to reach you" autoComplete="email" required /></label>
        </div>
        <label>Project location<input name="location" placeholder="Where in Mauritius?" /></label>
        <label>Tell us about the site<textarea name="brief" placeholder="Scope, stage, timeline or anything useful" rows={4} /></label>
        <button className="button formButton" type="submit">Continue on WhatsApp <span>↗</span></button>
        <small className="formSmall">Your details open as a ready-to-send WhatsApp message.</small>
      </form>
      <button className="whatsappFloat" type="button" onClick={() => openWhatsApp()} aria-label="Start a WhatsApp conversation with Aya Garden">
        <span className="whatsappMark" aria-hidden="true">WA</span>
        <span className="whatsappText"><b>WhatsApp Aya Garden</b><small>Discuss a project</small></span>
      </button>
    </>
  );
}
