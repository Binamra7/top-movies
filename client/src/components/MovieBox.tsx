/** @format */

import React, { FC } from "react";
import { Container } from "../GlobalStyles";
import { Movie, Image, MovieTitle, Rank } from "./MovieBoxStyles";

interface Props {
	source: string;
	title: string;
	sno: string;
}

const MovieBoxStyles: FC<any> = (props) => {
	return (
		<Container>
			<Movie>
				<Rank>{props.sno}</Rank>
				<Image src={props.source} alt="Failed to load" />
				<MovieTitle>{props.title}</MovieTitle>
			</Movie>
		</Container>
	);
};

export default MovieBoxStyles;
