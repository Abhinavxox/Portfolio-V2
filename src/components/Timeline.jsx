import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import Services from "./Services";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trailLeftProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateX(-50px)",
    config: { duration: 1000 },
  });

  return (
    <section className="bg-[#34343B] h-fit" id="about">
      <animated.div
        style={trailLeftProps}
        ref={ref}
        className="w-full flex justify-center lg:pt-20 pt-10 lg:pb-10 pb-5"
      >
        <div className="font-medium lg:w-1/2 w-4/5 text-center">
          <h1 className="text-[#e4aa48] my-2 text-xl">ABOUT ME</h1>
          <p className="text-3xl my-2">
            CSE-AI Student S5 | Member & Mentor at{" "}
            <a className="hero-a pb-1" href="https://amfoss.in/">
              amFOSS
            </a>
          </p>
          <p className="my-2 font-medium text-center">
            Currently studying at Amrita Vishwa Vidyapeetham, Amritapuri Campus.
            <br />
          </p>
        </div>
      </animated.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
        {/* TimeLine */}
        <div className="flex flex-col justify-center px-8 py-4 text-center lg:text-left">
          <div className="h-full flex items-center justify-center">
            <div>
              <h1 className="text-[#e4aa48] my-2 text-xl font-medium">
                TIMELINE
              </h1>
              <div className="w-full flex justify-center items-center">
                <ol className="relative border-l border-gray-200">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                      September 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-200">
                      Designed Landing Page For Hacktoberfest 2023
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500">
                      Worked on frontend for design of landing page for
                      Hacktoberfest event hosted by
                      <a className="hero-a" href="https://amfoss.in/">
                        amFOSS
                      </a>
                      <br />
                      Link :
                      <a className="hero-a" href="https://events.amfoss.in/">
                        {" "}
                        events.amfoss.in
                      </a>
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                      August 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-200">
                      MLH Fellowship
                    </h3>
                    <p className="text-base font-normal text-gray-500">
                      Had my interviews for MLH fellowship. Cleared all the
                      rounds but they couldnt match a project for me.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                      July 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-200 ">
                      Phase I : Software-Inventory
                    </h3>
                    <p className="text-base font-normal text-gray-500 ">
                      Software Inventory is a project vulnerability tracking
                      app. Finished the phase I including the desktop app.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white "></div>
                  </li>
                </ol>
              </div>
              <div className="flex justify-center py-5">
                <Link>
                  <button className="button-new mt-10 font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 lg:my-0">
          <h1 className="text-[#e4aa48] mt-2 text-xl font-medium text-center">
            SERVICES & ACHIEVEMENTS
          </h1>
          <Services />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
