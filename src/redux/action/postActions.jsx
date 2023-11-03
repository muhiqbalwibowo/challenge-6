import axios from "axios";
import { setPostDetails, setPosts, setSearch } from "../reducers/postReducers";
import { toast } from "react-toastify";

// Function to get all the posts
export const getAllPosts = (token) => async (dispatch) => {
  try {
    if (token) {
      const response = await axios.get(
        `https://shy-cloud-3319.fly.dev/api/v1/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status != 200) {
        throw new Error("Error Network");
      }
      const data = response.data.data;
      dispatch(setPosts(data));
      console.log(token);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to get the details of a post
export const getPostDetails = (id, token) => async (dispatch) => {
  try {
    if (token) {
      const response = await axios.get(
        `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.data;
      dispatch(setPostDetails(data));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getSearchedMovies = (query) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setSearch(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
