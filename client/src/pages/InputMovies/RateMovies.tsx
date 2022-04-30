/** @format */

import React from "react";
import MovieBox from "../../components/MovieBox";
import { Container } from "../../GlobalStyles";
import { EnterMovies, Form } from "./RateMoviesStyles";

function RateMovies() {
	return (
		<>
			<h1>Your Favourite Top 5 Movies</h1>
			<Container>
				<MovieBox />
				<MovieBox />
				<MovieBox />
				<MovieBox />
				<MovieBox />
				{/* <Form>
				<label>Movie 1:</label>
				<EnterMovies />
				<label>Movie 2:</label>
				<EnterMovies />
				<label>Movie 3:</label>
				<EnterMovies />
				<label>Movie 4:</label>
				<EnterMovies />
				<label>Movie 5:</label>
				<EnterMovies />
				<input type="submit" value="Submit" />
			</Form> */}
			</Container>
		</>
	);
}

export default RateMovies;
