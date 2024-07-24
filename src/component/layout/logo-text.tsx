import React from "react";
import { Link } from "gatsby";

const LogoWithText = () => {
  return (
    <Link
      to='/'
      className='flex items-left transition-transform duration-300 hover:scale-105 align-middle px-0 lg:px-3 md:px-2 items-center'
    >
      <img
        src='https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg'
        alt='Logo'
        className='h-10 md:h-14 align-middle'
      />
      <span className='text-xl md:text-2xl font-bold transition-colors duration-300 '>
        BOTBAT
      </span>
    </Link>
  );
};

export default LogoWithText;
