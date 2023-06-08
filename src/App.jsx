import BlogsHero from "./components/BlogsHero";
import Footer from "./components/Footer";
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
        <Footer />
      </div>
    </>
  );
};

export default App;
