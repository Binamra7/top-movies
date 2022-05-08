/** @format */

import React, { ReactEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../GlobalStyles";
import { Input, Form, Label } from "./RateMoviesStyles";
import EnterMovies from "../../components/EnterMovies";
import axios from "axios";

const RateMovies = () => {
	const sourceImg =
		"https://image.tmdb.org/t/p/w500//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg";
	const titleMov = <h1>Add movie</h1>;
	const movie: any = useSelector((state) => state);

	const [valid, setValid] = useState(false);

	const checkValidity = () => {
		if (
			movie.movies.movie1 === undefined ||
			movie.movies.movie2 === undefined ||
			movie.movies.movie3 === undefined ||
			movie.movies.movie4 === undefined ||
			movie.movies.movie5 === undefined
		) {
			setValid(false);
		} else {
			setValid(true);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		checkValidity();
		if (valid) {
			console.log("submitted", movie);
			axios.post("http://localhost:5000/api/movies/add", movie).then((res) => {
				console.log("res", res);
			});
		} else {
			console.log("not submitted");
		}
	};

	return (
		<>
			<h1>Your Favourite Top 5 Movies {movie.movies.title}</h1>
			<Container>
				<EnterMovies movie={movie.movies.movie1} order="1" />
				<EnterMovies movie={movie.movies.movie2} order="2" />
				<EnterMovies movie={movie.movies.movie3} order="3" />
				<EnterMovies movie={movie.movies.movie4} order="4" />
				<EnterMovies movie={movie.movies.movie5} order="5" />
			</Container>
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
};

export default RateMovies;
