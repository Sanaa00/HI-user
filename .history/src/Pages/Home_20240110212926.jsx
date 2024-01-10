function Home() {
  return (
    <div className="mt-20 h-screen p-4">
      <img
        className="object-cover w-full rounded-md h-60 "
        src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="user"
      />
      <div className="mt-5">
        <span>Name:</span>
        <span className="ml-2">Ali Muhammad Azad</span>
      </div>{' '}
      <div className="mt-2 flex justify-between items-center">
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
      <div className="mt-2 flex justify-between items-center">
        <span>
          {' '}
          <span>Address:</span>
          <span className="ml-2">Sulaimanyiah</span>
        </span>{' '}
        <span>
          {' '}
          <span>Blood Type:</span>
          <span className="ml-2">Male</span>
        </span>
      </div>
      {/* ****************** */}
      <div className="mt-2 flex justify-between items-center">
        <span>
          {' '}
          <span>Blood Group:</span>
          <span className="ml-2">O+</span>
        </span>{' '}
        <span>
          {' '}
          <span>Gender:</span>
          <span className="ml-2">Male</span>
        </span>
      </div>
    </div>
  );
}

export default Home;
