/** @format */

import { configureStore } from "@reduxjs/toolkit";

const movieReducer = (state: any = {}, action: any) => {
	switch (action.type) {
		case "ADD_MOVIE_1": {
			return {
				...state,
				movie1: action.payload,
			};
		}
		case "ADD_MOVIE_2": {
			return {
				...state,
				movie2: action.payload,
			};
		}
		case "ADD_MOVIE_3": {
			return {
				...state,
				movie3: action.payload,
			};
		}
		case "ADD_MOVIE_4": {
			return {
				...state,
				movie4: action.payload,
			};
		}
		case "ADD_MOVIE_5": {
			return {
				...state,
				movie5: action.payload,
			};
		}
		default:
			return state;
	}
};

const store = configureStore({
	reducer: {
		// reducer
		movies: movieReducer,
	},
	middleware: [
		// middleware
	],
	devTools: true,
	enhancers: [
		// enhancers
	],
});

export default store;
