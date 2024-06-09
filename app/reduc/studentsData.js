import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [
      { noOfSt: 0, perc: 0 },
      { noOfSt: 2, perc: 20 },
      { noOfSt: 3, perc: 30 },
      { noOfSt: 5, perc: 35 },
      { noOfSt: 6, perc: 46 },
      { noOfSt: 8, perc: 50 },
      { noOfSt: 5, perc: 58 },
      { noOfSt: 5, perc: 60 },
      { noOfSt: 3, perc: 64 },
      { noOfSt: 2, perc: 78 },
      { noOfSt: 1, perc: 86 },
      { noOfSt: 3, perc: 90 },
      { noOfSt: 0, perc: 100 },
    ],
  },
  reducers: {
    adjustNoOfStByPerc(state, action) {
      const a = parseInt(action.payload[0]);
      const b = parseInt(action.payload[1]);
      state.data.forEach((item) => {
        console.log(item.perc);
        if (item.perc === a) {
          item.noOfSt -= 1;
        } else if (item.perc === b) {
          item.noOfSt += 1;
        }
      });
    },
  },
});
export const { adjustNoOfStByPerc } = dataSlice.actions;

export default dataSlice.reducer;
