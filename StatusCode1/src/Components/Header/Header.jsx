import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav className={` ${isOpen?  "bg-white" : "bg-slate-500" } bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md sticky top-0 z-50 px-8 py-5 flex items-center justify-between border border-neutral-50`}>
     
        <div className="text-xl font-bold text-gray-900">
          <a href="index.html">Brand</a>
        </div>

      
        <button
          // onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <FontAwesomeIcon
            icon={isOpen ? "" : faBars}
            className="w-6 h-6"
            onClick={toggleMenu}
          />
        </button>

       
        <ul
          className={`flex-col md:flex-row md:flex md:items-center justify-center space-y-2 md:space-y-0 space-x-0 md:space-x-8 absolute md:relative md:bg-transparent w-full md:w-auto left-0 md:left-auto mt-4 md:mt-0 px-8 md:px-0 ${isOpen ? ' items-end flex ' : 'hidden'} md:flex`}
        >
          <li>
            <a
              className="active text-white font-semibold transition duration-300 ease-in-out hover:text-gray-900"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white font-semibold transition duration-300 ease-in-out hover:text-gray-900"
              href="#"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              className="text-white font-semibold transition duration-300 ease-in-out hover:text-gray-900"
              href="#"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-white font-semibold transition duration-300 ease-in-out hover:text-gray-900"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-white font-semibold transition duration-300 ease-in-out hover:text-gray-900"
              href="#"
            >
              Contact
            </a>
          </li>
          {isOpen ? <li onClick={toggleMenu}>
            <a
              className="text-white font-semibold transition duration-300 ease-in-out hover:text-gray-900"
              href="#"
            >
              Close
            </a>
          </li>: ""}
          
        </ul>
      </nav>
    </div>
  );
};

export default Header;
