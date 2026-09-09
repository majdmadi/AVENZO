'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const EMPTY = { name: '', email: '', company: '', scope: '', budget: '', message: '' };

export default function Contact({ dict }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((x) => ({ ...x, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = dict.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = dict.errEmail;
    if (form.message.trim().length < 12) next.message = dict.errMessage;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    // Netlify Forms. The POST target must be a static file, which is why this
    // goes to /__forms.html rather than a route — that file also declares the
    // form so Netlify can find it at deploy time. Email notifications are
    // configured in the Netlify dashboard, not here.
    try {
      const body = new URLSearchParams({ 'form-name': 'contact', ...form });

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!res.ok) throw new Error(`Netlify returned ${res.status}`);

      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      console.error('[Zyvanta] contact submission failed', err);
      setStatus('failed');
    }
  };

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[14.5px] text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-cyan-core/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]';

  return (
    <section id="contact" className="relative min-h-[100svh] py-32" aria-labelledby="contact-heading">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-cyan-core/60" />
                {dict.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="contact-heading"
                className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
              >
                {dict.title}
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-slate-400">
                {dict.lede}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 space-y-6">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {dict.studioLabel}
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-slate-200">{dict.studioValue}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {dict.availabilityLabel}
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2.5 text-[15px] text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />
                    {dict.availabilityValue}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-7 sm:p-9">
              {status === 'sent' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-cyan-core/40 bg-cyan-core/10">
                    <span className="text-2xl text-cyan-glow">✓</span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-semibold text-white">
                    {dict.sentTitle}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[14.5px] leading-relaxed text-slate-400">
                    {dict.sentBody}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-[13.5px] text-slate-200 transition-colors hover:border-cyan-core/50 hover:text-white"
                  >
                    {dict.sentAgain}
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={onSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {status === 'failed' && (
                    <div
                      role="alert"
                      className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3.5 text-[13.5px] leading-relaxed text-rose-200"
                    >
                      {dict.errSend}
                    </div>
                  )}

                  <p className="hidden">
                    <label>
                      {dict.honeypot} <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[12.5px] text-slate-400">
                        {dict.nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={update('name')}
                        placeholder={dict.namePlaceholder}
                        className={field}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-[12px] text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-[12.5px] text-slate-400">
                        {dict.emailLabel}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder={dict.emailPlaceholder}
                        className={field}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[12px] text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-[12.5px] text-slate-400">
                      {dict.companyLabel} <span className="text-slate-600">{dict.companyOptional}</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={update('company')}
                      placeholder={dict.companyPlaceholder}
                      className={field}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="scope" className="mb-2 block text-[12.5px] text-slate-400">
                        {dict.scopeLabel}
                      </label>
                      <select id="scope" name="scope" value={form.scope} onChange={update('scope')} className={field}>
                        <option value="" className="bg-midnight-900">
                          {dict.selectOne}
                        </option>
                        {dict.scopes.map((s) => (
                          <option key={s} value={s} className="bg-midnight-900">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="mb-2 block text-[12.5px] text-slate-400">
                        {dict.budgetLabel}
                      </label>
                      <select id="budget" name="budget" value={form.budget} onChange={update('budget')} className={field}>
                        <option value="" className="bg-midnight-900">
                          {dict.selectOne}
                        </option>
                        {dict.budgets.map((b) => (
                          <option key={b} value={b} className="bg-midnight-900">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-[12.5px] text-slate-400">
                      {dict.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder={dict.messagePlaceholder}
                      className={`${field} resize-none`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-[12px] text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative w-full overflow-hidden rounded-xl bg-cyan-core py-4 text-[14.5px] font-semibold text-midnight-950 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.9)] disabled:opacity-60"
                  >
                    <span className="relative z-10">
                      {status === 'sending' ? dict.submitting : dict.submit}
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
