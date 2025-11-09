import Button from "./Button";

interface CaseCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
}

const CaseCard = ({ title, description, date, image, tags }: CaseCardProps) => {
  return (
    <div className="grid group/project grid-cols-1 lg:grid-cols-[.9fr_1fr] gap-6 lg:gap-10 items-start border-t border-[#808082] py-8 sm:py-10">
      {/* Left Side - Text Content */}
      <div className="flex flex-col h-full gap-6 justify-between order-2 lg:order-1">
        {/* Title */}
        <div>
          <h3 className="text-[22px] mb-[16px] font-semibold text-[#222] font-jakarta" data-scroll>
            {title}
          </h3>

          {/* Description */}
          <p className="text-[18px] leading-normal mb-[16px] text-[#6d6d6d] font-normal leading-relaxed" data-scroll>
            {description}
          </p>

          {/* Date */}
          <p className="text-[18px] mt-[24px] text-[#6d6d6d] font-normal" data-scroll>
            {date}
          </p>
        </div>

        {/* CTA Button */}
        <div data-scroll className="pt-2">
          <Button label="About Project" />
        </div>
      </div>

      {/* Right Side - Image with Tags */}
      <div className="relative order-1 lg:order-2" data-scroll>
        {/* Main Image */}
        <div className="rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/project:scale-110"
          />
        </div>

        {/* Tag Pills - Bottom Left */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[hsla(0,0%,100%,.705)] filter-[blur(5px)] text-[#222] rounded-full px-3 py-1.5 text-[16px] font-medium shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseCard;

