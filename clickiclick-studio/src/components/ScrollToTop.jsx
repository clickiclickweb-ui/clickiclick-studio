import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../context/SmoothScrollContext';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      let raf1 = 0;
      let raf2 = 0;

      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          const el = document.querySelector(hash);
          if (!el) return;

          if (lenis) {
            lenis.resize();
            lenis.scrollTo(el, { duration: 1.5 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenis]);

  return null;
}
