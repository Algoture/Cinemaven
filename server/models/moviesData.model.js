import mongoose from "mongoose";
const moviesDataSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  trailerLength: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
});
export default mongoose.model("moviesData", moviesDataSchema);
