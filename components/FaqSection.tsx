import FaqItem from './FaqItem';
import { faqsData } from '../data/faqs';

const FaqSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-14 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-[80px]">
        {/* Left Column - Label and Heading */}
        <div className="flex h-fit flex-col gap-4 sm:gap-0 lg:sticky lg:top-24">
          <div className="flex items-center gap-[8px] w-[200px]" data-scroll>
            {/* Two overlapping white circles */}
            <div className="flex items-center">
              <div className="w-2 h-2 border border-[#222] rounded-full"></div>
              <div className="w-2 h-2 bg-[#222] rounded-full"></div>
            </div>
            <span className="text-[18px] text-[#222] font-medium">
              FAQs
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[42px] font-semibold text-[#222222] font-jakarta leading-tight" data-scroll>
            Some questions we get asked
          </h2>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="flex flex-col">
          {faqsData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === faqsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

