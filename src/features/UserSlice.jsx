import { createSlice } from "@reduxjs/toolkit";

const intialUserState = { name: "", email: "", photo: "" };
const UserSlice = createSlice({
  name: "user",
  initialState: { value: intialUserState },
  reducers: {
    UserLogin: (state, action) => {
      state.value = action.payload;
    },
    UserSignOut: (state) => {
      state.value = intialUserState;
    },
  },
});

export const { UserLogin, UserSignOut } = UserSlice.actions;
export default UserSlice.reducer;
