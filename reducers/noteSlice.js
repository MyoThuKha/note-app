import { createSlice } from "@reduxjs/toolkit";

const initialData = {
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
  initialData,
  reducers: {},
});

export default noteSlice.reducer;
