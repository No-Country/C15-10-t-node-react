import { history } from "./history";

export default function HistoryList() {
  return (
    <>
      {history && (
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
          </table>
        </div>
      )}
      {history &&
        history.map((item) => {
          return (
            <div className="overflow-y-auto">
              <table className="table">
                <tbody>
                  <tr className="h-[10ch]">
                    <th></th>
                    <td>
                      <h1 className="text-xl">{item.place}</h1>
                    </td>
                    <td>{item.rating}</td>
                    <td className="w-[24ch] overflow-hidden ">
                      {item.description.slice(0, 100)}
                    </td>
                    <td>
                      <button className="btn btn-primary">Buscar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </>
  );
}
