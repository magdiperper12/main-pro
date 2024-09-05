import React, { useState } from "react";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Products", link: "/products" },
    { label: "Solution", link: "/solution" },
    { label: "Resource & Support", link: "/support-Resorce/resources" },
    { label: "Developers", link: "/developer/devloper" },
    { label: "Pricing", link: "/pricing" },
  ];

  return (
    <div className='relative'>
      {/* Hamburger Button */}
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

      {/* Animated Mobile Menu */}
      <ul
        className={`fixed left-0 top-12 md:top-16 mt-0.5 md:mt-2 w-full h-auto bg-zinc-50 text-blue-950 z-50 text-start text-3xl space-y-1 py-2 shadow-slate-200 shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        id='navbarSupportedContent1'
      >
        {menuItems.map((item, index) => (
          <li
            key={item.label}
            className={`hover:bg-blue-600 hover:text-white w-full pb-1 transition-all duration-500 ease-in-out transform ${
              isOpen
                ? "opacity-100 translate-x-0 delay-100"
                : "opacity-0 translate-x-4 pointer-events-none"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <a href={item.link} className='px-4 text-lg block'>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
