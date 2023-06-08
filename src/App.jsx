import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogsProjectsPage from "./pages/BlogsProjectsPage";

const App = () => {
  return (
    <>
      <div className="m-0 bg-base-200 min-h-screen">
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
        <Footer />
      </div>
    </>
  );
};

export default App;
