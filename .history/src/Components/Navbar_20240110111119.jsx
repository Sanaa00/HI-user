import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-grayy text-gray-700 dark:bg-dark dark:text-grayy z-50 flex fixed bg-white justify-between items-center`}
    >
      <div className="flex flex-col  ">
        {/* <div
          className={
            ' dark:bg-dark bg-opacity-70 dark:bg-opacity-70 bg-grayy px-6 sm:px-12 md:px-20 lg:px-26 xl:px-36 z-50   fixed w-full text-xl 2xl:text-2xl flex flex-row justify-between items-center  h-20 font-semibold '
          }
        > */}
        {/* <div className="hidden sm:flex  items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? 'text-orange dark:text-orange ' : '') +
                ' hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500  mr-4'
              }
            >
              Sana
            </NavLink>
            {/* <NavLink
              to="/"  
            className={({ isActive }) =>
                (isActive ? "text-orange dark:text-orange" : "") +
                " hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500 px-2"
              }
            
            >
              t
            </NavLink> */}
        {/* <NavLink
            to="/skills"
            className={({ isActive }) =>
              (isActive ? 'text-orange dark:text-orange' : '') +
              ' hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500 px-2'
            }
          >
            Skills
          </NavLink> */}
        {/* <NavLink
            to="/projects"
            className={({ isActive }) =>
              (isActive ? 'text-orange dark:text-orange' : '') +
              ' hover:duration-500 hover:text-gray-600 dark:hover:text-gray-300 duration-500 px-2'
            }
          >
            Projects
          </NavLink> */}
        {/* </div> */}
        {/* <div className="hidden sm:flex items-center "> */}
        {/* <Theme className="mx-2" /> */}
        {/* <a
               //   href={cv}
                 download
                 className=" lg:ml-3 flex items-center text-sm 2xl:text-lg hover:bg-opacity-80 duration-500 hover:duration-500 font-semibold bg-orange text-grayy rounded px-6 py-1"
               >
                 Resume
                 <AiOutlineDownload className="ml-1 w-6 h-6 animate__flash animate__animated animate__slower animate__repeat-3" />
               </a> */}
        {/* </div> */}
        {/* <div className="flex">
            <NavLink
              to="/"
              className="sm:hidden ml-2 text-2xl font-semibold text-orange"
            >
              Sana
            </NavLink>
          </div> */}

        <div className="">
          <div
            className={` flex justify-between hover:bg-opacity-80 duration-500 hover:duration-500 items-center w-full h-full text-lg font-bold font-Poppins text-grayy `}
          >
            {/* <Theme /> */}
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
        </div>
        <div className="flex">
          <NavLink
            to="/"
            className="sm:hidden ml-2 text-2xl font-semibold text-orange"
          >
            Sana
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
