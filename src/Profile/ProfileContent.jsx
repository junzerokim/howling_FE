import React, { useState } from 'react';
import styled from 'styled-components';
import profileImg from '../KakaoTalk_Photo_2023-02-14-17-39-05.jpeg';

function ProfileModal() {
  return (
    <ProfileState>
      <ProfileImg />
      <h1>USER NAME</h1>
      <p>username@email.com</p>
      <ProfileMenu>
        <ProfileBtn>내가 작성한 글</ProfileBtn>
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
  width: 70px;
  height: 70px;
  border-radius: 70%;
  background-image: url(${profileImg});
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
