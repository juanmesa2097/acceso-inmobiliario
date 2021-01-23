import React from "react";

const Navbar = () => {
  return (
    <nav className="container absolute top-0 z-10 w-full transform translate-y-4 bg-white rounded-lg left-2/4 -translate-x-2/4 ">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center"></div>
        <div className="flex items-center">
          <a href="#aboutUs" className="mr-4">
            Inicio
          </a>
          <a href="" className="mr-4">
            Comprar
          </a>
          <a href="" className="">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
