import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../model/user";

const initialState: UserState = {
  userName: undefined,
  accessToken: undefined,
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.userName = action.payload.userName;
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});
export const { login, increment } = userSlice.actions;

export default userSlice.reducer;
