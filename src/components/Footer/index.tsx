/* eslint-disable @next/next/no-img-element */
import { Copy, FooterContainer, FooterContent } from "./styles";

export function Footer(){
    return (
        <FooterContainer>
            <FooterContent>
            <img src="/image/LogoWithe.svg" alt="" />
            <div>
                <h4>Endereço:</h4>
                <p>Av. Ildefonso Simões Lopes, 1156</p>
            </div>

            <div>
                <h4>Contato:</h4>
                <p>Marcus Spohr e Débora Spohr</p>
                <p>Fone / whats: (53) 9 8114 1516 </p>
                <p>marcuspohr@gmail.com</p>
            </div>
            </FooterContent>


            <Copy>
            <p>DESENVOLVIDO POR COMUNICAÇÃO GERANDO EM DEUS | COPYRIGHT © 2022 – TODOS OS DIREITOS RESERVADOS.</p>
            </Copy>
        </FooterContainer>
    )
}