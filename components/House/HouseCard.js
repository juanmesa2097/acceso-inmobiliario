import React from "react";

const HouseCard = (props) => {
  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-xl">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Apartment preview"
        />
      </div>
      <div className="px-4 pt-6 pb-3 mx-2 shadow-xl rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Nacary Apartment</h3>
            <p className="text-gray-400">Poblado. Carrera 43 B N° 11-10</p>
          </div>
          <button className="grid p-4 bg-blue-600 rounded-full place-items-center">
            <i className="text-white im im-heart"></i>
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex items-center mr-6">
            <i className="mr-2 text-yellow-400 text-md im im-star"></i>
            <span className="text-xl font-bold">4.5</span>
          </div>
          <div className="px-3 py-1 font-semibold text-blue-500 bg-blue-100 rounded-full">
            En venta
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-4 font-semibold text-md">Agente de ventas</h4>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Agent"
                className="object-cover w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <span className="block font-semibold">Anastasia Tya</span>
                <span className="text-gray-400">Owner</span>
              </div>
            </div>

            <div className="flex items-center">
              <button className="grid p-3 mr-4 rounded-full shadow place-items-center">
                <i className="text-blue-500 im im-mail"></i>
              </button>
              <button className="grid p-3 rounded-full shadow place-items-center">
                <i className="text-green-500 im im-whatsapp"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-4 font-semibold text-md">Especificaciones</h4>

          <div className="grid grid-cols-3 justify-items-center">
            <div>
              <div className="flex items-center mb-2">
                <i className="mr-3 text-blue-500 im im-apartment"></i>
                <span className="text-xl font-semibold">3</span>
              </div>
              <span className="text-gray-400">Habitaciones</span>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <i className="mr-3 text-blue-500 im im-apartment"></i>
                <span className="text-xl font-semibold">3</span>
              </div>
              <span className="text-gray-400">Baños</span>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <i className="mr-3 text-blue-500 im im-apartment"></i>
                <span className="text-xl font-semibold">150</span>
              </div>
              <span className="text-gray-400">Área (m²)</span>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-between py-6 border-t border-gray-100">
          <div>
            <span className="block text-sm text-gray-400">Precio</span>
            <span className="text-3xl font-semibold">
              <span className="text-lg font-semibold">$</span>
              320M
            </span>
          </div>
          <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full">
            ¡Me interesa!
          </button>
        </footer>
      </div>
    </article>
  );
};

export default HouseCard;
