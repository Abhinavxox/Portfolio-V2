import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/json/timeline.json`);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);
  return <div className="h-fit bg-[#34343B]">Timeline</div>;
};

export default Timeline;
