import React from "react";

const Ghost = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-black"
        style={{
          backgroundImage: `url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c84a3007b7fe047890507_intro%20bg%202-p-1600.png')`,
        }}
      ></div>

      {/* Black overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}

      <img
        src="https://cdn.prod.website-files.com/63461870233518fc9cce0691/634c83486f6b02455ba81e84_hellboy_intro.webp"
        alt="Hellboy Bottom Right"
        className="absolute bottom-0 right-5 lg:max-w-[180px] pointer-events-none"
      />

      <div
        className="absolute top-10 left-32 max-w-[250px] md:max-w-[300px] lg:max-w-[700px] bg-[#BAA891] text-black text-sm md:text-base lg:text-5xl z-10 font-bold ep border-4 border-black"
        style={{
          backgroundImage: `url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c7f996668dd27ef8f1114_speech%20box%20texture.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "30px 20px",
        }}
      >
        <span className="font-bold ep text-9xl">A</span>ncient evil lives
        <br />
        in the Wyrd
      </div>

      <div
        className="absolute bottom-52 right-60 bg-[#BAA891] text-black text-sm md:text-base lg:text-5xl z-10 font-bold ep border-4 border-black"
        style={{
          padding: "30px 20px",
        }}
      >
        Eager to be
      </div>

      <div
        className="absolute bottom-20 right-[650px] bg-[#BAA891] text-black text-sm md:text-base lg:text-5xl z-10 font-bold ep border-4 border-black"
        style={{
          padding: "30px 20px",
        }}
      >
        Let
      </div>

      <div className="absolute top-[450px] left-1/2 -translate-x-1 -translate-y-1/2 rotate-[-15deg] text-white text-7xl md:text-[10rem] lg:text-[8rem] font-extrabold pointer-events-none select-none z-10">
        OUT!
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold"></div>
    </div>
  );
};

export default Ghost;
