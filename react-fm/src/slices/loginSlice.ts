import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: '',
  picture: '',
  family_name: '',
  given_name: '',
  id: '',
  isAdmin: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logingin: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.picture = action.payload.picture;
      state.family_name = action.payload.family_name;
      state.given_name = action.payload.given_name;
      state.id = action.payload.id;
    },
    logingout: (state) => {
      state.isLoggedIn = false;
      state.name = '';
      state.picture = '';
      state.family_name = '';
      state.given_name = '';
      state.id = '';
    },
    settingAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { logingin, logingout, settingAdmin } = loginSlice.actions;
export default loginSlice.reducer;
