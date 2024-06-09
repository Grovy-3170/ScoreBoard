import React from "react";

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="flex w-full gap-8 mt-5">
      <div className={`progress-bar-container bg-${color}-400 w-3/4 h-2 rounded overflow-hidden`}>
        <div
          className={`progress-bar-filled bg-${color}-600`}
          style={{ width: `${percentage}%` }} // Dynamic width based on state
        >&nbsp;</div>
      </div>
      <div className={`progress-bar-label text-${color}-600`}>{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
