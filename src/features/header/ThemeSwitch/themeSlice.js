import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkModeOn: window.matchMedia('(prefers-color-scheme: dark)').matches,
  },
  reducers: {
    handleThemeSwitch: state => {
      state.isDarkModeOn = !state.isDarkModeOn;
    },
  },
});

export const {handleThemeSwitch} = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkModeOn = state => selectThemeState(state).isDarkModeOn;

export default themeSlice.reducer;