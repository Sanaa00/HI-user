import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ModalComponent from '../Components/ModalComponent';
import Pagination from '../Components/Pagination';
import { supabase } from '../supabaseClient';
import Laboratory from '../assets/images/Laboratory.svg';
function LaboratoryExamination() {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 6;
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('laboratoryExamination')
        .select('*');
      console.log('first', data);
      if (error) console.log('Error', error);
      else setData(data);
    };

    fetchData();
  }, []);
  const endOffset = itemOffset + itemsPerPage;
  useEffect(() => {
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [endOffset, itemOffset, itemsPerPage, data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    window.scrollTo(0, 0);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="mt-10 min-h-screen p-4 sm:px-10 md:px-20">
      {' '}
      <div className="mt-5 font-bold text-lg">Laboratory Examination</div>
      {data.length === 0 ? (
        <div className="w-full flex-col  mt-32 flex justify-center items-center">
          <img src={Laboratory} alt="No Laboratory Examination" />
          <p className="font-semibold text-neutral-300">No Result</p>
        </div>
      ) : (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3 ">
          {currentItems.map((item) => {
            return (
              <div key={item.id} className="mt-5  bg-neutral-100 rounded-md">
                <button onClick={openModal} className="w-full h-60">
                  <img
                    src={item.image}
                    alt="test paper"
                    className=" h-60 object-cover"
                  />
                </button>
                <Modal
                  onRequestClose={closeModal}
                  isOpen={modalIsOpen}
                  style={customStyles}
                >
                  <ModalComponent item={item} />
                </Modal>
                <div className="p-4 flex justify-between items-center ">
                  <span>{item.name}</span>
                  <span>{item.Date}</span>
                </div>
              </div>
            );
          })}{' '}
          <Pagination
            itemsPerPage={6}
            allData={data}
            pageCount={pageCount}
            setItemOffset={setPageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      )}
    </div>
  );
}

export default LaboratoryExamination;
