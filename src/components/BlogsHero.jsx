import React from "react";
import Card from "../layouts/Card";

const BlogsHero = () => {
  return (
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
        <button className="btn btn-primary hover:scale-105 transition-transform duration-30">
          View More Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogsHero;
