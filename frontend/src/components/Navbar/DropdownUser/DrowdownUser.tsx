import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface DropdownUserProps {
  id: string;
  firstname: string;
  lastname: string;
  onLogout: () => Promise<void>;
}

function DrowdownUser({
  id,
  firstname,
  lastname,
  onLogout,
}: Readonly<DropdownUserProps>) {
  const handleLogoutClick = async () => {
    await onLogout();
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn rounded-btn flex items-center border-none bg-dark"
      >
        <div className="rounded-full h-8 w-8 overflow-hidden mr-1">
          <img
            src={`https://source.unsplash.com/random/128x128?sig=${id}`}
            alt="Usuario"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-base">
          {firstname} {lastname}
        </span>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-1 bg-base-200 rounded-box w-52 mt-4"
      >
        <li>
          <Link
            to={"/"}
            className="text-base-content"
            onClick={handleLogoutClick}
          >
            <LogOut /> Cerrar Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DrowdownUser;
