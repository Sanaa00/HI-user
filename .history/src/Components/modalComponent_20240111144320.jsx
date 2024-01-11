import Modal from 'react-modal';
function ModalComponent({ item }) {
  return (
    <img
      src={item.image}
      alt="test paper"
      className="w-fit h-fit object-contain"
    />
  );
}

export default ModalComponent;
