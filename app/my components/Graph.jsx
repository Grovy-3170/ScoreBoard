"use client";
import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";

function binarySearch(arr, target, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid][key];

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low - 1;
}

const Graph = () => {
  const yourPerce = useSelector((state) => state.curr.curr[1]);
  const graphdata = useSelector((state) => state.data.data);
  let insertionIndex = binarySearch(graphdata, yourPerce, "perc");
  console.log("index", insertionIndex);
  let updatedData = [];
  for (let i = 0; i < graphdata.length; i++) {
    if (i === insertionIndex) {
      if (graphdata[i].perc === yourPerce) {
        updatedData.push({
          noOfSt: graphdata[i].noOfSt + 1,
          perc: graphdata[i].perc,
        });
      } else {
        updatedData.push(graphdata[i]);
        updatedData.push({ noOfSt: 1, perc: yourPerce });
      }
    } else {
      updatedData.push(graphdata[i]);
    }
  }
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={updatedData}>
        <Line dataKey="noOfSt" type="monotone" name="numberOfStudents" />
        <XAxis dataKey="perc" type="number" domain={[0, 100]} />
        <Tooltip />
        <ReferenceLine x={yourPerce} label="Your Percentage" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
