import { Link } from "react-router-dom";
import { history } from "./history";

export default function HistoryList() {
  return (
    <>
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Place</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          {(history &&
            history.map((item) => {
              return (
                <tbody>
                  <tr className="h-[10ch]">
                    <th className="w-[2ch]"> 1 </th>
                    <td className="w-[10ch]">
                      <h1 className="text-xl">{item.place}</h1>
                    </td>
                    <td>{item.rating}</td>
                    <td className="w-[24ch] overflow-hidden ">
                      {item.description.slice(0, 72) + "..."}
                    </td>
                    <td>
                      <Link className="btn-link" to={`/search?=${item.place}`}>
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
