import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import rootReducer from "../slices";

const isDev = process.env.NODE_ENV === "development";

const createStore = () => {
  let middleware = [];
  if (isDev) {
    middleware.push();
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
    devTools: isDev,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: isDev,
});

export default wrapper;
