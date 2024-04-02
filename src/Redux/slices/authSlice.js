import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstance";


const initialState = {
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || undefined, //CONVERTING STRING INTO A VALID JSON OBJECT
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  token: localStorage.getItem("token") || "",
};
export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axiosInstance.post("/auth/signin", data);

    return response;
  } catch (err) {
    return err;
  }
});

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = await axiosInstance.post("/auth/signup", data);

    return response;
  } catch (err) {
    return err;
  }
});





export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state,action)=>{
      localStorage.clear();
      state.role="";
      state.isLoggedIn=false;
      state.data=undefined;
      state.token="";
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.status != 201 || !action.payload) return;
      state.isLoggedIn = action.payload?.data?.token != undefined;
      state.data = action.payload?.data?.userData;
      state.token = action.payload?.data?.token;
      state.role = action.payload?.data?.userData?.userType;
      localStorage.setItem("role", action.payload?.data?.userData?.userType);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem(
        "data",
        JSON.stringify(action.payload?.data?.userData)
      ); //CONVERTING OBJECT INTO STRING AS BROSWER ONLY UNDERSTANDS STRING
      localStorage.setItem("token", action.payload?.data?.userData?.token);
    });
  },
});

export const { logout } = authSlice.actions

export default authSlice.reducer;
