"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { ENQUIRY_CATEGORIES } from "@/content/pages";

/**
 * Form UI only for Stage 1 — validation, honeypot, rate limiting, DB
 * storage and Nodemailer delivery are wired up in Stage 3 as a Server
 * Action per the build plan. Submitting here just prevents navigation.
 */
export function ContactForm() {
  const [incidentInProgress, setIncidentInProgress] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 640 }}>
      <div className="grid-2">
        <Field label="Name" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Work Email" htmlFor="workEmail">
          <Input id="workEmail" name="workEmail" type="email" required autoComplete="email" />
        </Field>
        <Field label="Organisation" htmlFor="organisation">
          <Input id="organisation" name="organisation" required autoComplete="organization" />
        </Field>
        <Field label="Country / Region" htmlFor="countryRegion">
          <Input id="countryRegion" name="countryRegion" required autoComplete="country-name" />
        </Field>
        <Field label="Role (optional)" htmlFor="role">
          <Input id="role" name="role" />
        </Field>
        <Field label="What can we help with?" htmlFor="enquiryCategory">
          <Select id="enquiryCategory" name="enquiryCategory" required defaultValue="">
            <option value="" disabled>
              Select an enquiry category
            </option>
            {ENQUIRY_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <Textarea id="message" name="message" required rows={5} />
      </Field>

      <div className="field" style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <input
          id="incidentInProgress"
          name="incidentInProgress"
          type="checkbox"
          checked={incidentInProgress}
          onChange={(e) => setIncidentInProgress(e.target.checked)}
          style={{ marginTop: 4 }}
        />
        <label htmlFor="incidentInProgress" style={{ marginBottom: 0 }}>
          I am reporting a security incident that is currently in progress
        </label>
      </div>

      {incidentInProgress && (
        <p className="note-todo">
          Please do not submit sensitive technical evidence (logs, malware samples, credentials) through this
          general contact form. Describe the situation at a high level and a member of the CybrixAZ team will
          follow up with a secure channel for evidence sharing.
        </p>
      )}

      <div className="field" style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <input id="consent" name="consent" type="checkbox" required style={{ marginTop: 4 }} />
        <label htmlFor="consent" style={{ marginBottom: 0 }}>
          I consent to CybrixAZ contacting me about this enquiry.
        </label>
      </div>

      {/* Honeypot — hidden from real visitors, validated server-side in Stage 3. */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" className="btn-block">
        Send Message
      </Button>
    </form>
  );
}
