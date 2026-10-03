'use client';

import { useState } from 'react';

const EMPTY = { name: '', email: '', website: '', business: '' };

/**
 * Free website teardown request. Same Netlify Forms mechanism as the contact
 * form — the `teardown` form is declared in public/__forms.html and this POSTs
 * to that file. Keep the field names in sync with it.
 */
export default function AuditForm({ copy }) {
  const t = copy.fields;
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((x) => ({ ...x, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.errEmail;
    if (form.website.trim().length < 4) next.website = t.errWebsite;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const body = new URLSearchParams({ 'form-name': 'teardown', ...form });
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Netlify returned ${res.status}`);
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      console.error('[Zyvanta] teardown request failed', err);
      setStatus('failed');
    }
  };

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[14.5px] text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-cyan-core/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]';

  if (status === 'sent') {
    return (
      <div className="rounded-2xl glass p-9 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-cyan-core/40 bg-cyan-core/10">
          <span className="text-2xl text-cyan-glow">✓</span>
        </div>
        <h3 className="mt-6 font-display text-[22px] font-semibold text-white">{t.sentTitle}</h3>
        <p className="mx-auto mt-3 max-w-[40ch] text-[14.5px] leading-relaxed text-slate-400">{t.sentBody}</p>
      </div>
    );
  }

  return (
    <form
      name="teardown"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl glass p-7 sm:p-9"
    >
      <input type="hidden" name="form-name" value="teardown" />
      <h2 className="font-display text-[20px] font-semibold text-white">{copy.formTitle}</h2>

      {status === 'failed' && (
        <div role="alert" className="mt-5 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3.5 text-[13.5px] leading-relaxed text-rose-200">
          {t.errSend}
        </div>
      )}

      <p className="hidden">
        <label>
          {t.honeypot} <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="a-website" className="mb-2 block text-[12.5px] text-slate-400">{t.website}</label>
          <input
            id="a-website"
            name="website"
            value={form.website}
            onChange={update('website')}
            placeholder="exemple.ca"
            inputMode="url"
            className={field}
            aria-invalid={!!errors.website}
          />
          {errors.website && <p className="mt-1.5 text-[12px] text-rose-400">{errors.website}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="a-name" className="mb-2 block text-[12.5px] text-slate-400">{t.name}</label>
            <input id="a-name" name="name" value={form.name} onChange={update('name')} autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="a-email" className="mb-2 block text-[12.5px] text-slate-400">{t.email}</label>
            <input
              id="a-email"
              name="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              autoComplete="email"
              className={field}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-1.5 text-[12px] text-rose-400">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="a-business" className="mb-2 block text-[12.5px] text-slate-400">{t.business}</label>
          <input id="a-business" name="business" value={form.business} onChange={update('business')} className={field} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative mt-7 w-full overflow-hidden rounded-xl bg-cyan-core py-4 text-[14.5px] font-semibold text-midnight-950 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.9)] disabled:opacity-60"
      >
        <span className="relative z-10">{status === 'sending' ? t.submitting : t.submit}</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
    </form>
  );
}
