import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearchedMovies } from "../redux/action/postActions";

import { MovieCard } from "../components/MovieCard";

import "../App.css";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.post);
  console.log(text);
  useEffect(() => {
    dispatch(getSearchedMovies(query));
  }, [dispatch, query]);

  return (
    <div className="container">
      <h2 className="title">
        Yang anda cari: <span className="query_text">{query}</span>
      </h2>
      <div className="movies_container">
        {text && text.length === 0 && <p>No movies found.</p>}
        {text &&
          text.length > 0 &&
          text.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
