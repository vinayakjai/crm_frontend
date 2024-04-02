import { createSlice } from "@reduxjs/toolkit";

const initialState={
   ticketList:[],

}

const ticketSlice=createSlice({
    name:'ticket',
    initialState,
    reducer:{},
    extraReducers:(builder)=>{

    }

})

export default ticketSlice.reducer;