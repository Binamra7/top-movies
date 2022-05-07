/** @format */

import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(38, 38, 38, 0.8);
	z-index: 10;
	color: white;
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const MovieContainer = styled.div`
	position: absolute;
	top: 5rem;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Form = styled.form`
	display:flex;
	justify-content:center;
	align-items:center;					
	margin:1rem;
	width:100%;
`

export const Label = styled.div`
	z-index:999;
	color:white;
`

export const Input = styled.input`
	width: 50%;
	height: 40px;
	padding: 0 10px;
	border: none;
	border-radius: 5px;
	background-color: #fafafa;
	font-size: 16px;
	font-family: "Roboto", sans-serif;
	outline: none;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
	z-index: 999;
`;

export const Button = styled.button`
	width: 5rem;
	height: 2rem;
	border: none;
	border-radius: 5px;
	padding: 10px;
	font-size: 1.2rem;
	background-color: black;
	color: white;
	margin-bottom: 10px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const MoviesList = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 100%;
	border-radius: 5px;
	background-color: blue;
	padding: 3rem;
	overflow-y: scroll;
	overflow-x: hidden;
	z-index: 999;
`;
