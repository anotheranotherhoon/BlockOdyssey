import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  page : number;
  limit : number;
  filter : string;
  q : string;
  selectedFilterName: string | null;
}

let initialState : InitialStateType = {
  page : 1,
  limit : 10,
  filter : 'all',
  q : 'default',
  selectedFilterName: null
}

export const querySlice = createSlice({
  name : 'query',
  initialState,
  reducers : {
    changeFilter : (state, action) => {
      state.page = action.payload.page
      state.limit = action.payload.limit
      state.filter = action.payload.filter
      state.q = action.payload.q
      state.selectedFilterName = action.payload.selectedFilterName
    }
  }
})

export const {changeFilter} = querySlice.actions
export default querySlice.reducer