import { Link } from "react-scroll";
import styled from "styled-components";


export const Container = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    position: sticky;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#1e1e1e ;
    flex-direction: column;
    z-index: 999;
    
`;

export const TopInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    width: 100%;
    height: 3rem;
    text-align: center;

    div {

        color: white;
        display: flex; 
        align-items: center;
        justify-content: center;
        padding: 0 1rem ;
        gap: 1rem;

    }

p{

    color: white;
    padding: 1rem 1.5rem;
    line-height: 1.5;
    font-size: 0.85rem;

    @media screen and (max-width: 800px){
        font-size: 0.85rem;
    }
}
`;


export const HeaderContainer = styled.header`
    top: 0;
    width: 100%;
    max-width: 1240px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: space-between;
    height: 6rem;
    background: #1e1e1e;

    span{
        color: white;
    }
`;

interface IsOpenProps {
    open: boolean
}

export const NavbarContainer = styled.nav<IsOpenProps>`
    display: flex;
    width: 500px;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 800px){
        background-color: #1e1e1e;
        position: absolute;
        top:144px;
        left: ${({ open }) => open ? '0' : '-100%'};
        width: 100%;
        height: 84vh;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        transition: 0.5s all ease;
    }
    
`;

export const NavLink = styled(Link)`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        line-height: 1.6;
        transition: color 0.3s;
        color: white;
        cursor: pointer;

        &:hover{
            color: ${(props) => props.theme['blue-primary']};
        }

        @media screen and (max-width: 800px){
            &:hover{
            transition: all 0.9S ease-in;
            background: ${(props) => props.theme['blue-primary']};
            color: ${(props) => props.theme['black-900']};
        }
    }

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px){ 
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        svg{
        fill: #FFFF;
        margin-right: 0.5rem;
        }

    }
`;


export const LinkSocial = styled.a`
    color: white;

    cursor: pointer;
    transition: all 0.3s ease-in;

&:hover{
    color: ${(props) => props.theme['blue-primary']};
}

`;