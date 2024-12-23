import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return res.data.results;
};


export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

//https://api.themoviedb.org/3/movie/278?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US



export const fetchMovieCastDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast details:", error);
    throw error;
  }
};

//https://api.themoviedb.org/3/movie/278/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US

export const fetchUpcomingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  return res.data.results;
};

export const fetchTopRatedMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
  return res.data.results;
};



export const IMAGE_URL = IMAGE_BASE_URL;
