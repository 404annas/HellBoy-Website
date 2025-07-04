import React from "react";
import About from "./components/About/About";
import Ghost from "./components/Ghost/Ghost";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WyrdSection from "./components/Wryd";
import Projects from "./components/Projects";
import ComicComponent from "./components/Comic";
import HellboyFooter from "./components/Footer";
import Wall from "./components/Wall";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <WyrdSection /> */}
      <Ghost />
      <About />
      <Projects />
      {/* <ComicComponent /> */}
      <Wall />
      <HellboyFooter />
    </div>
  );
};

export default App;
