import BlogsHero from "./components/BlogsHero";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsHero from "./components/ProjectsHero";

const App = () => {
  return (
    <>
      <div className="m-0 bg-base-200 min-h-screen">
        <Navbar />
        <Hero />
        <ProjectsHero />
        <BlogsHero />
      </div>
    </>
  );
};

export default App;
