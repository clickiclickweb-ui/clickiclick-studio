import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

// PENDIENTE: copy real de Diego. Mientras tanto, lorem ipsum editorial decente
// con la longitud y forma esperada. La estructura es 3 parrafos:
//   1. Que es CLICKICLICK (drop cap aqui)
//   2. Como trabaja Diego
//   3. Para quien
// El marker [sig]...[/sig] se renderiza como italic granate inline (frase
// signature). Cuando llegue el copy real, basta sustituir los strings de
// PARAGRAPHS y conservar el marker para las frases signature.
const PARAGRAPHS = [
  'Lorem ipsum dolor sit amet, [sig]consectetur adipiscing elit[/sig]. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. [sig]Excepteur sint occaecat cupidatat non proident[/sig], sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, [sig]eaque ipsa quae ab illo inventore[/sig] veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
];

function renderParagraph(text) {
  const parts = text.split(/(\[sig\].*?\[\/sig\])/g);
  return parts.map((part, i) => {
    if (part.startsWith('[sig]')) {
      return (
        <span key={i} className="signature-phrase">
          {part.slice(5, -6)}
        </span>
      );
    }
    return part;
  });
}

export function Manifesto() {
  const sectionRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const splits = paragraphRefs.current.map((p) =>
      p ? new SplitType(p, { types: 'words' }) : null,
    );

    if (reduceMotion) {
      splits.forEach((s) => s && gsap.set(s.words, { opacity: 1, y: 0 }));
      return () => splits.forEach((s) => s?.revert());
    }

    splits.forEach((s) => s && gsap.set(s.words, { opacity: 0, y: 8 }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = paragraphRefs.current.indexOf(entry.target);
          const split = splits[idx];
          if (!split) return;
          gsap.to(split.words, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.018,
            ease: 'power2.out',
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    );

    paragraphRefs.current.forEach((p) => p && observer.observe(p));

    return () => {
      observer.disconnect();
      splits.forEach((s) => s?.revert());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-cream/10"
      aria-label="Manifiesto"
    >
      <div className="max-w-[60ch] mx-auto">
        {PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            ref={(el) => {
              paragraphRefs.current[i] = el;
            }}
            className={`manifesto-paragraph${i === 0 ? ' is-first' : ''}`}
          >
            {renderParagraph(p)}
          </p>
        ))}
      </div>
    </section>
  );
}
