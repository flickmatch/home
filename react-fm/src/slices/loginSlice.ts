import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logingin: (state) => {
      state.isLoggedIn = true;
    },
    logingout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { logingin, logingout } = loginSlice.actions;
export default loginSlice.reducer;
