import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie_card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2 className="title_card">{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detail</Link>}
    </div>
  );
};
