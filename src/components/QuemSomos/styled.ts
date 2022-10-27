import styled from "styled-components";

export const Container = styled.section`
    padding: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background: white;
`;

export const ContainerSobre = styled.div`
    margin-top: 2rem;
    width: 100%;
    max-width: 1240px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    img{
        flex: 1;
        filter: drop-shadow(0px 4px 20px #2E2E2E);
        border-radius: 8px;
   
    }

`;

export const Content = styled.div`
    width: 550px;

`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.0;

`;

export const TextP = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    text-align: justify;
    width: 500px;
    
`;
