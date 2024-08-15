import { getMovies, getMoviesData } from "../controllers/medias.js";
import express from "express";
const router = express.Router();
router.route("/").get(getMovies);
router.route("/moviesData").get(getMoviesData);
export default router;
