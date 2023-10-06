import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { MovieCard } from "../components/MovieCard";

const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "735891b6cf427b9db6922fb90a495f3f";

import "../App.css";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);

  const getSearchedMovies = async (q) => {
    const response = await axios.get(
      `${searchURL}?query=${q}&api_key=${apiKey}`
    );
    return response.data.results;
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL).then((result) => {
      setMovies(result);
    });
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Yang anda cari: <span className="query_text">{query}</span>
      </h2>
      <div className="movies_container">
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
