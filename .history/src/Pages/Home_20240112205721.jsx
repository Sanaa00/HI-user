import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdPermIdentity } from 'react-icons/md';
import { CiPhone } from 'react-icons/ci';
import { GrLocation } from 'react-icons/gr';
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('personInformation')
        .select('*')
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
      {/* <div className="mt-5 text-center font-bold text-lg lg:w-1/2">
        Personal Information
      </div> */}
      <div className="mt-3 lg:w-1/2 flex justify-center items-center">
        {/* <span>Name:</span> */}
        <span className="ml-2 font-semibold">{data.fullName}</span>
      </div>{' '}
      {/* <div className="mt-2 flex justify-between items-center lg:w-1/2"> */}
      {/* <span>
          {' '}
          <span>DOB:</span>
          <span className="ml-2">{data.dateOfBirth}</span>
        </span>{' '}
        <span>
          {' '}
          <span>Gender:</span>
          <span className="ml-2">{data.gender}</span>
        </span> */}
      {/* </div>{' '} */}
      <div className="bg-blue-400 text-neutral-50 rounded-md p-4 shadow ">
        {' '}
        <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span className="flex items-center flex-row">
            {' '}
            <span>
              <GrLocation />
            </span>
            <span className="ml-2">
              {data.city}-{data.address}
            </span>
          </span>
        </div>
        {/* ****************** */}
        <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span className="flex items-center">
            {' '}
            <span>
              <CiPhone />
            </span>
            <span className="ml-2">{data.contactNumber}</span>
          </span>{' '}
        </div>{' '}
        <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span className="flex items-center">
            {' '}
            <span>
              <MdPermIdentity />
            </span>
            <span className="ml-2">{data.id}</span>
          </span>{' '}
        </div>
      </div>
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
          <span className="ml-2">{data.emergencyContactName}</span>
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
          <span className="ml-2">{data.emergencyContactNumber}</span>
        </span>{' '}
      </div>
    </div>
  );
}

export default Home;
