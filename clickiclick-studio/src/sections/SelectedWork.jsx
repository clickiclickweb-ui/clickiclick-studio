import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// PENDIENTE Diego: URLs vivas reales, screenshots editoriales, anos por
// proyecto. Copy de name + descriptor sale del BRIEF.md sec 11. Tags y
// year son propuesta editorial mia (criterio: estilo Lusion inline tags
// concept . web . design . development . 3d, anos provisionales 2025).
const PROJECTS = [
  {
    slug: 'cyper',
    name: 'CYPER Botanical Oils',
    descriptor: 'dark luxury cosmetics e-commerce',
    year: 2025,
    tags: ['web', '3d', 'e-commerce'],
    url: '#',
  },
  {
    slug: 'velox',
    name: 'VELOX Urban Bikes',
    descriptor: 'interactive product configurator',
    year: 2025,
    tags: ['web', '3d', 'interactive'],
    url: '#',
  },
  {
    slug: 'salon-luna',
    name: 'Salón Luna',
    descriptor: 'boutique hair salon editorial site',
    year: 2025,
    tags: ['web', 'branding', 'editorial'],
    url: '#',
  },
];

function ProjectCard({ project, cardRef }) {
  const { slug, name, descriptor, year, tags, url } = project;
  const isPlaceholder = !url || url === '#';
  const labelToken = name.split(' ')[0].toLowerCase();

  const handleClick = (e) => {
    if (isPlaceholder) e.preventDefault();
  };

  return (
    <a
      ref={cardRef}
      href={url || '#'}
      onClick={handleClick}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      aria-disabled={isPlaceholder ? 'true' : undefined}
      data-project={slug}
      className="work-card group block"
    >
      <div className="work-image aspect-[4/5] w-full flex items-center justify-center overflow-hidden">
        <span className="work-image-label font-display italic text-cream-soft/40 text-3xl md:text-4xl tracking-tight">
          {labelToken}
        </span>
      </div>
      <div className="mt-5 md:mt-6">
        <h3 className="font-display text-cream tracking-tight" style={{ fontSize: 'clamp(20px, 1.6vw, 26px)' }}>
          {name}
        </h3>
        <p className="font-body text-cream-soft text-sm md:text-[15px] mt-1.5 leading-snug">
          {descriptor}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <ul className="flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.18em] text-cream-soft">
            {tags.map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-cream-soft/30">·</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <span className="font-body text-[11px] tabular-nums text-gold-aged tracking-wider">
            {year}
          </span>
        </div>
      </div>
    </a>
  );
}

export function SelectedWork() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = cardRefs.current.filter(Boolean);

    if (reduceMotion) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(cards, { opacity: 0, y: 16 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
          });
          observer.disconnect();
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-cream/10"
      aria-label="Selected work"
    >
      <header className="mb-12 md:mb-20 flex items-end justify-between gap-6 max-w-7xl mx-auto">
        <h2 className="font-display text-cream tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
          selected work
        </h2>
        <div className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-cream-soft tabular-nums whitespace-nowrap pb-2">
          obras 2024&ndash;2025 &middot; <span className="text-gold-aged">03</span>&nbsp;piezas
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            cardRef={(el) => {
              cardRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}
