import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

const FaqItem = ({ question, answer, isLast = false }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const borderClasses = isLast
    ? 'border-t border-b border-[#808082]'
    : 'border-t border-[#808082]';

  return (
    <div className={`${borderClasses} py-6 ps-4 sm:py-8`} data-scroll>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
      >
        <div className="flex items-center gap-4 sm:gap-6 flex-1">
          {/* <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isOpen
                ? 'bg-[#FF9900]'
                : 'bg-transparent border border-[#FF9900] group-hover:bg-[#FF9900]'
            }`}
          ></span> */}
          <span className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-[#222222] flex-1 font-jakarta">
            {question}
          </span>
        </div>

        {/* Plus/Minus Icon */}
        <div className="w-10 h-10 rounded-full border border-[#d9d9dd] flex items-center justify-center transition-colors duration-300 group-hover:border-[#222222]">
          <svg
            className={`w-5 h-5 text-[#222222] transition-transform duration-300 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-500 text-[18px] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;

