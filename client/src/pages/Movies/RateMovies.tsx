import React, { ReactEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../GlobalStyles";
import { Input, Form, Label } from "./RateMoviesStyles";
import EnterMovies from "../../components/EnterMovies";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const RateMovies = () => {
	const { isAuthenticated, user, loginWithPopup } = useAuth0();
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [movie, setMovie] = useState({
		movie1: {
			id: 0,
			title: "",
			poster_path: "",
		},
		movie2: {
			id: 0,
			title: "",
			poster_path: "",
		},
		movie3: {
			id: 0,
			title: "",
			poster_path: "",
		},
		movie4: {
			id: 0,
			title: "",
			poster_path: "",
		},
		movie5: {
			id: 0,
			title: "",
			poster_path: "",
		},
	});
	const moviePrev: any = useSelector((state) => state);
	// setMovie(moviePrev.movies);
	console.log("movie: ", moviePrev);
	useEffect(() => {
		document.title = "Rate Movies";
		console.log("user info: ", user);
		// if (!isAuthenticated) {
		// 	window.location.href = "/login";
		// 	return;
		// }
		axios
			.post("http://localhost:5000/api/movies/user", {
				user,
			})
			.then((res) => {
				console.log(res.data, typeof res.data);
				setHasSubmitted(true);
				setMovie({
					movie1: {
						title: res.data.movies[0].title,
						poster_path: res.data.movies[0].poster_path,
						id: res.data.movies[0].id,
					},
					movie2: {
						title: res.data.movies[1].title,
						poster_path: res.data.movies[1].poster_path,
						id: res.data.movies[1].id,
					},
					movie3: {
						title: res.data.movies[2].title,
						poster_path: res.data.movies[2].poster_path,
						id: res.data.movies[2].id,
					},
					movie4: {
						title: res.data.movies[3].title,
						poster_path: res.data.movies[3].poster_path,
						id: res.data.movies[3].id,
					},
					movie5: {
						title: res.data.movies[4].title,
						poster_path: res.data.movies[4].poster_path,
						id: res.data.movies[4].id,
					},
				});
			})
			.catch((err) => {
				console.log("not found");
				console.log(err);
			});
	});

	const [valid, setValid] = useState(false);

	const checkValidity = () => {
		if (
			movie.movie1.title === "" ||
			movie.movie2.title === "" ||
			movie.movie3.title === "" ||
			movie.movie4.title === "" ||
			movie.movie5.title === ""
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
			const userMovies = new Array(0);
			userMovies.push(movie.movie1);
			userMovies.push(movie.movie2);
			userMovies.push(movie.movie3);
			userMovies.push(movie.movie4);
			userMovies.push(movie.movie5);
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
			<h1>Your Favourite Top 5 Movies</h1>
			<Container>
				<EnterMovies movie={movie.movie1} order="1" />
				<EnterMovies movie={movie.movie2} order="2" />
				<EnterMovies movie={movie.movie3} order="3" />
				<EnterMovies movie={movie.movie4} order="4" />
				<EnterMovies movie={movie.movie5} order="5" />
			</Container>
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
};

export default RateMovies;
