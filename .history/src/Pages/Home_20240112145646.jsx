import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('personInformation')
        .select('*') // Select all columns, you can specify specific columns if needed
        .eq('id', 34567890)
        .single();
      console.log('first', data);
      if (error) console.log('Error', error);
      else setData(data);
    };

    fetchData();
  }, []);
  return (
    <div className="mt-16 min-h-screen p-4 sm:px-10 md:px-20  flex flex-col lg:items-center">
      <div className="flex justify-center items-center">
        {console.log(data)}{' '}
        <img
          className="object-cover rounded-full w-72 border-4 border-blue-500 h-72 lg:w-1/2 lg:h-96 "
          src={data.userImage}
          alt="user"
        />
      </div>
      {/* <div className="flex flex-col bg-blue-300 rounded"> */}{' '}
      <div className="mt-5 font-bold text-lg lg:w-1/2">
        Personal Information
      </div>
      <div className="mt-2 lg:w-1/2">
        <span>Name:</span>
        <span className="ml-2">{data.fullName}</span>
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>DOB:</span>
          <span className="ml-2">{data.dateOfBirth}</span>
        </span>{' '}
        <span>
          {' '}
          <span>Gender:</span>
          <span className="ml-2">{data.gender}</span>
        </span>
      </div>{' '}
      {/* ******************** */}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Address:</span>
          <span className="ml-2">
            {data.city}-{data.address}
          </span>
        </span>
      </div>
      {/* ****************** */}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Contact Number:</span>
          <span className="ml-2">{data.contactNumber}</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Patient ID:</span>
          <span className="ml-2">{data.id}</span>
        </span>{' '}
      </div>
      {/* </div> */}
      {/* **********vital information*********** */}
      <div className="mt-5 font-bold text-lg lg:w-1/2">Vital Information</div>
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Blood Type:</span>
          <span className="ml-2">O+</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Height:</span>
          <span className="ml-2">172 cm</span>
        </span>{' '}
        <span>
          {' '}
          <span>weight:</span>
          <span className="ml-2">78 kg</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Blood Pressure:</span>
          <span className="ml-2">None</span>
        </span>{' '}
        <span>
          {' '}
          <span>Blood Sugar:</span>
          <span className="ml-2">None</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Cancer:</span>
          <span className="ml-2">None</span>
        </span>{' '}
      </div>{' '}
      {/* ***************Emergency Contacts********** */}
      <div className="mt-5 font-bold text-lg lg:w-1/2">Emergency Contacts</div>
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Name:</span>
          <span className="ml-2">Ahmad Ali muhammad</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Relationship to the patient:</span>
          <span className="ml-2">Boy</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 mb-5 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Contact Number:</span>
          <span className="ml-2">070 000 00 00</span>
        </span>{' '}
      </div>
    </div>
  );
}

export default Home;
