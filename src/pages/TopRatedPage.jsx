import React from 'react'
import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../utilities/AllApi";
import MovieCard from "../components/MovieCard.jsx";
import "./../Styles/HomePage.css";

const TopRatedPage = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchMovies = async () => {
    const data = await fetchTopRatedMovies();
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

export default TopRatedPage