import React from "react";
import { useSelector } from "react-redux";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Question = () => {
    const score = useSelector((state)=>state.curr.curr[2]);
    const percentage = Math.ceil((score/15) * 100);
  return (
    <section className="flex flex-col bg-white text-black w-full justify-between px-2 py-5 border border-gray-400 rounded-md">
      <div className="flex justify-between p-3">
        <h2 className="font-bold">Question Wise Analysis</h2>
        <div className="score text-blue-600 font-extrabold">{score}/15</div>
      </div>
      <div className="p-3 mt-3">
        <p className="text-gray-700 font-semibold"><strong>You scored {score} question correct out of 15.</strong> However it still needs some improvements</p>
      </div>
        <div className="pie h-60 w-60 m-auto p-8">
        <CircularProgressbarWithChildren value={percentage} strokeWidth={12} styles={buildStyles({
            rotation:0.5,
            pathColor: "rgb(37,99,235)",
            
        })}>
            <img style={{ width: 40, marginTop: -5 }} src="images/dart.svg" alt="score" />
            </CircularProgressbarWithChildren>
        </div>
    </section>
  );
};

export default Question;
