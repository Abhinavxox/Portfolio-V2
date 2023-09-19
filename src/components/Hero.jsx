import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trailProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateX(200px)",
    config: { duration: 1000 },
  });

  const handleDownloadCV = () => {
    const pdfUrl = "/resume/Resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <animated.div
      style={trailProps}
      ref={ref}
      className="w-full flex justify-between lg:px-72 px-10 h-fit pt-28"
    >
      <div className="lg:w-1/3 md:w-1/2 w-full">
        <div>
          <img src="./images/NameLogo.png" />
        </div>
        <div className="yellow-bar my-5 ml-5"></div>
        <div className="ml-3 font-semibold hidden lg:flex">
          <p>
            <a className="hero-a" href="https://www.instagram.com/abhina_v1/">
              Instagram
            </a>{" "}
            |{" "}
            <a
              className="hero-a"
              href="https://www.linkedin.com/in/itsmeabhinavpandey/"
            >
              Linkedin
            </a>{" "}
            |{" "}
            <a className="hero-a" href="https://meronaamabhinav.hashnode.dev/">
              Hashnode
            </a>
          </p>
        </div>
        <div className="w-full my-5 ml-5">
          <button
            className="button-new mt-10 font-semibold"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="md:flex relative z-[1] lg:w-1/3 w-1/2 hidden h-full ">
        <div className="bg-circle 2lg:flex hidden"></div>
        <img src="./images/abhinav-removebg.png" draggable="false" />
      </div>
      <div className="lg:flex justify-left w-1/3 mx-5 hidden">
        <div className="font-medium">
          <h1 className="text-[#e4aa48] my-2 text-xl">INTRODUCTION</h1>
          <p className="text-3xl my-2">
            Full Stack Web
            <br />
            Developer, <br />
            OSS Enthusiast
          </p>
          <p className="my-2 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            nihil alias voluptatibus commodi facere ipsam vero excepturi
            dolorem. Numquam aperiam sed officiis voluptate dolorem consequatur
            asperiores nobis praesentium saepe ut?
          </p>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="text-[#e4aa48] my-2 flex items-center w-fit yellow-a"
          >
            Learn More &nbsp;
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
              </svg>
            </i>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default Hero;
