import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
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
    <div>
      <div className="p-5 grid grid-cols-1 xl:grid-cols-2">
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64 flex justify-center items-center"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          >
            <div className="rotate-180">
              <img
                src="./images/services/code.svg"
                className="h-20 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                Web Development
              </h1>
              <p className="text-center text-sm font-light my-2">
                <a className="hero-a" href="https://github.com/Abhinavxox">
                  21 Projects
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64 flex justify-center items-center"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          >
            <div className="rotate-180">
              <img
                src="./images/services/pr.svg"
                className="h-20 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                Project Management
              </h1>
              <p className="text-center text-sm font-light my-2">
                <a className="hero-a" href="https://github.com/Abhinavxox">
                  3 Projects
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64 flex justify-center items-center trophies"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          >
            <div className="rotate-180">
              <img
                src="./images/services/trophy.svg"
                className="h-20 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                TROPHIES
              </h1>
              <p className="text-center text-sm font-light my-2">
                2 National Hackathons
              </p>
            </div>
            <motion.div className="absolute inset-0 bg-[#2e2e35] opacity-0 hover:opacity-80 transition-[all] duration-500 ease-in-out flex justify-center items-center rotate-180 px-3">
              <span className="trophies-list font-bold w-full">
                <a
                  className="hero-a"
                  href="https://devfolio.co/projects/story-wizard-4811"
                >
                  <p className="text-center">Hackverse 4.0 </p>
                </a>
                <br />
                <a
                  className="hero-a"
                  href="https://www.spaceappschallenge.org/"
                >
                  <p className="text-center">
                    NASA Space Apps
                    <br /> Challenge <br />
                    {"("}Regional lvl - Kathmandu{")"}
                  </p>
                </a>
              </span>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64 flex justify-center items-center"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          >
            <div className="rotate-180">
              <img
                src="./images/services/oss.svg"
                className="h-20 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                Open-Source <br />
                Contributions
              </h1>
              <p className="text-center text-sm font-light my-2">
                Wikimedia, CNCF, Casbin
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
