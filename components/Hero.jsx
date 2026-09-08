'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow"
        >
          <span className="h-px w-8 bg-cyan-core/60" />
          Ottawa · Web &amp; software studio
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[15ch] font-display text-[clamp(2.6rem,7.4vw,5.4rem)] font-semibold leading-[0.95] tracking-tightest text-white"
        >
          We engineer the web your business{' '}
          <span className="bg-gradient-to-r from-cyan-glow via-cyan-core to-sky-500 bg-clip-text text-transparent glow-text">
            actually runs on.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-7 max-w-[54ch] text-[15.5px] leading-relaxed text-slate-400 sm:text-base"
        >
          Zyvanta designs and builds fast web platforms, custom applications and the
          automation that quietly removes the busywork — shipped by senior engineers,
          without the agency layers in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-cyan-core px-7 py-3.5 text-[14px] font-semibold text-midnight-950 transition-all duration-300 hover:shadow-[0_0_40px_-6px_rgba(34,211,238,0.85)]"
          >
            <span className="relative z-10">Start a project</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-medium text-slate-200 transition-all duration-300 hover:border-cyan-core/50 hover:text-white"
          >
            What we do
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pb-4 text-[11px] uppercase tracking-[0.2em] text-slate-500"
        >
          <span>Next.js · React</span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>Azure · Power Platform</span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>AI &amp; automation</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-4 animate-[floaty_2.4s_ease-in-out_infinite] bg-cyan-core" />
        </span>
      </motion.div>
    </section>
  );
}
