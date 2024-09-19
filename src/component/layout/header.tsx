import ActionsDropdown from "./actions-dropdown";
import LogoWithText from "./logo-text";
import MobileNav from "./mobile-nav";
import React, { useState } from "react";
import { HiGlobeAlt } from "react-icons/hi";
import { Link } from "gatsby";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface MenuItem {
  name: string;
  url: string;
  subMenu?: MenuItem[];
  menimenu?: MenuItem[];
}

interface Props {
  direction: string;
  toggleDirection: () => void;
}

const Header: React.FC<Props> = ({ direction, toggleDirection }) => {
  const [openMenus, setOpenMenus] = useState<number | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<number | null>(null);

  // Toggle the main menu
  const toggleMenu = (menuIndex: number) => {
    setOpenMenus((prevState) => (prevState === menuIndex ? null : menuIndex));
    setOpenSubMenus(null); // Close submenus when switching main menu
  };

  // Toggle the submenus
  const toggleSubMenu = (subIndex: number) => {
    setOpenSubMenus((prevState) => (prevState === subIndex ? null : subIndex));
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle language toggle
  const handleToggle = (selectedDirection: string) => {
    if (direction !== selectedDirection) {
      toggleDirection();
    }
    setIsDropdownOpen(false);
  };
  const menuItems: MenuItem[] = [
    {
      name: "Products",
      url: "/products",
      subMenu: [
        {
          name: "Conversation",
          url: "/products",
          menimenu: [
            { name: "custom-gen-ai", url: "/product-details/custom-gen-ai" },
            {
              name: "navigator-gen-ai",
              url: "/product-details/navigator-gen-ai",
            },
            { name: "role-gen-ai", url: "/product-details/role-gen-ai" },
            {
              name: "social-channel",
              url: "/product-details/social",
            },
          ],
        },
        {
          name: "messaging",
          url: "/products",
          menimenu: [
            { name: "Byoc", url: "/messaging/byoc-channel" },
            { name: "email", url: "/messaging/email-channel" },
            { name: "facebook", url: "/messaging/facebook-messenger-channel" },
            { name: "instagram", url: "/messaging/Instagram-channel" },
            { name: "SMS", url: "/messaging/SMS-channel" },
            { name: "telegram", url: "/messaging/Telegram-channel" },
            { name: "Whatsapp", url: "/messaging/whatsapp-channel" },
          ],
        },
      ],
    },
    {
      name: "Solutions",
      url: "/solution",
      subMenu: [
        {
          name: "Conversational",
          url: "/solution-channel/Conversational-Solutions",
        },
        {
          name: "Gen-AI",
          url: "/solution-channel/Gen-AI",
        },
        {
          name: "Industries",
          url: "/solution-channel/Industries",
          menimenu: [
            { name: "Education", url: "/solution-channel/Industry/Education" },
            {
              name: "Government",
              url: "/solution-channel/Industry/Government",
            },
            {
              name: "health-care",
              url: "/solution-channel/Industry/health-care",
            },
            { name: "Retail", url: "/solution-channel/Industry/Retail" },
            {
              name: "Transportation",
              url: "/solution-channel/Industry/Transportation",
            },
          ],
        },
        {
          name: "Services",
          url: "/solution-channel/Services",
          menimenu: [
            { name: "Agent", url: "/solution-channel/services/Agent" },
            { name: "Customer", url: "/solution-channel/services/CX" },
            { name: "Digital", url: "/solution-channel/services/Digital" },
            {
              name: "Professional",
              url: "/solution-channel/services/Professional",
            },
          ],
        },
      ],
    },
    {
      name: "Resources&Support",
      url: "support-Resorce/resources",
      subMenu: [
        { name: "resources", url: "/support-Resorce/resources" },
        {
          name: "support",
          url: "/support-Resorce/resources",
          menimenu: [
            { name: "data-security", url: "/support-Resorce/data-security" },
            {
              name: "support",
              url: "/support-Resorce/support",
            },
            {
              name: "services-status",
              url: "/support-Resorce/services-status",
            },
          ],
        },
      ],
    },

    {
      name: "Developers",
      url: "/developer/devloper",
      subMenu: [
        {
          name: "Developers",
          url: "/developer/devloper",
        },
        { name: "Blog", url: "/developer/blog" },
      ],
    },
    {
      name: "pricing",
      url: "/pricing",
    },
  ];

  return (
    <div className={`${direction}`}>
      <div className="w-full h-20 top-0"></div>
      <nav className="fixed top-0 z-50 w-full bg-zinc-50 shadow-lg sm:fixed flex justify-between items-center py-2 space-x-4 px-2">
        <div className="flex items-center">
          <MobileNav />
          <LogoWithText />
        </div>

        <div className="hidden px-2 md:px-4 lg:flex lg:flex-grow lg:items-center">
          <ul className="flex space-x-6">
            {menuItems.map((item, menuIndex) => (
              <li
                key={item.name}
                className={`relative py-2 lg:py-0 opacity-0 animate-fadeIn`}
                style={{ animationDelay: `${menuIndex * 150}ms` }}
              >
                {item.subMenu ? (
                  <button
                    className={`text-black/80  transition-colors duration-200 hover:text-black/90 font-bold ${
                      openMenus === menuIndex ? "text-blue-700 " : ""
                    }`}
                    onClick={() => toggleMenu(menuIndex)}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    className="text-black/80  transition-colors duration-200 hover:text-black/90 font-bold"
                    to={item.url}
                  >
                    {item.name}
                  </Link>
                )}
                {openMenus === menuIndex && item.subMenu && (
                  <ul className="absolute left-0 mt-5 flex text-center flex-col bg-white shadow-lg w-44">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li
                        key={subItem.name}
                        className={`relative w-full opacity-0 animate-fadeIn hover:bg-blue-500`}
                        style={{ animationDelay: `${subIndex * 150}ms` }}
                      >
                        {/* Check if subItem has menimenu */}
                        {subItem.menimenu ? (
                          <button
                            className={`flex items-center justify-start gap-2 ps-5 text-md py-1 hover:bg-blue-500 hover:text-white w-full text-blue-900 font-bold ${
                              openSubMenus === subIndex
                                ? "bg-blue-500 text-white"
                                : ""
                            }`}
                            onClick={() => toggleSubMenu(subIndex)}
                          >
                            {/* Arrow icon added on the left */}

                            {subItem.name}
                            <FaCaretUp className=" text-md transition-transform transform rotate-90 " />
                          </button>
                        ) : (
                          <Link
                            className="flex items-center justify-start text-md ps-5 text-slate-500 py-1 w-full block text-blue-800 hover:text-white font-bold"
                            to={subItem.url}
                          >
                            {subItem.name}
                          </Link>
                        )}

                        {openSubMenus === subIndex && subItem.menimenu && (
                          <ul className="absolute left-full top-5 flex flex-col text-center bg-white shadow-lg w-44">
                            {subItem.menimenu.map((meniItem, meniIndex) => (
                              <li
                                key={meniItem.name}
                                className={`relative w-full opacity-0 animate-fadeIn hover:bg-slate-500`}
                                style={{
                                  animationDelay: `${meniIndex * 150}ms`,
                                }}
                              >
                                <Link
                                  className="flex items-center justify-start text-md ps-5 py-1 w-full block text-slate-500 hover:text-white font-bold"
                                  to={meniItem.url}
                                >
                                  {meniItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <button
              className="flex font-bold items-center text-gray-700 py-2 px-4 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <HiGlobeAlt className="h-5 w-5 ms-1" />
              {direction === "ltr" ? "EN" : "ع"}
              <svg
                className="ml-1 h-5 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
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
              <div className="absolute font-bold right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
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
      </nav>
    </div>
  );
};

export default Header;

// import ActionsDropdown from "./actions-dropdown";
// import LogoWithText from "./logo-text";
// import MobileNav from "./mobile-nav";
// import React, { useState } from "react";
// import { HiGlobeAlt } from "react-icons/hi";
// import { Link } from "gatsby";
// interface Props {
//   direction: string;
//   toggleDirection: () => void;
// }

// const Header: React.FC<Props> = ({ direction, toggleDirection }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggle = (selectedDirection: string) => {
//     if (direction !== selectedDirection) {
//       toggleDirection();
//     }
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className={`${direction}`}>
//       <div className="w-full h-20 top-0"></div>
//       <nav className="fixed top-0 z-50 w-full bg-zinc-50 shadow-slate-200 shadow-lg sm:fixed flex justify-between lg:border-b-2 lg:border-blue-50 items-center py-2 space-x-4 flex-nowrap px-2 ">
//         <div className="flex items-center justify-center ">
//           <MobileNav />
//           <LogoWithText />
//         </div>

//         <div
//           className="hidden px-2 md:px-4 lg:flex lg:flex-grow lg:items-center"
//           id="navbarSupportedContent1"
//         >
//           <ul className="flex flex-col items-center justify-center h-auto ps-10 px-4 lg:flex-row  list-none space-y-4 lg:space-y-0  gap-5">
//             {[
//               { name: "Products", url: "/products" },
//               { name: "Solutions", url: "/solution" },
//               {
//                 name: "Resources & Support",
//                 url: "/support-Resorce/resources",
//               },
//               { name: "Developers", url: "/developer/devloper" },
//               { name: "Pricing", url: "/pricing" },
//             ].map((item, index) => (
//               <li
//                 key={item.name}
//                 className={`my-2 lg:my-0 opacity-0 animate-fadeIn`}
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 <Link
//                   className="text-black/80 transition-colors duration-200 hover:text-black/90 font-bold focus:text-blue-600"
//                   to={item.url}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex items-center justify-center  ">
//           <div className="relative">
//             <button
//               className="flex font-bold items-center text-gray-700  py-2 px-4  transition-transform duration-300 hover:scale-105"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               <HiGlobeAlt className="h-5 w-5 ms-1" />
//               {direction === "ltr" ? "EN" : "ع"}
//               <svg
//                 className="-mr-1 h-5 text-gray-50"
//                 viewBox="0 0 20 20"
//                 fill="gray"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute font-bold end-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
//                 <ul className="py-1">
//                   <li>
//                     <button
//                       className={`block w-full text-left px-4 py-2 text-sm ${
//                         direction === "ltr"
//                           ? "bg-gray-100"
//                           : "hover:bg-gray-100"
//                       }`}
//                       onClick={() => handleToggle("ltr")}
//                     >
//                       English
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className={`block w-full text-left px-4 py-2 text-sm ${
//                         direction === "rtl"
//                           ? "bg-gray-100"
//                           : "hover:bg-gray-100"
//                       }`}
//                       onClick={() => handleToggle("rtl")}
//                     >
//                       العربية
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <ActionsDropdown />
//         </div>

//         {/* </div> */}
//       </nav>
//     </div>
//   );
// };

// export default Header;
