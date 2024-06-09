"use client"
import React from "react";
import Graph from "./Graph";
import Form from "./form";
import { useSelector, useDispatch } from "react-redux";

const Details = () => {
  const curr = useSelector((state)=>state.curr.curr);
  
  return (
    <div className="bg-white  text-black w-screen p-5 2xl:w-2/3 lg:w-3/4 flex flex-col gap-6">
      <section className="flex justify-between items-center px-2 py-5 border gap-1 border-gray-400 rounded-md">
        <img width={"60px"} src="images/html.png" alt="html" />
        <div className="desc">
          <h3 className="font-bold">Hyper Text Markup Language</h3>
          <p className="text-gray-700">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
        <Form/>
      </section>
      <section className="flex flex-col justify-between px-2 py-5 border border-gray-400 rounded-md">
        <h2 className="font-bold">Quick Statistics</h2>
        <div className="desc flex flex-col sm:flex-row justify-start items-start m-3 gap-3">
          <div className="rank flex justify-center items-center gap-1">
            <div className="relative flex justify-center items-center">
              <div className="2xl:w-22 2xl:h-22 2xl:p-4 p-3 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="images/trophy.svg"
                  alt="Image description"
                  className="2xl:w-6 2xl:h-6 w-5 h-5 object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold">{curr[0]}</h3>
              <p className="text-x s text-gray-600">YOUR RANK</p>
            </div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="perc  flex justify-center items-center gap-1">
            <div className="relative flex justify-center items-center">
              <div className="2xl:w-22 2xl:h-22 2xl:p-4 p-3 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="images/note.svg"
                  alt="Image description"
                  className="2xl:w-6 2xl:h-6 w-5 h-5 object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold">{curr[1]}%</h3>
              <p className="text-x s text-gray-600">PERCENTILE</p>
            </div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="corr  flex justify-center items-center gap-1">
            <div className="relative flex justify-center items-center">
              <div className="2xl:w-22 2xl:h-22 2xl:p-4 p-3 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="images/tick.svg"
                  alt="Image description"
                  className="2xl:w-6 2xl:h-6 w-5 h-5 object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold">{curr[2]}/15</h3>
              <p className="text-x s text-gray-600">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between px-2 py-5 border border-gray-400 rounded-md">
        <h3 className="font-bold">Comparison Graph</h3>
        <div className="desc mt-3 flex">
          <p className="w-4/5">
            <strong className="text-gray-700">You scored {curr[1]}% percentile</strong> which is lower than the
            average percentile 72% percentile of all the engineers who took this
            assessment.
          </p>
          <div className="relative flex justify-center items-center">
              <div className="w-22 h-22 p-4 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="images/graph.svg"
                  alt="Image description"
                  className="w-6 h-6 object-cover"
                />
              </div>
            </div>
        </div>
        <Graph perc = {curr[1]}/>
      </section>
    </div>
  );
};

export default Details;
