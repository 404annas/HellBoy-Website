const About = () => {
  return (
    <div className="bg-[#E1D5D5] flex flex-col lg:flex-row">
      
      {/* Left Column */}
      <div className="flex flex-col gap-10 md:gap-24 lg:gap-36 w-full lg:w-1/2 p-6 md:p-12 lg:p-16">
        {/* Header */}
        <div className="flex items-center gap-4">
          <p className="uppercase ep font-black text-[#1E1E1E] text-base md:text-lg lg:text-xl">
            What I Stand For
          </p>
          <img
            className="w-12 md:w-16 lg:w-20"
            src="https://cdn.prod.website-files.com/6283c236475ca51c143da7f1/6283c236475ca519083da821_red-frame.svg"
            alt=""
          />
        </div>

        {/* Name */}
        <div className="relative">
          <div className="satisfy font-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none -rotate-[6deg] sm:-rotate-[8deg] lg:-rotate-[10deg]">
            <h1>Sharukh</h1>
            <h1 className="">Kazim</h1>
          </div>
          <div className="absolute inset-0 bg-[#E1D5D5]/70 h-40 sm:h-56 md:h-64 lg:h-80 -translate-y-2 -rotate-[6deg] sm:-rotate-[8deg] lg:-rotate-[10deg]"></div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 -translate-x-0 lg:-translate-x-24 p-6 md:p-12 lg:p-16 flex flex-col">
        <div className="">
          <p className="uppercase font-extrabold bebas text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[#1E1E1E]">
            potential
          </p>
          <p className="uppercase font-extrabold bebas text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[#1E1E1E]">
            has no
          </p>
          <p className="uppercase font-extrabold bebas text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[#1E1E1E]">
            limits
          </p>
        </div>

        <p className="my-6 md:my-8 text-sm sm:text-base md:text-lg p-regular text-[#292828]">
          As an athlete, driving is my passion. As a competitor, winning is my
          priority. But as a person, my purpose lies far beyond finish lines and
          fanfare.
        </p>

        <div className="bg-[#222222] py-2 px-4 sm:py-3 sm:px-6 inline-block w-fit">
          <button className="ep font-black text-white text-sm sm:text-base">
            MY MISSION
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
