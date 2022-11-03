import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  data: [],
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
    },
    deleteNote: (state, action) => {
      state.filter((item) => item != action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
