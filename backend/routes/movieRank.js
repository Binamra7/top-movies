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

	// const newMovieRank = new MovieRank({
	// 	movies: [
	// 		{
	// 			movie1: movieRank1,
	// 			movie2: movieRank2,
	// 			movie3: movieRank3,
	// 			movie4: movieRank4,
	// 			movie5: movieRank5,
	// 		},
	// 	],
	// });

	// newMovieRank
	// 	.save()
	// 	.then(() => res.json("Movie added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const Rank1 = new MovieRank({
	// 	movie: movieRank1,
	// });
	// Rank1.save()
	// 	.then(() => res.json("Rank added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const Rank2 = new MovieRank({
	// 	movie: movieRank2,
	// });
	// Rank2.save()
	// 	.then(() => res.json("Rank added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const Rank3 = new MovieRank({
	// 	movie: movieRank3,
	// });
	// Rank3.save()
	// 	.then(() => res.json("Rank added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const Rank4 = new MovieRank({
	// 	movie: movieRank4,
	// });
	// Rank4.save()
	// 	.then(() => res.json("Rank added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const Rank5 = new MovieRank({
	// 	movie: movieRank5,
	// });
	// Rank5.save()
	// 	.then(() => res.json("Rank added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
