import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../utilities/AllApi";
import MovieCard from "../components/MovieCard.jsx";
import "./../Styles/HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies(page);
      setMovies(data);
      console.log(data);
    };
    fetchMovies();
  }, [page]);

  return (
    <div className="main-section">
      <div className="movie-list">
        {movies.length === 0 && <h3>No More Movies..</h3>}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <section className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &laquo;
        </button>

        {page > 1 && (
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            {page - 1}
          </button>
        )}

        <button className="active" onClick={() => setPage(page)}>
          {page}
        </button>

        <button onClick={() => setPage(page + 1)}>{page + 1}</button>

        <button onClick={() => setPage(page + 1)} disabled={page === 500}>
          &raquo;
        </button>
      </section>
    </div>
  );
};

export default HomePage;
