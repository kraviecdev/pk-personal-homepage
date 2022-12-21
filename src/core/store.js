import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../components/ThemeSwitch/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
});

export default store;