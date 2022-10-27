/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import {Container,HeaderContainer, LinkSocial, MobileIcon, NavbarContainer, NavLink, TopInfo} from "./styles";
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiFacebookFill, RiInstagramFill } from 'react-icons/ri'

export function Header() {

    const [isOpen, setOpem] = useState(false)


    function handleOpenMenu() {
        setOpem(!isOpen)
    }
    return (

        <Container>
            
                <TopInfo>
                    <p>Culto todo o domingo às 19h e quartas às 20h. Demais atividades: consulte nossas redes sociais!</p>
                    <div>
                        <LinkSocial target='_blank' href='https://www.facebook.com/GerandoemDeus' >
                            <RiFacebookFill size={24} />
                        </LinkSocial>
                        <LinkSocial target={'_blank'} href='https://www.instagram.com/gerandoemdeuspelotas/'>
                            <RiInstagramFill size={24} />
                        </LinkSocial>
                    </div>
                </TopInfo>
                <HeaderContainer>
                    <img src="/image/logo.svg" alt="" />
                    <MobileIcon onClick={handleOpenMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </MobileIcon>
                    <NavbarContainer open={isOpen}>
                        <NavLink to='inicio' spy={true} smooth={true} offset={-300} duration={500} delay={200} onClick={handleOpenMenu}>Inicio</NavLink>
                        <NavLink to='QuemSomos' spy={true} smooth={true} offset={1} duration={500} delay={200}>Quem Somos</NavLink>
                        <NavLink to='Acreditamos' spy={true} smooth={true} offset={-150} duration={500} delay={200}>Acreditamos</NavLink>
                        <NavLink to=''>Pastores</NavLink>
                    </NavbarContainer>
                </HeaderContainer>
           
        </Container>
    )
}