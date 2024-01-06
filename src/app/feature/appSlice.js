import { createSlice } from "@reduxjs/toolkit";

// initial states values of app configurations
const initialState = {
  isMenuOpen: true,
};

const appSlice = createSlice({
  name: "appConf",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
