import React, { useEffect } from 'react';
import styled from 'styled-components';
import KakaoMapScript from './KakaoMapScript';

export default function KakaoMap({ setModalIsOpen }) {
  useEffect(() => {
    KakaoMapScript(setModalIsOpen);
  }, []);

  return <Map id="map" />;
}

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;
