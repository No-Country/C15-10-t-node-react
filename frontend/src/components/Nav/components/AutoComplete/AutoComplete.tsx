import classNames from "classnames";
import { MapPin, Search, MapPinned } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import { Place } from "../../../../layouts/home/reducer/placesSlice";

type Props = {
  items: Place[];
  value: string;
  placeholder: string;
  onChange(val: string): void;
  onClick: (val: boolean, text: string) => void;
};

function AutoComplete(props: Readonly<Props>) {
  const { items, value, onChange, placeholder, onClick } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleFocus = () => {
    setOpen(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setOpen(false);
      onClick(false, query);
    }, 300);
  };
  const handleSearch = (query: string) => {
    navigate(`/search?q=${query}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Ejecutar búsqueda al presionar Enter
      handleSearch(event.currentTarget.value);
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div
      className={classNames({
        "dropdown w-full": true,
        "dropdown-open": open,
      })}
    >
      <div className="absolute inset-y-0 start-0 ps-3 cursor-pointer flex items-center">
        <Search onClick={() => handleSearch(inputRef.current?.value ?? "")} />
      </div>
      <input
        ref={inputRef}
        type="text"
        className="block w-full p-5 ps-10 text-sm rounded-t-lg outline-none text-base-content border-base-content border-b-2  placeholder:text-gray-500 placeholder:text-sm focus:ring-inset sm:text-sm sm:leading-6"
        value={value}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        tabIndex={0}
        maxLength={32}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="dropdown-content bg-base-200 top-15 max-h-96 overflow-auto flex-col rounded-md z-40 w-full">
        {filteredItems.length > 0 && (
          <p className="text-start p-2 font-bold">Destinos Populares</p>
        )}
        <ul className="menu rounded-box w-full" tabIndex={0}>
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              tabIndex={index + 1}
              onClick={() => {
                onChange(item.name);
                setQuery("");
                setOpen(false);
              }}
              className="border-b border-b-base-content/10 w-full"
            >
              <Link to={`/search?q=${item.name}`}>
                <div className="flex items-center">
                  <MapPin className="mr-1" />
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {filteredItems.length === 0 && (
            <li className="w-full">
              <Link to={`/search?q=${query}`}>
                <Search /> Ver todos los resultados de {query}
              </Link>
              <button>
                <MapPinned /> Agregar un lugar faltante
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default memo(AutoComplete);
