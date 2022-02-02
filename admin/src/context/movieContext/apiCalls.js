import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
} from "./MovieActions";
import axios from "axios";
//get
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(res);
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};

//delete movie handle

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    const res = await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(res);
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
