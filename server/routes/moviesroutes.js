import express from "express";
import { getMovies } from "../controllers/medias";
const router = express.Router();
router.route("/").get(getMovies);
