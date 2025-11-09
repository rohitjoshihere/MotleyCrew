import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from './Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const titleLines = gsap.utils.toArray<HTMLElement>('.hero-title .hero-line');

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.fromTo(
        titleLines,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
        }
      )
        .fromTo(
          '.hero-subtitle',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          '-=0.7'
        )
        .fromTo(
          '.hero-cta',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
          },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-screen px-4 sm:px-6 mt-10 md:mt-0 lg:px-8 mb-5">
      <div
        ref={heroRef}
        className="max-w-[960px] mx-auto h-full flex flex-col justify-center items-center text-center gap-10"
      >
        {/* Headline */}
        <h1 className="hero-title hero-line text-[42px] sm:text-[56px] lg:text-[80px] leading-tight sm:leading-[1.1] pt-16 sm:pt-24 lg:pt-[120px] font-semibold text-[#222] font-jakarta text-balance">
Storytellers for brands with big dreams
        </h1>

        {/* Description */}
        <p className="hero-subtitle text-base sm:text-[16px] lg:text-[18px] text-[#6d6d6d] font-semibold leading-[20px] max-w-[720px] lg:max-w-[800px] w-full font-jakarta px-2 sm:px-0">
          Motley Crew is a brand and marketing services firm based out of Bengaluru, India. Born and raised in the country's startup capital, we have an intuitive understanding of businesses, and how good communication can be the anchor for your growth. If you could tell the world your authentic brand story, what would you say?
        </p>

        {/* CTA Button */}
        <div className="hero-cta">
          <Button label="Let's Find Out" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
