import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstance";

const initialState = {
  ticketList: [],
  ticketDistribution: {
    open: 0,
    inProgress: 0,
    resolved: 0,
    onHold: 0,
    cancelled: 0,
  },
};

export const getAllTickets = createAsyncThunk(
  "tickets/getAllTicketsForUsers",
  async () => {
    try {
      const response = await axiosInstance.get("/getMyAssignedTickets", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTickets.fulfilled, (state, action) => {
      console.log(action);
      if (!action?.payload?.data) return;
      console.log(action.payload);
      state.ticketList = action?.payload?.data?.result;
      const tickets = action?.payload?.data?.result;
      tickets.forEach((ticket) => {
        state.ticketDistribution[ticket.status] =
          state.ticketDistribution[ticket.status] + 1;
      });
    });
  },
});

export default ticketSlice.reducer;
