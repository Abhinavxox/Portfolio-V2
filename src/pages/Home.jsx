import React from "react";
import Hero from "../components/Hero";
import ProjectsBlogsHero from "../components/Projects&BlogsHero";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div className="m-0 bg-[#2E2E35]">
      <Hero />
      <Timeline />
      <ProjectsBlogsHero dataToShow="projects" />
      <ProjectsBlogsHero dataToShow="blogs" />
    </div>
  );
};

export default Home;
