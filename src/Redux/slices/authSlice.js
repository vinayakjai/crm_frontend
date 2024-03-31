import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   role:'',
   data:{},
   isLoggedIn:false,

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
     
    },
  },
})


export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer