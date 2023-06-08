import React from "react";
import Card from "../layouts/Card";
import { useSpring, animated } from "@react-spring/web";

const ProjectsHero = () => {
  const trailProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const imageProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <animated.div
      style={trailProps}
      className="flex flex-col justify-center px-8 py-4 text-center lg:text-left"
    >
      <div className="mx-auto py-10">
        <h1 className="text-5xl font-bold text-center pt-5">Projects</h1>
        <div className="flex justify-center py-10">
          <div className="h-2 w-1/4 bg-gray-400 rounded-[10rem]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            image="/images/abhinav.jpg"
            title="Project 1"
            description="Project 1 descp"
          />
          <Card
            image="/images/abhinav.jpg"
            title="Project 1"
            description="Project 1 descp"
          />
          <Card
            image="/images/abhinav.jpg"
            title="Project 1"
            description="Project 1 descp"
          />
        </div>
        <div className="flex justify-center py-5">
          <button className="btn btn-primary hover:scale-105 transition-transform duration-30">
            View More Projects
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectsHero;
