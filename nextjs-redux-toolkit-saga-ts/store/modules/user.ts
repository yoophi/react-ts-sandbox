import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
  isLoggedIn: boolean;
  userData: any;
};

export type LoginPayload = {
  userId: string;
  password: string;
};

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction(state: UserState, action: PayloadAction<LoginPayload>) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutAction(state: UserState) {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;
