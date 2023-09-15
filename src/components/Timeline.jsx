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
    <section id="about" className="bg-[#34343B] h-fit">
      <animated.div
        style={trailLeftProps}
        ref={ref}
        className="w-full flex justify-center xl:py-20 py-10"
      >
        <div className="font-medium xl:w-1/2 w-4/5 text-center">
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
      <div className="grid grid-cols-1 xl:grid-cols-2 p-5">
        {/* TimeLine */}
        <div className="flex flex-col justify-center px-8 py-4 text-center lg:text-left">
          <div className="h-full flex items-center">
            <div>
              <h1 className="text-[#e4aa48] my-2 text-xl font-medium">
                TIMELINE
              </h1>
              <div className="w-full flex justify-center items-center">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      March 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Marketing UI design in Figma
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      All of the pages and components are first designed in
                      Figma and we keep a parity between the two versions even
                      as we update the project.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      E-Commerce UI code in Tailwind CSS
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get started with dozens of web components and interactive
                      elements built on top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="flex justify-center py-5">
                <Link to="/about">
                  <button className="button-new mt-10 font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 xl:my-0">
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
