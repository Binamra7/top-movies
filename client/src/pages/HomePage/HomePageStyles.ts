import styled from 'styled-components';

// export const HomePageStyles = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     width: 100%;
//     color:white;
//     background-color: #000;
//     @media (max-width: 768px) {
//     flex-wrap:wrap;
//     }
// `;
export const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:434px;
    width:192px;
    // place-items: center;
    // grid-gap: 10px;    
    // grid-area: 1 / 1 / 2 / 2;  
    // grid-template-areas: "head head head head"
    //                    "nav  main"
    //                    "nav  foot";
//   grid-template-rows: 1fr 1fr 1fr;   
//   grid-template-columns: 1fr 1fr 1fr;

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