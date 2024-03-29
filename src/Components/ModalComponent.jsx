/* eslint-disable react/prop-types */
// import { useParams } from 'react-router-dom';

function ModalComponent({ item }) {
  console.log(item);
  //   const { id } = useParams();
  //   const { data: singleItem } = useGetSingleProductQuery({ id });
  return (
    <div className="w-full overflow-y-auto flex justify-center items-center">
      <img
        src={item.image}
        alt="test paper"
        className="w-fit h-fit object-contain"
      />
    </div>
  );
}

export default ModalComponent;
