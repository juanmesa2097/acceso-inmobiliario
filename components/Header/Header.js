import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      className={`${styles.header} container fixed top-0 z-10 w-full transform translate-y-4 shadow-2xl rounded-2xl left-2/4 -translate-x-2/4`}
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center h-full"></div>
        <nav className="flex items-center h-full">
          <ActiveLink href="/" activeClassName="text-gray-900 border-blue-800">
            <a className="relative flex items-center h-full mr-8 font-semibold text-gray-400 border-b-4 border-transparent">
              Home
            </a>
          </ActiveLink>
          <ActiveLink
            href="/properties"
            activeClassName="text-gray-900 border-blue-900"
          >
            <a className="relative flex items-center h-full mr-8 font-semibold text-gray-400 border-b-4 border-transparent">
              Comprar
            </a>
          </ActiveLink>
          <ActiveLink
            href="/contact"
            activeClassName="text-gray-900 border-blue-900"
          >
            <a className="relative flex items-center h-full mr-8 font-semibold text-gray-400 border-b-4 border-transparent">
              Contacto
            </a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
