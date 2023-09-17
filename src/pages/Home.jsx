import React from "react";
import BlogsHero from "../components/BlogsHero";
import Hero from "../components/Hero";
import ProjectsHero from "../components/ProjectsHero";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div className="m-0 bg-[#2E2E35]">
      <Hero />
      <Timeline />
      <ProjectsHero />
      {/* <BlogsHero /> */}
    </div>
  );
};

export default Home;
