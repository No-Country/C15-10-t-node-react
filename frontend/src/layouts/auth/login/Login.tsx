import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/authSlice";
import bgImg from '../../../assets/../images/img5.png';

interface IFormInput {
  confirmpwd: string;
  password: string;
  email: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/auth/token`,
        data: { email: target.email.value, password: target.password.value },
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      dispatch(setUser(response.data));
      navigate(`/user/${response.data.id}`);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section className="h-full mx-auto py-20 gap-8">
      <div className="flex flex-col h-auto lg:flex-row justify-center bg-green-600 text-2xl items-center lg:px-32 px-5 gap-12 mb-10">
        <img className="sm:7/12 lg:w-7/12 mt-2" src={bgImg} alt="" />
        <div className="space-y-2 lg:pt-16">
          <h2 className="flex flex-row mx-auto text-center text-black justify-center items-center font-semibold text-2xl px-26">
            Iniciar sesión
          </h2>
          <span className="text-xl text-black">
            Disfruta de nuestros servicios
          </span>

          <form
            id="form"
            className="flex flex-col gap-1"
            onSubmit={handleSubmit}
            method="post"
          >
            <p className="text-sm text-black font-bold">Email</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="email"
              placeholder="Email"
              name="email"
            />
            <p className="text-sm text-black font-bold">Contraseña</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="password"
              placeholder="Contraseña"
              name="password"
            />
            <button className="btn mx-auto text-sm font-bold border-2 border-black bg-black px-20 py-2 mt-6 mb-10 rounded-full text-white hover:text-black">
              Iniciar sesión
            </button>
          </form>
          <div className="text-start mb-6">
            <Link to="/register" className="text-sm p-2 py-3">
              No tengo cuenta{" "}
              <span className="text-black font-bold">Registrarse</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
