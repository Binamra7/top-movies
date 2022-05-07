/** @format */

import React, { FC } from "react";
import { Movie, Poster, Title } from "./MoviesStyles";
import { useDispatch } from "react-redux";

interface movieProps {
	movie: {
		original_title: string;
		poster_path: string;
		id: number;
		serial: number;
	};
	serial: number;
	order: string;
}

const Movies: FC<movieProps> = (props) => {
	const dispatch = useDispatch();

	const IMG_URL = "https://image.tmdb.org/t/p/w300";
	const source = IMG_URL + props.movie.poster_path;

	const handleClick = () => {
		console.log(props.movie.id);
		console.log(props.serial);
		console.log(props.movie.original_title);
		dispatch({
			type: `ADD_MOVIE_${props.order}`,
			payload: {
				id: props.movie.id,
				title: props.movie.original_title,
				poster_path: props.movie.poster_path,
			},
		});
		//reload window
		// window.location.reload();
	};

	return (
		<>
			<Movie onClick={handleClick}>
				<Poster src={source} alt="Failed to load" />
				<Title>
					{props.serial + 1}.&nbsp;
					{props.movie.original_title}
				</Title>
			</Movie>
		</>
	);
};

export default Movies;
