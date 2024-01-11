import Modal from 'react-modal';
function ModalComponent(item) {
  return (
    <img
      src={item.image}
      alt="test paper"
      className="w-full h-full object-contain"
    />
  );
}

export default ModalComponent;
