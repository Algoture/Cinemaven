import mongoose from "mongoose";
const movieSchema = mongoose.Schema({
  bgimage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  trailerLength: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  moviecode: {
    type: String,
    required: true,
  },
  movielength: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
export default mongoose.model("movie", movieSchema);
