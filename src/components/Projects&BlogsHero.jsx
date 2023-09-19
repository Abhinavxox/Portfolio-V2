import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

const ProjectsHero = ({ dataToShow }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/json/${dataToShow}.json`);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  const controls = useAnimation();
  const animationVariants = {
    visible: {
      opacity: 1,
      rotate: 180,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className={`h-fit ${
        dataToShow === "projects" ? "bg-[#2E2E35]" : "bg-[#34343B]"
      }`}
    >
      <div
        className="flex justify-center items-center lg:pt-20 pt-10 lg:pb-10 pb-5"
        id={dataToShow}
      >
        <div className="font-medium lg:w-1/2 w-4/5 text-center">
          {dataToShow === "projects" ? (
            <>
              <h1 className="text-[#e4aa48] my-2 text-xl">PROJECTS</h1>
              <p className="my-2 font-medium text-center">
                My projects include Web App, Desktop App, Mobile App, ML models
                and many more.
                <br />
                They show my versatility and my ability to learn new
                technologies.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-[#e4aa48] my-2 text-xl">BLOGS</h1>
              <p className="my-2 font-medium text-center">
                I oftenly post some blogs on my Hashnode and Medium handles.
                <br /> These include instresting topics like openai, dualboot
                and bios.
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3">
          {data &&
            data
              .filter((item, index) => index < 3)
              .map((item) => (
                <motion.div
                  className={`w-full flex justify-center`}
                  ref={ref}
                  key={item.title}
                  animate={controls}
                  initial="hidden"
                  variants={animationVariants}
                >
                  <div className="lg:h-96 lg:w-96 w-64 h-64 p-2 my-5 relative overflow-hidden">
                    <div className="h-full w-full rotate-180">
                      <img
                        src={item.image}
                        className="h-full w-full"
                        alt={item.alt}
                      />
                    </div>
                    <a href={item.link}>
                      <motion.div className="absolute inset-0 bg-[#2e2e35] opacity-0 hover:opacity-80 transition-[all] duration-500 ease-in-out flex justify-center items-center">
                        <div className="h-20 w-20 rounded-full border-[#e4aa48] border-2 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-1/2 w-1/2"
                            viewBox="0 0 640 512"
                            fill="#e4aa48"
                          >
                            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                          </svg>
                        </div>
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
      <div className="flex justify-center py-5">
        <Link
        // to={`/${dataToShow}`}
        >
          <button className="button-new mt-10 font-semibold">View More</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsHero;
