import { React, useState } from 'react';
import styled from 'styled-components';
import { GiWolfHowl } from 'react-icons/gi';
import Profile from '../Modal/ProfileModal';

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '30px',
        fontStyle: 'italic',
        color: 'rgb(64, 63, 63)',
      }}
    >
      <GiWolfHowl size="50" style={{ color: 'rgb(22, 64, 123)' }} />
      Howling
    </div>
  );
}

function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Logo />
      <Profile />
    </div>
  );
}

export default Header;
