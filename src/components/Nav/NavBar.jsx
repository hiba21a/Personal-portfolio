import React, { useState } from "react";
import { NavLinks } from "./NavLink";
import ThemeBtn from "./ThemeBtn";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-gray-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
            >
              Hiba Mahmoud Abbas
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center items-center">
            <NavLinks />
          </div>
          <div className="hidden md:flex items-center">
            <ThemeBtn />
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              <FaAlignJustify size={25}/>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              <div className="flex justify-center">
                <ThemeBtn />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
