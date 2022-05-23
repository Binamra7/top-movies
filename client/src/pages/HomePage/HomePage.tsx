import MovieBox from "../../components/MovieBox";
import { Container } from "../../GlobalStyles";
import { HomePageContainer } from "./HomePageStyles";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
	const [movies, setMovies] = useState([
		{
			id: 1,
			title: "",
			poster_path: "",
		},
		{
			id: 1,
			title: "",
			poster_path: "",
		},
		{
			id: 1,
			title: "",
			poster_path: "",
		},
		{
			id: 1,
			title: "",
			poster_path: "",
		},
		{
			id: 1,
			title: "",
			poster_path: "",
		},
	]);

	useEffect(() => {
		axios.get("/api/movies").then((res) => {
			console.log("res", res.data);
			setMovies(res.data);
		});
	}, []);

	const BASE_IMG = "https://image.tmdb.org/t/p/w500";

	return (
		<>
			<h1 style={{ textAlign: "center" }}>
				Top 5 Best Rated Movies According To FilmStop{" "}
			</h1>

			<HomePageContainer>
				<MovieBox
					source={BASE_IMG + movies[0].poster_path}
					title={movies[0].title}
					sno="1st"
				/>
				<MovieBox
					source={BASE_IMG + movies[1].poster_path}
					title={movies[1].title}
					sno="2nd"
				/>
				<MovieBox
					source={BASE_IMG + movies[2].poster_path}
					title={movies[2].title}
					sno="3rd"
				/>
				<MovieBox
					source={BASE_IMG + movies[3].poster_path}
					title={movies[3].title}
					sno="4th"
				/>
				<MovieBox
					source={BASE_IMG + movies[4].poster_path}
					title={movies[4].title}
					sno="5th"
				/>
			</HomePageContainer>
		</>
	);
};

export default HomePage;
