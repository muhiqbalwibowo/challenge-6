import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

import { MovieCard } from "../components/MovieCard";

import "../App.css";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = searchParams.get("page") || 1; // Ambil parameter page dari URL jika diperlukan, default ke 1 jika tidak ada

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const searchURL = `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=${page}&query=${query}`;

  const getSearchedMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(searchURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data.data);
      setMovies(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getSearchedMovies();
    }
  }, [query, page]);

  return (
    <div className="container">
      <h2 className="title">
        Yang anda cari: <span className="query_text">{query}</span>
      </h2>
      <div className="movies_container">
        {loading && <p>Loading...</p>}
        {movies && movies.length === 0 && <p>No movies found.</p>}
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      {/* <div className="pagination">
        {page > 1 && <Link to={`/?q=${query}&page=${page - 1}`}>Previous</Link>}
        <span>Page {page}</span>
        <Link to={`/?q=${query}&page=${page + 1}`}>Next</Link>
      </div> */}
    </div>
  );
};
