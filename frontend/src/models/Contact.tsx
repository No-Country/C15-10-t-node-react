import { Link } from "react-router-dom";
import Logo from "../assets/wind.png";

export interface ContactProps {
  closeForm: () => void
  title: () => string;
}

const Contact: React.FC<ContactProps> = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-8 text-black">
        <form className=" w-80 md:w-96 space-y-4 bg-white p-3 rounded-xl">
          <img src={Logo} alt="Logo FreeWind" className="w-11" />
          <h1 className="text-2xl font-semibold text-start text-black">
            ¡Hola de nuevo!
          </h1>
          <div className=" flex flex-col">
            <h3>Direccion de correo electronico</h3>
            <input
              className="py-2 px-2  bg-[#d5f2ec] rounded-lg"
              type="text"
              name="Direccion de correo electronico"
              id="Direccion de correo electronico"
              placeholder="Direccion de correo electronico"
            />
          </div>
          <div className=" flex flex-col">
            <h3>Contraseña</h3>
            <input
              className="py-2 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="Contraseña"
              id="Contraseña"
              placeholder="Contraseña"
            />
          </div>
          <Link to={"#"} className="text-start text-sm py-2 underline">¿Olvidaste la contraseña?</Link>
          <div className=" flex gap-5">
            <button
              className=" text-center text-xs mx-auto bg-black text-white font-semibold px-24 py-2.5 rounded-full active:bg-black"
              onClick={closeForm}
            >
              Iniciar sesion
            </button>
          </div>
          <div className="flex flex-col text-center justify-center mx-auto text-sm">
            <h2>¿No eres miembro?</h2>
            <h2><span className="text-sm underline">Unete</span> para descubrir lo mejor de </h2>
            <h2>Tripadvisor.</h2>
            <br></br>
            <div className="text-xs">
              <h2>Al continuar, declaras tu conformidad con nuestras</h2>
              <h2><span>Condiciones de uso</span>y confirmas que has leido nuestra</h2>
              <h2 className="underline text-xs">Declaracion de privacidad y cookies</h2>
              <br></br>
              <h2>Este sitio esta protegido por reCAPCHA y se aplican <span className="underline">Politica de</span></h2>
              <h2><span className="underline">privacidad</span>y las<span className="underline">Condiciones del servicio</span>de Google.</h2>
            </div>
          </div>
        </form>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Contact
