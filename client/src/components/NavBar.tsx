/** @format */

import React from "react";
import { NavContainer } from "./NavContainer";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<NavContainer>
				<Link to="/">Top5 Movies</Link>
				<Link to="/movies">Rate Movies</Link>
				<Link to="/about">About</Link>
				<h1>Sign in</h1>
			</NavContainer>
		</>
	);
}

export default NavBar;
