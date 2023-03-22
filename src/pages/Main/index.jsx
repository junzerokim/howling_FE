// import { isVisible } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../../components/Map/KakaoMap';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import InputFeedModal from '../../components/Modal/InputFeedModal';
import MarkerModal from '../../components/Modal/MarkerModal';

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState({ isOpen: false, id: null });
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2500);
  });

  return (
    <Container>
      {/* {!load && <Intro />} */}
      <Header />
      <KakaoMap setModalIsOpen={setModalIsOpen} />
      <MarkerModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <InputFeedModal />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
