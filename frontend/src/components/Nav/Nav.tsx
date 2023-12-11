import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineHotel } from "react-icons/md";
import { PiBagSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <div className="text-center items-center sm:px-32 text-sm lg:px-26 py-6 px-5">
      <h1 className="text-center items-center text-black m-8 mb-2 py-8 font-bold text-4xl">
        ¿Adónde vas?
      </h1>
      <div className="text-center items-center justify-center">
        <button className="flex text-center sm:text-sm items-center justify-center m-auto lg:text-xl p-2 rounded-full text-black font-bold gap-4">
          <span className="sm:gap-1 flex text-center items-center justify-center md:gap-1 lg:gap-2 hover:underline">
            <RiHomeLine className="mt-.5" />
            <Link to={"#"}>Buscar todo</Link>
          </span>
          <span className="flex flex-row hover:underline">
            <MdOutlineHotel className="mt-1" />
            <Link to={"#"} className="mx-1">
              Hoteles
            </Link>
          </span>
          <span className="flex flex-row hover:underline">
            <PiBagSimpleThin className="mt-1" />
            <Link to={"#"} className="mx-1">
              Cosas que hacer
            </Link>
          </span>
        </button>
        <br></br>
        <div>
          <input
            className="flex items-center pl-3 bg-gray-300 text-black text-sm font-semibold rounded-3xl border-2 p-4 px-4 mb-2 mx-auto w-9/12 cursor-pointer"
            type="text"
            placeholder=" 🔍Lugares para visitar, cosas para hacer,hoteles..."
          />
          <button className="flex items-center justify-center text-xl font-bold mx-auto px-28 py-2 border-2 border-green-600 bg-green-600 text-black transition-all rounded-full">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
