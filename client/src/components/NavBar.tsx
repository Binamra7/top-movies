/** @format */

import React from "react";
import {
	AuthContainer,
	NavContainer,
	Profile,
	ProfilePic,
} from "./NavBarStyles";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function NavBar() {
	let { user, isAuthenticated, loginWithPopup, loginWithRedirect, logout } =
		useAuth0();
	let profilePic, username,userId;
	if (user === undefined) user = {};
	if (user) {
		localStorage.setItem("user", JSON.stringify(user));
		profilePic = user.picture;
		username=user.name;
		userId=user.sub;
	}
	if (!isAuthenticated) {
		localStorage.removeItem("user");
	}
	return (
		<>
			<NavContainer>
				<Link to="/">Top5 Movies</Link>
				<Link to="/movies">Rate Movies</Link>
				<Link to="/about">About</Link>
				<AuthContainer>
					{!isAuthenticated && (
						<button onClick={() => loginWithRedirect()}>Log in</button>
					)}
					{isAuthenticated && (
						<Profile>
							<ProfilePic src={user.picture} alt="Profile" />
							<p>{user.given_name}</p>
							<button onClick={() => logout()}>Log out</button>
						</Profile>
					)}
				</AuthContainer>
			</NavContainer>
		</>
	);
}

export default NavBar;
