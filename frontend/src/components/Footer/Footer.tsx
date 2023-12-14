import NavContent from "./components/NavContent";
import Logo from "../../assets/wind.png";
import NavSocialIcons from "./components/NavSocialIcons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-emerald-900 dark:bg-emerald-950 ">
      <div className="container-md mx-auto lg:max-w-screen-lg">
        <footer className="footer p-10  text-emerald-100 sm:grid-cols-3 sm:gap-4">
          <NavContent
            title="Viajes"
            links={["Reserva de Vuelos", "Hospedaje", "Experiencias"]}
          />
          <NavContent
            title="Empresa"
            links={["Acerca de Nosotros", "Contacto", "Empleos"]}
          />
          <NavContent
            title="Legal"
            links={["Políticas y Términos", "Privacidad", "Cookies"]}
          />
        </footer>

        <footer className="flex items-center sm:justify-between sm:flex-row flex-col px-10 py-4 border-t text-emerald-100 border-emerald-300">
          <aside className="grid grid-flow-col gap-4 place-items-center mb-3">
            <Link to={"/"}>
              <img src={Logo} alt="Logo FreeWind" className="w-11" />
            </Link>
            <p>
              <span className="font-bold text-lg">FreeWind</span>
              <br />
              Copyright © 2023 - Todos los derechos reservados
            </p>
          </aside>
          <nav className="place-self-center justify-self-end">
            <div className="grid grid-flow-col gap-4 place-items-center">
              <NavSocialIcons />
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
