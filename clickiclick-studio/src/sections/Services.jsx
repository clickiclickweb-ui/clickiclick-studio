import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLenis } from '../context/SmoothScrollContext';

// Servicios y precios mostrados de carcasa: BRIEF.md sec 9 + sec 10
// (decision estrategica de Diego: pricing visible filtra conversaciones).
// Mantenemos los 4 principales en v2 lite. Consulting/strategy queda
// fuera de la lista del Home — si Diego quiere lo recupera en v3 o en
// el About/Contact con un parrafo aparte.
const SERVICES = [
  { name: 'Web design & development', priceFrom: '€1.200' },
  { name: 'Visual branding', priceFrom: '€1.200' },
  { name: 'AI integrations & agents', priceFrom: '€1.500' },
  { name: 'Motion design / 3D', priceCustom: 'bajo presupuesto' },
];

function ServicePrice({ service }) {
  if (service.priceFrom) {
    return (
      <>
        <span className="text-cream-soft">desde&nbsp;</span>
        <span className="text-cream tabular-nums">{service.priceFrom}</span>
      </>
    );
  }
  return <em className="text-cream-soft not-italic font-body">{service.priceCustom}</em>;
}

export function Services() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const ctaRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = itemRefs.current.filter(Boolean);
    const cta = ctaRef.current;

    if (reduceMotion) {
      gsap.set([...items, cta].filter(Boolean), { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 8 });
    if (cta) gsap.set(cta, { opacity: 0, y: 8 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          });
          if (cta) {
            gsap.to(cta, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: items.length * 0.1 + 0.2,
              ease: 'power2.out',
            });
          }
          observer.disconnect();
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo('#contact');
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-cream/10"
      aria-label="Services and pricing"
    >
      <header className="mb-12 md:mb-16 max-w-4xl mx-auto">
        <h2 className="font-display text-cream tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
          services &amp; pricing
        </h2>
        <p className="font-body text-cream-soft text-sm md:text-base mt-4 max-w-[55ch] leading-relaxed">
          Cuatro líneas. Lo que no está aquí, no lo hago.
        </p>
      </header>
      <ul className="max-w-4xl mx-auto">
        {SERVICES.map((service, i) => (
          <li
            key={service.name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`flex items-baseline justify-between gap-6 py-6 md:py-7 ${i > 0 ? 'border-t border-cream/10' : ''}`}
          >
            <span
              className="font-display text-cream tracking-tight"
              style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}
            >
              {service.name}
            </span>
            <span
              className="font-body text-right whitespace-nowrap"
              style={{ fontSize: 'clamp(15px, 1.3vw, 20px)' }}
            >
              <ServicePrice service={service} />
            </span>
          </li>
        ))}
      </ul>
      <div ref={ctaRef} className="max-w-4xl mx-auto mt-14 md:mt-20">
        <a
          href="#contact"
          onClick={handleContactClick}
          className="services-cta inline-flex items-baseline gap-2 font-display italic text-cream tracking-tight"
          style={{ fontSize: 'clamp(20px, 1.8vw, 28px)' }}
        >
          <span>hablemos</span>
          <span aria-hidden="true" className="not-italic">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
