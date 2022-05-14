/** @format */

const router = require("express").Router();
const { default: mongoose } = require("mongoose");
let MovieRank = require("../models/movieRank.model");

router.route("/").get((req, res) => {
	MovieRank.find()
		.then((movies) => res.json(movies))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
	MovieRank.findById(req.params.id)
		.then((movie) => res.json(movie))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const movie1 = req.body.movies.movie1;
	const movie2 = req.body.movies.movie2;
	const movie3 = req.body.movies.movie3;
	const movie4 = req.body.movies.movie4;
	const movie5 = req.body.movies.movie5;

	const movieRank1 = { ...movie1, score: 10 };
	const movieRank2 = { ...movie2, score: 8 };
	const movieRank3 = { ...movie3, score: 6 };
	const movieRank4 = { ...movie4, score: 4 };
	const movieRank5 = { ...movie5, score: 2 };

	const db = mongoose.connection;
	db.collection("movieranks").insertMany([
		movieRank1,
		movieRank2,
		movieRank3,
		movieRank4,
		movieRank5,
	]);
	res.json("Many Movie added!");
});

module.exports = router;
