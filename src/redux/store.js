import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../features/uiSlice";
import propertySlice from "../features/propertySlice";

const store = configureStore({
  reducer: {
    uiSlice,
    propertySlice,
  },
});

export default store;
