import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`./json/timeline.json`);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [data]);
  return (
    <div className="h-fit bg-[#34343B] text-black mx-auto w-3/4">
      {data &&
        data.map((year) => (
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
            key={year.year}
          >
            <div className="collapse-title text-xl font-medium">
              {year.year}
            </div>
            <div className="collapse-content">
              {year.months.map((month) => (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-200"
                  key={month.month}
                >
                  <div className="collapse-title text-xl font-medium">
                    {month.month}
                  </div>
                  <div className="collapse-content">
                    {month.tasks.map((event) => (
                      <div
                        tabIndex={0}
                        className="collapse collapse-arrow border border-base-300 bg-base-200"
                        key={event.title}
                      >
                        <div className="collapse-title text-xl font-medium">
                          {event.title}
                        </div>
                        <div className="collapse-content">
                          <p className="text-lg font-medium">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
