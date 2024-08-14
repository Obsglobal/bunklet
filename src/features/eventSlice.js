import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyFilter: null
};

export const eventSlice = createSlice({
  name: "event", 
  initialState: initialState,
  reducers: {
    setPropertyFilter: (state, action) => {
      state.propertyFilter = action.payload;
    },
  },
});

export const { setPropertyFilter } = eventSlice.actions;

export default eventSlice.reducer; 