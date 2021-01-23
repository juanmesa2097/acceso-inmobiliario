import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");
  // const [scrollChange, setScrollChange] = useState(false);

  useEffect(() => {
    let prevPosition = window.pageYOffset;

    listener = document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      // var currentPosition = window.pageYOffset;

      if (scrolled >= 100) {
        if (scrollState !== "scrolled") {
          setScrollState("scrolled");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }

      // if (prevPosition > currentPosition) {
      //   setScrollChange(true);
      // } else {
      //   setScrollChange(false);
      // }

      // prevPosition = currentPosition;
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    //   <nav
    //   className={`${styles.nav} fixed z-10 w-full h-16 ${
    //     scrollState === "scrolled" ? styles.scrolled : ""
    //   } ${scrollChange ? "top-0" : "-top-16"}`}
    //   style={navStyles}
    // >
    <nav
      className={`${styles.nav}  ${
        scrollState === "scrolled" ? styles.scrolled : ""
      } fixed z-10 w-full h-16`}
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center"></div>
        <div className="flex items-center h-full">
          <a
            href="#aboutUs"
            className={`${styles.item} mr-8 font-semibold uppercase relative h-full flex items-center`}
          >
            Inicio
          </a>
          <a
            href=""
            className={`${styles.item} mr-8 font-semibold uppercase relative h-full flex items-center`}
          >
            Comprar
          </a>
          <a
            href=""
            className={`${styles.item} font-semibold uppercase relative h-full flex items-center`}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
    // <nav className="container absolute top-0 z-10 w-full transform translate-y-4 bg-white rounded-lg left-2/4 -translate-x-2/4 ">
    //   <div className="container flex items-center justify-between h-16">
    //     <div className="flex items-center"></div>
    //     <div className="flex items-center">
    //       <a href="#aboutUs" className="mr-4">
    //         Inicio
    //       </a>
    //       <a href="" className="mr-4">
    //         Comprar
    //       </a>
    //       <a href="" className="">
    //         Contacto
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
