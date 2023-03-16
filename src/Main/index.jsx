// import { isVisible } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Header from '../Header';
import Start from '../Start';

function Main() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2500);
  });

  return (
    <Container>
      {/* {!load && <Start />} */}
      <Header />
      <KakaoMap />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
