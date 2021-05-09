import {
  LoginRequestPayload,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from "../store/modules/user";
import { call, put, takeLatest } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

function loginAPI(data: LoginRequestPayload) {
  return axios.post("/api/login", data);
}

function logoutAPI() {
  return axios.post("/api/logout");
}

function* login(action: PayloadAction<LoginRequestPayload>) {
  try {
    const result = yield call(loginAPI, action.payload);
    yield put(loginSuccess(result.data));
  } catch (e) {
    yield put(loginFailure(e.response.data));
  }
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutFailure(e.response.data));
  }
}

export function* watchLogin() {
  yield takeLatest(loginRequest.type, login);
}

export function* watchLogout() {
  yield takeLatest(logoutRequest.type, logout);
}
