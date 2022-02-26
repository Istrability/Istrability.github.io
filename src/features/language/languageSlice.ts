import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Languages } from "../../translations";

const initialState = "en" as Languages;

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;

export default languageSlice.reducer;
