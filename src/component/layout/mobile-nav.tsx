import { Link } from "gatsby";
import React, { useState } from "react";
import { FaCaretUp } from "react-icons/fa"; // Ensure this is installed

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

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openMenus, setOpenMenus] = useState<number | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Main menu toggle
  const toggleMainMenu = (menuIndex: number) => {
    setOpenMenus((prev) => (prev === menuIndex ? null : menuIndex));
    setOpenSubMenus(null); // Reset submenus
  };

  // Submenu toggle
  const toggleSubMenu = (subIndex: number) => {
    setOpenSubMenus((prev) => (prev === subIndex ? null : subIndex));
  };

  const menuItems: MenuItem[] = [
    {
      name: "Products",
      url: "/products",
      subMenu: [
        { name: "Products", url: "/products" },
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
        { name: "Solutions", url: "/solution" },
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
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="block border-0 bg-transparent px-2 text-gray-500 hover:text-black focus:text-black focus:outline-none lg:hidden"
        type="button"
        aria-controls="navbarSupportedContent1"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Animated Mobile Menu */}
      <ul
        className={`fixed left-0 top-12 md:top-16 w-full h-auto bg-zinc-50 text-blue-950 z-50 text-start text-lg space-y-1 py-2 shadow-slate-100 shadow-md transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        id="navbarSupportedContent1"
      >
        {menuItems.map((item, menuIndex) => (
          <li
            key={item.name}
            className={`relative py-2 opacity-0 duration-150 animate-fadeIn`}
            style={{ animationDelay: `${menuIndex * 150}ms` }}
          >
            {item.subMenu ? (
              <button
                className={`flex items-center justify-between duration-150  px-5 text-md py-1 hover:bg-blue-500 hover:text-white w-full font-bold ${
                  openMenus === menuIndex ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => toggleMainMenu(menuIndex)}
              >
                {item.name}
                <FaCaretUp
                  className={`transition-transform transform ${
                    openMenus === menuIndex ? "rotate-180" : "rotate-90"
                  }`}
                />
              </button>
            ) : (
              <Link
                className="flex items-center justify-between duration-150 px-5 text-md py-1 hover:bg-blue-500 hover:text-white w-full font-bold"
                to={item.url}
              >
                {item.name}
              </Link>
            )}
            {openMenus === menuIndex && item.subMenu && (
              <ul className="bg-white  w-full bg-zinc-100 duration-150 text-blue-900 flex flex-col mt-2">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subItem.name}
                    className={`relative w-full opacity-0 duration-150 animate-fadeIn hover:bg-blue-800`}
                    style={{ animationDelay: `${subIndex * 150}ms` }}
                  >
                    {subItem.menimenu ? (
                      <button
                        className={`flex items-center justify-between px-5 duration-150  text-md py-1 hover:bg-blue-800 hover:text-white w-full font-bold ${
                          openSubMenus === subIndex
                            ? "bg-blue-500 text-white"
                            : ""
                        }`}
                        onClick={() => toggleSubMenu(subIndex)}
                      >
                        {subItem.name}
                        <FaCaretUp
                          className={`transition-transform  transform ${
                            openSubMenus === subIndex
                              ? "rotate-180"
                              : "rotate-90"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        className="flex items-center justify-start px-5 duration-150 text-md text-slate-500 py-1 w-full block hover:text-white font-bold"
                        to={subItem.url}
                      >
                        {subItem.name}
                      </Link>
                    )}

                    {openSubMenus === subIndex && subItem.menimenu && (
                      <ul className="bg-white flex bg-slate-200 flex-col duration-150 mt-1 text-blue-900 w-full">
                        {subItem.menimenu.map((meniItem, meniIndex) => (
                          <li
                            key={meniItem.name}
                            className={`w-full opacity-0 animate-fadeIn duration-150 hover:bg-slate-500`}
                            style={{ animationDelay: `${meniIndex * 150}ms` }}
                          >
                            <Link
                              className="flex items-center text-slate-800 duration-150 justify-start px-5 py-1 text-md w-full block hover:text-white font-bold"
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
  );
};

export default MobileNav;

// import { Link } from "gatsby";
// import React, { useState } from "react";

// const MobileNav: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { label: "Products", link: "/products" },
//     { label: "Solution", link: "/solution" },
//     { label: "Resource & Support", link: "/support-Resorce/resources" },
//     { label: "Developers", link: "/developer/devloper" },
//     { label: "Pricing", link: "/pricing" },
//   ];

//   return (
//     <div className="relative">
//       {/* Hamburger Button */}
//       <button
//         className="block border-0 bg-transparent px-2 text-gray-500 hover:text-black focus:text-black focus:outline-none lg:hidden"
//         type="button"
//         aria-controls="navbarSupportedContent1"
//         aria-expanded={isOpen ? "true" : "false"}
//         aria-label="Toggle navigation"
//         onClick={toggleMenu}
//       >
//         {/* Hamburger icon */}
//         <svg
//           className="w-6 h-6 stroke-current"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Animated Mobile Menu */}
//       <ul
//         className={`fixed left-0 top-12 md:top-16 mt-0.5 md:mt-2 w-full h-auto bg-zinc-50 text-blue-950 z-50 text-start text-3xl space-y-1 py-2 shadow-slate-100 shadow-md transition-all duration-300 ease-in-out transform ${
//           isOpen
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 -translate-y-1 pointer-events-none"
//         }`}
//         id="navbarSupportedContent1"
//       >
//         {menuItems.map((item, index) => (
//           <li
//             key={item.label}
//             className={`hover:bg-blue-600 hover:text-white w-full pb-1 transition-all duration-500 ease-in-out transform ${
//               isOpen
//                 ? "opacity-100 translate-x-0 delay-100"
//                 : "opacity-0 translate-x-4 pointer-events-none"
//             }`}
//             style={{ transitionDelay: `${index * 150}ms` }}
//           >
//             <Link to={item.link} className="px-4 text-lg block">
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MobileNav;
