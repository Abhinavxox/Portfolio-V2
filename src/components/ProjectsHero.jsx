import React from "react";

const ProjectsHero = () => {
  return (
    <div className="mx-auto py-10">
      <h1 className="text-5xl font-bold text-center pt-5">Projects</h1>
      <div className="flex justify-center py-10">
        <div className="h-2 w-1/4 bg-gray-400 rounded-[10rem]"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex justify-center px-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/images/abhinav.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project</h2>
              <p className="truncate ...">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, beatae at illum iste quis vero ullam quo, animi
                reiciendis quam id commodi dolores, consectetur aut optio
                eveniet? Iste, ipsa nobis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/images/abhinav.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project</h2>
              <p className="truncate ...">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, beatae at illum iste quis vero ullam quo, animi
                reiciendis quam id commodi dolores, consectetur aut optio
                eveniet? Iste, ipsa nobis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/images/abhinav.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project</h2>
              <p className="truncate ...">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, beatae at illum iste quis vero ullam quo, animi
                reiciendis quam id commodi dolores, consectetur aut optio
                eveniet? Iste, ipsa nobis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="btn btn-primary">View More</button>
      </div>
    </div>
  );
};

export default ProjectsHero;
