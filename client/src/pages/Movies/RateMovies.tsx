import React, { ReactEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../GlobalStyles";
import { Input, Form, Label } from "./RateMoviesStyles";
import EnterMovies from "../../components/EnterMovies";
import axios from "axios";

const RateMovies = () => {
	useEffect(() => {
		if (!localStorage.getItem("user")) {
			window.location.href = "/login";
		}
		document.title = "Rate Movies";
	});
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
		const user = {
			name: "binamra",
			id: "123123b",
		};
		checkValidity();
		if (valid) {
			const userMovies = new Array(0);
			userMovies.push(movie.movies.movie1);
			userMovies.push(movie.movies.movie2);
			userMovies.push(movie.movies.movie3);
			userMovies.push(movie.movies.movie4);
			userMovies.push(movie.movies.movie5);
			console.log("user movies: ", userMovies);
			console.log("tyoe of usermovie", typeof userMovies);
			axios
				.post("/api/movies/add", { userMovies, user })
				.then((res) => {
					console.log("res", res);
				})
				.catch((err) => {
					console.error(err);
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
