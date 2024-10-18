import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedCategories: [],
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    saveItem: (state, action) => {
      state.savedCategories.push(action.payload);
      // const test = state.savedCategories.find((item) => item.id === id);
    },
    unsaveItem: (state, action) => {
      state.savedCategories = state.savedCategories.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { saveItem, unsaveItem } = propertySlice.actions;
export default propertySlice.reducer;
