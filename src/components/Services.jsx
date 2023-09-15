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
              <p className="text-center text-sm font-light my-2">21 Projects</p>
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
              <p className="text-center text-sm font-light my-2">21 Projects</p>
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
                src="./images/services/code.svg"
                className="h-20 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                Web Development
              </h1>
              <p className="text-center text-sm font-light my-2">21 Projects</p>
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
                src="./images/services/code.svg"
                className="h-20 w-20 mx-auto my-2"
              />
              <h1 className="uppercase text-center font-medium my-2">
                Web Development
              </h1>
              <p className="text-center text-sm font-light my-2">21 Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
