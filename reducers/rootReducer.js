import createSlide from "@reduxjs/toolkit";

const initState = {
  data: [],
};
const slide = createSlide({
  name: "SLIDE",
  initState,
  reducers: {
    addItem: (state) => {
      return [...state.data];
    },
    deleteItem: (state) => {
      return [...state.data];
    },
  },
});
export const { addItem, deleteItem } = createSlide.actions;

export default slide.reducer;
