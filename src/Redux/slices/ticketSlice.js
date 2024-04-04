import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstance";

const initialState = {
  downloadedTickets:[],
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
  reducers: {
    filterTickets:(state,action)=>{
     
        state.ticketList=state.downloadedTickets.filter((ticket)=>ticket.status===action.payload.status.toLowerCase());
        
    },resetTickets:(state)=>{
      state.ticketList=state.downloadedTickets;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTickets.fulfilled, (state, action) => {
      console.log(action);
      if (!action?.payload?.data) return;
      console.log(action.payload);
      state.ticketList = action?.payload?.data?.result;
      state.downloadedTickets=action?.payload?.data?.result;
      const tickets = action?.payload?.data?.result;
      tickets.forEach((ticket) => {
        state.ticketDistribution[ticket.status] =
          state.ticketDistribution[ticket.status] + 1;
      });
    });
  },
});

export const {filterTickets}=ticketSlice.actions;

export default ticketSlice.reducer;
