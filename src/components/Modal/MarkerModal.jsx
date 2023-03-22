import styled from 'styled-components';
import Modal from 'react-modal';

function MarkerModal({ modalIsOpen, setModalIsOpen }) {
  const StyledModal = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '999' },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      transform: 'translate(40%, 0)',
      width: '50%',
      height: '50%',
      boxShadow: '0 0 5px 2px grey',
      borderRadius: '20px',
    },
  };

  return (
    <Modal
      style={StyledModal}
      isOpen={modalIsOpen.isOpen}
      onRequestClose={() => {
        setModalIsOpen(false);
      }}
    >
      <ModalId>{modalIsOpen.id}</ModalId>
    </Modal>
  );
}

export default MarkerModal;

const ModalId = styled.div`
  font-size: 100px;
`;
