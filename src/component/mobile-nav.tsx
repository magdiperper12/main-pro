import React from "react";
import { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className='block border-0 bg-transparent px-2 text-gray-500 hover:text-black focus:text-black focus:outline-none lg:hidden'
        type='button'
        aria-controls='navbarSupportedContent1'
        aria-expanded={isOpen ? "true" : "false"}
        aria-label='Toggle navigation'
        onClick={toggleMenu}
      >
        {/* Hamburger icon */}
        <svg
          className='w-6 h-6 stroke-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className='absolute -start-5 mt-8 z-50 w-80 text-start rounded-lg bg-gray-800 text-white shadow-lg  h-screen text-3xl'
          id='navbarSupportedContent1'
        >
          <li className='py-2 lg:py-0 lg:mx-4 hover:bg-gray-100 hover:text-gray-800'>
            <a
              href='#'
              className='block px-4 py-2 text-lg 
               hover:bg-gray-100'
            >
              Developers
            </a>
          </li>
          <li className='py-2 lg:py-0 lg:mx-4 hover:bg-gray-100 hover:text-gray-800'>
            <a
              href='#'
              className='block px-4 py-2 text-lg 
               hover:bg-gray-100'
            >
              Pricing
            </a>
          </li>
          <li className='py-2 lg:py-0 lg:mx-4 hover:bg-gray-100 hover:text-gray-800'>
            <a
              href='#'
              className='block px-4 py-2 text-lg 
               hover:bg-gray-100'
            >
              Developers
            </a>
          </li>
          <li className='py-2 lg:py-0 lg:mx-4 hover:bg-gray-100 hover:text-gray-800'>
            <a
              href='#'
              className='block px-4 py-2 text-lg 
               hover:bg-gray-100'
            >
              Pricing
            </a>
          </li>{" "}
          <li className='py-2 lg:py-0 lg:mx-4 hover:bg-gray-100 hover:text-gray-800'>
            <a
              href='#'
              className='block px-4 py-2 text-lg 
               hover:bg-gray-100'
            >
              Developers
            </a>
          </li>
          <li className='py-2 lg:py-0 lg:mx-4 hover:bg-gray-100 hover:text-gray-800'>
            <a
              href='#'
              className='block px-4 py-2 text-lg 
               hover:bg-gray-100'
            >
              Pricing
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileNav;
