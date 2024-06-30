import React from 'react';
import { Link } from "gatsby";

const LogoWithText = () => {
  return (
    <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-110 align-middle">
      <img
        src="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg"
        alt="Logo"
        className="h-11 lg:h-14 align-middle"
      />
      <span className="text-2xl font-bold transition-colors duration-300">BOTBAT</span>
    </Link>
  );
}

export default LogoWithText;