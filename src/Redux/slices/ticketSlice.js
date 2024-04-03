import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstance";

const initialState={
   ticketList:[],

}

export const getAllTickets=createAsyncThunk("tickets/getAllTicketsForUsers",async()=>{
    try{
        const response=await axiosInstance.get("getMyAssignedTickets",{
            'x-access-token':localStorage.getItem('token'),
        })
        return response;
    }catch(err){
        return err
    }
})

const ticketSlice=createSlice({
    name:'ticket',
    initialState,
    reducer:{},
    extraReducers:(builder)=>{
        
      builder.addCase(getAllTickets.fulfilled,(state,action)=>{
        if(!action?.payload?.data) return;
        state.ticketList=action?.payload?.data?.result;
      })
    }

})

export default ticketSlice.reducer;