import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
}

let tempId = 3;

export const users = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
  ] as User[],
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      action.payload.id = tempId++;
      return [...state, action.payload];
    },
  },
});

export const { addUser } = users.actions;
export default users.reducer;
