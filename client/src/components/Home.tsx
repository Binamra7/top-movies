/** @format */

import React, { useState } from "react";

const Home = () => {
	const [query, setQuery] = useState("");
	const [moviesList, setMoviesList] = useState([{}]);
	const API_KEY = "api_key=f5b09f41dd618287a9b5c448e9ef8d72";
	const IMG_URL = "https://image.tmdb.org/t/p/w300";
	const BASE_URL = "https://api.themoviedb.org/3";
	const API_URL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const QUERY_URL = API_URL + query;
		const res: any = await fetch(QUERY_URL).catch((err) => console.log(err));
		const data = await res.json();
		await setMoviesList(data.results);
		console.log(QUERY_URL);
		console.log(data.results);
	};
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="query">Search</label>
			<input id="query" type="text" onChange={changeHandler} value={query} />
			<button type="submit">Search</button>
			<div>
				{moviesList.map((movie: any, i) => {
					return (
						<div style={{ backgroundColor: "red", margin: "1rem" }} key={i}>
							<h1>{movie.title}</h1>
							<p>{movie.release_date.slice(0, 4)}</p>
							<img
								src={IMG_URL + movie.poster_path}
								alt="Failed to load"
							/>
						</div>
					);
				})}
			</div>
			{/* <button type="submit">Fetch Movies</button> */}
		</form>
	);
};

export default Home;
