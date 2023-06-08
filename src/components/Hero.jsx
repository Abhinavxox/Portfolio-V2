import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
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

  const handleDownloadCV = () => {
    const pdfUrl = "/resume/Resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] rounded-[2rem] bg-base-100 m-4">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:max-w-3xl rounded-lg shadow-2xl overflow-hidden">
              <animated.img
                src="/images/abhinav.jpg"
                className="w-full h-auto"
                alt="Abhinav Pandey"
                style={imageProps}
              />
            </div>
            <animated.div
              style={trailProps}
              className="flex flex-col justify-center px-8 py-4 text-center lg:text-left"
            >
              <h1 className="text-5xl font-bold">Abhinav Pandey</h1>
              <p className="py-6 text-xl">
                I'm a MERN stack developer from Nepal.
              </p>
              <p className="text-lg">
                Fullstack Developer | Musician | Philanthropist
              </p>
              <div className="flex justify-center w-full my-5">
                <button className="btn btn-primary" onClick={handleDownloadCV}>
                  Download CV
                </button>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
