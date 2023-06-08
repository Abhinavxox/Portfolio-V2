import React from "react";
import Card from "../layouts/Card";

const BlogsProjectsPage = () => {
  return (
    <div className="">
      <div className="form-control w-full p-5">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </div>
  );
};

export default BlogsProjectsPage;
