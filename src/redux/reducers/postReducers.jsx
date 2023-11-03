import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  posts: [],
  postDetails: null,
  text: [],
};

// Define the reducers
const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setSearch: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Export the actions (to set/change the state)
export const { setPosts, setPostDetails, setSearch } = postSlicer.actions;

// Export the reducers (state / store)
export default postSlicer.reducer;
