import styled from 'styled-components';
import { GiWolfHowl } from 'react-icons/gi';
import Profile from '../Modal/ProfileModal';

function Header() {
  return (
    <HeaderContainer>
      <HiddenBox />
      <Logo />
      <Profile />
    </HeaderContainer>
  );
}

function Logo() {
  return (
    <LogoContainer>
      <GiWolfHowl size="50" style={{ color: 'rgb(22, 64, 123)' }} />
      Howling
    </LogoContainer>
  );
}

export default Header;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-style: italic;
  color: rgb(64, 63, 63);
  margin: 10px;
`;

const HiddenBox = styled.div`
  color: white;
  width: 70px;
  height: 70px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
