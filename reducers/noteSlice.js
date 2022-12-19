import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  // { title,body,color,date,key}
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
      //take id
      console.log("get", action.payload);
      console.log("stay", state.data.key);
      const data = state.data.filter((item) => item.key != action.payload);
      state.data = data;
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
