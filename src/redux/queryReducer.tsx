import { createSlice } from "@reduxjs/toolkit";
import type {InitialStateType} from "../types/interfaces"

let initialState : InitialStateType = {
  page : 1,
  limit : 10,
  filter : undefined,
  q : undefined,
  selectedFilterName: undefined
}

export const querySlice = createSlice({
  name : "query",
  initialState,
  reducers : {
    changeFilter : (state, action) => {
      console.log(action.payload)
      state.page = action.payload.page
      state.limit = action.payload.limit
      if(action.payload.filter===""){
        state.filter = undefined
      }else{
        state.filter = action.payload.filter
      }
      if(action.payload.q===""){
        state.q = undefined
      }else{
        state.q = action.payload.q
      }
      state.selectedFilterName = action.payload.selectedFilterName
    }
  }
})

export const {changeFilter} = querySlice.actions
export default querySlice.reducer