import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import ticketReducer from "./slices/ticketSlice";


export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    ticket:ticketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
