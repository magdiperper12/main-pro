import ActionsDropdown from "./actions-dropdown";
import LogoWithText from "./logo-text";
import MobileNav from "./mobile-nav";
import React, { useState } from "react";
import {HiGlobeAlt} from "react-icons/hi";
interface Props {
  direction: string;
  toggleDirection: () => void;
}

const Header: React.FC<Props> = ({ direction, toggleDirection }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = (selectedDirection: string) => {
    if (direction !== selectedDirection) {
      toggleDirection();
    }
    setIsDropdownOpen(false);
  };
  return (
    <div className={`${direction}`}>
      <nav className="fixed top-0 z-50 w-full bg-zinc-50 shadow-lg sm:fixed lg:flex lg:justify-between lg:border-b-2 lg:border-blue-50">
        <div className="container mx-auto flex items-center justify-between space-x-4 py-2">
          <MobileNav />

          <LogoWithText />
          <div className="hidden lg:flex lg:flex-grow lg:items-center" id="navbarSupportedContent1">
            <ul className="flex flex-col lg:flex-row list-none space-y-4 lg:space-y-0 lg:space-x-6">
              {["Products", "Solutions", "Resources & Support", "Developers", "Pricing"].map((item, index) => (
                <li
                  key={item}
                  className={`my-2 lg:my-0 opacity-0 animate-fadeIn`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <a
                    className="text-black/80 transition-colors duration-200 hover:text-black/90 font-bold focus:text-blue-600"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* <button
            className={`direction-button ${direction === "ltr" ? "bg-zinc-700" : "bg-red-800"} text-white py-1 px-2 rounded-full lg:py-2 lg:px-4 transition-transform duration-300 hover:scale-105`}
            onClick={toggleDirection}
          >
            {direction === "ltr" ? "AR" : "EN"}
          </button> */}
          <div className="relative">
            <button
              className="flex font-bold items-center text-gray-700  py-2 px-4  transition-transform duration-300 hover:scale-105"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <HiGlobeAlt className="h-5 w-5 mr-2" />
              {direction === "ltr" ? "EN" : "ع"}
            </button>
            {isDropdownOpen && (
              <div className="absolute font-bold right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${direction === "ltr" ? "bg-gray-100" : "hover:bg-gray-100"}`}
                      onClick={() => handleToggle("ltr")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${direction === "rtl" ? "bg-gray-100" : "hover:bg-gray-100"}`}
                      onClick={() => handleToggle("rtl")}
                    >
                      العربية
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <ActionsDropdown />
        </div>
      </nav>
    </div>
  );
};

export default Header;
