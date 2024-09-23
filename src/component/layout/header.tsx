import ActionsDropdown from "./actions-dropdown";
import LogoWithText from "./logo-text";
import MobileNav from "./mobile-nav";
import React, { useState } from "react";
import { HiGlobeAlt } from "react-icons/hi";
import { Link } from "gatsby";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import AImassage from "./AI-massage";
import { IoAnalyticsSharp } from "react-icons/io5";

interface MenuItem {
  subItem: any;
  icon: React.ElementType;
  name: string;
  url: string;
  subMenu?: MenuItem[];
  menimenu?: MenuItem[];
}

interface Props {
  direction: string;
  toggleDirection: () => void;
}

interface SubMenuItem {
  name: string;
  url?: string;
  menimenu?: MiniMenuItem[];
  icon?: React.ComponentType;
}

interface MiniMenuItem {
  name: string;
  url: string;
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
      icon: IoAnalyticsSharp,
      name: "Products",
      url: "/products",
      subMenu: [
        {
          name: "Products",
          url: "/products",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
        {
          name: "Conversation",
          url: "/products",
          icon: IoAnalyticsSharp,
          menimenu: [
            {
              name: "custom-gen-ai",
              url: "/product-details/custom-gen-ai",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "navigator-gen-ai",
              url: "/product-details/navigator-gen-ai",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "role-gen-ai",
              url: "/product-details/role-gen-ai",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "social-channel",
              url: "/product-details/social",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
          ],
          subItem: undefined,
        },
        {
          name: "messaging",
          url: "/products",
          icon: IoAnalyticsSharp,
          menimenu: [
            {
              name: "Byoc",
              url: "/messaging/byoc-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "email",
              url: "/messaging/email-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "facebook",
              url: "/messaging/facebook-messenger-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "instagram",
              url: "/messaging/Instagram-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "SMS",
              url: "/messaging/SMS-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "telegram",
              url: "/messaging/Telegram-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Whatsapp",
              url: "/messaging/whatsapp-channel",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
          ],
          subItem: undefined,
        },
      ],
      subItem: undefined,
    },
    {
      name: "Solutions",
      url: "/solution",
      icon: IoAnalyticsSharp,
      subMenu: [
        {
          name: "Solutions",
          url: "/solution",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
        {
          name: "Conversational",
          url: "/solution-channel/Conversational-Solutions",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
        {
          name: "Gen-AI",
          url: "/solution-channel/Gen-AI",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
        {
          name: "Industries",
          url: "/solution-channel/Industries",
          icon: IoAnalyticsSharp,
          menimenu: [
            {
              name: "Education",
              url: "/solution-channel/Industry/Education",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Government",
              url: "/solution-channel/Industry/Government",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "health-care",
              url: "/solution-channel/Industry/health-care",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Retail",
              url: "/solution-channel/Industry/Retail",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Transportation",
              url: "/solution-channel/Industry/Transportation",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
          ],
          subItem: undefined,
        },
        {
          name: "Services",
          url: "/solution-channel/Services",
          icon: IoAnalyticsSharp,
          menimenu: [
            {
              name: "Agent",
              url: "/solution-channel/services/Agent",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Customer",
              url: "/solution-channel/services/CX",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Digital",
              url: "/solution-channel/services/Digital",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "Professional",
              url: "/solution-channel/services/Professional",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
          ],
          subItem: undefined,
        },
      ],
      subItem: undefined,
    },
    {
      name: "Resources&Support",
      url: "support-Resorce/resources",
      icon: IoAnalyticsSharp,
      subMenu: [
        {
          name: "resources",
          url: "/support-Resorce/resources",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
        {
          name: "support",
          url: "/support-Resorce/resources",
          icon: IoAnalyticsSharp,
          menimenu: [
            {
              name: "data-security",
              url: "/support-Resorce/data-security",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "support",
              url: "/support-Resorce/support",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
            {
              name: "services-status",
              url: "/support-Resorce/services-status",
              icon: IoAnalyticsSharp,
              subItem: undefined,
            },
          ],
          subItem: undefined,
        },
      ],
      subItem: undefined,
    },

    {
      name: "Developers",
      url: "/developer/devloper",
      icon: IoAnalyticsSharp,
      subMenu: [
        {
          name: "Developers",
          url: "/developer/devloper",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
        {
          name: "Blog",
          url: "/developer/blog",
          icon: IoAnalyticsSharp,
          subItem: undefined,
        },
      ],
      subItem: undefined,
    },
    {
      name: "pricing",
      url: "/pricing",
      icon: IoAnalyticsSharp,
      subItem: undefined,
    },
  ];

  return (
    <div className={`${direction}`}>
      <AImassage />
      <div className="w-full h-20 top-0"></div>
      <nav className="fixed top-0 z-50 w-full bg-zinc-50 shadow-lg sm:fixed flex justify-between items-center py-3 space-x-4 px-2">
        <div className="flex items-center">
          <MobileNav />
          <LogoWithText />
        </div>

        <div className="hidden px-2 md:px-4 lg:flex lg:flex-grow lg:items-center">
          <ul className="flex space-x-6">
            {menuItems.map((item, menuIndex) => (
              <li key={item.name} className="relative py-2 lg:py-0">
                {item.subMenu ? (
                  <>
                    <button
                      className={`text-gray-700 transition-colors duration-200 hover:text-blue-600 font-medium ${
                        openMenus === menuIndex ? "text-blue-700" : ""
                      }`}
                      onClick={() => toggleMenu(menuIndex)}
                    >
                      {item.name}
                    </button>
                  </>
                ) : (
                  <Link
                    className="text-gray-700 transition-colors duration-200 hover:text-blue-600 font-medium"
                    to={item.url!}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div
            className={`fixed  md:top-16 lg:top-20 overflow-hidden w-full md:w-3/4 md:h-1/2 flex flex-col md:flex-row transition-all ease-in-out duration-500 bg-white text-black  shadow-custom shadow-blue-100 rounded-xl transform ${
              openMenus !== null ? "top-0 opacity-100" : "-top-96 opacity-0"
            }`}
          >
            {openMenus !== null && (
              <div className=" h-96 container relative  p-3">
                {/* Left side: Submenu items */}
                <ul className="absolute flex flex-col overflow-hidden md:w-1/4">
                  {menuItems[openMenus]?.subMenu?.map((subItem, subIndex) => (
                    <li key={subItem.name}>
                      {subItem.menimenu ? (
                        <button
                          className={`hover:bg-gray-100 flex flex-row gap-2 py-4 hover:text-blue-800 w-full text-start rounded-xl ps-5 transition-colors duration-300 ease-in-out ${
                            openSubMenus === subIndex
                              ? "bg-gray-100 text-black/80"
                              : ""
                          }`}
                          onClick={() => setOpenSubMenus(subIndex)}
                        >
                          {subItem.icon && (
                            <subItem.icon className="text-lg text-blue-600" />
                          )}
                          {subItem.name}
                          <span className="ml-auto text-gray-500">&rarr;</span>
                        </button>
                      ) : (
                        <Link
                          className="flex flex-row gap-2 hover:text-blue-800 py-4 hover:underline w-full text-start rounded-xl ps-5 transition-colors duration-300 ease-in-out"
                          to={subItem.url!}
                        >
                          {subItem.icon && (
                            <subItem.icon className="text-lg text-blue-600" />
                          )}
                          {subItem.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                {openMenus !== null && (
                  <div className="md:w-2/4 bg-gray-100 h-80 overflow-hidden absolute start-1/4 p-4 rounded-lg z-10">
                    <ul className="block  w-full bg-white p-3 text-center overflow-hidden mb-5">
                      {menuItems[openMenus]?.subMenu && (
                        <div
                          key={0}
                          className="flex flex-col justify-center items-center"
                        >
                          <IoAnalyticsSharp className="text-xl text-blue-600" />
                          {"product details discover smart tools"}
                        </div>
                      )}
                    </ul>
                    {openSubMenus !== null && (
                      <div className=" h-64 overflow-scroll">
                        {menuItems[openMenus]?.subMenu[
                          openSubMenus
                        ]?.menimenu?.map((meniItem) => (
                          <div
                            key={meniItem.name}
                            className="transition-colors duration-300 ease-in-out rounded"
                          >
                            <div className="p-3 bg-white shadow-sm rounded-md ">
                              <Link
                                className="text-blue-500 underline"
                                to={meniItem.url}
                              >
                                {`Learn more about ${meniItem.name}`}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {/* Right side: Placeholder or mini menu details */}
                <div className="absolute h-80  start-3/4 flex flex-col  overflow-hidden md:w-1/4 p-2 border-blue-200 text-start  rounded-lg">
                  {openMenus !== null && (
                    <div>
                      <div className="w-auto h-auto m-3 border border-gray-200 p-4 text-start rounded-lg">
                        Placeholder content or mini menu details
                      </div>
                      <div className="w-auto h-auto m-3 border border-gray-200 p-4 text-start rounded-lg">
                        Placeholder content or mini menu details
                      </div>
                      <div className="w-auto h-auto m-3 border border-gray-200 p-4 text-start rounded-lg">
                        Placeholder content
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
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
