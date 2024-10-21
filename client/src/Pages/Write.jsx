import React from "react";
import bgImage from "../imports/bg.webp";

const Write = () => {
  return (
    <div className="write bg-[#F8F8F8] flex justify-center">
      <div className="box flex flex-col gap-4 ml-10 mt-10 p-10 w-full md:w-[80%]">
        <div className="writebox bg-white p-2 border">
          <div className="graybox  bg-gray-400 p-8 flex flex-col items-center text-white gap-4">
            <h2 className="text-xl text-nowrap">
              {" "}
              You can write on Pratilipi!{" "}
            </h2>
            <button className="bg-red-600 p-4 rounded-md w-40">
              Add New Content
            </button>
          </div>
        </div>

        <div className="eventbox bg-white border overflow-hidden">
          <h2 className="text-xl ml-3 border-l-[3px] border-red-600 pl-2">
            Events
          </h2>
          <img src={bgImage} alt="" className="p-3 w-full" />
        </div>
        <div className="blogbox bg-white border overflow-hidden">
          <h2 className="text-xl ml-3 border-l-[3px] border-red-600 pl-2">
            Blog and Editorial
          </h2>
          <img src={bgImage} alt="" className="p-3 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Write;
