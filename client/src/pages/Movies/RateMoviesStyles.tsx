/** @format */

import styled from "styled-components";

export const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 5px;
	padding: 10px;
	font-size: 1.2rem;
	background-color: grey;
	margin-bottom: 10px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	width: 100%;
	height: 100%;
	background-color: green;

	border-radius: 5px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const Label = styled.label`
	font-size: 1.2rem;
	margin-bottom: 10px;
`;

