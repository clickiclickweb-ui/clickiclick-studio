import { useEffect, useState } from 'react';

function LiveTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Madrid',
      });

    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-body text-xs tracking-widest text-muted tabular-nums">
      {time} CET
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Nav top bar ── */}
      <nav
        className="flex items-center justify-between px-6 py-5 md:px-10"
        style={{ borderBottom: '1px solid var(--line)' }}
      >
        <span
          className="font-body text-xs tracking-[0.25em] uppercase text-ink"
          style={{ letterSpacing: '0.25em' }}
        >
          CLICKICLICK
        </span>

        <LiveTime />

        <a
          href="mailto:hola@clickiclick.studio"
          data-hover
          className="font-body text-xs tracking-widest uppercase text-ink"
          style={{
            borderBottom: '1px solid var(--ink)',
            paddingBottom: '1px',
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.4')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Contact
        </a>
      </nav>

      {/* ── Hero body ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 md:px-10">
        {/* Placeholder for Three.js scene */}
        <div
          data-hero-scene
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Main heading */}
        <h1
          className="relative z-10 font-display text-center select-none"
          style={{
            fontSize: 'clamp(4rem, 16vw, 14rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
          }}
        >
          <span className="reveal-line">
            <span>CLICKI</span>
          </span>
          <span className="reveal-line">
            <span>CLICK</span>
          </span>
        </h1>

        {/* Italic accent */}
        <p
          className="relative z-10 font-accent text-center mt-4 select-none"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
            fontStyle: 'italic',
            color: 'var(--terracotta)',
            letterSpacing: '0.02em',
          }}
        >
          <span className="reveal-line">
            <span>studio</span>
          </span>
        </p>
      </div>

      {/* ── Bottom meta bar ── */}
      <div
        className="flex items-center justify-between px-6 py-5 md:px-10"
        style={{ borderTop: '1px solid var(--line)' }}
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted">
          Martorell, Catalunya
        </span>

        <span
          className="font-display text-xs tracking-widest text-muted"
          style={{ fontVariantNumeric: 'oldstyle-nums' }}
        >
          MMXXVI
        </span>
      </div>
    </section>
  );
}
