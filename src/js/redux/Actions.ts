import ApiConnect from "../services/ApiConnect";
export function getConfig() {
  return async (dispatch, getState) => {
    const response: any = await ApiConnect.getConfig();
    dispatch({
      type: "GET_CONFIG",
      config: response
    });
  };
}
export function getLatestMovies() {
  return async (dispatch, getState) => {
    const response: any = await ApiConnect.getLatestMovies();
    dispatch({
      type: "GET_LATEST_MOVIES",
      movies: response.results
    });
  };
}
export function getMovieDetails(id) {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_MOVIE_DETAILS_LOADING" });
    const response: any = await ApiConnect.getMovieDetails(id);
    dispatch({
      type: "GET_MOVIE_DETAILS_DONE",
      details: response
    });
  };
}
export function getReviews(id) {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_MOVIE_REVIEWS_LOADING" });
    const response: any = await ApiConnect.getReviews(id);
    dispatch({
      type: "GET_MOVIE_REVIEWS_DONE",
      reviews: response.results
    });
  };
}
export function getCredits(id) {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_MOVIE_CREDITS_LOADING" });
    const response: any = await ApiConnect.getCredits(id);
    dispatch({
      type: "GET_MOVIE_CREDITS_DONE",
      credits: response
    });
  };
}
export function getSimilar(id) {
  return async (dispatch, getState) => {
    dispatch({ type: "GET_MOVIE_SIMILAR_LOADING" });
    const response: any = await ApiConnect.getSimilar(id);
    dispatch({
      type: "GET_MOVIE_SIMILAR_DONE",
      similarMovies: response.results
    });
  };
}
export function getGenres() {
  return async (dispatch, getState) => {
    const response: any = await ApiConnect.getGenres();
    dispatch({
      type: "GET_GENRES",
      genres: response
    });
  };
}
export function SearchByGenre(genre) {
  return async (dispatch, getState) => {
    const response: any = await ApiConnect.SearchByGenre(genre);
    dispatch({
      type: "SEARCH_BY_GENRE",
      searchByGenre: response
    });
  };
}
export function Search(query) {
  return async (dispatch, getState) => {
    const response: any = await ApiConnect.Search(query);
    dispatch({
      type: "SEARCH",
      search: response
    });
  };
}
