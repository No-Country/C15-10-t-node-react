import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineHotel } from "react-icons/md";
import { PiBagSimpleThin } from "react-icons/pi";
import { Search } from "lucide-react";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Nav: React.FC = () => {
  const places = useSelector((state: RootState) => state.places.places);
  const [menuSeleccionado, setMenuSeleccionado] = useState("¿Adónde vas?");
  const [placeHolderText, setPlaceHolderText] = useState(
    "Lugares que visitar, cosas que hacer, hoteles..."
  );
  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const handleMenuClick = (title: string, placeholder: string) => {
    setMenuSeleccionado(title);
    setPlaceHolderText(placeholder);
  };

  const handleActive = (open: boolean, text: string) => {
    setAutoCompleteVisible(open);
    setText(text);
  };

  return (
    <div className="text-center items-center text-sm mx-auto py-5 sm:px-3 px-1">
      <h1 className="items-center m-6 mb-2 py-6 font-bold md:text-6xl text-4xl">
        {menuSeleccionado}
      </h1>
      <div className="text-center items-center justify-center">
        <div className="flex text-center sm:text-sm items-center justify-center m-auto lg:text-xl md:p-2 py-2 px-0 rounded-full font-bold sm:gap-4 gap-1 w-full">
          <a
            className="transition-all duration-300 border-b-2 border-transparent hover:border-base-content cursor-pointer"
            onClick={() =>
              handleMenuClick(
                "¿Adónde vas?",
                "Lugares que visitar, cosas que hacer, hoteles..."
              )
            }
          >
            <span className="flex flex-row items-center justify-center">
              <RiHomeLine className="mt-1 md:text-lg sm:text-base text-sm" />
              <p className="ml-1 md:text-xl sm:text-base text-sm font-normal hover:font-semibold">
                Buscar todo
              </p>
            </span>
          </a>
          <a
            className="transition-all duration-300 border-b-2 border-transparent hover:border-base-content cursor-pointer"
            onClick={() =>
              handleMenuClick(
                "Alójate en algún sitio increíble",
                "Nombre del hotel o destino"
              )
            }
          >
            <span className="flex flex-row items-center justify-center">
              <MdOutlineHotel className="mt-1 md:text-lg sm:text-base text-sm" />
              <p className="mx-1 md:text-xl sm:text-base text-sm font-normal hover:font-semibold">
                Hoteles
              </p>
            </span>
          </a>
          <a
            className="transition-all duration-300 border-b-2 border-transparent hover:border-base-content cursor-pointer"
            onClick={() =>
              handleMenuClick(
                "Haz algo divertido",
                "Atracción, actividad o destino"
              )
            }
          >
            <span className="flex flex-row items-center justify-center">
              <PiBagSimpleThin className="mt-1 md:text-lg sm:text-base text-sm" />
              <p className="ml-1 md:text-xl sm:text-base text-sm font-normal hover:font-semibold">
                Cosas que hacer
              </p>
            </span>
          </a>
        </div>

        <div className="md:mx-20 md:shadow-none shadow-xl">
          {!autoCompleteVisible && (
            <div className="relative flex flex-col items-stretch ">
              <div className="relative items-center">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                  <Link to={"/search"}>
                    <Search />
                  </Link>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-5 ps-10 text-sm outline-none text-base-content border-2 border-gray-300 rounded-full ring-gray-300 placeholder:text-gray-500 placeholder:text-sm focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder={placeHolderText}
                  onClick={() => setAutoCompleteVisible(true)}
                  defaultValue={text}
                />
              </div>
              <button
                type="submit"
                onClick={() => setAutoCompleteVisible(true)}
                className="md:absolute md:end-2.5 md:bottom-2 md:mt-0 mt-3 font-bold px-5 py-4 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 transition-all rounded-full"
              >
                Buscar
              </button>
            </div>
          )}
          {autoCompleteVisible && (
            <AutoComplete
              value={value}
              onChange={setValue}
              items={places}
              placeholder={placeHolderText}
              onClick={handleActive}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
