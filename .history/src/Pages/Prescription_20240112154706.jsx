import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Medical from '../assets/images/Medical.svg';
function Prescription() {
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
  const prescriptions = [
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
          <img src={Medical} alt="No Laboratory Examination" />
          <p className="font-semibold text-neutral-300">No Result</p>
        </div>
      ) : (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3 ">
          {prescriptions.map((item) => {
            return (
              <div key={item.id} className="mt-5  bg-neutral-100 rounded-md">
                <img
                  src="https://management.ind.in/img/a/ESIC-Medical-Lab-Technician-Exam-paper-2.jpg"
                  alt="test paper"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex justify-between items-center ">
                  <span>{item.name}</span>
                  <span>{item.Date}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Prescription;
