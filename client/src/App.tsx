/** @format */

import React from "react";
import "./App.css";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage/HomePage";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About/About";
import RateMovies from "./pages/Movies/RateMovies";
import Login from "./pages/Login/Login";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { user } = useAuth0();
	console.log("user: ", user);
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="movies" element={<RateMovies />} />
					<Route path="about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
			{/* <Home /> */}
			{/* <HomePage /> */}
			{/* <InputMovies /> */}
		</div>
	);
}

export default App;
