const router = require("express").Router();
const { default: mongoose } = require("mongoose");
let MovieRank = require("../models/movieRank.model");

const db = mongoose.connection;

router.route("/").get((req, res) => {
	// MovieRank.find()
	// 	.then((movies) => res.json(movies))
	// 	.catch((err) => res.status(400).json("Error: " + err));
	// db.collection("movieRanks")
	// 	.find()
	// 	.toArray()
	// 	.then((movies) => res.json(movies))
	// 	.catch((err) => res.status(400).json("Error: " + err));

	// const movies = db.collection("movieranks").find().toArray();
	// res.json(movies);
	//if two movies have same id, add their score

	// db.collections.movieranks.aggregate([
	// 	{
	// 		$group: {
	// 			_id: "$movie1",
	// 			score: { $sum: "$score" },
	// 		},
	// 	},
	// 	{
	// 		$sort: { score: -1 },
	// 	},
	// ]);
	db.collection("movieranks")
		.find()
		.limit(5)
		.sort({ score: -1 })
		.toArray()
		.then((movies) => res.json(movies))
		.catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").get((req, res) => {
// 	MovieRank.findById(req.params.id)
// 		.then((movie) => res.json(movie))
// 		.catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/add").post((req, res) => {
	let movie1 = req.body.movies.movie1;
	let movie2 = req.body.movies.movie2;
	let movie3 = req.body.movies.movie3;
	let movie4 = req.body.movies.movie4;
	let movie5 = req.body.movies.movie5;

	movie1 = { ...movie1, score: 10 };
	movie2 = { ...movie2, score: 8 };
	movie3 = { ...movie3, score: 6 };
	movie4 = { ...movie4, score: 4 };
	movie5 = { ...movie5, score: 2 };

	db.collection("movieranks").insertMany([
		movie1,
		movie2,
		movie3,
		movie4,
		movie5,
	]);
	res.json("Many Movie added!");
});

module.exports = router;
