import ActionsDropdown from "./actions-dropdown";
import LogoWithText from "./logo-text";
import MobileNav from "./mobile-nav";
import React, { useState } from "react";
import { HiGlobeAlt } from "react-icons/hi";
import { Link } from "gatsby";
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
      <div className="w-full h-20 top-0"></div>
      <nav className="fixed top-0 z-50 w-full bg-zinc-50 shadow-slate-200 shadow-lg sm:fixed flex justify-between lg:border-b-2 lg:border-blue-50 items-center py-2 space-x-4 flex-nowrap px-2 ">
        <div className="flex items-center justify-center ">
          <MobileNav />
          <LogoWithText />
        </div>

        <div
          className="hidden px-2 md:px-4 lg:flex lg:flex-grow lg:items-center"
          id="navbarSupportedContent1"
        >
          <ul className="flex flex-col items-center justify-center h-auto ps-10 px-4 lg:flex-row  list-none space-y-4 lg:space-y-0  gap-5">
            {[
              { name: "Products", url: "/products" },
              { name: "Solutions", url: "/solution" },
              {
                name: "Resources & Support",
                url: "/support-Resorce/resources",
              },
              { name: "Developers", url: "/developer/devloper" },
              { name: "Pricing", url: "/pricing" },
            ].map((item, index) => (
              <li
                key={item.name}
                className={`my-2 lg:my-0 opacity-0 animate-fadeIn`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link
                  className="text-black/80 transition-colors duration-200 hover:text-black/90 font-bold focus:text-blue-600"
                  to={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center  ">
          <div className="relative">
            <button
              className="flex font-bold items-center text-gray-700  py-2 px-4  transition-transform duration-300 hover:scale-105"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <HiGlobeAlt className="h-5 w-5 ms-1" />
              {direction === "ltr" ? "EN" : "ع"}
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
            {isDropdownOpen && (
              <div className="absolute font-bold end-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        direction === "ltr"
                          ? "bg-gray-100"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleToggle("ltr")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        direction === "rtl"
                          ? "bg-gray-100"
                          : "hover:bg-gray-100"
                      }`}
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

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
