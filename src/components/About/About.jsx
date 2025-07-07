import brandLogo1 from "../../asserts/logo1.svg";
import brandLogo2 from "../../asserts/logo2.svg";
import brandLogo3 from "../../asserts/logo3.svg";

const About = () => {
  return (
    <div className="bg-[#1F1F1F] text-white flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="flex flex-col gap-10 md:gap-24 lg:gap-36 w-full lg:w-1/2 p-6 md:p-12 lg:p-16">
        {/* Header */}
        <div className="flex items-center gap-4">
          <p className="uppercase ep font-black text-white text-base md:text-lg lg:text-xl">
            The Unstoppable Rise Of
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
            <h1>Shahrukh</h1>
            <h1 className="">Kazim</h1>
          </div>
          {/* <div className="absolute inset-0 bg-[#E1D5D5]/70 h-40 sm:h-56 md:h-64 lg:h-80 -translate-y-2 -rotate-[6deg] sm:-rotate-[8deg] lg:-rotate-[10deg]"></div> */}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 -translate-x-0 lg:-translate-x-24 p-6 md:p-12 lg:p-16 flex flex-col">
        <div className="md:block hidden">
          <p className="uppercase font-extrabold bebas text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[white]">
            Gilgit
          </p>
          <p className="uppercase font-extrabold bebas text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[white]">
            To
          </p>
          <p className="uppercase font-extrabold bebas text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[white]">
            Global
          </p>
        </div>

        <div className="md:hidden block">
          <p className="uppercase font-extrabold bebas text-[40px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-none tracking-wide text-[white]">
            Gilgit To Global
          </p>
        </div>

        <p className="my-4 md:my-8 text-sm sm:text-base md:text-lg p-regular text-[white]">
          Widely known as FEPO, is a celebrated Pakistani video producer and
          creative force behind some of the most iconic visual narratives of
          recent times.
        </p>

        {/* <div className="bg-[#222222] py-2 px-4 sm:py-3 sm:px-6 inline-block w-fit">
          <button className="ep font-black text-white text-sm sm:text-base">
            MY MISSION
          </button>
        </div> */}

        <div className="flex justify-center gap-6 sm:gap-8 md:gap-10 items-center invert text-white">
          <a
            href="https://www.flaunt.com/post/shahrukh-kazim-ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer w-24 sm:w-32 md:w-36"
              src={brandLogo3}
              alt="Flaunt Logo"
            />
          </a>
          <a
            href="https://www.nation.com.pk/19-May-2025/gilgit-to-global-the-unstoppable-rise-of-shahrukh-kazim-ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer w-24 sm:w-32 md:w-36"
              src={brandLogo1}
              alt="Nation Logo"
            />
          </a>
          <a
            href="https://www.khaleejtimes.com/kt-network/pakistani-producer-shahrukh-kazims-pasoori-surpasses-one-billion-views-globally?_refresh=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer w-24 sm:w-32 md:w-36"
              src={brandLogo2}
              alt="Khaleej Time Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
