import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../reducers/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
});

export default store;