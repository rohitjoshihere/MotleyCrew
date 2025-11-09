import { useEffect, useRef, useState } from 'react';
import ServiceItem from './ServiceItem';
import { servicesData } from '../data/services';
import ButtonDark from './ButtonDark';
import { clientsData } from '../data/clients';

const getClientInitials = (name: string) => {
  if (!name) return '';

  const segments = name
    .split(/[\s&+.-]+/)
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase())
    .filter(Boolean);

  if (segments.length === 0) {
    return name.slice(0, 2).toUpperCase();
  }

  const candidate =
    segments.length === 1
      ? name.replace(/\s+/g, '').slice(0, 2).toUpperCase()
      : segments.join('');

  return candidate.slice(0, 3);
};

const getClientGradient = (name: string) => {
  let hash = 0;

  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const baseHue = Math.abs(hash) % 360;

  return {
    from: `hsl(${(baseHue + 25) % 360}, 85%, 58%)`,
    to: `hsl(${baseHue}, 85%, 45%)`,
  };
};

const ServiceSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.18) {
            setIsDark(true);
          }
        });
      },
      { threshold: [0, 0.18, 1] }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const sectionClasses = `w-full transition-colors duration-500 ease-in-out ${isDark ? 'bg-[#222] text-[#f9f9f9]' : 'bg-[#f9f9f9] text-[#222]'
    } px-4 sm:px-6 lg:px-14 py-16 sm:py-20 lg:py-24`;

  const eye1 = isDark ? 'border-[#f9f9f9]' : 'bg-[#222]';
  const eye2 = isDark ? 'bg-[#f9f9f9]' : 'border-[#222]';
  const headingClass = isDark ? 'text-white' : 'text-[#222222]';
  const paragraphClass = isDark ? 'text-[#f9f9f9]' : 'text-[#555555]';
  const marqueeClients = [...clientsData, ...clientsData];

  return (
    <section ref={sectionRef} className={sectionClasses}>
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
        <div className="flex items-center gap-[8px] w-full lg:w-[200px]" data-scroll>
          {/* Two overlapping white circles */}
          <div className="flex items-center">
            <div className={`w-2 h-2 border ${eye1} rounded-full`}></div>
            <div className={`w-2 h-2 border ${eye2} rounded-full`}></div>
          </div>
          <span className={`text-[18px] ${headingClass} font-medium`}>
            Service Portfolio
          </span>
        </div>
        <div className="flex-1 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12">
            {/* Left Side - Heading */}
            <h2 className={`text-[32px] sm:text-[36px] lg:text-[42px] font-semibold font-jakarta leading-tight ${headingClass}`} data-scroll>
              Here are a few ways for us to work together
            </h2>

            {/* Right Side - Paragraph and CTA */}
            <div className="flex w-full lg:w-[280px] flex-col gap-6">
              <p className={`text-base sm:text-[18px] font-[400] leading-[24px] ${paragraphClass}`} data-scroll>
                Brand projects are the first step in a communications exercise, followed by marketing communications, and specific activities within. Please reach out to us to understand which of these would be of value to you.
              </p>

              {/* CTA Button */}
              <div data-scroll>
                <ButtonDark label="Talk to Us" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              name={service.name}
              items={service.items}
              image={service.image}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
      </div>
      {/* Eyebrow Label */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[8px] my-[56px]">
        {/* Two overlapping white circles */}
        <div className='flex gap-2 w-[200px]' data-scroll>
          <div className="flex items-center">
            <div className={`w-2 h-2 border ${eye1} rounded-full`}></div>
            <div className={`w-2 h-2 border ${eye2} rounded-full`}></div>
          </div>
          <span className={`text-[18px] ${headingClass} font-medium`}>
            Our Clients
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] font-semibold text-white font-jakarta" data-scroll>
          Brands we have worked with
        </h2>
      </div>

      {/* Client Logos Marquee */}
      <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex gap-4 sm:gap-6 min-w-max animate-logo-marquee px-4 sm:px-6 lg:px-8">
          {marqueeClients.map((client, index) => {
            const initials = getClientInitials(client.name);
            const gradient = getClientGradient(client.name);

            return (
              <div
                key={`${client.name}-${index}`}
                className="bg-[#2A2A2A] rounded-xl px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-center justify-center flex-shrink-0 min-w-[140px] sm:min-w-[160px] hover:opacity-80 transition-opacity duration-300"
              >
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full text-lg sm:text-xl font-semibold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  }}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <span className="mt-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/70 text-center">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

