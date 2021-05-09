import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
  userLoading: boolean;
  userData: any;
  error: any;
};

export type LoginRequestPayload = {
  userId: string;
  password: string;
};

const initialState: UserState = {
  userLoading: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest(
      state: UserState,
      _action: PayloadAction<LoginRequestPayload>
    ) {
      state.userLoading = true;
      state.error = null;
    },
    loginSuccess(state: UserState, action: PayloadAction<{ userId: number }>) {
      state.userLoading = false;
      state.userData = action.payload;
    },
    loginFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },
    logoutRequest(state: UserState) {
      state.userLoading = true;
      state.error = null;
    },
    logoutSuccess(state: UserState) {
      state.userLoading = false;
      state.userData = null;
    },
    logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = actions;
export default reducer;
