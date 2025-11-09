
const StatsAndPodcast = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 py-14 lg:py-0">
      <div className="mx-auto ">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-stretch">

          {/* Left Card - Stats */}
          <div className="bg-[#1a1a1a] rounded-[16px] overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 relative flex-1 lg:flex-none lg:w-[400px]" data-scroll>
            {/* Abstract pattern background overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
              }}
            />
            <img
              src="assets/bg1.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            {/* Content */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* First Stat */}
              <div data-scroll>
                <div className="text-4xl sm:text-[48px] lg:text-[54px] font-semibold text-white mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-sm sm:text-base lg:text-[18px] text-white/90 font-medium">
                  brand identity projects
                </div>
              </div>

              {/* Second Stat */}
              <div data-scroll>
                <div className="text-4xl sm:text-[48px] lg:text-[54px] font-semibold text-white mb-1 sm:mb-2">
                  20+
                </div>
                <div className="text-sm sm:text-base lg:text-[18px] text-white/90 font-medium">
                  marketing communications exercises
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Podcast */}
          <div className="rounded-[16px] overflow-hidden relative flex-1 min-h-[280px] group" data-scroll>
            {/* Blurred Background Image */}
            <img src="assets/headphone.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
            {/* Dark overlay for better text readability */}
            <div
              className="absolute overlay-headphone inset-0 transition-all duration-300 group-hover:backdrop-blur-0 group-hover:bg-[rgba(0,0,0,0.154)]"
              style={{}}
            ></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 justify-center items-center p-6 sm:p-8 md:p-10 w-full h-full text-center">
              {/* Heading */}
              <h2 className="text-3xl sm:text-[36px] lg:text-[42px] text-[#f9f9f9]">
                HOW WE DO IT
              </h2>

              {/* Podcast CTA Button */}
              <button className="bg-white rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto">
                {/* Profile Picture */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full relative bg-gray-300 flex-shrink-0 overflow-hidden">
                  <svg className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440z"></path></svg>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Podcast host"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start">
                  <span className="text-sm sm:text-[18px] font-medium">
                    Listen to the Podcast
                  </span>
                  <span className="text-sm sm:text-[18px]">
                    Damn Good Marketing
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndPodcast;

