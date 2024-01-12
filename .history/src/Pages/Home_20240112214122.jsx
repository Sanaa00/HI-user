import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { LuPhone } from 'react-icons/lu';
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
          className="object-cover rounded-full w-72 border-2 border-neutral-50 shadow h-72 lg:w-1/2 lg:h-96 "
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
      <div className="mt-5  bg-neutral-50 text-neutral-500 rounded-md p-4 shadow ">
        {' '}
        <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span className="flex items-center flex-row">
            {' '}
            <span>
              <GrLocation className="w-6 h-6" />
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
              <LuPhone className="w-6 h-5" />
            </span>
            <span className="ml-2">{data.contactNumber}</span>
          </span>{' '}
        </div>{' '}
        <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span className="flex items-center">
            {' '}
            <span>
              <MdPermIdentity className="w-6 h-6" />
            </span>
            <span className="ml-2">{data.id}</span>
          </span>{' '}
        </div>
      </div>
      {/* **********vital information*********** */}
      <div className="mt-5 text-neutral-50 grid grid-cols-3 gap-5 justify-between items-center  text-lg lg:w-1/2">
        {' '}
        {/* <div className="mt-2 flex justify-between items-center lg:w-1/2"> */}
        <div className="w-full flex flex-col items-center justify-center bg-blue-500 p-4 rounded-md shadow-sm ">
          {' '}
          <div className="ml-2 text-xl font-bold">O+</div>
          <div className="text-sm font-semibold text-neutral-100 mt-2">
            Blood
          </div>
        </div>{' '}
        {/* </div>{' '} */}
        {/* <div className="mt-2 flex justify-between items-center lg:w-1/2"> */}
        <div className="flex w-full flex-col justify-center items-center bg-blue-500 p-4 rounded-md shadow-sm">
          {' '}
          <div className="text-center ml-2 text-xl font-bold">172cm</div>{' '}
          <div className="text-center text-sm font-semibold text-neutral-100 mt-2">
            Height
          </div>
        </div>{' '}
        <div className="flex flex-col justify-center items-center bg-blue-500 p-4 rounded-md shadow-sm w-full">
          {' '}
          <div className="ml-2 text-xl font-bold">78kg</div>
          <div className="text-sm font-semibold text-neutral-100 mt-2">
            weight
          </div>
        </div>{' '}
      </div>{' '}
      {/* </div> */}
      {/* <div className="mt-2 flex justify-between items-center lg:w-1/2">
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
      </div>{' '} */}
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
      <div className="mt-5  bg-neutral-50 text-neutral-500 rounded-md p-4 shadow ">
        {' '}
        <div className=" font-bold text-blue-500 text-lg lg:w-1/2">
          Emergency Contacts
        </div>
        <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span>
            {' '}
            <span>Name:</span>
            <span className="ml-2">{data.emergencyContactName}</span>
          </span>{' '}
        </div>{' '}
        {/* <div className="mt-2 flex justify-between items-center lg:w-1/2">
          <span>
            {' '}
            <span>Relationship to the patient:</span>
            <span className="ml-2">Boy</span>
          </span>{' '}
        </div>{' '} */}
        <div className="mt-2  flex justify-between items-center lg:w-1/2">
          <span className="flex items-center">
            {' '}
            <span>
              {' '}
              <LuPhone className="w-6 h-5" />
            </span>
            <span className="ml-2">{data.emergencyContactNumber}</span>
          </span>{' '}
        </div>
      </div>
      {/* <div className="mt-5 font-bold text-blue-500 text-lg lg:w-1/2">
        Emergency Contacts
      </div>
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
      </div> */}
    </div>
  );
}

export default Home;
