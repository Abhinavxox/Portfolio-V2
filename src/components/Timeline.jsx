import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trailProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000 },
  });



  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 p-5">
      {/* TimeLine */}
      <animated.div
        style={trailProps}
        ref={ref}
        className="flex flex-col justify-center px-8 py-4 text-center lg:text-left"
      >
        <div className="h-full">
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
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
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
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li className="ml-4">
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
              {" "}
              <button className="btn btn-primary">View Full Timeline</button>
            </Link>
          </div>
        </div>
      </animated.div>
      {/* LatestPost */}
      <animated.div
        style={trailProps}
        className="flex flex-col justify-center px-8 py-4 text-center lg:text-left"
      >
        <Link to="https://www.linkedin.com/posts/itsmeabhinavpandey_had-an-amazing-experience-at-hackverse-nitk-activity-7053573165695856641-df6O/?utm_source=share&utm_medium=member_desktop">
          <div className="flex justify-center">
            <div className="card xl:w-3/5 w-full bg-base-100 shadow-xl h-[70vh] hover:scale-105 transition-transform duration-300">
              <figure>
                <img
                  src="/images/Hackverse.jpeg"
                  alt="Winner At Hackverse 4.0"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Winners at Hackverse 4.0</h2>
                <p className="truncate ...">
                  Won the first prize of Rs.75,000 at Hackverse 4.0, NIT-K. Our
                  project StoryWizard, a narrative story generator app...
                </p>
              </div>
            </div>
          </div>
        </Link>
      </animated.div>
    </div>
  );
};

export default Timeline;
