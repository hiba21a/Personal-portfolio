import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { navLinks } from "./Links";

const NavLink = ({ to, children, mobile, setIsMenuOpen }) => {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to));
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${
          mobile ? "block border-b-2" : ""
        } px-3 py-2 text-base font-medium transition-colors duration-200 ${
          isActive
            ? "text-sky-600 dark:text-sky-400"
            : "text-gray-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400"
        }`
      }
      onClick={() => mobile && setIsMenuOpen(false)}
    >
      {children}
    </RouterNavLink>
  );
};

export const NavLinks = ({ mobile, setIsMenuOpen }) => {
  return (
    <div
      className={`${
        mobile
          ? "flex flex-col gap-1.5"
          : "flex flex-row items-center space-x-4 max-lg:space-x-1 "
      }`}
    >
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          mobile={mobile}
          setIsMenuOpen={setIsMenuOpen}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLink;
