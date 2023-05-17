import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="m-0 bg-base-200 min-h-screen">
        <Navbar />
        <Hero />
        <div className="h-[90vh]"></div>
      </div>
    </>
  );
};

export default App;
