import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showConatctForm: false,
};

export const eventSlice = createSlice({
  name: "event", 
  initialState: initialState,
  reducers: {
    setShowConatctForm: (state, action) => {
      state.showConatctForm = action.payload;
    },
  },
});

export const { setShowConatctForm } = eventSlice.actions;

export default eventSlice.reducer; 