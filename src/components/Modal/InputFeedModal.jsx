import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import KakaoMapScript from '../Map/KakaoMapScript';

function InputFeedModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapPosition, setMapPosition] = useState(null);
  const [text, setText] = useState({ title: '', detail: '' });
  const onChangetext = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
  const StyledModal = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '999' },
    content: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
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
        ({ lat, lon }) => {
          setMapPosition({ longitude: lat, latitude: lon });
        },
      );
    }
  }, [mapLoaded]);

  return (
    <>
      <Btn onClick={() => setModalIsOpen(true)}>+</Btn>
      <Modal style={StyledModal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {mapLoaded && <KakaoMapScript position={mapPosition} />}
        <CloseBtn onClick={() => setModalIsOpen(false)}>x</CloseBtn>
        <input id="title" name="title" onChange={onChangetext} />
        <input id="detail" name="detail" onChange={onChangetext} />
        <CreateBtn
          onClick={() => {
            console.log({
              position: mapPosition,
              content: text,
            });
            setModalIsOpen(false);
          }}
        >
          등록
        </CreateBtn>
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

const CloseBtn = styled.button`
  width: 15%;
  border: 0;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  font-size: 20px;
`;

const CreateBtn = styled.button`
  width: 15%;
  border: 0;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  font-size: 20px;
`;
