import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../utilities/AllApi";
import MovieCard from "../components/MovieCard.jsx";
import "./../Styles/HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies();
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

export default HomePage;
