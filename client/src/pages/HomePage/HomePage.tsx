/** @format */

import MovieBox from "../../components/MovieBox";
import { Container } from "../../GlobalStyles";
import { HomePageContainer } from "./HomePageStyles";

const HomePage = () => {
	const sourceImg =
		"https://image.tmdb.org/t/p/w500//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg";
	const titleMov = "The Shawshank Redemption";
	// const src = /"";
	return (
		<>
			<h1 style={{ textAlign: "center" }}>
				Top 5 Best Rated Movies According To My Survey{" "}
			</h1>

			<HomePageContainer>
				<MovieBox source={sourceImg} title={titleMov} sno="1st" />
				<MovieBox source={sourceImg} title={titleMov} sno="2nd" />
				<MovieBox source={sourceImg} title={titleMov} sno="3rd" />
				<MovieBox source={sourceImg} title={titleMov} sno="4th" />
				<MovieBox source={sourceImg} title={titleMov} sno="5th" />
			</HomePageContainer>
		</>
	);
};

export default HomePage;
