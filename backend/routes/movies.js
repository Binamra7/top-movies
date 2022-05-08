/** @format */

const router = require("express").Router();
let Movie = require("../models/movie.model");
// let MovieRank = require("../models/movieRank.model");

router.route("/").get((req, res) => {
	Movie.find()
		.then((movies) => res.json(movies))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const movie1 = req.body.movies.movie1;
	const movie2 = req.body.movies.movie2;
	const movie3 = req.body.movies.movie3;
	const movie4 = req.body.movies.movie4;
	const movie5 = req.body.movies.movie5;

	const newMovie = new Movie({
		movies: [
			{
				movie1,
				movie2,
				movie3,
				movie4,
				movie5,
			},
		],
	});

	// const movieRank1 = { ...movie1, score: 10 };
	// const movieRank2 = { ...movie2, score: 8 };
	// const movieRank3 = { ...movie3, score: 6 };
	// const movieRank4 = { ...movie4, score: 4 };
	// const movieRank5 = { ...movie5, score: 2 };

	// //adds individual movies with their scores to the movieRank database collection
	// const newRank = new MovieRank({
	// 	movieRank1,
	// 	movieRank2,
	// 	movieRank3,
	// 	movieRank4,
	// 	movieRank5,
	// });

	newMovie
		.save()
		.then(() => res.json("Movie added!"))
		.catch((err) => res.status(400).json("Error: " + err));
	// newRank
	// 	.save()
	// 	.then(() => res.json("Ranke added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const poster_path = req.body.poster_path;
	// const id = req.body.id;
	// const score = req.body.score;

	// const newMovie = new Movie({ title }, { poster_path }, { id }, { score });
});

module.exports = router;
