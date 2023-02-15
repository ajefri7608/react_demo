import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GeneralResponse,
  LoginResponse,
  UserLoginInfo,
  UserState,
} from "../../model/user";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import { axiosInstance } from "../../webService/axiosConfig";

const initialState: UserState = {
  userName: undefined,
  accessToken: undefined,
  value: 0,
};

export const login = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    return axiosInstance
      .post<GeneralResponse<LoginResponse>>("/users/login", {
        userName: "root",
        password: "root",
      })
      .then(function (response) {
        console.log("response", response);
        return response.data;
      })
      .catch(function (error) {
        console.log("response", error);
        throw error;
      });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<GeneralResponse<LoginResponse>>) => {
        if (action.payload.apiMsg.rspCode === 1000) {
          state.userName = action.payload.data.userName;
          state.accessToken = action.payload.data.userAccessToken;
        }
      }
    );
  },
});
export const { increment } = userSlice.actions;

export default userSlice.reducer;
