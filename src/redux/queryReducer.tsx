import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  page : number;
  limit : number;
  filter : string;
  q : string;
  selectedStatus: string | null;
}

let initialState : InitialStateType = {
  page : 1,
  limit : 10,
  filter : 'all',
  q : 'default',
  selectedStatus: null
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
    }
  }
})

export const {changeFilter} = querySlice.actions
export default querySlice.reducer