import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Start() {
  return (
    <Container>
      <LogoImg
        animate={{ y: 0, scale: 1 }}
        initial={{ y: -100, scale: 0 }}
        transition={{ type: 'spring', duration: 3, bounce: 0.3 }}
        src="/image/howlingLogo.png"
        alt="logo-img"
      />
      <Title>Howling</Title>
    </Container>
  );
}

export default Start;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(35, 35, 70);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled(motion.img)`
  width: 240px;
  height: 240px;
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
`;
