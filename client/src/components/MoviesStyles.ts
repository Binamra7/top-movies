import styled from 'styled-components';


export const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    color:white;
    text-align: left;
    
`;


export const Movie = styled.div`
    
    width: 100%;
    height: 100%;
    display: grid;
    place-items: right;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    // display:flex;
    // flex-direction: column;
   
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 5px;
    background-color:green;
    margin-top:10px;
`;

    export const Poster = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    `;