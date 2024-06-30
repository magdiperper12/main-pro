import React, { useState } from "react";

const ActionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleActionsDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Main button visible on small screens */}
      <button
        type='button'
        className='inline-flex sm:hidden rounded-lg bg-blue-700 px-2 lg:px-4 md:px-4 py-1 lg:py-2 md:py-2 text-sm font-medium uppercase leading-normal text-white shadow-blue-700 transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-blue-900 my-2 mx-2'
        onClick={toggleActionsDropdown}
      >
        Actions{" "}
        <svg
          className='-mr-1 h-5 text-gray-50'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      {/* ActionsDropdown content */}
      {isOpen && (
        <ul className='absolute right-0 mt-2 w-48 z-10 sm:hidden'>
          <li>
            <button
              type='button'
              className='block w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium uppercase leading-normal text-white shadow-blue-700 transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-blue-900'
              onClick={toggleActionsDropdown}
            >
              Action 1
            </button>
          </li>
          <li className='mt-1'>
            <button
              type='button'
              className='block w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium uppercase leading-normal text-white shadow-blue-700 transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-blue-900'
            >
              Action 2
            </button>
          </li>
        </ul>
      )}

      {/* Full view buttons for larger screens */}
      <div className="flex items-center space-x-4 font-bold">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
          Book a Demo
        </button>
        <button className="bg-transparent border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 py-2 px-4 rounded-md transition duration-300">
          Join for Free
        </button>
        <button className="text-blue-500 hover:text-gray-400 transition duration-300">
          Login
        </button>
      </div>

    </div>
  );
};

export default ActionsDropdown;
