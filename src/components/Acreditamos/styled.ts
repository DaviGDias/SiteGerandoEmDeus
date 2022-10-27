import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background: ${(props) => props.theme['black-200']};
height: 800px;

`;

export const ContainerContent = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    gap: 3rem;
`;