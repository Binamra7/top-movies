/** @format */

const router = require("express").Router();
let Movie = require("../models/movie.model");

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

	newMovie
		.save()
		.then(() => res.json("Movie added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
