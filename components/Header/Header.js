import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState("scrolled");
  const router = useRouter();

  // if (router.pathname === "/") {
  //   useEffect(() => {
  //     listener = document.addEventListener("scroll", (e) => {
  //       let scrolled = document.scrollingElement.scrollTop;

  //       if (scrolled >= 100) {
  //         if (scrollState !== "scrolled") {
  //           setScrollState("scrolled");
  //         }
  //       } else {
  //         if (scrollState !== "top") {
  //           setScrollState("top");
  //         }
  //       }
  //     });
  //     return () => {
  //       document.removeEventListener("scroll", listener);
  //     };
  //   }, [scrollState]);
  // }

  return (
    <header
      className={`${styles.header}  ${
        scrollState === "scrolled" ? styles.scrolled : ""
      } fixed z-10 w-full h-16`}
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center"></div>
        <nav className="flex items-center h-full">
          <Link href="/">
            <a
              className={`${styles.item} mr-8 font-semibold uppercase relative h-full flex items-center`}
            >
              Home
            </a>
          </Link>
          <Link href="/properties">
            <a
              href=""
              className={`${styles.item} mr-8 font-semibold uppercase relative h-full flex items-center`}
            >
              Comprar
            </a>
          </Link>
          <Link href="/">
            <a
              href=""
              className={`${styles.item} font-semibold uppercase relative h-full flex items-center`}
            >
              Contacto
            </a>
          </Link>
        </nav>
      </div>
    </header>
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

export default Header;
