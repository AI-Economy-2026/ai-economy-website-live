'use client';

import { useState } from 'react';

type PartnerApplyFormProps = {
  contactEmail: string;
};

const SERVICE_OPTIONS = [
  'Strategy',
  'Training',
  'Implementation',
  'GEO',
  'Content',
  'Automation',
  'Other',
] as const;

const initialState = {
  name: '',
  role: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  linkedin: '',
  location: '',
  services: [] as string[],
  servicesDetail: '',
  message: '',
};

export function PartnerApplyForm({ contactEmail }: PartnerApplyFormProps) {
  const [values, setValues] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(service: string) {
    setValues((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `AI Network application from ${values.name || values.company || 'a partner'}`;
    const lines = [
      `Name: ${values.name}`,
      values.role ? `Role: ${values.role}` : null,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      values.company ? `Company: ${values.company}` : null,
      values.website ? `Website: ${values.website}` : null,
      values.linkedin ? `LinkedIn: ${values.linkedin}` : null,
      values.location ? `Location: ${values.location}` : null,
      values.services.length ? `Services offered: ${values.services.join(', ')}` : null,
      '',
      'About the services:',
      values.servicesDetail,
      '',
      'Anything else:',
      values.message,
    ].filter((line): line is string => line !== null);

    const body = lines.join('\n');
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  }

  const inputCls =
    'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/20';
  const labelCls =
    'mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868B]';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className={labelCls}>
            Name <span className="text-[#004AAD]">*</span>
          </label>
          <input
            id="partner-name"
            type="text"
            required
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="partner-role" className={labelCls}>
            Role
          </label>
          <input
            id="partner-role"
            type="text"
            value={values.role}
            onChange={(e) => update('role', e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="partner-email" className={labelCls}>
            Email <span className="text-[#004AAD]">*</span>
          </label>
          <input
            id="partner-email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="partner-phone" className={labelCls}>
            Phone
          </label>
          <input
            id="partner-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="partner-company" className={labelCls}>
            Company
          </label>
          <input
            id="partner-company"
            type="text"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="partner-location" className={labelCls}>
            Location / country
          </label>
          <input
            id="partner-location"
            type="text"
            value={values.location}
            onChange={(e) => update('location', e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="partner-website" className={labelCls}>
            Website or portfolio
          </label>
          <input
            id="partner-website"
            type="url"
            placeholder="https://"
            value={values.website}
            onChange={(e) => update('website', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="partner-linkedin" className={labelCls}>
            LinkedIn
          </label>
          <input
            id="partner-linkedin"
            type="url"
            placeholder="https://linkedin.com/in/..."
            value={values.linkedin}
            onChange={(e) => update('linkedin', e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <p className={labelCls}>Services you offer (tick all that apply)</p>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((service) => {
            const active = values.services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'border-[#004AAD] bg-[#004AAD] text-white'
                    : 'border-black/15 bg-white text-[#1D1D1F] hover:border-[#004AAD]'
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="partner-services-detail" className={labelCls}>
          Tell us about your services
        </label>
        <textarea
          id="partner-services-detail"
          rows={4}
          value={values.servicesDetail}
          onChange={(e) => update('servicesDetail', e.target.value)}
          className={`${inputCls} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="partner-message" className={labelCls}>
          Anything else
        </label>
        <textarea
          id="partner-message"
          rows={4}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputCls} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003A8C] md:w-auto"
      >
        Submit application
      </button>

      {submitted && (
        <p className="text-sm text-[#86868B]">
          Your email client should have opened with your application ready to send. If it did not,
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
