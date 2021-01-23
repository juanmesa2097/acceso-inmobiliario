import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${styles.pattern} relative overflow-hidden text-gray-100 bg-gray-900`}
    >
      <div className="py-12">
        <div className="container">
          <div className="flex flex-wrap items-start">
            <aside className="w-1/4">
              <a href="" className="block mb-6">
                <Image
                  src="/icons/facebook.svg"
                  alt="Company facebook"
                  width="40"
                  height="40"
                />
              </a>

              <p className="mb-2">
                <MailOutlined className="mr-2" /> accesoinmobiliario@gmail.com
              </p>
              <p>
                <PhoneOutlined className="mr-2" /> +57 314 824 84 65
              </p>
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
