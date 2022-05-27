/** @format */

import {
	Button,
	MovieContainer,
	MoviesList,
	Label,
	Form,
} from "./InputPopupStyles";
import { Input, Overlay } from "./InputPopupStyles";
import React, { FC, SetStateAction, useState } from "react";
import Movies from "./Movies";

interface props {
	order: string;
}

const InputPopup: FC<props> = (props) => {
	const [movieName, setMovieName] = useState("");
	const [searchResults, setSearchResults] = useState([{}]);

	const API_KEY = "api_key=f5b09f41dd618287a9b5c448e9ef8d72";

	const BASE_URL = "https://api.themoviedb.org/3";
	const API_URL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const QUERY_URL = API_URL + movieName;
		console.log(QUERY_URL);
		const res: any = await fetch(QUERY_URL).catch((err) => console.log(err));
		const data = await res.json();
		console.log(data);
		setSearchResults(data.results);
	};

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setMovieName(e.target.value);
	};
	return (
		<MovieContainer>
			<Form onSubmit={handleSearch}>
				<Label>Enter movie name:&nbsp; </Label>
				<Input
					placeholder="Enter here"
					value={movieName}
					onChange={handleChange}
				/>
				<Button value="submit">Search</Button>
			</Form>
			<MoviesList>
				{searchResults.length > 1 &&
					searchResults.map((movie: any, i) => {
						return (
							<Movies key={i} movie={movie} serial={i} order={props.order} />
						);
					})}
			</MoviesList>
		</MovieContainer>
	);
};
export default InputPopup;
