import {configureStore} from '@reduxjs/toolkit';
import themeReducer from "../features/header/ThemeSwitch/themeSlice";
import projectReducer from "../features/projects/projectsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;