/** @format */

import React, { useState } from "react";
import { Button } from "./EnterMoviesStyles";
import InputPopup from "./InputPopup";

const EnterMovies = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log("clicked");
		setToggle(!toggle);
	};
	return (
		<div>
			<Button onClick={handleClick}>Add Movies</Button>
			{toggle && <InputPopup />}
		</div>
	);
};

export default EnterMovies;
