import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power3.out';
const STAGGER = 0.12;

export const useScrollReveal = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>('[data-scroll]');
      if (!elements.length) return;

      // group elements by their immediate parent to create subtle stagger per block
      const parentMap = new Map<HTMLElement, HTMLElement[]>();

      elements.forEach((el) => {
        const parent = el.parentElement ?? document.body;
        if (!parentMap.has(parent)) {
          parentMap.set(parent, []);
        }
        parentMap.get(parent)!.push(el);
      });

      parentMap.forEach((children, parent) => {
        gsap.set(children, { opacity: 0, y: 40 });

        gsap.timeline({
          scrollTrigger: {
            trigger: parent,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }).to(
          children,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: EASE,
            stagger: STAGGER,
          },
          0
        );
      });
    });

    return () => ctx.revert();
  }, []);
};


