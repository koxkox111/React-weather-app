import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gifURL: "",
  gifList: [],
};

export const gifSlice = createSlice({
  name: "gif",
  initialState,
  reducers: {
    setGifURL: (state, action) => {
      state.gifURL = action.payload;
    },
    setGifList: (state, action) => {
      state.gifList = action.payload;
    },
    setGifError: (state) => {
      state.gifList = [];
      state.gifURL = "";
    }
  },
});

export const { setGifURL, setGifList, setGifError } = gifSlice.actions;

export default gifSlice.reducer;
