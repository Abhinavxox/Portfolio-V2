import React, { useEffect, useState } from "react";
import Card from "../layouts/Card";

const BlogsProjectsPage = ({ content }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/json/${content}.json`);
      const json = await res.json();
      setData(json);
      setFilteredData(json);
    };
    fetchData();
  }, [content]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="min-h-screen mb-10">
      <>
        <div className="form-control w-full p-5">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={handleSearch}
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
        {filteredData.length > 0 ? (
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredData.map((item) => (
                <Card
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  description={item.metaDescription}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">No projects found.</div>
        )}
      </>
    </div>
  );
};

export default BlogsProjectsPage;
