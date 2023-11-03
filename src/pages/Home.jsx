import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/action/postActions";
import { useNavigate } from "react-router-dom";

import "../App.css";

export const Home = () => {
  // const token = localStorage.getItem("token");
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  console.log(posts);

  useEffect(() => {
    if (token) {
      dispatch(getAllPosts(token));
    }
  }, [token, dispatch]);

  return (
    <div className="container">
      <div className="card-body">
        {/* SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
        <hr /> */}
      </div>
      <h2 className="title_card">Populer: </h2>
      <div className="movies_container">
        {posts.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
