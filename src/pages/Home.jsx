import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.css";

export const Home = () => {
  const token = localStorage.getItem("token");
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Pastikan token tersedia dan pengguna sudah login sebelum membuat permintaan API
    if (token) {
      const apiUrl = "https://shy-cloud-3319.fly.dev/api/v1/movie/popular";

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTopMovies(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Jika pengguna belum login atau telah logout, setPopular menjadi array kosong
      setTopMovies([]);
    }
  }, [token]);

  return (
    <div className="container">
      <div className="card-body">
        {/* SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
        <hr /> */}
      </div>
      <h2 className="title_card">Populer: </h2>
      <div className="movies_container">
        {topMovies.length === 0 && <p>Data tidak tersedia.</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
