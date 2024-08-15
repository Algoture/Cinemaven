import moviesModel from "../models/movies.model.js";
import moviesDataModel from "../models/moviesData.model.js";
export const getMovies = async (req, res) => {
  const myData = await moviesModel.find({});
  res.status(200).json({ myData });
};
export const getMoviesData = async (req, res) => {
  const myData = await moviesDataModel.find({});
  res.status(200).json({ myData });
};
