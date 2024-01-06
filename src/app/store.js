import { configureStore } from "@reduxjs/toolkit";

// import slices
import appSlice from "./feature/appSlice.js";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
