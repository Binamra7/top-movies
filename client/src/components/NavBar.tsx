import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	AuthContainer,
	NavContainer,
	Profile,
	ProfilePic,
} from "./NavBarStyles";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type UserInfo = {
	given_name: string;
	sub: string;
	picture: string;
};

function NavBar() {
	const dispatch = useDispatch();
	const [User, setUser] = useState<UserInfo>({
		given_name: "",
		sub: "",
		picture: "",
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
	useEffect(() => {
		if (isAuthenticated) {
			setIsLoggedIn(true);
			setUser({
				given_name: user?.given_name || "",
				sub: user?.sub || "",
				picture: user?.picture || "",
			});
		}
	}, [isAuthenticated, user]);

	return (
		<>
			<NavContainer>
				<Link to="/">Top5 Movies</Link>
				<Link to="/movies">Rate Movies</Link>
				<Link to="/about">About</Link>
				<AuthContainer>
					{!isLoggedIn && (
						<button onClick={() => loginWithRedirect()}>Log in</button>
					)}
					{isLoggedIn && (
						<Profile>
							<ProfilePic src={User.picture} alt="Profile" />
							<p>{User.given_name}</p>
							<button onClick={() => logout()}>Log out</button>
						</Profile>
					)}
				</AuthContainer>
			</NavContainer>
		</>
	);
}

export default NavBar;
