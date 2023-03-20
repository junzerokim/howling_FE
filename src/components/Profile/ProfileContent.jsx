import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
// import profileImg from '../KakaoTalk_Photo_2023-02-14-17-39-05.jpeg';
// import profileImg from '../../../public/image/youngmin.jpeg';
import MyFeedContent from '../Feed/MyFeedContent';

function ProfileModal() {
  const [clickMyFeed, setClickMyFeed] = useState(false);
  const ModalStyle = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '999' },
    content: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      top: '60px',
      left: '50%',
      width: 'fit-content',
      height: '80%',
      transform: 'translate(-50%, 0)',
      border: '0',
      boxShadow: '0 0 5px 2px grey',
      borderRadius: '20px',
    },
  };
  return (
    <ProfileState>
      <ProfileImg />
      <h1>USER NAME</h1>
      <p>username@email.com</p>
      <ProfileMenu>
        <ProfileBtn onClick={() => setClickMyFeed(true)}>내가 작성한 글</ProfileBtn>
        <Modal style={ModalStyle} isOpen={clickMyFeed} onRequestClose={() => setClickMyFeed(false)}>
          <CloseBtn onClick={() => setClickMyFeed(false)}>X</CloseBtn>
          <MyFeedContent />
        </Modal>
        <ProfileBtn>설정</ProfileBtn>
        <ProfileBtn>로그아웃</ProfileBtn>
      </ProfileMenu>
    </ProfileState>
  );
}

export default ProfileModal;

const ProfileState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* position: absolute; */
  gap: 10px;
`;

const ProfileBtn = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  text-align: start;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
`;

const ProfileImg = styled.div`
  background-image: url('/image/youngmin.jpeg');
  width: 70px;
  height: 70px;
  border-radius: 70%;
  background-size: cover;
  display: block;
`;

const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
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
