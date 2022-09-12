import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

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
      const key = uuid.v4();
      action.payload.key = key;
      state.data.unshift(action.payload);
    },
    updateNote: (state, action) => {
      const data = state.data.filter((item) => item.key != action.payload.key);
      state.data = data;
      state.data.unshift(action.payload);
      // state.data.
      // state.data.map((item) => {
      //   if (item.key === action.payload.key) {
      //     item = action.payload;
      //   }
      // });
    },
    deleteNote: (state, action) => {
      state.filter((item) => item != action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
