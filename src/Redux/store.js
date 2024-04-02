import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
