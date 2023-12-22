import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/authSlice";
import bgImg from "../../../assets/../images/img4.png";
import { useNavigate } from "react-router";

export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      repeatPassword: { value: string };
      firstname: { value: string };
      lastname: { value: string };
    };

    if (target.password.value === target.repeatPassword.value) {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/auth/signup`,
        data: {
          email: target.email.value,
          password: target.password.value,
          firstname: target.firstname.value,
          lastname: target.lastname.value,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setUser(response.data));
      navigate(`/user/${response.data.id}`);
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <section className="h-full mx-auto py-20 gap-8">
      <div className="flex flex-col h-auto lg:flex-row justify-center bg-green-600 text-2xl items-center lg:px-32 px-5 gap-12 mb-10">
        <img className="sm:7/12 lg:w-7/12 mt-2" src={bgImg} alt="" />
        <div className="space-y-2 lg:pt-16 mt-0">
          <h2 className="flex flex-row mx-auto mb-0 text-center text-black justify-center items-center font-semibold text-2xl px-26">
            Crear cuenta
          </h2>
          <span className="text-xl text-black">
            Disfruta de nuestros servicios
          </span>

          <form
            id="form"
            className="flex flex-col gap-1"
            onSubmit={handleSubmit}
          >
            <p className="text-sm text-black font-bold">Nombre</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="text"
              name="firstname"
              placeholder=" Nombre"
            />
            <p className="text-sm text-black font-bold">Apellido</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="text"
              name="lastname"
              placeholder=" Apellido"
            />
            <p className="text-sm text-black font-bold">Email</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="email"
              name="email"
              placeholder=" Email"
            />
            <p className="text-sm text-black font-bold">Contraseña</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="password"
              name="password"
              placeholder=" Contraseña"
            />
            <p className="text-sm text-black font-bold">Repetir contraseña</p>
            <input
              className="border-2 border-green-500 rounded-md"
              type="password"
              name="repeatPassword"
              placeholder=" Repetir contraseña"
            />
            <button className="btn mx-auto text-sm font-bold border-2 border-black bg-black px-20 py-2 mt-2 mb-0 rounded-full text-white hover:text-black">
              Registrarse
            </button>
          </form>

          <br></br>
        </div>
      </div>
    </section>
  );
}

export default Register;
