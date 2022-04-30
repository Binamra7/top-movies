/** @format */

import React from "react";
import "./App.css";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage/HomePage";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About/About";
import RateMovies from "./pages/InputMovies/RateMovies";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="movies" element={<RateMovies />} />
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
			{/* <Home /> */}
			{/* <HomePage /> */}
			{/* <InputMovies /> */}
		</div>
	);
}

export default App;
