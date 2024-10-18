import { createSlice } from "@reduxjs/toolkit";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const initialState = {
  open: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    handleMenu: (state) => {
      state.open = !state.open;
      !state.open ? enablePageScroll() : disablePageScroll();
    },
  },
});

export const { handleMenu, closeMenu } = uiSlice.actions;

export default uiSlice.reducer;
