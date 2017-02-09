import axios from 'axios';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

export function fetchMovies(pageNum) {
  const request = axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${pageNum}&api_key=306bd1f9dda87b11475c98f9d47e3862&language=en-US`);
    return {
      type: FETCH_MOVIES,
      payload: request
    };
}

export function fetchMovie(id) {
  const request = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=306bd1f9dda87b11475c98f9d47e3862&append_to_response=reviews&language=en-US&page=1`);
   return {
     type: FETCH_MOVIE,
     payload: request
   };
}
