import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const ProgressBar = ({ label, value }) => {
  return (
    <div className="mb-8">
      <p className="text-gray-400 font-medium mb-3">{label}</p>
      <div className="relative w-full h-3 bg-gray-300 rounded-full">
        <div
          className="h-3 bg-sky-600 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div
                className="absolute top-[-35px] left-1/2 transform -translate-x-1/2"
                style={{ left: `calc(${value}% - 12px)` }}
              >
                <div className="bg-sky-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                  {value}%
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-500"></div>
                </div>
              </div>
            </Tooltip.Trigger>
          </Tooltip.Root>
        </Tooltip.Provider>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-blue-500 rounded-full shadow-md"
          style={{ left: `calc(${value}% - 12px)` }}
        ></div>
      </div>
    </div>
  );
};
const Skills = () => {
  return (
    <div className=" mx-auto ">
      <ProgressBar label="HTML5" value={90} />
      <ProgressBar label="CSS3" value={85} />
      <ProgressBar label="JavaScript" value={95} />
      <ProgressBar label="React" value={90} />
    </div>
  );
};

export default Skills;
