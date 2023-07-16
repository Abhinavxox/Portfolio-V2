import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trailProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
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
                ref={ref}
                src="/images/abhinav.jpg"
                className="w-full h-auto"
                alt="Abhinav Pandey"
                style={trailProps}
              />
            </div>
            <animated.div
              style={trailProps}
              className="flex flex-col justify-center px-8 py-4 text-center lg:text-left"
            >
              <h1 className="text-5xl font-bold">Abhinav Pandey</h1>
              <p className="py-6 text-xl">
                I&apos;m a MERN stack developer from Nepal.
              </p>
              <p className="text-lg">
                Fullstack Developer | Musician | Open-Source Enthusiast
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
