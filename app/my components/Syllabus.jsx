import React from "react";
import ProgressBar from "./ProgressBar";

const Syllabus = () => {
  return (
    <section className="flex flex-col bg-white text-black w-full justify-between px-2 py-5 border border-gray-400 rounded-md">
      <h2 className="font-bold">Syllabus Wise Analysis</h2>
      <div className="bars m-3">
        <div className="bar w-full">
          <p>HTML Tools, Forms, History</p>
          <ProgressBar percentage={80} color={"blue"}/>
        </div>
        <div className="bar w-full">
          <p>Tags & References in HTML</p>
          <ProgressBar percentage={60} color={"orange"}/>
        </div>
        <div className="bar w-full">
          <p>Tables & References in HTML</p>
          <ProgressBar percentage={24} color={"red"}/>
        </div>
        <div className="bar w-full ">
          <p>Tables & CSS Basics</p>
          <ProgressBar percentage={96} color={"green"}/>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
