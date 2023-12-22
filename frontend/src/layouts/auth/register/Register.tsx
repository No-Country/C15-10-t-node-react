import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/authSlice";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../assets/wind.png";


interface IFormInput {
  password: string;
  repeatPassword: string;
  email: string;
  firstname: string;
  lastname: string;
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.repeatPassword) {
      alert('Las contraseñas no coinciden')
      return
    } else {

      try {
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_API_URL}/auth/signup`,
          data: data,
          headers: {
            "Content-Type": "application/json",
          },
        });
        dispatch(setUser(response.data));
        navigate(`/user/${response.data.id}`);
      } catch (error: any) {
        alert(error.response.data.message);
        console.log(error);
      }
    }
  }

  return (

    <div id="login" className="flex flex-col lg:flex-row w-full md:pt-12 pt-20">
      {/* Primera Columna (Formulario de Inicio de Sesión) */}
      <div className="lg:w-1/3 bg-base-200 lg:p-16 md:p-32 p-4">
        <h2 className="text-center lg:text-xl md:text-2xl text-lg font-bold mb-6 flex items-center justify-center">
          Bienvenido a{" "}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="lg:w-11 md:w-12 sm:w-11 w-7 mx-1"
            />
            <span className="text-emerald-600 lg:text-xl md:text-2xl text-xl">
              FreeWind
            </span>
          </div>
        </h2>
        <form
          noValidate
          id="form"
          className="flex flex-col gap-4 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <label className="block" htmlFor="email">
            <span className="block text-sm text-base-content font-bold mb-2">
              Email
            </span>
            <input
              type="email"
              id="email"
              className={`
         border-2 rounded-md p-2 outline-none w-full
         ${errors.email
                  ? "invalid:border-red-500 border-red-500 placeholder:text-red-500 invalid:placeholder-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  : "border-green-500"
                }
       `}
              autoComplete="off"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email es requerido",
                },
                pattern: {
                  value: /^[\w-ñÑ]+(\.[\w-ñÑ]+)*@[\w-ñÑ]+(\.[\w-ñÑ]+)+$/,
                  message: "Por favor, ingrese un Email válido",
                },
              })}
              placeholder="jhondoe@gmail.com"
              defaultValue={""}
            />
            {errors.email && (
              <p className={`mt-2 text-red-500 text-sm`}>
                {errors.email?.message}
              </p>
            )}
          </label>
          <label className="block" htmlFor="password">
            <span className="block text-sm text-base-content font-bold mb-2">
              Contraseña
            </span>
            <input
              id="password"
              className={`border-2 border-green-500 rounded-md p-2 outline-none w-full ${errors.password
                ? "invalid:border-red-500 border-red-500 placeholder:text-red-500 invalid:placeholder-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                : "border-green-500"
                }
           `}
              type="password"
              autoComplete="off"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña es requerido",
                },
                minLength: {
                  value: 3,
                  message: "La contraseña debe tener al menos 3 caracteres",
                },
              })}
              placeholder="*********"
            />
            {errors.password && (
              <p className={`mt-2 text-red-500 text-sm`}>
                {errors.password?.message}
              </p>
            )}
          </label>
          <label className="block" htmlFor="repeatPassword">
            <span className="block text-sm text-base-content font-bold mb-2">
              Repetir contraseña
            </span>
            <input
              id="repeatPassword"
              className={`border-2 border-green-500 rounded-md p-2 outline-none w-full ${errors.password
                ? "invalid:border-red-500 border-red-500 placeholder:text-red-500 invalid:placeholder-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                : "border-green-500"
                }
           `}
              type="password"
              autoComplete="off"
              {...register("repeatPassword", {
                required: {
                  value: true,
                  message: "Contraseña es requerido",
                },
                minLength: {
                  value: 3,
                  message: "La contraseña debe tener al menos 3 caracteres",
                },
              })}
              placeholder="*********"
            />
            {errors.password && (
              <p className={`mt-2 text-red-500 text-sm`}>
                {errors.password?.message}
              </p>
            )}
          </label>
          <label className="block" htmlFor="firstname">
            <span className="block text-sm text-base-content font-bold mb-2">
              Nombre
            </span>
            <input
              id="firstname"
              className={`border-2 border-green-500 rounded-md p-2 outline-none w-full border-green-500"`}
              type="text"
              autoComplete="off"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },

              })}
              placeholder="jhondoe"
              required
            />
            {errors.firstname && (
              <p className={`mt-2 text-red-500 text-sm`}>
                {errors.firstname?.message}
              </p>
            )}
          </label>

          <label className="block" htmlFor="lastname">
            <span className="block text-sm text-base-content font-bold mb-2">
              Apellido
            </span>
            <input
              id="lastname"
              className={`border-2 border-green-500 rounded-md p-2 outline-none w-full border-green-500"`}
              type="text"
              autoComplete="off"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Apellido es requerido",
                },

              })}
              placeholder="Doe"
            />
            {errors.lastname && (
              <p className={`mt-2 text-red-500 text-sm`}>
                {errors.lastname?.message}
              </p>
            )}


          </label>
          <div className="flex flex-row justify-center items-center">
            <Link
              to={"#"}
              className="text-emerald-600 hover:text-emerald-700 hover:underline font-semibold text-sm"
            >
              Olvidé mi contraseña
            </Link>
          </div>
          <button
            type="submit"
            className="btn bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 text-white border-none"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center py-6">
          <Link to="/register" className="text-sm p-2 text-base-content">
            ¿Aún no tienes una cuenta?{" "}
            <span className="font-bold text-emerald-600 hover:text-emerald-700 underline">
              Registrate
            </span>
          </Link>
        </div>
      </div>

      {/* Segunda Columna (Imagen) */}
      <div className="lg:w-1/2 flex-grow">
        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dcosddxwt/image/upload/v1702841089/mexico-guadalajara-dia-de-los-muertos-pexels-bruno-cervera-12316510_iluhmo.webp" alt="Login Background" />
      </div>
    </div>
  );
}

export default Register;
