import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import KakaoMapScript, { addData } from '../Map/KakaoMapScript';
import InputFeedContent from '../Feed/InputFeedContent';

function InputFeedModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapPosition, setMapPosition] = useState(null);
  const [feedInfo, setFeedInfo] = useState(null);
  const StyledModal = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '999' },
    content: {
      position: 'fixed',
      top: '15%',
      left: '50%',
      width: '30%',
      height: '70%',
      transform: 'translate(-50%, 0)',
      border: '0',
      boxShadow: '0 0 5px 2px grey',
      borderRadius: '20px',
    },
  };

  useEffect(() => {
    if (!mapLoaded) {
      KakaoMapScript(
        () => {
          setMapLoaded(true);
        },
        (currentPosition) => {
          setMapPosition(currentPosition);
        },
      );
    }
  }, [mapLoaded]);

  // 사용자가 입력한 피드의 제목과 내용을 상태로 저장
  const handleTextChange = ({ detail }) => {
    setFeedInfo({ detail });
  };

  const handleCreateBtn = () => {
    console.log({
      position: mapPosition,
      content: feedInfo,
    });
    addData(mapPosition.lat, mapPosition.lon);
    setModalIsOpen(false);
  };

  return (
    <>
      <Btn onClick={() => setModalIsOpen(true)}>+</Btn>
      <Modal style={StyledModal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {mapLoaded && <KakaoMapScript position={mapPosition} />}
        <Container>
          <CloseBtn onClick={() => setModalIsOpen(false)}>x</CloseBtn>
          <InputFeedContent onTextChange={handleTextChange} />
          <CreateBtn onClick={handleCreateBtn}>등록</CreateBtn>
        </Container>
      </Modal>
    </>
  );
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const CloseBtn = styled.button`
  width: 15%;
  border: 0;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  font-size: 20px;
  margin-left: auto;
`;

const CreateBtn = styled.button`
  width: 15%;
  border: 0;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  font-size: 20px;
  margin-bottom: 20px;
`;
