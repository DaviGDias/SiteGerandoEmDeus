/* eslint-disable @next/next/no-img-element */
import {useState} from 'react'
import {
    Container,
    HeaderContainer, MobileIcon, NavbarContainer, TopInfo,

} from "./styles";
import {FaBars, FaTimes } from 'react-icons/fa'
import {RiFacebookFill, RiInstagramFill} from 'react-icons/ri'
import Link from 'next/link';

export function Header() {

    const [isOpen, setOpem] = useState(false)

    function handleOpenMenu(){
        setOpem(!isOpen)
    }
    return (

        <Container>
            <TopInfo>
                <p>Culto presencial aos domingos, 19h. Demais atividades: consulte nossas redes sociais!</p>
                <div>
                    <Link target='_blank' href='https://www.facebook.com/GerandoemDeus'>
                        <RiFacebookFill size={24}/>
                    </Link>
                    <Link target='_blank' href='https://www.instagram.com/gerandoemdeuspelotas/'>
                    <RiInstagramFill size={24}/>
                    </Link>
                </div>
            </TopInfo>
            <HeaderContainer>
                <img src="/image/logo.svg" alt="" />
                <MobileIcon onClick={handleOpenMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </MobileIcon>
                <NavbarContainer open={isOpen}>            
                    <a>Inicio</a>
                    <a>Sobre</a>
                    <a>Pastores</a>
                    <a>Contato</a>
                </NavbarContainer>
            </HeaderContainer>

        </Container>
    )
}