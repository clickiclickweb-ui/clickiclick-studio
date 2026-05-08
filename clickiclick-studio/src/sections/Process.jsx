import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// PENDIENTE Diego: validar / iterar copy de los 5 pasos. Estructura de
// numerales y timings es decisión cerrada (patrón Neu Web Studio del
// Research 01: proceso transparente con duraciones explícitas vende
// confianza). El copy del título y descripción es propuesta editorial
// mía (mismo texto de mi plan inicial). El intro "Un encargo
// CLICKICLICK..." es copy editorial mío añadido para encuadrar la
// sección — Diego puede borrarlo cuando vuelva si no encaja.
const STEPS = [
  {
    numeral: 'I',
    title: 'Conversación inicial',
    description: 'Entender qué necesitas, qué no necesitas, y por qué.',
    days: '1—2',
  },
  {
    numeral: 'II',
    title: 'Estrategia & estructura',
    description: 'Narrativa, sistemas, decisiones cromáticas y tipográficas.',
    days: '5—7',
  },
  {
    numeral: 'III',
    title: 'Diseño',
    description: 'Pieza por pieza, cada decisión justificada.',
    days: '7—10',
  },
  {
    numeral: 'IV',
    title: 'Construcción',
    description: 'Código a medida, sin plantillas, optimizado.',
    days: '7—14',
  },
  {
    numeral: 'V',
    title: 'Lanzamiento & onboarding',
    description: 'Deploy, dominio, traspaso de la herramienta.',
    days: '1—2',
  },
];

export function Process() {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = stepRefs.current.filter(Boolean);

    if (reduceMotion) {
      gsap.set(steps, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(steps, { opacity: 0, y: 12 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(steps, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
          });
          observer.disconnect();
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-cream/10"
      aria-label="Process"
    >
      <header className="mb-14 md:mb-20 max-w-5xl mx-auto">
        <h2 className="font-display text-cream tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
          process
        </h2>
        <p className="font-body text-cream-soft text-sm md:text-base mt-4 max-w-[60ch] leading-relaxed">
          Un encargo CLICKICLICK son cinco pasos. Las duraciones son orientativas y se ajustan a la pieza concreta.
        </p>
      </header>
      <ol className="max-w-5xl mx-auto">
        {STEPS.map((step, i) => (
          <li
            key={step.numeral}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`process-step grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-9 ${i > 0 ? 'border-t border-cream/10' : ''}`}
          >
            <span
              aria-hidden="true"
              className="col-span-2 md:col-span-1 font-display text-gold-aged tracking-tight pt-1"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1, fontWeight: 700 }}
            >
              {step.numeral}
            </span>
            <div className="col-span-10 md:col-span-8">
              <h3
                className="font-display text-cream tracking-tight"
                style={{ fontSize: 'clamp(20px, 1.8vw, 28px)' }}
              >
                {step.title}
              </h3>
              <p className="font-body text-cream-soft mt-2 text-sm md:text-base leading-relaxed max-w-[55ch]">
                {step.description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:justify-end items-baseline gap-2 mt-3 md:mt-1">
              <span className="font-body tabular-nums text-gold-aged text-base md:text-lg">
                {step.days}
              </span>
              <span className="font-body text-cream-soft text-[11px] uppercase tracking-[0.18em]">
                días
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
