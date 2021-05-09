import { loginRequest, logoutRequest } from "./user";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from ".";
import { useCallback } from "react";

export default function useUser() {
  const { userLoading, userData, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  const login = useCallback((data: any) => {
    dispatch(loginRequest(data));
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutRequest());
  }, []);

  return { userLoading, userData, error, login, logout };
}
