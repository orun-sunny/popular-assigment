import { useState } from "react";
import user from "../../assets/user.png";
import { IoMdNotifications } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navItmes = (
    <>
      <li
        href="#"
        className="text-gray-300  cursor-pointer hover:text-white px-3 rounded-md text-sm font-medium"
      >
        Dashboard
      </li>
      <li
        href="#"
        className="text-gray-300  cursor-pointer hover:text-white px-3 rounded-md text-sm font-medium"
      >
        MasterPrice
      </li>
      <li
        href="#"
        className="text-gray-300 cursor-pointer  hover:text-white px-3  rounded-md text-sm font-medium"
      >
        CustomPrice
      </li>
      <li
        href="#"
        className="text-gray-300 cursor-pointer  hover:text-white px-3  rounded-md text-sm font-medium"
      >
        Calendar
      </li>
      <li
        href="#"
        className="text-gray-300 cursor-pointer  hover:text-white px-3  rounded-md text-sm font-medium"
      >
        Reports
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-gray-700 md:px-28">
        <div className=" mx-auto">
          <div className="flex justify-between items-center h-20">
            <div className="hidden md:block">
              <div className="flex  space-x-6">
                <ul className="flex space-x-4">
                  {/* Navbar all list  */}
                  {navItmes}
                </ul>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-6 flex gap-6 items-center md:ml-8 cursor-pointer">
                <p className="text-gray-300 text-2xl">
                  <IoMdNotifications />
                </p>
                <img className="w-8 h-8 rounded-full" src={user} alt="" />
              </div>
            </div>
            <div className="mr-4 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded inline-flex items-center justify-center focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 1 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-4 pt-4 pb-4 space-y-2 sm:px-2">
            <ul className="flex flex-col space-y-2">
              {/* Navbar all  list */}
              {navItmes}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
