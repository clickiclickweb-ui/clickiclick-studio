import { useParams, Link } from 'react-router-dom';

export function CaseStudy() {
  const { slug } = useParams();
  return (
    <article className="min-h-screen px-8 pt-32 pb-24 max-w-5xl mx-auto">
      <p className="font-body text-cream-soft text-sm tracking-[0.2em] uppercase mb-6">case study</p>
      <h1 className="font-display text-cream text-6xl md:text-8xl tracking-tight mb-10">{slug}</h1>
      <p className="font-body text-cream-soft text-lg max-w-xl mb-16 leading-relaxed">Placeholder. Construcción real en Fase 6 con paleta propia por proyecto.</p>
      <Link to="/" className="font-body text-cream text-sm tracking-[0.15em] hover:text-garnet transition-colors duration-300">← back to home</Link>
    </article>
  );
}
