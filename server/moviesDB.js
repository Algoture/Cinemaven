import moviesDataModel from "./models/moviesData.model.js";
import { config as configDotenv } from "dotenv";
import moviesDataJson from "./moviesData.json" assert { type: "json" };
import movies from "./models/movies.model.js";
import connectDb from "./db/connect.js";
import moviesJson from "./movies.json" assert { type: "json" };

configDotenv();

const convertDate = (dateString) => {
  return new Date(dateString);
};

const moviesDataWithConvertedDates = moviesDataJson.map((movie) => {
  if (movie.releaseDate) {
    movie.releaseDate = convertDate(movie.releaseDate);
  }
  return movie;
});

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await movies.create(moviesJson);
    await moviesDataModel.create(moviesDataWithConvertedDates);
    console.log("Success creating movies collection");
  } catch (error) {
    console.error("Error creating movies collection:", error);
  }
};

start();
