import React from "react";
import { useEffect, useState } from "react";
import { fetchUpcomingMovies } from "../utilities/AllApi";
import MovieCard from "../components/MovieCard.jsx";
import "./../Styles/HomePage.css";

const UpcomingMovie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchUpcomingMovies(page);
      setMovies(data);
      console.log(data);
    };
    fetchMovies();
  }, [page]);

  const handleChangePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= 34) {
      setPage(pageNumber);
    }
  };

  return (
    <div className="main-section">
      <div className="movie-list">
        {movies.length === 0 && <h3>No More Movies..</h3>}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <section className="pagination">
        <button
          onClick={() => {
            handleChangePage(page - 1);
          }}
          disabled={page === 1}
        >
          &laquo;
        </button>
        <button
          onClick={() => {
            handleChangePage(page - 1);
          }}
          disabled={page === 1}
        >
          {page - 1}
        </button>
        <button
          className="active"
          onClick={() => {
            handleChangePage(page);
          }}
        >
          {page}
        </button>

        <button
          onClick={() => {
            handleChangePage(page + 1);
          }}
        >
          {page + 1}
        </button>
        <button
          onClick={() => {
            handleChangePage(page + 1);
          }}
          disabled={page === 35}
        >
          &raquo;
        </button>
      </section>
    </div>
  );
};

export default UpcomingMovie;
