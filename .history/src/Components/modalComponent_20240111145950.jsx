import Modal from 'react-modal';
// import { useParams } from 'react-router-dom';
function ModalComponent({ item }) {
  //   const { id } = useParams();
  //   const { data: singleItem } = useGetSingleProductQuery({ id });
  return (
    <Modal className="mt-10">
      <p>{item.id}</p>{' '}
      <img
        src={item.image}
        alt="test paper"
        className="w-fit h-fit object-contain"
      />
    </Modal>
  );
}

export default ModalComponent;
