import styled from "styled-components";

export const Content = styled.div`
  margin-top: -100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  @media screen and (max-width: 1300px){
    height: 450px;
  }

`;

export const Container = styled.div`
  width: 100%;
  height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/image/teste.png');
  background-repeat: no-repeat;
  background-size:cover;
  text-align: center;
  background-position: center;

  p{
    color: white;
  }
  @media screen and (max-width: 1300px){
    height: 500px;
  }


`;

export const ContainerToo = styled.div`
  width: 100%;
  height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/image/imagemSobre.png');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  background-position: center;


  @media screen and (max-width: 1300px){
    height: 500px;
  }
`;