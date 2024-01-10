import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex top-0 z-50 fixed px-4 justify-between items-center bg-white h-16 w-full">
      <div
        className={` flex justify-between hover:bg-opacity-80 duration-500 hover:duration-500 items-center w-full h-full text-lg font-bold`}
      >
        <button onClick={() => setOpen(!open)} className="sen ">
          menu
          {/* <GiHamburgerMenu className="w-8 object-cover h-9 text-orange" /> */}
        </button>{' '}
        <div
          className={`
            bg-grayy dark:bg-dark dark:shadow-darkgray bg-white rounded-sm  flex flex-col fixed w-3/5 lg:w-96 top-0 z-40 left-0 shadow-lg transform duration-500 ease-in-out ${
              open ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex h-16">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 flex mt-8  mb-2 left-0 px-4"
            >
              close
              {/* <IoCloseCircle className="text-orange justify-end w-8 object-cover h-8 self-end" /> */}
            </button>
          </div>

          <div className="w-full h-screen flex flex-col text-orange p-4">
            <Link
              to="/"
              onClick={() => setOpen(!open)}
              className="dark:text-grayy py-3"
            >
              Home
            </Link>
            <Link
              to="/skills"
              onClick={() => setOpen(!open)}
              className="dark:text-grayy  py-3"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              onClick={() => setOpen(!open)}
              className="dark:text-grayy py-3"
            >
              Projects
            </Link>{' '}
          </div>
        </div>
      </div>
      <NavLink to="/" className="ml-2 font-semibold">
        Name
      </NavLink>
    </div>
  );
}

export default Navbar;
