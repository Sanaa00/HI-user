import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ModalComponent from '../Components/modalComponent';
import Pagination from '../Components/Pagination';
import { supabase } from '../supabaseClient';

function LaboratoryExamination() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('personInformation')
        .select('*'); // Select all columns, you can specify specific columns if needed
      // .eq('id', 34567890)
      // .single();
      console.log('first', data);
      if (error) console.log('Error', error);
      else setData(data);
    };

    fetchData();
  }, []);

  const Laboratory = [
    {
      id: 1,
      name: 'Test1',
      Date: '1-1-2000',
      image:
        'https://www.sinotester.com/Uploads/image/20180305/20180305024600_57318.jpg',
    },
    {
      id: 2,
      name: 'Test2',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 3,
      name: 'Test3',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 4,
      name: 'Test4',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 5,
      name: 'Test5',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
  ];
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
      // height: 'fit',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="mt-10 min-h-screen p-4 sm:px-10 md:px-20">
      <div className="mt-5 font-bold text-lg">Laboratory Examination</div>
      <div>{console.log(data)}</div>
      {/* {data.map((item) => (
        <div key={item.id}>
          <div> {item.cardId}</div>
          <div> {item.fullName}</div>
          <div> {item.contactNumber}</div>
          <div> {item.gender}</div>
        </div> */}
      {/* ))}{' '} */}
      {/* <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3 ">
        {Laboratory.map((item) => {
          return (
            <div key={item.id} className="mt-5  bg-neutral-100 rounded-md">
              <button onClick={openModal} className="w-full h-60">
                <img
                  src={item.image}
                  alt="test paper"
                  className="w-full h-60 object-cover"
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
        })}
      </div> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default LaboratoryExamination;
