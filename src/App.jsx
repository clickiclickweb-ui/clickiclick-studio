import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Signature } from './components/brand/Signature';

function App() {
  useSmoothScroll();

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '960px', margin: '0 auto' }}>

      {/* ========= TEST TIPOGRÁFICO — eliminar en Fase 4 ========= */}

      <p className="font-body text-cream-soft" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '3rem' }}>
        Typography smoke test · Fase 3
      </p>

      {/* Fraunces — Display */}
      <section style={{ marginBottom: '4rem' }}>
        <p className="font-body text-cream-soft" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Fraunces · Display
        </p>

        <h1 className="font-display text-cream" style={{ fontWeight: 900, fontSize: '5rem', lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>
          clickiclick
        </h1>

        <h2 className="font-display text-cream" style={{ fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.1, margin: '1.5rem 0 0' }}>
          obras digitales
        </h2>

        <p className="font-display text-garnet" style={{ fontWeight: 500, fontStyle: 'italic', fontSize: '1.5rem', margin: '1rem 0 0' }}>
          firmadas a medida
        </p>

        <p className="font-display text-cream" style={{ fontWeight: 500, fontSize: '1.25rem', margin: '1rem 0 0' }}>
          Regular 500 — The quick brown fox jumps over the lazy dog.
        </p>
      </section>

      {/* Switzer — Body */}
      <section style={{ marginBottom: '4rem' }}>
        <p className="font-body text-cream-soft" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Switzer · Body
        </p>

        <p className="font-body text-cream-soft" style={{ fontWeight: 300, fontSize: '1rem', margin: 0 }}>
          Light 300 — Studio of one. Signed by Diego Puelles. Un estudio artesanal de autor, firma digital premium, obra sobre encargo.
        </p>

        <p className="font-body text-cream" style={{ fontWeight: 400, fontSize: '1rem', margin: '0.75rem 0 0' }}>
          Regular 400 — Studio of one. Signed by Diego Puelles. Un estudio artesanal de autor, firma digital premium, obra sobre encargo.
        </p>

        <p className="font-body text-cream" style={{ fontWeight: 500, fontSize: '1rem', margin: '0.75rem 0 0' }}>
          Medium 500 — Studio of one. Signed by Diego Puelles. Un estudio artesanal de autor, firma digital premium, obra sobre encargo.
        </p>
      </section>

      {/* Gambarino — Accent */}
      <section>
        <p className="font-body text-cream-soft" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Gambarino · Display accent
        </p>

        <p className="font-accent text-cream" style={{ fontSize: '2rem', lineHeight: 1.2, margin: 0 }}>
          Crafted in Barcelona. Signed for you.
        </p>
      </section>

      {/* ========= SMOKE TEST SCROLL — eliminar en Fase 4 ========= */}
      <div style={{ height: '200vh', marginTop: '4rem', borderTop: '1px solid rgba(237, 228, 206, 0.15)' }}>
        <p className="font-body text-cream-soft" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '2rem 0' }}>
          Smooth scroll smoke test · scroll down
        </p>
      </div>


    </div>
  );
}

export default App;