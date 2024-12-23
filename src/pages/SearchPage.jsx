import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovies } from "../utilities/AllApi";
import MovieCard from "../components/MovieCard";
import "../Styles/SearchPage.css";
const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const results = await searchMovies(searchQuery);
          setMovies(results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="search-page">
      {movies.length && <h1>Search Results for: "{searchQuery}"</h1>}
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-cards-container">
          {movies.length === 0 ? (
            <p>No movies found for "{searchQuery}"</p>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
