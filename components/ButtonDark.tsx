import { FC } from 'react';

interface ButtonProps {
  label: string;
}

const ButtonDark: FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="
        relative overflow-hidden rounded-lg px-6 py-3 flex items-center gap-2 group
        border-[2px] border-[#f9f9f9]
        bg-[#222]
      "
    >
      {/* White background expansion */}
      <span
        className="
          absolute inset-0 bg-[#f9f9f9]
          scale-x-0 origin-center
          transition-transform duration-100 ease-in-out
          group-hover:scale-x-100
        "
      ></span>

      {/* White circle that disappears */}
      <span
        className="
          absolute left-5 w-2 h-2 bg-[#f9f9f9] rounded-full
          transition-all duration-300
          group-hover:scale-0
        "
      ></span>

      {/* Arrow appears */}
      <svg
        className="
          absolute left-4 w-5 h-5 text-[#f9f9f9]
          opacity-0 scale-0 transition-all duration-300
          group-hover:opacity-100 group-hover:scale-100 group-hover:text-black
          z-10
        "
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>

      {/* Text switches to black when background appears */}
      <span
        className="
          relative ps-6 z-10 text-[#f9f9f9]
          transition-colors duration-300
          group-hover:text-black
        "
      >
        {label}
      </span>
    </button>
  );
};

export default ButtonDark;
