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
      <div className="p-5 grid grid-cols-1 md:grid-cols-2">
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
            <motion.div className="absolute inset-0 bg-[#2e2e35] opacity-0 hover:opacity-80 transition-[all] duration-500 ease-in-out flex justify-center items-center rotate-180 px-3">
              <a href="https://github.com/Abhinavxox">
                {" "}
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
              </a>
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
                src="./images/services/amfoss.png"
                className="h-32 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                Member & Mentor
              </h1>
              <p className="text-center text-sm font-light my-2">
                <a className="hero-a" href="https://amfoss.in/">
                  amFOSS
                </a>
              </p>
            </div>
            <motion.div className="absolute inset-0 bg-[#2e2e35] opacity-0 hover:opacity-80 transition-[all] duration-500 ease-in-out flex justify-center items-center rotate-180 px-3">
              <a href="https://amfoss.in/">
                {" "}
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
              </a>
            </motion.div>
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
                2 Trophies | 8 Hackathons
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
            <motion.div className="absolute inset-0 bg-[#2e2e35] opacity-0 hover:opacity-80 transition-[all] duration-500 ease-in-out flex justify-center items-center rotate-180 px-3">
              <a href="https://github.com/Abhinavxox">
                {" "}
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
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
