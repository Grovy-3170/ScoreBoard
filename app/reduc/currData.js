import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const currSlice = createSlice({
  name: "curr",
  initialState: {
    curr: [1,30,10],
  },
  reducers: {
    adjustcurr(state, action) {
      const { rank, percentile, score} = action.payload;

      state.curr[0] = rank;
      state.curr[1] = percentile;
      state.curr[2] = score;
    },
  },
});
export const { adjustcurr } = currSlice.actions;

export default currSlice.reducer;
