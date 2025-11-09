import { useState } from 'react';

interface ServiceItemProps {
  name: string;
  items: string[];
  image: string;
  isLast?: boolean;
  isDark: boolean;
}

const ServiceItem = ({ name, items, image, isDark }: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderClass = (name === "Brand Identity") 
    ? "border-t border-b border-[#f9f9f9]"
    : "border-b border-[#f9f9f9]";

  const titleColor = isDark ? 'text-white' : 'text-[#222222]';
  const bulletDotColor = isDark ? 'bg-gray-300' : 'bg-[#222222]';
  const bulletTextColor = isDark ? 'text-gray-300' : 'text-[#555555]';

  return (
    <div
      className={`relative py-6 sm:py-8 ${borderClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
        {/* Left Side - Text Content */}
        <div
          style={{transition: 'all .3s ease-in-out'}}
          className={`hidden md:inline-block h-[150px] rounded-[8px] overflow-hidden pointer-events-none ${isHovered ? 'w-[150px]' : 'w-0'
            }`}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className={`text-[32px] sm:text-[40px] lg:text-[54px] font-semibold font-jakarta ${titleColor}`} data-scroll>
            {name}
          </h3>

          {/* Bullet List */}
          <ul className="flex flex-col mt- space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3" data-scroll>
                <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${bulletDotColor}`}></span>
                <span style={{ lineHeight: '24px' }} className={`text-base sm:text-[18px] font-normal ${bulletTextColor}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Hover Image */}
        <div className="md:hidden rounded-[8px] overflow-hidden mt-4" data-scroll>
          <img src={image} alt={name} className="w-full h-40 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

