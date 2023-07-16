import Card from "../layouts/Card";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const BlogsHero = () => {
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
    <animated.div
      style={trailProps}
      ref={ref}
      className="flex flex-col justify-center px-8 py-4 text-center lg:text-left"
    >
      <div className="mx-auto py-10">
        <h1 className="text-5xl font-bold text-center pt-5">Blogs</h1>
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
          <Link to="/blogs">
            <button className="btn btn-primary hover:scale-105 transition-transform duration-30">
              View More Blogs
            </button>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default BlogsHero;
