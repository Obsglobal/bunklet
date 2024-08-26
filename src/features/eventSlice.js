import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyFilter: null,
  activeLink: "dashboard",
};

export const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    setPropertyFilter: (state, action) => {
      state.propertyFilter = action.payload;
    },
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setPropertyFilter, setActiveLink } = eventSlice.actions;

export default eventSlice.reducer;
