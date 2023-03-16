import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

function InputFeedModal() {
  return <Btn>+</Btn>;
}

export default InputFeedModal;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  bottom: 0;
  left: 50vw;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: none;
  color: rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -80%);
  position: fixed;
  z-index: 1;
  :hover {
    /* width: 80px; */
    /* border-radius: 30px; */
    color: white;
    background-color: rgba(22, 64, 123, 1);
  }
`;
