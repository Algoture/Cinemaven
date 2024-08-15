import { getMovies, getMoviesTest } from "../controllers/medias.js";
import express from "express";
const router = express.Router();
router.route("/").get(getMovies);
router.route("/testing").get(getMoviesTest);
export default router;
