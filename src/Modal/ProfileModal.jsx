import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ProfileContent from '../Profile/ProfileContent';
import profileImg from '../KakaoTalk_Photo_2023-02-14-17-39-05.jpeg';

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
      <ProfileImg onClick={() => setModalIsOpen(true)} />
      <Modal style={StyledModal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <CloseBtn onClick={() => setModalIsOpen(false)}>X</CloseBtn>
        <ProfileContent />
      </Modal>
    </>
  );
}

export default ProfileModal;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70%;
  background-image: url(${profileImg});
  background-size: cover;
  display: block;
  cursor: pointer;
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
