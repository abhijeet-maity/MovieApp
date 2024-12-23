import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCastDetails } from "../utilities/AllApi";
import "./../Styles/SingleMovieDetailPage.css";

const SingleMovieDetailPage = () => {
  const { movieId } = useParams(); // Extract movieId from the URL
  const [movieDetail, setMovieDetail] = useState(null);
  const [cast, setCast] = useState([]);
  console.log(movieId);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetail(data);

        const castData = await fetchMovieCastDetails(movieId);
        setCast(castData.slice(0, 6)); // Limit cast to top 6 actors

      } catch (error) {
        console.error("Error fetching movie or cast details:", error);
      }
    };

    fetchMovies();
  }, [movieId]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    
    <div className="single-movie-page">
      {/* Movie Details Section */}
      <div
        className="movie-details"
        style={{
          // backgroundImage: `url(${BASE_IMAGE_URL}${movieDetail.poster_path})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BASE_IMAGE_URL}${movieDetail.poster_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover", // Makes the image cover the entire div
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="movie-details-content">
          <img
            src={`${BASE_IMAGE_URL}${movieDetail.backdrop_path}`}
            alt={movieDetail.title}
            className="movie-backdrop"
          />
          <div className="movie-info">
            <h1>{movieDetail.title}</h1>
            <p>{movieDetail.overview}</p>
            <ul>
              <li><strong>Release Date:</strong> {movieDetail.release_date}</li>
              <li><strong>Rating:</strong> {movieDetail.vote_average} / 10</li>
              <li>
                <strong>Genres:</strong>{" "}
                {movieDetail.genres.map((genre) => genre.name).join(", ")}
              </li>
              <li><strong>Runtime:</strong> {movieDetail.runtime} minutes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="cast-section">
        <h2>Top Cast</h2>
        <div className="cast-container">
          {cast.map((actor) => (
            <div className="cast-card" key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${BASE_IMAGE_URL}${actor.profile_path}`
                    : "https://via.placeholder.com/150"
                }
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>Character : {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetailPage;
