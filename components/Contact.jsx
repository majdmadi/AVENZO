'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const BUDGETS = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet'];
const SCOPES = ['Web platform', 'Custom application', 'Automation / integration', 'AI engineering', 'Something else'];

const EMPTY = { name: '', email: '', company: '', scope: '', budget: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((x) => ({ ...x, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'A valid email, please.';
    if (form.message.trim().length < 12) next.message = 'A sentence or two about the project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    // ------------------------------------------------------------------
    // WIRE ME UP: replace this block with a real submission, e.g.
    //   await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   });
    // Formspree, Resend, a Power Automate HTTP trigger or an Azure Function
    // all drop in here without touching anything else on this page.
    // ------------------------------------------------------------------
    console.log('[Avenzo] contact submission', form);
    await new Promise((r) => setTimeout(r, 750));

    setStatus('sent');
    setForm(EMPTY);
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
                Contact
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="contact-heading"
                className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
              >
                Tell us what you&apos;re building.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-slate-400">
                Send a few lines about the project and we&apos;ll come back within one business
                day with honest scope, a timeline and a number — or a straight answer that
                we&apos;re not the right fit.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 space-y-6">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Studio</dt>
                  <dd className="mt-1.5 text-[15px] text-slate-200">Ottawa, Ontario · Canada</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Availability
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2.5 text-[15px] text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />
                    Taking new projects
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
                    Message ready to send
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[14.5px] leading-relaxed text-slate-400">
                    The form is captured and validated. Connect it to your inbox or endpoint in{' '}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px] text-cyan-glow">
                      components/Contact.jsx
                    </code>{' '}
                    and it will start delivering for real.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-[13.5px] text-slate-200 transition-colors hover:border-cyan-core/50 hover:text-white"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[12.5px] text-slate-400">
                        Name
                      </label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Doe"
                        className={field}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-[12px] text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-[12.5px] text-slate-400">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="jane@company.com"
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
                      Company <span className="text-slate-600">(optional)</span>
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Acme Inc."
                      className={field}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="scope" className="mb-2 block text-[12.5px] text-slate-400">
                        What do you need?
                      </label>
                      <select id="scope" value={form.scope} onChange={update('scope')} className={field}>
                        <option value="" className="bg-midnight-900">
                          Select one
                        </option>
                        {SCOPES.map((s) => (
                          <option key={s} value={s} className="bg-midnight-900">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="mb-2 block text-[12.5px] text-slate-400">
                        Budget range
                      </label>
                      <select id="budget" value={form.budget} onChange={update('budget')} className={field}>
                        <option value="" className="bg-midnight-900">
                          Select one
                        </option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b} className="bg-midnight-900">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-[12.5px] text-slate-400">
                      Project
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="What are you building, and what's in the way?"
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
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>

                  <p className="text-center text-[12px] text-slate-600">
                    We reply within one business day.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
