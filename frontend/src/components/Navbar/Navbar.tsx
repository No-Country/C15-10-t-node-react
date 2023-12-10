import  { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Logo from "../../assets/wind.png";
import Contac from '../../models/Contact'




  const Navbar =()=> {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className='fixed z-10 w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 mb-15 text-black font-bold bg-green-600 shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
              <span>
              <img src={Logo} alt="Logo FreeWind" className="w-11" />
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
                 </div>
                <Link 
                 to='planificar'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:bg-gray-200  px-4 py-2 rounded-full transition-all cursor-pointer'>
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
                 </div>
                 
               
            </nav>

            <div className=" hidden lg:flex">
            <button
              className= 'text-center mx-auto px-6 py-2 border-2 border-black bg-black text-white hover:text-white transition-all rounded-full'
              onClick={openForm}
            >
              Login
            </button>
          </div>

          {showForm && <Contac closeForm={closeForm} title={function (): string {
            throw new Error('Function not implemented.');
          } } />}

            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-emerald-400 text-black left-0 top-20 font-semibold text-3xl  pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}>
                
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
                 to='alquiler de auto' 
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
                <div className="flex  lg:hidden">
            <button
              className="text-center mx-auto text-xl bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
              onClick={openForm}
            >
              LOGIN
            </button>
          </div>
                <br></br>
        </div>
      </div>
    </div>
  )
}

export default Navbar
