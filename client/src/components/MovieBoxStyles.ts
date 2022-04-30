/** @format */

import styled from "styled-components";

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width:100%;
    margin: 10px 2px;    
    background-color: white;
    box-shadow: 3px 3px 20px #3b3b3b;
    border-radius:10px;
   
`;

export const Rank = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    width:10%;
    height:10%;
    margin-bottom:1rem;
    
`;

export const Image = styled.img`
    height: 70%;
    width:100%;
    object-fit: cover;
    margin-bottom:1rem;
    `;

export const MovieTitle = styled.h1`
    display: flex;
    justify-content: left;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    width:100%;
    height:20%;
    margin-bottom:1rem;
    margin-left:20px;
`;
    
