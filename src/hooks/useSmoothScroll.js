// src/hooks/useSmoothScroll.js
//
// Hook que sincroniza Lenis (smooth scroll) con GSAP ScrollTrigger.
// Se monta UNA SOLA VEZ en App.jsx. No usar en otros componentes.

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return;

    // 1. Instancia de Lenis con inercia cinematográfica
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // 2. Sincronizar scroll de Lenis con ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Función nombrada para el ticker (misma referencia para add/remove)
    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // 4. Exponer Lenis en window para debug (solo desarrollo)
    if (import.meta.env.DEV) {
      window.__lenis = lenis;
    }

    // 5. Cleanup correcto
    return () => {
      gsap.ticker.remove(rafCallback);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      if (import.meta.env.DEV) {
        delete window.__lenis;
      }
    };
  }, []);
}