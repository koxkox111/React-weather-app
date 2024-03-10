import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  listCity: [],
  showSuggestions: false,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.showSuggestions = true;
      state.name = action.payload;
    },
    setAutocompleteList: (state, action) => {
      state.listCity = action.payload;
    },
    setShowSuggestions: (state, action) => {
      state.showSuggestions = action.payload;
    }

  },
});

export const { setCityName, setAutocompleteList, setShowSuggestions } = citySlice.actions;

export default citySlice.reducer;
