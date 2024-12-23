import React from 'react'
import { useEffect, useState } from "react";
import { fetchUpcomingMovies } from "../utilities/AllApi";
import MovieCard from "../components/MovieCard.jsx";
import "./../Styles/HomePage.css";

const UpcomingMovie = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchMovies = async () => {
    const data = await fetchUpcomingMovies();
    setMovies(data);
    console.log(data);
  };
  fetchMovies();
}, []);

return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};


export default UpcomingMovie