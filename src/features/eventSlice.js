import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showConatctForm: false,
};
export const eventSlice = createSlice({
  name: "role",
  initialState: initialState,
  reducers: {
    setShowConatctForm: (state, action) => {
      state.showConatctForm = action.payload;
    },
  },
});

export const { setShowConatctForm } = eventSlice.actions;
