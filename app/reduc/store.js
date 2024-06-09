import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './studentsData'
import  currSlice from './currData'

export const store =  configureStore({
  reducer: {
    data: dataReducer,
    curr: currSlice,
  }
})