import { FC } from 'react';

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="relative overflow-hidden rounded-lg px-6 py-3 flex items-center gap-2 group border-[2px] border-[#222]"
    >
      {/* Always dark background blob */}
      <span className="absolute inset-0 bg-[#222] scale-[3] rounded-full transition-all duration-300 group-hover:scale-0"></span>

      {/* Always white small circle */}
      <span className="absolute left-5 w-2 h-2 bg-[#f9f9f9] rounded-full transition-all duration-300 group-hover:scale-0"></span>

      {/* Arrow (white -> black on hover) */}
      <svg
        className="absolute left-4 w-5 h-5 text-[#f9f9f9] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:text-black z-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>

      {/* Text (white -> black on hover) */}
      <span className="relative ps-6 z-10 text-[#f9f9f9] group-hover:text-black transition-colors">
        {label}
      </span>
    </button>
  );
};

export default Button;
