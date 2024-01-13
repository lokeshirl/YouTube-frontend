import { configureStore } from "@reduxjs/toolkit";

// import slices
import appSlice from "./feature/appSlice.js";
import searchSlice from "./feature/searchSlice.js";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default store;
