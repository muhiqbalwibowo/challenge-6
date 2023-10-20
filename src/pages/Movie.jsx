import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../App.css";
import { MovieCard } from "../components/MovieCard";

export const Movie = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [movie, setMovie] = useState(null);
  const moviesURL = "https://shy-cloud-3319.fly.dev/api/v1/movie";

  useEffect(() => {
    // Pastikan token tersedia dan pengguna sudah login sebelum membuat permintaan API
    if (token) {
      const apiUrl = `${moviesURL}/${id}`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setMovie(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Jika pengguna belum login atau telah logout, setPopular menjadi array kosong
      setMovie([]);
    }
  }, [token]);

  return (
    <div className="movie_page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="desc_card">Release : {movie.release_date}</p>
          <p className="desc_card">{movie.overview}</p>
        </>
      )}
    </div>
  );
};
