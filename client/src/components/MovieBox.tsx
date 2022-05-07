/** @format */

import React, { FC, useState } from "react";
import { Container } from "../GlobalStyles";
import { Movie, Image, MovieTitle, Rank } from "./MovieBoxStyles";

interface Props {
	source: string;
	title: string;
	sno: string;
}
const MovieBoxStyles: FC<any> = (props) => {
	// const image =
	// 	"https://image.tmdb.org/t/p/w500//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg";
	const IMG_URL = "https://image.tmdb.org/t/p/w300";
	const FINAL_IMG_URL = IMG_URL + props.source;
	return (
		<>
			<Container>
				<Movie>
					<Rank>{props.sno}</Rank>
					<Image src={props.source} alt="Failed to load" />
					<MovieTitle>{props.title}</MovieTitle>
				</Movie>
			</Container>
		</>
	);
};

export default MovieBoxStyles;
