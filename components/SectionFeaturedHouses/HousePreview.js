import {
  CameraOutlined,
  StarFilled,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HousePreview.module.css";

const HousePreview = ({ info }) => {
  const {
    name,
    address,
    coverImg,
    type,
    owner,
    ownerPicture,
    bedrooms,
    bathrooms,
    area,
    parkingLots,
    price,
  } = info;

  return (
    <article className={`${styles.item} flex flex-col my-6`}>
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={coverImg}
          alt="Apartment preview"
          className="object-cover w-full h-80 cover"
        />

        <div className="absolute flex items-center top-2 left-3">
          <div className="flex items-center px-2 mr-2 text-white bg-red-500 rounded-lg">
            <CameraOutlined className="text-lg" />
            <span className="ml-2">4</span>
          </div>
          <div className="flex items-center px-2 text-white bg-red-500 rounded-lg">
            <VideoCameraOutlined className="text-lg" />
            <span className="ml-2">1</span>
          </div>
        </div>

        <div className="absolute flex items-center -top-1 right-3">
          <Tooltip placement="right" title="Inmueble destacado">
            <div
              className={`${styles.featured} flex items-center px-2 py-3 text-white bg-green-500 rounded-lg relative`}
            >
              <StarFilled className="text-lg" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="px-4 pt-6 pb-3 mx-2 shadow-xl rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-gray-400">{address}</p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex items-center mr-6">
            <StarFilled className="mr-2 text-lg text-yellow-500" />
            <span className="text-xl font-bold">4.5</span>
          </div>
          <div className="px-3 py-1 font-semibold text-blue-500 bg-blue-100 rounded-full">
            {type === "OnSale" ? "En venta" : "Arriendo"}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-4 font-semibold text-md">Agente de ventas</h4>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={ownerPicture}
                alt="Agent"
                className="object-cover w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <span className="block font-semibold">{owner}</span>
                <span className="text-gray-400">Owner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-4 font-semibold text-md">Especificaciones</h4>

          <div className="grid justify-between grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Image
                  src="/icons/bedroom.svg"
                  alt="Apartment's number of bedroom"
                  width="20"
                  height="20"
                />
                <span className="ml-2 text-xl font-semibold">{bedrooms}</span>
              </div>
              <span className="text-gray-400">Alcobas</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Image
                  src="/icons/bathroom.svg"
                  alt="Apartment's number of bathrooms"
                  width="20"
                  height="20"
                />
                <span className="ml-2 text-xl font-semibold">{bathrooms}</span>
              </div>
              <span className="text-gray-400">Baños</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Image
                  src="/icons/area.svg"
                  alt="Apartment's area in square feet"
                  width="20"
                  height="20"
                />
                <span className="ml-2 text-xl font-semibold">{area}</span>
              </div>
              <span className="text-gray-400">Área (m²)</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Image
                  src="/icons/parking.svg"
                  alt="Apartment's number of parking lots"
                  width="20"
                  height="20"
                />
                <span className="ml-2 text-xl font-semibold">
                  {parkingLots}
                </span>
              </div>
              <span className="text-gray-400">Parqueaderos</span>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-between py-6 border-t border-gray-100">
          <div>
            <span className="block text-sm text-gray-400">Precio</span>
            <span className="text-2xl font-semibold">${price}</span>
          </div>
          <Link href="property">
            <a className="leading-6 ant-btn-primary ant-btn ant-btn-lg ant-btn-round">
              ¡Me interesa!
            </a>
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default HousePreview;
