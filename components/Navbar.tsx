import { useEffect, useState } from 'react';

const navItems = ['HOME', 'ABOUT', 'WORK', 'BLOG', 'CONTACT', 'JOURNAL'];
const activeItem = 'HOME';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setRotation(window.scrollY * 0.4);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---------------------- DESKTOP NAV ---------------------- */}
      <nav
        className={`hidden md:block fixed z-[1000] top-[32px] navbar ${
          isScrolled ? 'right-1/2 translate-x-1/2' : 'right-0 w-full translate-x-0'
        }`}
      >
        <div className="max-w-[95%] mx-auto flex items-center justify-between">
          {!isScrolled && (
            <img src="/assets/logo.png" className="w-[60px]" alt="Logo" />
          )}

          <div
            className="rounded-[32px] p-[8px] flex items-center gap-[8px]"
            style={{
              backdropFilter: 'blur(5px)',
              boxShadow: '0 6px 12px -2px #32325d40, 0 3px 7px -3px #0000004d',
              background: 'rgba(96,96,96,.149)',
            }}
          >
            {isScrolled && (
              <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center shadow-sm">
                <img
                  src="/assets/logo.png"
                  className="w-[28px]"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                  alt="Logo"
                />
              </div>
            )}

            {navItems.map((item) => (
              <button
                key={item}
                className={`py-[16px] px-[20px] rounded-[50px] text-[14px] font-medium transition-all ${
                  item === activeItem
                    ? 'bg-[#222] text-[#f9f9f9]'
                    : 'bg-[#f9f9f9] text-[#555] hover:bg-[#222] hover:text-[#f9f9f9]'
                }`}
              >
                {item}
              </button>
            ))}

            {isScrolled && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-[48px] h-[48px] rounded-full bg-white text-[#222] hover:bg-[#222] hover:text-white transition-all shadow-sm flex items-center justify-center"
              >
                ↑
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ---------------------- MOBILE NAV ---------------------- */}
      <nav className="md:hidden fixed top-4 left-0 w-full z-[2000] px-4">
        <div className="flex items-center justify-between">
          <img src="/assets/logo.png" className="w-[48px]" alt="logo" />

          <button
            className="w-10 h-10 rounded-full bg-[#f9f9f9] shadow flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Overlay + Slide Menu */}
        <div
          className={`fixed inset-0 z-[3000] transition-all duration-500 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.25)] transition-opacity duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMenuOpen(false)}
          />

          <div
            className={`absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-xl p-8 flex flex-col gap-6 transform transition-transform duration-500 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <img src="/assets/logo.png" className="w-[40px]" alt="logo" />
              <button onClick={() => setMenuOpen(false)} className="text-2xl">×</button>
            </div>

            {navItems.map((item, index) => (
              <button
                key={item}
                className={`text-[18px] text-[#222] text-left opacity-0 translate-y-4 transition-all duration-500 ${
                  menuOpen ? `opacity-100 translate-y-0 delay-[${index * 80}ms]` : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
