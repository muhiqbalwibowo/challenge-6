import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";

import "../App.css";

const moviesURL = "https://api.themoviedb.org/3";
const apiKey = "735891b6cf427b9db6922fb90a495f3f";

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async () => {
    const response = await axios.get(
      `${moviesURL}/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}popular?${apiKey}`;

    getTopRatedMovies(topRatedUrl).then((result) => {
      setTopMovies(result);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Populer: </h2>
      <div className="movies_container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
