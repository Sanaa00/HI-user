import Modal from 'react-modal';
// import { useParams } from 'react-router-dom';
function ModalComponent({ item }) {
  //   const { id } = useParams();
  //   const { data: singleItem } = useGetSingleProductQuery({ id });
  return (
    <div className="w-full overflow-y-auto flex justify-center items-center">
      <p>{item.id}</p>{' '}
      <img
        src={item.image}
        alt="test paper"
        className="w-fit h-fit object-contain"
      />
    </div>
  );
}

export default ModalComponent;
