function Home() {
  return (
    <div className="mt-16 min-h-screen p-4 sm:px-10 md:px-20  flex flex-col lg:items-center">
      <img
        className="object-cover w-full rounded-md h-60 border lg:w-1/2 lg:h-96"
        src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="user"
      />
      <div className="mt-5 font-bold text-lg lg:w-1/2">
        Personal Information
      </div>
      <div className="mt-2 lg:w-1/2">
        <span>Name:</span>
        <span className="ml-2">Ali Muhammad Azad</span>
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>DOB:</span>
          <span className="ml-2">1-1-1960</span>
        </span>{' '}
        <span>
          {' '}
          <span>Gender:</span>
          <span className="ml-2">Male</span>
        </span>
      </div>{' '}
      {/* ******************** */}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Address:</span>
          <span className="ml-2">Sulaimanyiah</span>
        </span>
      </div>
      {/* ****************** */}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Contact Number:</span>
          <span className="ml-2">0700 000 00 00</span>
        </span>{' '}
      </div>{' '}
      <div className="mt-2 flex justify-between items-center lg:w-1/2">
        <span>
          {' '}
          <span>Patient ID:</span>
          <span className="ml-2">12345678</span>
        </span>{' '}
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
