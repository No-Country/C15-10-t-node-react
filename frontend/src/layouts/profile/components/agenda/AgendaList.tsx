import { Suspense } from "react";
import { agenda } from "./agenda";
// import { PencilIcon, TrashIcon } from "lucide-react";

export default function AgendaList() {
  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        {agenda.map((item) => {
          return (
            <article
              key={item._id}
              className="card lg:card-side bg-base-100 mb-4 border"
            >
              <figure>
                <Suspense
                  fallback={<div className="skeleton w-64 aspect-square"></div>}
                >
                  <img
                    className="w-64 aspect-square"
                    src={item.image}
                    alt={item.name}
                  />
                </Suspense>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Place: {item.name}</h2>
                <span>
                  <strong>Location: </strong>
                  {item.location}
                </span>
                <p className="w-[56ch] truncate">{item.description}</p>
                <section className="card-actions justify-between">
                  <div>
                    <span>
                      <strong>Date: </strong>
                      {item.date}
                    </span>
                  </div>
                  {/* Hasta no tener funcionalidad no utilizar */}
                  {/* <div className="flex gap-2">
                    <button className="rounded-full btn btn-primary">
                      <PencilIcon />
                    </button>
                    <button className="rounded-full btn btn-error">
                      <TrashIcon />
                    </button>
                  </div> */}
                </section>
              </div>
            </article>
          );
        })}
      </Suspense>
    </article>
  );
}
