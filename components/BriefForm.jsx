'use client';

import { useEffect, useRef, useState } from 'react';
import { STEPS, SECTORS, UI } from '@/lib/brief';

const STORE_KEY = 'zyvanta_brief_v1';

/**
 * Client intake questionnaire.
 *
 * Six steps, one of which swaps its questions based on the sector chosen in
 * step 1. Answers persist to localStorage on every keystroke so a client can
 * abandon it on the bus and finish it at their desk — the single biggest
 * cause of drop-off on a form this long.
 *
 * Submission goes to Netlify Forms. Rather than declaring sixty fields, it
 * posts the handful worth filtering on plus one formatted `summary` blob, so
 * the notification email reads like a brief instead of a database dump.
 */
export default function BriefForm({ locale }) {
  const L = (pair) => (pair ? pair[locale] ?? pair.en : '');

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const [restored, setRestored] = useState(false);
  const topRef = useRef(null);

  // ---------------------------------------------------------------- storage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        setAnswers(JSON.parse(raw));
        setRestored(true);
      }
    } catch {
      /* private mode, blocked storage — the form still works, just not resumable */
    }
  }, []);

  useEffect(() => {
    if (!Object.keys(answers).length) return;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(answers));
    } catch {
      /* ignore */
    }
  }, [answers]);

  // ------------------------------------------------------------------ model
  const sectorIndex = SECTORS.findIndex((s) => L(s.label) === answers.sector);
  const sectorId = sectorIndex >= 0 ? SECTORS[sectorIndex].id : null;

  const visibleFields = (s) =>
    s.fields.filter((f) => !f.only || (sectorId && f.only.includes(sectorId)));

  // The sector step is always counted, even before a sector is chosen — its
  // questions appear once step 1 is answered, and a total that changes from
  // 5 to 6 mid-flow reads like a bug.
  const steps = STEPS.map((s) => ({ ...s, visible: visibleFields(s) })).filter(
    (s) => s.id === 'sector' || s.visible.length > 0
  );

  const current = steps[Math.min(step, steps.length - 1)];
  const isLast = step === steps.length - 1;

  const set = (name, value) => {
    setAnswers((a) => ({ ...a, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const toggle = (name, option) => {
    const list = answers[name] || [];
    set(name, list.includes(option) ? list.filter((v) => v !== option) : [...list, option]);
  };

  // -------------------------------------------------------------- validation
  const validateStep = () => {
    const next = {};
    for (const f of current.visible) {
      if (!f.required) continue;
      const v = answers[f.name];
      const empty = Array.isArray(v) ? v.length === 0 : !String(v ?? '').trim();
      if (empty) next[f.name] = L(UI.required);
      else if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        next[f.name] = L(UI.requiredEmail);
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const go = (dir) => {
    if (dir > 0 && !validateStep()) return;
    setStep((s) => Math.max(0, Math.min(steps.length - 1, s + dir)));
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // -------------------------------------------------------------- submission
  const buildSummary = () =>
    steps
      .map((s) => {
        const lines = s.visible.map((f) => {
          const v = answers[f.name];
          const shown = Array.isArray(v) ? v.join(', ') : v;
          return `${L(f.label)}\n  ${String(shown || '').trim() || L(UI.noneYet)}`;
        });
        return `${L(s.title).toUpperCase()}\n${'-'.repeat(L(s.title).length)}\n\n${lines.join('\n\n')}`;
      })
      .join('\n\n\n');

  const submit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setStatus('sending');

    try {
      const body = new URLSearchParams({
        'form-name': 'brief',
        language: locale === 'fr' ? 'Français' : 'English',
        contact_name: answers.contact_name || '',
        business_name: answers.business_name || '',
        email: answers.email || '',
        phone: answers.phone || '',
        sector: answers.sector || '',
        budget: answers.budget || '',
        main_goal: answers.main_goal || '',
        deadline: answers.deadline || '',
        content_deadline: answers.content_deadline || '',
        summary: buildSummary(),
      });

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Netlify returned ${res.status}`);

      setStatus('sent');
      try {
        localStorage.removeItem(STORE_KEY);
      } catch {
        /* ignore */
      }
    } catch (err) {
      console.error('[Zyvanta] brief submission failed', err);
      setStatus('failed');
    }
  };

  const reset = () => {
    if (!window.confirm(L(UI.clearConfirm))) return;
    setAnswers({});
    setErrors({});
    setStep(0);
    setRestored(false);
    try {
      localStorage.removeItem(STORE_KEY);
    } catch {
      /* ignore */
    }
  };

  // ------------------------------------------------------------------ styles
  const input =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-cyan-core/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]';

  // ------------------------------------------------------------------ render
  if (status === 'sent') {
    return (
      <div className="mx-auto max-w-[640px] rounded-2xl glass p-8 text-center sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-cyan-core/40 bg-cyan-core/10">
          <span className="text-3xl text-cyan-glow">✓</span>
        </div>
        <h2 className="mt-7 font-display text-[26px] font-semibold text-white">{L(UI.sentTitle)}</h2>
        <p className="mx-auto mt-4 max-w-[44ch] text-[15px] leading-relaxed text-slate-400">
          {L(UI.sentBody)}
        </p>
      </div>
    );
  }

  const renderField = (f) => {
    const v = answers[f.name];
    const err = errors[f.name];
    const id = `f_${f.name}`;

    return (
      <div key={f.name} className={f.half ? 'sm:col-span-1' : 'sm:col-span-2'}>
        <label htmlFor={id} className="block text-[14.5px] font-medium leading-snug text-slate-200">
          {L(f.label)}
          {f.required && (
            <span className="ml-1 text-cyan-core" aria-hidden="true">
              *
            </span>
          )}
        </label>

        {f.help && <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{L(f.help)}</p>}

        <div className="mt-3">
          {f.type === 'textarea' && (
            <textarea
              id={id}
              rows={4}
              value={v || ''}
              onChange={(e) => set(f.name, e.target.value)}
              className={`${input} resize-y`}
              aria-invalid={!!err}
            />
          )}

          {['text', 'email', 'tel', 'url', 'date'].includes(f.type) && (
            <input
              id={id}
              type={f.type}
              value={v || ''}
              onChange={(e) => set(f.name, e.target.value)}
              className={input}
              aria-invalid={!!err}
            />
          )}

          {f.type === 'select' && (
            <select
              id={id}
              value={v || ''}
              onChange={(e) => set(f.name, e.target.value)}
              className={input}
              aria-invalid={!!err}
            >
              <option value="" className="bg-midnight-900">
                —
              </option>
              {f.options.map((o) => (
                <option key={L(o)} value={L(o)} className="bg-midnight-900">
                  {L(o)}
                </option>
              ))}
            </select>
          )}

          {f.type === 'radio' && (
            <div className="flex flex-col gap-2">
              {f.options.map((o) => {
                const label = L(o);
                const on = v === label;
                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => set(f.name, label)}
                    aria-pressed={on}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-[14.5px] transition-all duration-200 ${
                      on
                        ? 'border-cyan-core/60 bg-cyan-core/10 text-white'
                        : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/25'
                    }`}
                  >
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                        on ? 'border-cyan-core' : 'border-white/25'
                      }`}
                    >
                      {on && <span className="h-2 w-2 rounded-full bg-cyan-core" />}
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          )}

          {f.type === 'checks' && (
            <div className="flex flex-wrap gap-2">
              {f.options.map((o) => {
                const label = L(o);
                const on = (v || []).includes(label);
                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => toggle(f.name, label)}
                    aria-pressed={on}
                    className={`rounded-full border px-4 py-2 text-[13.5px] transition-all duration-200 ${
                      on
                        ? 'border-cyan-core/60 bg-cyan-core/15 text-cyan-glow'
                        : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/25'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {err && <p className="mt-2 text-[12.5px] text-rose-400">{err}</p>}
      </div>
    );
  };

  return (
    <div ref={topRef} className="mx-auto max-w-[760px] scroll-mt-24">
      {/* progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-[12px] text-slate-500">
          <span className="font-display tracking-[0.16em] uppercase">
            {L(UI.step)} {step + 1} {L(UI.of)} {steps.length} · {L(current.title)}
          </span>
          {restored && (
            <button
              type="button"
              onClick={reset}
              className="text-[12px] text-slate-500 underline underline-offset-2 transition-colors hover:text-slate-300"
            >
              {L(UI.clear)}
            </button>
          )}
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-deep to-cyan-glow transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={submit} noValidate className="rounded-2xl glass p-6 sm:p-9">
        <h2 className="font-display text-[24px] font-semibold text-white sm:text-[28px]">
          {L(current.title)}
        </h2>
        {current.blurb && (
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-400">{L(current.blurb)}</p>
        )}
        <p className="mt-3 text-[12.5px] text-slate-600">
          <span className="text-cyan-core">*</span> {L(UI.requiredMark)}
        </p>

        <div className="mt-9 grid gap-7 sm:grid-cols-2">{current.visible.map(renderField)}</div>

        {status === 'failed' && (
          <div
            role="alert"
            className="mt-8 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3.5 text-[13.5px] leading-relaxed text-rose-200"
          >
            {L(UI.sendFail)}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/8 pt-7">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={step === 0}
            className="rounded-full border border-white/15 px-6 py-3 text-[14px] text-slate-300 transition-colors hover:border-white/35 hover:text-white disabled:pointer-events-none disabled:opacity-30"
          >
            {L(UI.back)}
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden text-[12px] text-slate-600 sm:block">{L(UI.savedNote)}</span>

            {isLast ? (
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-full bg-cyan-core px-8 py-3 text-[14.5px] font-semibold text-midnight-950 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.9)] disabled:opacity-60"
              >
                {status === 'sending' ? L(UI.submitting) : L(UI.submit)}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => go(1)}
                className="rounded-full bg-cyan-core px-8 py-3 text-[14.5px] font-semibold text-midnight-950 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.9)]"
              >
                {L(UI.next)}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
