export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="relative grid h-6 w-6 place-items-center">
            <span className="absolute inset-0 rotate-45 rounded-[6px] border border-cyan-core/50" />
            <span className="h-1 w-1 rounded-full bg-cyan-glow" />
          </span>
          <span className="font-display text-[13px] font-semibold tracking-[0.22em] text-white">
            ZYVANTA
          </span>
        </div>

        <p className="text-[12.5px] text-slate-500">
          © 2025 Zyvanta. Built in Ottawa.
        </p>

        <div className="flex items-center gap-6 text-[12.5px] text-slate-500">
          <a href="#services" className="transition-colors hover:text-cyan-glow">
            Services
          </a>
          <a href="#about" className="transition-colors hover:text-cyan-glow">
            Studio
          </a>
          <a href="#contact" className="transition-colors hover:text-cyan-glow">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
