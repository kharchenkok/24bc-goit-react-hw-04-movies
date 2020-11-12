import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export function getFetchTrendingMovies() {
  return axios
    .get(`/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(({ data }) => data.results);
}

export function getFetchSearchMovies(query, page = 1) {
  return axios.get(
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  ).then(({ data }) => data.results)
}

export function getFetchMovieDetails(movie_id) {
  return axios.get(
    `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  ).then(({ data }) => data)
}

export function getFetchMovieCredits(movie_id) {
  return axios.get(
    `/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
  ).then(({ data }) => data.cast)
}

export function getFetchMovieReviews(movie_id) {
  return axios.get(
    `/movie/${movie_id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  ).then(({ data }) => data.results)
}