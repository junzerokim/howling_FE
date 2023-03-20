import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ProfileContent from '../Profile/ProfileContent';

function ProfileModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const StyledModal = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '999' },
    content: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      top: '17px',
      left: '100%',
      width: 'fit-content',
      height: '40%',
      transform: 'translate(-105%, 0)',
      border: '0',
      boxShadow: '0 0 5px 2px grey',
      borderRadius: '20px',
    },
  };

  return (
    <>
      <ProfileImg src="/image/youngmin.jpeg" onClick={() => setModalIsOpen(true)} />
      <Modal style={StyledModal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <CloseBtn onClick={() => setModalIsOpen(false)}>X</CloseBtn>
        <ProfileContent />
      </Modal>
    </>
  );
}

export default ProfileModal;

const ProfileImg = styled.div`
  background-image: url('/image/youngmin.jpeg');
  width: 70px;
  height: 70px;
  border-radius: 70%;
  background-size: cover;
  display: block;
`;

const CloseBtn = styled.button`
  width: 15%;
  border: 0;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  font-size: 20px;
`;
