import styled from 'styled-components';

export const HomePageStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color:white;
    background-color: #000;
    @media (max-width: 768px) {
    flex-wrap:wrap;
    }
`;
export const HomePageContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;    
    grid-gap: 10px;    
    grid-template-areas:
        "header header"
        "main main";
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "header"
        "main";
    }
`;