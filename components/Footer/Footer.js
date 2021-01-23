import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} relative overflow-hidden text-gray-100 bg-gray-900 pt-36`}
    >
      <div class={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container pt-16">
        <h3 className="mb-20 text-4xl font-semibold leading-relaxed text-white">
          los valores que nos mantienen <br /> fieles y responsables
        </h3>

        <div className="flex flex-wrap mb-36">
          <div className="w-1/3 pr-0 md:pr-8">
            <h4 className="flex items-center mb-8 text-lg font-semibold text-white">
              <Image src="/icons/box.svg" width="30" height="30" />
              <span className="ml-4">Simplicidad</span>
            </h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              perferendis.
            </p>
          </div>
          <div className="w-1/3 pr-0 md:pr-8">
            <h4 className="flex items-center mb-8 text-lg font-semibold text-white">
              <Image src="/icons/heart.svg" width="30" height="30" />
              <span className="ml-4">Bien social</span>
            </h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              tempora quos voluptates recusandae rerum aperiam.
            </p>
          </div>
          <div className="w-1/3 pr-0 md:pr-8">
            <h4 className="flex items-center mb-8 text-lg font-semibold text-white">
              <Image src="/icons/insurance.svg" width="30" height="30" />
              <span className="ml-4">Confianza</span>
            </h4>
            <p className="pr-0 text-gray-300 md:pr-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos molestiae iusto distinctio, ratione veritatis cumque!
              Quo, minus blanditiis?
            </p>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between px-12 py-8 mb-12 rounded-lg shadow-2xl bg-gradient-to-tr from-pink-600 to-purple-600">
        <div>
          <p className="mb-4 text-3xl font-semibold">
            ¿Listo para un futuro más simple?
          </p>
          {/* <p className="mb-6 text-3xl font-semibold text-gray-900">
            ¡Comencemos!
          </p> */}
          <a href="" className="leading-6 ant-btn ant-btn-lg ant-btn-round">
            ¡Comencemos!
          </a>
        </div>

        <div className="flex">
          <img
            src={
              "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535e658e24935b1b096148_peep-sitting-4.svg"
            }
            alt=""
            width="80"
          />
          <img
            src={
              "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535ef19b55b0b01256c383_peep-sitting-9.svg"
            }
            alt=""
            width="80"
          />
          <img
            src={
              "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535eb7550b76782df9e820_peep-sitting-7.svg"
            }
            alt=""
            width="80"
          />
        </div>
      </div>

      <div className="py-12">
        <div className="container">
          <div className="flex flex-wrap items-start">
            <aside className="w-1/4">
              <a href="" className="block">
                <Image
                  src="/icons/facebook.svg"
                  alt="Company facebook"
                  width="40"
                  height="40"
                />
              </a>
            </aside>
            <ul className="w-1/4">
              <li className="mb-4 text-sm font-semibold text-gray-300">
                Soporte
              </li>
              <li className="mb-2">
                <a href="" className="font-semibold">
                  Preguntas frecuentes
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="font-semibold">
                  Reportar un Bug
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="font-semibold">
                  Obtener ayuda
                </a>
              </li>
            </ul>
            <ul className="w-1/4">
              <li className="mb-4 text-sm font-semibold text-gray-300">
                Compañía
              </li>
              <li className="mb-2">
                <a href="" className="font-semibold hover:text-yellow-400">
                  Sobre nosotros
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="font-semibold hover:text-yellow-400">
                  Estudio de caso
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="font-semibold hover:text-yellow-400">
                  Contáctenos
                </a>
              </li>
            </ul>
            <ul className="w-1/4">
              <li className="mb-4 text-sm font-semibold text-gray-300">
                Síguenos
              </li>
              <li className="flex items-center">
                <a
                  href=""
                  className="block mr-4 transition duration-300 ease-in-out transform hover:scale-125"
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="Company facebook"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href=""
                  className="block mr-4 transition duration-300 ease-in-out transform hover:scale-125"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Company instagram"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href=""
                  className="block transition duration-300 ease-in-out transform hover:scale-125"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="Company whatsapp"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-300 bg-gray-800">
        <div className="container flex items-center justify-center py-6">
          <p className="text-xs">
            © 2021 Acceso Inmobiliario, todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
