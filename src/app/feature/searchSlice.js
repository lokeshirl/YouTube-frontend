import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSuggestionsCache: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { searchSuggestionsCache } = searchSlice.actions;

export default searchSlice.reducer;
