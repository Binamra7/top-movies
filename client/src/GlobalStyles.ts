import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: white;
    color:black;
    // margin: 0px;
    overflow: hidden;
    @media (max-width: 768px) {
    flex-wrap:wrap;
    }
`;


