/** @format */

import React, { FC, useState } from "react";

import { Button } from "./EnterMoviesStyles";
import InputPopup from "./InputPopup";
import { Overlay } from "./InputPopupStyles";
import MovieBox from "./MovieBox";

interface movieDetail {
	movie: {
		title: string;
		poster_path: string;
		id: number;
	};
	order: string;
}

const EnterMovies: FC<movieDetail> = (props) => {
	const [toggle, setToggle] = useState(false);

	const handleClick = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setToggle(!toggle);
	};
	// console.log("props.movie", props.movie);
	const sourceImg =
		"https://image.tmdb.org/t/p/w500//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg";

	const IMG_URL = "https://image.tmdb.org/t/p/w500";
	// const POSTER_PATH = IMG_URL + props.movie.poster_path;
	// const plusSrc =
	// 	"https://thumbs.dreamstime.com/b/add-icon-flat-illustration-plus-sign-symbol-vector-174197726.jpg";

	const plusSrc = "http://cdn.onlinewebfonts.com/svg/img_509363.png";
	return (
		<div>
			{toggle && <Overlay onClick={() => setToggle(!toggle)} />}
			<Button onClick={handleClick}>
				{props.movie === undefined ? (
					<MovieBox source={plusSrc} title={"Add movie"} sno={props.order} />
				) : (
					<MovieBox
						source={IMG_URL + props.movie.poster_path}
						title={props.movie.title}
						sno={props.order}
					/>
				)}
			</Button>
			{toggle && <InputPopup order={props.order} />}
		</div>
	);
};

export default EnterMovies;
