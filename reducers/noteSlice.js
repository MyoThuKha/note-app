import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { title: "hello", body: "world", color: "#eca7f8", key: "1" },
    { title: "cool", body: "weather", color: "#93bffe", key: "2" },
    { title: "Tea", body: "free to the world", color: "#fcb460", key: "3" },
    { title: "math", body: "2+2=5?", color: "pink", key: "4" },
    { title: "super", body: "man", color: "pink", key: "5" },
    { title: "super", body: "man2", color: "pink", key: "6" },
  ],
};
const noteSlice = createSlice({
  name: "note_data",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.data.unshift(action.payload);
    },
    updateNote: (state, action) => {
      state.data.map((item) => {
        if (item.key === key) {
          item = note;
        }
      });
    },
    deleteNote: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
