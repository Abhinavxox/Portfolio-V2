import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import BlogsProjectsPage from "./pages/BlogsProjectsPage";

const App = () => {
  return (
    <>
      <div className="m-0 min-h-screen text-[#DADADA]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blogs"
            element={<BlogsProjectsPage content="blogs" />}
          />
          <Route
            path="/projects"
            element={<BlogsProjectsPage content="projects" />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
