'use client';

import { useState } from 'react';

type ContactFormProps = {
  contactEmail: string;
};

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [values, setValues] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `New enquiry from ${values.name || 'the AI Economy contact form'}`;
    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      values.company ? `Company: ${values.company}` : null,
      '',
      'Message:',
      values.message,
    ].filter((line): line is string => line !== null);

    const body = lines.join('\n');
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868B]">
          Name <span className="text-[#004AAD]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={(e) => update('name', e.target.value)}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/20"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868B]">
          Email <span className="text-[#004AAD]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/20"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868B]">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/20"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868B]">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868B]">
          Message <span className="text-[#004AAD]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003A8C] md:w-auto"
      >
        Send message
      </button>

      {submitted && (
        <p className="text-sm text-[#86868B]">
          Your email client should have opened with the message ready to send. If it did not,
          please email{' '}
          <a href={`mailto:${contactEmail}`} className="font-medium text-[#004AAD] hover:underline">
            {contactEmail}
          </a>
          .
        </p>
      )}
    </form>
  );
}
