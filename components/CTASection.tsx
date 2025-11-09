import ButtonDark from "./ButtonDark";

const CTASection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 py-16 lg:py-24">
      {/* Dark Container with Background */}
      <div className="relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[360px] py-14 sm:py-18 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(assets/bg1.jpg)',
            // filter: 'brightness(0.3)',
          }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 bg-[rgba(34,34,34,.454)]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 sm:gap-8 items-center text-center max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2" data-scroll>
            <div className="flex items-center">
              <div className="w-3 h-3 border border-[#f9f9f9] rounded-full"></div>
              <div className="w-3 h-3 bg-[#f9f9f9] rounded-full"></div>
            </div>
            <span className="text-sm sm:text-[18px] text-[#f9f9f9] font-medium">
              Ready to explore a collaboration?
            </span>
          </div>
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white font-jakarta" data-scroll>
            Reach out to us
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-[18px] text-[#f9f9f9] leading-relaxed" data-scroll>
            When you're ready, please fill out the form on the contact page so we can understand your context well, and set up time to discuss further.
          </p>

          {/* CTA Button */}
          <div data-scroll className="pt-2">
            <ButtonDark label="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

