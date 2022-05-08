/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieRankSchema = new Schema({
	movie: Object,
	// movie: {
	// 	title: {
	// 		type: String,
	// 		required: true,
	// 		trim: true,
	// 	},
	// 	poster_path: {
	// 		type: String,
	// 		required: true,
	// 		trim: true,
	// 	},
	// 	id: {
	// 		type: String,
	// 		required: true,
	// 		trim: true,
	// 	},
	// 	score: {
	// 		type: Number,
	// 		required: true,
	// 		trim: true,
	// 	},
	// },
});

const MovieRank = mongoose.model("MovieRank", movieRankSchema);

module.exports = MovieRank;
