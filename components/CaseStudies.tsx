import CaseCard from './CaseCard';

interface CaseStudy {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
}

const caseStudiesData: CaseStudy[] = [
  {
    title: "GetKrrackin!",
    description: "Creating a unified brand platform, tone of voice, and activation roadmap for a fast-growing snack brand ready to crack into the D2C market.",
    date: "22 September 2025",
    image: "https://motleycrew.supagrow.in/public/files/2025-09-22T05-34-40.788Z-Copy%20of%20GetKrrackin!%20Brand%20Platform_March%202025.png",
    tags: ["Brand Thinking", "Positioning", "Core Narrative"]
  },
  {
    title: "The Ankit Group",
    description: "Digital marketing communications, event support, and content strategy for an Indian aerospace manufacturer with a global footprint.",
    date: "20 December 2024",
    image: "https://motleycrew.supagrow.in/public/files/2024-12-11T12-22-26.112Z-Untitled%20design%20(48).png",
    tags: ["Digital communication design", "Content and execution", "Offline events"]
  },
  {
    title: "Millionaire Tower",
    description: "Brand strategy, visual design and ongoing communication for a Bengaluru based residential real estate project.",
    date: "19 December 2024",
    image: "https://motleycrew.supagrow.in/public/files/2024-12-10T11-05-27.353Z-MT%20main%20imgae.png",
    tags: ["Brand Identity", "Communication"]
  }
];

const CaseStudies = () => {
  return (
    <section className="w-full mt-[60px] px-4 sm:px-6 lg:px-14 py-16 lg:py-14">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-xl space-y-4">
          {/* Eyebrow Text with Icon */}
          <div className="flex items-center gap-3 w-[200px]" data-scroll>
            {/* Two overlapping white circles */}
            <div className="flex items-center">
              <div className="w-2 h-2 border border-[#222] rounded-full"></div>
              <div className="w-2 h-2 bg-[#222] rounded-full"></div>
            </div>
            <span className="text-[18px] text-[#222] font-medium">
              Our Work
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[42px] leading-none font-semibold text-[#222] font-jakarta" data-scroll>
            A few of our case studies
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-10 lg:space-y-0">
          {caseStudiesData.map((caseStudy, index) => (
            <CaseCard
              key={index}
              title={caseStudy.title}
              description={caseStudy.description}
              date={caseStudy.date}
              image={caseStudy.image}
              tags={caseStudy.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

