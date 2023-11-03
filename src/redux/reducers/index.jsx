import { combineReducers } from "@reduxjs/toolkit";
import AuthReducers from "./AuthReducers";
import postReducers from "./postReducers";

// We will have some reducers here
export default combineReducers({
  post: postReducers,
  auth: AuthReducers,
});
