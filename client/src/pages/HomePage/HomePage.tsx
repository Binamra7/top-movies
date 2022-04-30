/** @format */

import MovieBox from "../../components/MovieBox";
import { Container } from "../../GlobalStyles";
import { HomePageStyles } from "./HomePageStyles";

const HomePage = () => {
	const sourceImg =
		"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-";
	const titleMov = "The Shawshank Redemption";
	// const src = /"";
	return (
		<>
			<h1 style={{ textAlign: "center" }}>
				Top 5 Best Rated Movies According To My Survey{" "}
			</h1>
			{/* <HomePageStyles> */}
			<Container>
				<MovieBox source={sourceImg} title={titleMov} sno="1st" />
				<MovieBox source={sourceImg} title={titleMov} sno="2nd" />
				<MovieBox source={sourceImg} title={titleMov} sno="3rd" />
				<MovieBox source={sourceImg} title={titleMov} sno="4th" />
				<MovieBox source={sourceImg} title={titleMov} sno="5th" />
				{/* </HomePageStyles> */}
			</Container>
		</>
	);
};

export default HomePage;
