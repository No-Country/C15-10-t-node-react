import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaTripadvisor } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
 

export const Navbar:React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
              <span>
              <FaTripadvisor size={50} className='border-2 bg-teal-500 px-2 py-2 rounded-full'/>
              </span>
                <h1 className='text-2xl font-bold ml-1'>FreeWind</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
              <div className='relative group'>
                <div className='flex items-center gap-1'>
                  <Link 
                     to='destinos' 
                     spy={true} 
                     smooth={true} 
                     duration={500} 
                     className='hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer'>
                     Descubrir
                  </Link>
                </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      <a href='#'>Travellers`Choice</a>
                      </Link>
                      </li>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Historias de viajes
                      </Link>
                      </li>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Foros de viajes
                      </Link>
                      </li>
                    </ul>
                 </div>
                <Link 
                 to='planificar'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className=' hover:underline px-4 py-2 rounded-full transition-all cursor-pointer'>
                 Viajes
                </Link>
                <div className='relative group'>
                <div className='flex items-center gap-1'>
                <Link 
                 to='opiniones' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer'>
                 Escribir opinion
                </Link>
                </div>
                <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Escribir opinion
                      </Link>
                      </li>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Publicar fotos
                      </Link>
                      </li>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Agregar lugar
                      </Link>
                      </li>
                    </ul>
                 </div>
                <div className='relative group'>
                <div className='flex items-center gap-1'>
                <Link 
                 to='opiniones' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer'>
                 Mas
                </Link>
                </div>
                <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Vuelos
                      </Link>
                      </li>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Cruceros
                      </Link>
                      </li>
                      <li>
                      <Link 
                      to='destinos' 
                      spy={true} 
                      smooth={true} 
                      duration={500} 
                      className='flex flex-row hover:bg-gray-200 text-xs font-bold px-8 py-2 rounded-full transition-all cursor-pointer'>
                      Alquiler de autos
                      </Link>
                      </li>
                    </ul>
                 </div>
                 <span className='flex flex-row hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer'>
                  <TbWorld className='mt-1.5' /><span>|Ars</span>
                 </span>
                 <Link 
                 to='planificar'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:bg-gray-200 px-4 py-2 rounded-full transition-all cursor-pointer'>
                </Link>
                <button className='px-4 py-1 border-2 border-black bg-black text-white hover:text-white transition-all rounded-full'>
                  Iniciar sesion
                </button>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-3xl  pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}>
                <button className='text-sm mx-auto px-16 py-2 border-2 border-black bg-black text-white transition-all rounded-full'>
                  Iniciar sesion
                </button>
            <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='hoteles' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Hoteles
                 </Link>
                <Link 
                 to='cosas que hacer'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Cosas que hacer
                </Link>
                <Link 
                 to='restaurantes' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Restaurantes
                </Link>
                <Link 
                 to='alquiler de vaca' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                  Alquiler de vacaciones
                </Link>
                <Link 
                 to='vuelos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                  Vuelos
                </Link>
                <Link 
                 to='cruceros' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                  Cruceros
                </Link>
                <Link 
                 to='alquiler autos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Alquiler de Autos
                </Link>
                <Link 
                 to='escribir opinion' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-sm ml-4 font-bold transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Escribir una opinion
                </Link>
                <br></br>
        </div>
      </div>
    </div>
  )
}

export default Navbar
