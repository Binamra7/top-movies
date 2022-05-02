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
    
`;
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
`;

export const MoviesList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	background-color: red;
    padding:1rem;
	overflow: scroll;
`;
