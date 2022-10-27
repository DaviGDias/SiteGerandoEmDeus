/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import styled from 'styled-components'
import { Acreditamos } from '../components/Acreditamos';
import { Carrousel } from '../components/Carrousel';
import { QuemSomos } from '../components/QuemSomos';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 80px;
  gap: 3rem;

  img{
    width: 350px;
  }
`;

const Home: NextPage = () => {
  return (
  <Container>
    <Content>
      <Carrousel />
      <QuemSomos />
      <Acreditamos />
        <img src='/image/construction.svg' alt='' />
        <h1>Site em construção</h1>
    </Content>
  </Container>
  )
}

export default Home
