import { useState } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Logo from "../../assets/wind.png";
import Contac from "../../models/Contact";
import { TbWorld } from "react-icons/tb";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <div className="flex flex-row justify-between px-7 py-4 md:py-4 mb-15 text-black font-bold bg-green-600 shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={Logo} alt="Logo FreeWind" className="w-11" />
            <h1 className="text-2xl font-bold ml-1">FreeWind</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium md:text-base mx-2">
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="destinos"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  Descubrir
                </Link>
              </div>
            </div>
            <Link
              to="planificar"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:bg-gray-200  px-4 py-2 rounded-full transition-all cursor-pointer"
            >
              Viajes
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="opiniones"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer text-center"
                >
                  Opinión
                </Link>
                <Link
                  to="opiniones"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  Más
                </Link>
              </div>
            </div>
          </nav>

          <div className=" hidden lg:flex">
            <span className="flex flex-row hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer font-semibold mx-1">
              <TbWorld className="mt-1.5" />
              <span>|EUR</span>
            </span>
            <button
              className="px-4 py-2 border-2 border-none bg-black text-white hover:text-white hover:bg-gray-900 transition-all rounded-full"
              onClick={openForm}
            >
              Iniciar sesión
            </button>
          </div>

          {showForm && (
            <Contac
              closeForm={closeForm}
              title={function (): string {
                throw new Error("Function not implemented.");
              }}
            />
          )}

          <div className="md:hidden flex items-center">
            <TiThMenu
              size={25}
              onClick={handleChange}
              className="cursor-pointer"
            />
          </div>
        </div>
        {menu && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <div
              className={`${
                menu ? "translate-x-0" : "-translate-x-full"
              } lg:hidden fixed top-0 left-0 z-40 h-screen py-10 px-7 overflow-y-auto transition-transform -translate-x-full bg-white w-72 sm:w-96 flex items-center flex-col`}
              tabIndex={-1}
              aria-labelledby="drawer-left-label"
            >
              <IoClose
                size={25}
                onClick={handleChange}
                className="cursor-pointer fixed top-0 right-0 m-4 text-black"
              />
              <div className="w-full flex items-start flex-col">
                <button
                  className="text-base mx-auto w-full md:px-16 py-2 border-2 border-black bg-black text-white transition-all rounded-full"
                  onClick={openForm}
                >
                  Iniciar sesión
                </button>
                <span className="flex flex-row py-6 rounded-full transition-all cursor-pointer text-black font-bold">
                  <TbWorld className="mt-1.5" />
                  <p>España, ES</p>
                  <div className="border-l border-gray-300 h-full mx-1"></div>
                  <p>URS</p>
                </span>
              </div>
              <div className="border-b border-gray-300 my-4 w-full"></div>
              <div className="flex flex-col text-gray-700 w-full items-start">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="hoteles"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Hoteles
                </Link>
                <Link
                  to="cosas que hacer"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Cosas que hacer
                </Link>
                <Link
                  to="restaurantes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Restaurantes
                </Link>
                <Link
                  to="alquiler de auto"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Alquiler de vacaciones
                </Link>
                <Link
                  to="vuelos"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Vuelos
                </Link>
                <Link
                  to="cruceros"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Cruceros
                </Link>
                <Link
                  to="alquiler autos"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Alquiler de Autos
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
