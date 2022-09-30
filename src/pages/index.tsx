import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 41vh;
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
        <img src='/image/construction.svg' alt='' />
        <h1>Site em construção</h1>
    </Content>
  </Container>
  )
}

export default Home
