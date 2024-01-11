import Modal from 'react-modal';
function ModalComponent({ item }) {
  return (
    <Modal>
      {' '}
      <img
        src={item.image}
        alt="test paper"
        className="w-fit h-fit object-contain"
      />
    </Modal>
  );
}

export default ModalComponent;
