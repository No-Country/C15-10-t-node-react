import React from 'react'

export const Hero:React.FC = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url(https://img.freepik.com/fotos-premium/rio-tiber-roma_219717-5740.jpg?size=626&ext=jpg&ga=GA1.1.974543645.1689639421&semt=sph)] bg-cover bg-no-repeat'>
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className= 'text-black mt-20 mb-[-10] font-bold text-5xl'>Roma</h1>
        <p className='text-black text-xl font-semibold'>
        Haz con nosotros esta ruta para conocer los sitios a visitar en Roma, una ciudad de infinitos tesoros arqueológicos, reconocidas colecciones de arte y un patrimonio cultural eterno.
         Esto es lo mejor qué ver en Roma en 3 días.
           
        </p>
        <div className='lg:pl-44'>
           <button className='border-black border-2  bg-green-600 p-2 rounded-full text-black font-bold'>
             <a href="#">Conocer  mas..</a>
           </button>
       </div>
      </div>
    </div>
  )
}

export default Hero