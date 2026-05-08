import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

function wrapForMask(elements) {
  elements.forEach((el) => {
    if (el.parentNode?.classList?.contains('mask-clip')) return;
    const wrapper = document.createElement('span');
    wrapper.className = 'mask-clip';
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const handler = (e) => setReduce(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduce;
}

export function Hero() {
  const sectionRef = useRef(null);
  const wordmarkRef = useRef(null);
  const taglineRef = useRef(null);
  const metaRef = useRef(null);
  const reduceMotion = usePrefersReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 0.5 });

  useEffect(() => {
    let wordmarkSplit;
    let taglineSplit;

    const ctx = gsap.context(() => {
      wordmarkSplit = new SplitType(wordmarkRef.current, { types: 'chars' });
      taglineSplit = new SplitType(taglineRef.current, { types: 'words' });
      wrapForMask(wordmarkSplit.chars);
      wrapForMask(taglineSplit.words);

      if (reduceMotion) {
        gsap.set([wordmarkSplit.chars, taglineSplit.words], { yPercent: 0 });
        gsap.set(metaRef.current, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(wordmarkSplit.chars, { yPercent: 110 });
      gsap.set(taglineSplit.words, { yPercent: 110 });
      gsap.set(metaRef.current, { autoAlpha: 0, y: 12 });

      const tl = gsap.timeline({ delay: 0.15 });
      tl.to(wordmarkSplit.chars, {
        yPercent: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: 'expo.out',
      })
        .to(
          taglineSplit.words,
          {
            yPercent: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: 'expo.out',
          },
          '-=0.45',
        )
        .to(
          metaRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3',
        );
    }, sectionRef);

    return () => {
      ctx.revert();
      wordmarkSplit?.revert();
      taglineSplit?.revert();
    };
  }, [reduceMotion]);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(cx * 12);
    mouseY.set(cy * 8);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col px-6 md:px-10 pt-24 pb-10"
      aria-label="Hero"
      onMouseMove={handleMouseMove}
    >
      <div className="flex-1 flex items-center justify-center">
        <motion.div style={{ x, y }} className="text-center select-none">
          <h1
            ref={wordmarkRef}
            className="font-display font-black text-cream tracking-tight leading-[0.9]"
            style={{ fontSize: 'clamp(36px, 11vw, 200px)' }}
          >
            CLICKICLICK
          </h1>
          <p
            ref={taglineRef}
            className="font-display italic text-garnet mt-4 md:mt-5"
            style={{ fontSize: 'clamp(17px, 2.4vw, 36px)' }}
          >
            obras digitales firmadas a medida
          </p>
        </motion.div>
      </div>
      <div
        ref={metaRef}
        className="font-body text-cream-soft text-[11px] md:text-xs uppercase tracking-[0.22em] flex items-center justify-center gap-3 md:gap-4"
      >
        <span>barcelona</span>
        <span aria-hidden="true" className="text-cream-soft/40 select-none">&middot;</span>
        <span className="text-gold-aged tabular-nums">MMXXVI</span>
      </div>
    </section>
  );
}
