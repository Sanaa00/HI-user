import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { GrClose } from 'react-icons/gr';
import { IoCloseSharp } from 'react-icons/io5';
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex text-neutral-700 top-0 z-50 fixed px-4 justify-between items-center bg-white h-16 w-full">
      <div
        className={` flex justify-between hover:bg-opacity-80 duration-500 hover:duration-500 items-center w-full h-full text-lg font-bold`}
      >
        <button onClick={() => setOpen(!open)} className="">
          <GiHamburgerMenu className="w-8 h-8" />
          {/* menu */}
          {/* <GiHamburgerMenu className="w-8 object-cover h-9 text-orange" /> */}
        </button>{' '}
        <div
          className={` bg-white rounded-sm  flex flex-col fixed w-4/5 lg:w-96 top-0 z-40 left-0 shadow-lg transform duration-500 ease-in-out ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={() => setOpen(!open)}
            className="mt-8 mb-2 left-0 px-4 flex h-16"
          >
            <IoCloseSharp className="w-9 h-9" />
            {/* <GrClose /> */}
            {/* close */}
            {/* <IoCloseCircle className="text-orange justify-end w-8 object-cover h-8 self-end" /> */}
          </button>

          <div className="w-full h-screen flex flex-col text-orange p-4">
            <Link to="/" onClick={() => setOpen(!open)} className="py-3">
              Person Information
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
      <NavLink to="/" className="ml-2 font-bold">
        Name
      </NavLink>
    </div>
  );
}

export default Navbar;
