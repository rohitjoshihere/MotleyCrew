import ButtonDark from "./ButtonDark";

const Footer = () => {
  const quickLinks = ['HOME', 'ABOUT', 'WORK', 'BLOG', 'CONTACT', 'JOURNAL'];

  return (
    <footer className="w-full bg-white px-4 sm:px-6 lg:px-14 pt-24 lg:pt-[148px]">
      {/* Main Footer Content */}
      <div className="grid border-t border-[#808082] pt-12 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">

        {/* Column 1: Logo & Contact */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center">
            {/* <span className="text-3xl sm:text-4xl font-bold text-[#222222]">M</span> */}
            {/* <span className="w-2 h-2 bg-[#FF9900] rounded-full ml-1 mt-1"></span> */}
            <img src="/assets/logo.png" className='max-w-[80px]' alt="" />
          </div>

          {/* Email Button */}
          <div>
            <ButtonDark label="contact@motleycrew.in" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide text-[#222222]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[#222222] hover:text-[#FF9900] transition-colors text-sm sm:text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Media & Address */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Social Media */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#222222]">
              Social Media
            </h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#222222] hover:text-[#FF9900] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm sm:text-base uppercase font-medium">LINKEDIN</span>
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-3 sm:gap-4 mt-4">
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#222222]">
              Address
            </h3>
            <p className="text-sm sm:text-base text-[#222222] leading-relaxed">
              5th Block, Koramangala Industrial Area,<br />
              JNC Road, Bengaluru-94, KA
            </p>
          </div>
        </div>

        {/* Column 4: Substack Newsletter */}
        <div className="flex flex-col gap-3">
          <img
          className="h-[70px] w-[70px] sm:h-[85px] sm:w-[85px]"
            src="https://substackcdn.com/image/fetch/$s_!gdEm!,w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F112d78b4-00a7-4e4c-96ea-5b1f7fc28656_430x430.png" alt="" />
          <h3 className="text-lg sm:text-2xl underline font-bold text-[#222222] font-jakarta">
            Damn Good Marketing
          </h3>
          <p className="text-sm sm:text-[18px] text-[#757575] leading-relaxed">
            A collection of content mostly about marketing and communication, sometimes about mental health, and often about the Marvel Cinematic Universe.
          </p>
          <p className="text-sm text-[#757575]">
            By Hasita
          </p>

          {/* Email Input & Subscribe Button */}
          <div className="flex flex-col sm:flex-row mt-2 border border-[#ee7835] overflow-hidden rounded-[12px]">
            <input
              type="email"
              placeholder="Type your email..."
              className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 text-sm sm:text-base text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
            />
            <button className="bg-[#ee7835] text-[#fff] opacity-[.85] px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base hover:bg-[#e68900] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>

          {/* Terms Text */}
          <p className="text-xs text-gray-500 leading-relaxed mt-2">
            By subscribing you agree to Substack's Terms of Use, our Privacy Policy and our Information collection notice.
          </p>

          {/* Substack Logo */}
          <div className="my-2 pb-4">
            <span className="text-xs text-[#222222] font-medium">substack</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="">
        {/* Marquee Text */}
        <div className="overflow-hidden relative tag_line border-y border-[#808082] whitespace-nowrap py-6">
          <p className="inline-block text-[48px] sm:text-[64px] lg:text-[90px] font-jakarta font-bold text-[#222222] animate-marquee">
            A BETTER NARRATIVE BEGINS HERE • A BETTER NARRATIVE BEGINS HERE • A BETTER NARRATIVE BEGINS HERE • A BETTER NARRATIVE BEGINS HERE •
          </p>
        </div>

        {/* Copyright Line */}
        <div className="my-10 mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 justify-between">
          <p className="text-sm sm:text-base lg:text-[18px] font-[500] font-jakarta text-[#222] text-start">
            © 2025 Motley Crew. Designed and developed by SUPAGROW. All rights reserved.
          </p>
          <a href="#top" className="self-start sm:self-auto">
            <ButtonDark label="Top" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

