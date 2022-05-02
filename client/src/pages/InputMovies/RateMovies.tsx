/** @format */

import React, { useState } from "react";
import { Container } from "../../GlobalStyles";
import { Input, Form, Label } from "./RateMoviesStyles";
import EnterMovies from "../../components/EnterMovies";

const RateMovies = () => {
	const sourceImg =
		"https://image.tmdb.org/t/p/w500//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg";
	const titleMov = <h1>Add movie</h1>;

	return (
		<>
			<h1>Your Favourite Top 5 Movies</h1>
			<Container>
				<EnterMovies />
				<EnterMovies />
				<EnterMovies />
				<EnterMovies />
				<EnterMovies />
				{/* <Label>1st Movie</Label>
					<Input />
					<Label>2nd Movie</Label>
					<Input />
					<Label>3rd Movie</Label>
					<Input />
					<Label>4th Movie</Label>
					<Input />
					<Label>5th Movie</Label>
					<Input /> */}
			</Container>
		</>
	);
};

export default RateMovies;
