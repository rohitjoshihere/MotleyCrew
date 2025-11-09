import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor'
import WhatWeDo from '../components/WhatWeDo'
import StatsAndPodcast from '../components/StatsAndPodcast'
import CaseStudies from '../components/CaseStudies'
import ServiceSection from '../components/ServiceSection'
import FaqSection from '../components/FaqSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import PreLoader from '../components/PreLoader'
import { useScrollReveal } from '../hooks/useScrollReveal'

function App() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);

  }, []);
  useScrollReveal();
  return (
    <div className="min-h-screen bg-white cursor-none">
      <PreLoader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <StatsAndPodcast />
      <CaseStudies />
      <ServiceSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App

