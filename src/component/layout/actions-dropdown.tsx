import React, { useState } from "react";

const ActionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Main button visible on small screens */}
      <button
        type="button"
        className="ease-in-out inline-flex sm:hidden leading-normal text-blue-500 hover:text-gray-400 transition duration-300 pe-2"
        onClick={toggleDropdown}
      >
        <svg
          className="-mr-1 h-5 text-gray-50"
          viewBox="0 0 20 20"
          fill="gray"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown content */}
      <ul
        className={`absolute ltr:right-0 mt-2 w-48 z-10 sm:hidden rtl:left-0 
        transition-transform duration-300 ease-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <li>
          <button
            type="button"
            className="text-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 w-full "
            onClick={toggleDropdown}
          >
            Book a Demo
          </button>
        </li>
        <li className="mt-1">
          <button
            type="button"
            className="text-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 w-full "
          >
            Join for Free
          </button>
        </li>
        <li className="mt-1">
          <button
            type="button"
            className="text-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 w-full "
          >
            Login
          </button>
        </li>
      </ul>

      {/* Full view buttons for larger screens */}
      <div className="items-center gap-2 hidden sm:flex mx-auto md:me-4">
        <a
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 text-nowrap"
          href="/book-demo"
        >
          Book a Demo
        </a>
        <button className="bg-transparent border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 py-2 px-4 rounded-md transition duration-300 text-nowrap">
          Join for Free
        </button>
        <button className="text-blue-500 hover:text-gray-400 transition duration-300 ">
          Login
        </button>
      </div>
    </div>
  );
};

export default ActionsDropdown;
