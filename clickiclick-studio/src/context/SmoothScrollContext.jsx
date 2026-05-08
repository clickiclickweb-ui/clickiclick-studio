import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext(null);

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const instance = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = instance;
    setLenis(instance);

    instance.on('scroll', ScrollTrigger.update);

    const tick = (time) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    if (import.meta.env.DEV) {
      window.__lenis = instance;
    }

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenisRef.current = null;
      if (import.meta.env.DEV) {
        delete window.__lenis;
      }
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useLenis() {
  return useContext(SmoothScrollContext);
}
