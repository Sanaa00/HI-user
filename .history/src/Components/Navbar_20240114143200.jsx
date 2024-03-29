import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { MdPermIdentity } from 'react-icons/md';
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex text-neutral-700 top-0 z-50 fixed px-4 sm:px-10 md:px-20 justify-between items-center bg-white h-16 w-full">
      <div
        className={` flex justify-between hover:bg-opacity-80 duration-500 hover:duration-500 items-center w-full h-full text-lg font-bold`}
      >
        <button onClick={() => setOpen(!open)} className="">
          <GiHamburgerMenu className="w-8 h-8 text-blue-500" />
        </button>{' '}
        <div
          className={` bg-blue-700 text-neutral-50 rounded-sm  flex flex-col fixed w-4/5 lg:w-96 top-0 z-40 left-0 shadow-lg transform duration-500 ease-in-out ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 mb-2 left-0 px-3 flex h-16"
          >
            <IoCloseSharp className="w-9 h-9" />
          </button>

          <div className="w-full h-screen flex flex-col text-orange p-4">
            <Link
              to="/home"
              onClick={() => setOpen(!open)}
              className="pb-3 flex"
            >
              <MdPermIdentity className="w-9 h-9" /> Person Information
            </Link>
            <Link
              to="/Radiographic"
              onClick={() => setOpen(!open)}
              className="py-3"
            >
              Radiographic examination
            </Link>
            <Link
              to="/laboratory"
              onClick={() => setOpen(!open)}
              className="py-3"
            >
              Laboratory examination
            </Link>
            <Link
              to="/Prescription"
              onClick={() => setOpen(!open)}
              className="py-3"
            >
              Prescription
            </Link>
          </div>
        </div>
      </div>
      <NavLink to="/home" className="ml-2 font-bold text-blue-500">
        SmartHealth
      </NavLink>
    </div>
  );
}

export default Navbar;
