import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utilities/AllApi";
import "./../Styles/MovieCard.css";
import defaultImage from "./../images/no-poster-available.jpg";

const MovieCard = ({ movie }) => {
  const movieImage = movie.poster_path
    ? `${IMAGE_URL}${movie.poster_path}`
    : defaultImage;

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movieImage} alt={movie.title} />
        {/* <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} /> */}
        <h3>{movie.title}</h3>
        {movie.vote_average && (
          <h4>Rating - {movie.vote_average.toString().substring(0, 3)}</h4>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
