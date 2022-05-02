/** @format */

import { Button, MoviesList } from "./InputPopupStyles";
import { Input, Overlay } from "./InputPopupStyles";
import React, { SetStateAction, useState } from "react";
import { Form } from "../pages/InputMovies/RateMoviesStyles";
import Movies from "./Movies";

const InputPopup = () => {
	const [movieName, setMovieName] = useState("");
	const [searchResults, setSearchResults] = useState([{}]);

	const API_KEY = "api_key=f5b09f41dd618287a9b5c448e9ef8d72";

	const BASE_URL = "https://api.themoviedb.org/3";
	const API_URL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const QUERY_URL = API_URL + movieName;
		const res: any = await fetch(QUERY_URL).catch((err) => console.log(err));
		const data = await res.json();
		await setSearchResults(data.results);
		console.log(QUERY_URL);
		console.log(data.results);
	};

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setMovieName(e.target.value);
	};

	// const handleSearch = () => {};
	return (
		<Overlay>
			<form
				onSubmit={handleSearch}
				style={{ display: "flex", marginBottom: "10px" }}
			>
				<label>Enter movie name:</label>
				<Input
					placeholder="Enter here"
					value={movieName}
					onChange={handleChange}
				/>
				<Button value="submit">Search</Button>
			</form>
			<MoviesList>
				{searchResults.map((movie: any, i) => {
                    return <Movies key={i} movie={movie} serial={i}/>;
				})}
			</MoviesList>
		</Overlay>
	);
};
export default InputPopup;
