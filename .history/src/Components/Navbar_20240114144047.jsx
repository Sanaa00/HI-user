import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { MdPermIdentity } from 'react-icons/md';
import { LiaXRaySolid } from 'react-icons/lia';
import { ImLab } from 'react-icons/im';
import { LiaPillsSolid } from 'react-icons/lia';
import { FaRegCalendarPlus } from 'react-icons/fa6';
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
              className="pb-3 flex items-center"
            >
              <MdPermIdentity className="w-9 h-9 mr-2" /> Person Information
            </Link>
            <Link
              to="/Radiographic"
              onClick={() => setOpen(!open)}
              className="py-3 flex items-center"
            >
              <LiaXRaySolid className="w-9 h-9 mr-2" /> Radiographic examination
            </Link>
            <Link
              to="/laboratory"
              onClick={() => setOpen(!open)}
              className="py-3 flex items-center"
            >
              <ImLab className="ml-1 w-7 h-8 mr-2" /> Laboratory examination
            </Link>
            <Link
              to="/Prescription"
              onClick={() => setOpen(!open)}
              className="py-3 flex items-center"
            >
              <LiaPillsSolid className="ml-1 w-9 h-9 mr-2" /> Prescription
            </Link>{' '}
            <Link
              to="/appointment"
              onClick={() => setOpen(!open)}
              className="py-3 flex items-center"
            >
              <FaRegCalendarPlus className="ml-1 w-9 h-9 mr-2" /> Appointment
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
