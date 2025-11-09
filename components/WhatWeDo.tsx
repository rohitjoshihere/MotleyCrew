import ButtonDark from './ButtonDark';

const WhatWeDo = () => {
  return (
    <section className="w-full px-4 sm:px-[64px] lg:px-14 py-12 sm:py-16 lg:py-10">
      <div className="mx-auto relative ">
        {/* Dark Rounded Container */}
        <div style={{borderRadius: '16px 16px 0 0', transform: 'translateY(-100%)'}} className="hidden lg:block absolute blog top-0 right-0 h-[60px] w-[120px] bg-[#222]"></div>
        <div style={{borderRadius: '16px 0 16px 16px'}} className="bg-[#222] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start rounded-3xl p-6 sm:p-10 lg:px-14 lg:py-16">
          {/* Eyebrow Text with Icon */}
          <div className="flex items-center gap-3 lg:gap-[8px] w-full sm:w-[200px] mb-4 sm:mb-6 lg:mb-0" data-scroll>
            {/* Two overlapping white circles */}
            <div className="flex items-center">
              <div className="w-2 h-2 border border-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-[18px] text-white font-medium">
              What we do
            </span>
          </div>
          <div
          // style={{width: `calc(100% - 250px)`}}
          className="space-y-6 w-full md:w-[calc(100% - 250px)]">
            {/* Main Paragraph */}
            <p className="text-2xl w-full sm:text-[30px] lg:text-[34px] text-white font-medium leading-[40px] mb-6 sm:mb-8 lg:mb-10" data-scroll>
              A good brand is built on a great concept
              
              , and it is sustained by how much of that concept seeps into stakeholders' minds. Today, communication is everywhere, but what are the stories that you remember most? What can your brand say that is memorable, consistent, and creative?
            </p>

            {/* CTA Button */}
            <div data-scroll className="pt-2">
              <ButtonDark label="Let's Find Out"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

