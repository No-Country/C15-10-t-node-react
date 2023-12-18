import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Logo from "../../assets/wind.png";
import { TbWorld } from "react-icons/tb";
import ThemeController from "./ThemeController/ThemeController";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <div className="flex flex-row justify-between px-7 py-4 md:py-4 mb-15 text-black font-bold bg-green-600 shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="cursor-pointer">
            <Link to={"/"} className="flex flex-row items-center ">
              <img src={Logo} alt="Logo FreeWind" className="w-11" />
              <h1 className="text-2xl font-bold ml-1">FreeWind</h1>
            </Link>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium md:text-base mx-2">
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="/search"
                  className="hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  Descubrir
                </Link>
              </div>
            </div>
            <Link
              to="planificar"
              className="hover:bg-gray-200  px-4 py-2 rounded-full transition-all cursor-pointer"
            >
              Viajes
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="opiniones"
                  className="hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer text-center"
                >
                  Opinión
                </Link>
                <Link
                  to="opiniones"
                  className="hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  Más
                </Link>
              </div>
            </div>
          </nav>

          <div className=" hidden lg:flex items-center justify-center">
            <ThemeController />
            <span className="flex flex-row hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer font-semibold mx-1">
              <TbWorld className="mt-1.5" />
              <span>|EUR</span>
            </span>
            <Link
              to="/login"
              className="px-4 py-2 border-2 border-none bg-black text-white hover:text-white hover:bg-gray-800 transition-all rounded-full"
            >
              Iniciar sesión
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <ThemeController />
            <TiThMenu
              size={25}
              onClick={handleChange}
              className="cursor-pointer ml-1"
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
                <Link
                  to="/login"
                  className="text-base text-center mx-auto w-full md:px-16 py-2 border-2 border-black bg-black hover:bg-gray-800 hover:border-gray-800 text-white transition-all rounded-full"
                  onClick={openForm}
                >
                  Iniciar sesión
                </Link>
                <span className="flex flex-row py-6 rounded-full transition-all cursor-pointer text-black font-bold">
                  <TbWorld className="mt-1.5" />
                  <p>España, ES</p>
                  <div className="border-l border-gray-300 h-full mx-1"></div>
                  <p>EUR</p>
                </span>
              </div>
              <div className="border-b border-gray-300 my-4 w-full"></div>
              <div className="flex flex-col text-gray-700 w-full items-start">
                <Link
                  to="/"
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/search"
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Descubrir
                </Link>
                <Link
                  to="#"
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Viajes
                </Link>
                <Link
                  to="#"
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Opinión
                </Link>
                <Link
                  to="#"
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Más
                </Link>
                <Link
                  to="#"
                  className="text-base font-semibold transition-all cursor-pointer my-3 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Cruceros
                </Link>
                <Link
                  to="#"
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