import React from "react";

const About = () => {
  return (
    <div className="bg-[#E1D5D5] h-screen flex">
      <div className="flex flex-col gap-40 w-1/2 py-16 px-16">
        <div className="flex items-center gap-4">
          <p className="uppercase ep font-black text-[#1E1E1E]">
            What I Stand For
          </p>
          <img
            className="w-20"
            src="https://cdn.prod.website-files.com/6283c236475ca51c143da7f1/6283c236475ca519083da821_red-frame.svg"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="w-[480px]"
            src="https://cdn.prod.website-files.com/6283c236475ca51c143da7f1/6283c236475ca539e43da873_Hunter-Yeany.svg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#E1D5D5]/70"></div>
        </div>
      </div>
      <div className="w-1/2 -translate-x-24 py-16 px-16">
        <p className="uppercase font-extrabold bebas text-[110px] leading-none tracking-wide text-[#1E1E1E]">
          potential
        </p>
        <p className="uppercase font-extrabold bebas text-[110px] leading-none tracking-wide text-[#1E1E1E]">
          has no
        </p>
        <p className="uppercase font-extrabold bebas text-[110px] leading-none tracking-wide text-[#1E1E1E]">
          limits
        </p>

        <p className="my-8 p-regular text-[#292828]">
          As an athlete, driving is my passion. As a competitor, winning is my
          priority. But as a person, my purpose lies far beyond finish lines and
          fanfare
        </p>

        <div className="bg-[#222222] py-3 px-6 inline-block">
          <button className="ep font-black text-white">MY MISSION</button>
        </div>
      </div>
    </div>
  );
};

export default About;
