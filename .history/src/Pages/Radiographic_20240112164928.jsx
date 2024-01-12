import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Radiography from '../assets/images/Radiography.svg';
import Pagination from '../Components/Pagination';
function RadiographicExamination() {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemOffset, setItemOffset] = useState([]);
  const endOffset = itemOffset + itemsPerPage;
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('radiographicExamination')
        .select('*') // Select all columns, you can specify specific columns if needed
        .eq('patientID', 34567890);
      console.log('first', data);
      if (error) console.log('Error', error);
      else setData(data);
    };

    fetchData();
  }, []);
  console.log('radiographic ', data);
  const radiographics = [
    {
      id: 1,
      name: 'prescription',
      Date: '1-1-2000',
      image:
        'https://www.sinotester.com/Uploads/image/20180305/20180305024600_57318.jpg',
    },
    {
      id: 2,
      name: 'prescription',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 3,
      name: 'prescription',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 4,
      name: 'prescription',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
    {
      id: 5,
      name: 'prescription',
      Date: '1-1-2000',
      image:
        'https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-5.jpg',
    },
  ];
  return (
    <div className="mt-10 min-h-screen p-4 sm:px-10 md:px-20">
      <div className="mt-5 font-bold text-lg">Laboratory Examination</div>
      {data.length === 0 ? (
        <div className="w-full flex-col  mt-32 flex justify-center items-center">
          <img src={Radiography} alt="No Laboratory Examination" />
          <p className="font-semibold text-neutral-300">No Result</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3 ">
            {data.map((item) => {
              return (
                <div key={item.id} className="mt-5  bg-neutral-100 rounded-md">
                  <img
                    src={item.image}
                    alt="test paper"
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 flex justify-between items-center ">
                    <span>{item.examinationType}</span>
                    <span>{item.dateOfExamination}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination itemsPerPage={6} allData={data} />
        </div>
      )}
    </div>
  );
}

export default RadiographicExamination;
