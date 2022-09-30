import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme['black-900']};

`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    margin-top: 3rem;
    align-items: flex-start;
    padding: 0 2rem;
    justify-content: space-between;
    height: 100%;

    img {
        width: 300px;
    }

    h4{
        margin-bottom: 1rem;
        color: white;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    div > p {
        color: white;
        line-height: 1.6;
    }

    @media screen and (max-width: 850px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        img{
            display: none;
        }

        div{
            margin-bottom: 2rem;
        }


    }

`;

export const Copy = styled.div`
    margin-top: 2rem;
    padding: 0 2rem;
    width: 100%;
  
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background:${(props) => props.theme['black']};

    p{
        font-size: 0.75rem;
        line-height: 1.6;

    }
`;


