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
            className="container bg-[#2E2E35] h-64 w-64"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          ></motion.div>
        </div>
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          ></motion.div>
        </div>
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          ></motion.div>
        </div>
        <div className="flex justify-center items-center my-5">
          <motion.div
            className="container bg-[#2E2E35] h-64 w-64"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationVariants}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
