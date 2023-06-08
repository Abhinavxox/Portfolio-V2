import React from "react";
import BlogsHero from "../components/BlogsHero";
import Hero from "../components/Hero";
import ProjectsHero from "../components/ProjectsHero";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <ProjectsHero />
      <BlogsHero />
    </div>
  );
};

export default Home;
