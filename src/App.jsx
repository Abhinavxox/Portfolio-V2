import BlogsHero from "./components/BlogsHero";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsHero from "./components/ProjectsHero";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <div className="m-0 bg-base-200 min-h-screen">
        <Navbar />
        <Hero />
        <Timeline />
        <ProjectsHero />
        <BlogsHero />
      </div>
    </>
  );
};

export default App;
