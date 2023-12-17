import {  NavLink } from "react-router-dom";
import bgImg from '../../../assets/../images/img4.png';
import { useForm } from 'react-hook-form';

export function Register (){

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="h-full mx-auto py-20 gap-8">
    <div className="flex flex-col h-auto lg:flex-row justify-center bg-green-600 text-2xl items-center lg:px-32 px-5 gap-12 mb-10">
    <img className="sm:7/12 lg:w-7/12 mt-2" src={bgImg} alt="" />
        <div className="space-y-2 lg:pt-16 mt-0">
            <h2 className="flex flex-row mx-auto mb-0 text-center text-black justify-center items-center font-semibold text-2xl px-26">Crear cuenta</h2>
            <span className="text-xl text-black">Disfruta de nuestros servicios</span>

            <form id='form' className='flex flex-col gap-1' onSubmit={handleSubmit(onSubmit)}>
                <p className="text-sm text-black font-bold">Nombre</p>
                <input className="border-2 border-green-500 rounded-md" type="text" {...register("username")} placeholder=' nombre' />
                <p className="text-sm text-black font-bold">Apellido</p>
                <input className="border-2 border-green-500 rounded-md" type="text" {...register("password")} placeholder=' apellido' />
                <p className="text-sm text-black font-bold">email</p>
                <input className="border-2 border-green-500 rounded-md" type="email" {...register("confirmpwd")} placeholder=' email' />
                <p className="text-sm text-black font-bold">Crear contraseña</p>
                <input className="border-2 border-green-500 rounded-md" type="text" {...register("confirmpwd")} placeholder=' Crear contraseña' />
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                <button className='btn mx-auto text-sm font-bold border-2 border-black bg-black px-20 py-2 mt-2 mb-0 rounded-full text-white hover:text-black'>Inicio sesion</button>
            </form>
            <div className="text-start">
            <NavLink to="/" className="text-sm text-black font-bold "><button>Cerrar</button>
            </NavLink>
            </div>
            <br></br>
        </div>
      </div>
  </section>
  )           
}

export default Register;