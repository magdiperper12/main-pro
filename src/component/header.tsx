// import  from "./image/logo-word(1).png";
import Dropdown from "./Dropdown";
import NavigationMenu from "./Navigationmenue";
import React from "react";

interface Props {
  direction: string;
  toggleDirection: () => void;
}

const Header: React.FC<Props> = ({ direction, toggleDirection }) => {
  return (
    <div className={`calculator ${direction}`}>
      <nav className='fixed top-0 z-50 w-full bg-zinc-50 py-2 shadow-dark-mild sm:fixed sm:py-4 lg:flex lg:flex-nowrap lg:justify-start lg:border-b-2 lg:border-blue-50'>
        <div className='container mx-auto flex items-center justify-between px-4 lg:px-20'>
          <NavigationMenu />

          {/* <img
            src={image}
            alt='Logo'
            className='h-11 lg:h-14 md:h-14 md:m-auto '
          /> */}

          {/* Collapsible navigation container */}
          <div
            className='hidden lg:flex lg:flex-grow lg:items-center'
            id='navbarSupportedContent1'
            data-twe-collapse-item
          >
            {/* Logo */}
            <a
              className='text-black/60 transition duration-200 hover:text-black/80 font-bold'
              href='#'
            ></a>

            {/* Left navigation links */}
            <ul
              className='ml-auto flex flex-col lg:flex-row list-none lg:ml-0'
              data-twe-navbar-nav-ref
            >
              <li className='my-2 lg:my-0 lg:mx-4' data-twe-nav-item-ref>
                <a
                  className='text-black/80 transition duration-200 hover:text-black/90 font-bold'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Products
                </a>
              </li>
              <li className='my-2 lg:my-0 lg:mx-4' data-twe-nav-item-ref>
                <a
                  className='text-black/80 transition duration-200 hover:text-black/90 font-bold'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Solutions
                </a>
              </li>
              <li className='my-2 lg:my-0 lg:mx-4' data-twe-nav-item-ref>
                <a
                  className='text-black/80 transition duration-200 hover:text-black/90 font-bold'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Resources & Support
                </a>
              </li>
              <li className='my-2 lg:my-0 lg:mx-4' data-twe-nav-item-ref>
                <a
                  className='text-black/80 transition duration-200 hover:text-black/90 font-bold'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Developers
                </a>
              </li>
              <li className='my-2 lg:my-0 lg:mx-4' data-twe-nav-item-ref>
                <a
                  className='text-black/80 transition duration-200 hover:text-black/90 font-bold'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`direction-button  ${
              direction === "ltr" ? "bg-zinc-700" : "bg-red-800"
            } text-white py-1 px-2 rounded-full lg:py-2 md:py-2 lg:px-4 md:px-4 m-5`}
            onClick={toggleDirection}
          >
            {direction === "ltr" ? "AR" : "EN"}
          </button>
          {/* Buttons */}
          <Dropdown />
        </div>
      </nav>
    </div>
  );
};

export default Header;
