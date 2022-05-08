/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
	movies: [
		{
			movie1: {
				type: Object,
				required: true,
			},
			movie2: {
				type: Object,
				required: true,
			},
			movie3: {
				type: Object,
				required: true,
			},
			movie4: {
				type: Object,
				required: true,
			},
			movie5: {
				type: Object,
				required: true,
			},
		},
	],

	// title: {
	// 	type: String,
	// 	required: true,
	// 	trim: true,
	// },
	// poster_path: {
	// 	type: String,
	// 	required: true,
	// 	trim: true,
	// },
	// id: {
	// 	type: Number,
	// 	required: true,
	// },
	// score: {
	// 	type: Number,
	// 	required: true,
	// },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
