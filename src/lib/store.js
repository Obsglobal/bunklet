import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth";
import eventSlice from "@/features/eventSlice";
import roleSlice from "@/features/roleSlice";

const rootReducer = combineReducers({
  role: roleSlice,
  event: eventSlice,
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;