import { Link } from "react-router-dom";

interface History {
  q: string;
  time: string;
}

type LocalHistory = History[];

export default function HistoryList() {
  // get item history from localstorage

  const history: LocalHistory = JSON.parse(
    localStorage.getItem("history") || "[]"
  );

  return (
    <>
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Lugar</th>
              <th>Buscado el</th>
              <th>Accion</th>
              <th></th>
            </tr>
          </thead>
          {(history &&
            history.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr className="h-[10ch]">
                    <th className="w-[2ch]"> {index + 1} </th>
                    <td className="w-[10ch]">
                      <h1 className="text-xl">{item.q}</h1>
                    </td>
                    <td>{new Date(item.time).toLocaleString()}</td>
                    <td>
                      <Link className="btn-link" to={`/search?=${item.q}`}>
                        Buscar de nuevo
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })) || <h1 className="text-xl text-center">No hay historial</h1>}
        </table>
      </div>
    </>
  );
}
