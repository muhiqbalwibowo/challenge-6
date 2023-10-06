import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../App.css";
import { MovieCard } from "../components/MovieCard";

const moviesURL = "https://api.themoviedb.org/3";
const apiKey = "735891b6cf427b9db6922fb90a495f3f";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await axios
      .get(`${moviesURL}/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie_page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tag">{movie.release_date}</p>
          <p className="tag">{movie.overview}</p>
        </>
      )}
    </div>
  );
};
