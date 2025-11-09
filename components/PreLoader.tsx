import { useEffect, useState } from "react";
import gsap from "gsap";

const order = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9];
const SPEED = 150;

const PreLoader = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      const current = document.getElementById(`tile-${order[i]}`);
      const prev = document.getElementById(`tile-${order[i - 1]}`);

      if (prev) prev.style.background = "#ffffff"; // after passed → white
      if (current) current.style.background = "#111111"; // active → black gradient or black

      i++;

      if (i === order.length) {
        clearInterval(interval);

        // Immediately show the intro screen
        setShowIntro(true);

        // Fade away loader smoothly underneath
        setTimeout(() => {
          const loader = document.querySelector(".pre_loader") as HTMLElement;
          if (loader) loader.style.opacity = "0";

          // Remove loader fully
          setTimeout(() => loader?.remove(), 500);
        }, 200);
      }

    }, SPEED);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // fade out intro screen itself
        gsap.to(".intro-screen", {
          opacity: 0,
          duration: 0.6,
          onComplete: () => setShowIntro(false) // <-- remove intro from DOM
        });
      }
    });

    tl.from(".intro-logo", { scale: 0.2, opacity: 0, duration: 0.8 })
      .from(".intro-motley", { x: -40, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".intro-crew", { x: 40, opacity: 0, duration: 0.6 }, "-=0.6");

  }, [showIntro]);


  return (
    <>
      {/* Tile Loader */}
      <div className="pre_loader">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} id={`tile-${index}`} className="tile border border-zinc-800" />
        ))}
      </div>

      {/* Intro Screen After Loader */}
      {showIntro && (
        <div className="intro-screen">
          <img src="/assets/logo.png" className="intro-logo" alt="logo" />
          <h1 className="intro-text">
            <span className="intro-motley">Motley</span>{" "}
            <span className="intro-crew">Crew</span>
          </h1>
        </div>
      )}

    </>
  );
};

export default PreLoader;
