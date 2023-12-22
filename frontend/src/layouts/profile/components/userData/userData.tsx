import { Suspense } from "react";
import { useStore } from "react-redux";
import { Store } from "../../profile.type";

export default function UserData() {
  const store: Store = useStore();
  const currentUser = store.getState().auth.user;
  return (
    <div>
      <section className="flex flex-col gap-5 h-full">
        <div className="avatar">
          <Suspense
            fallback={<div className="skeleton w-[16rem] rounded-full"></div>}
          >
            <div className="w-[16rem] rounded-full">
              <img
                src={`https://source.unsplash.com/random/256x256?sig=${currentUser.firstname}`}
              />
            </div>
          </Suspense>
        </div>

        <h2 className="text-3xl">
          {currentUser.firstname} {currentUser.lastname}
        </h2>
        <div className="flex flex-col gap-4 w-[16rem] border-2 rounded  h-full p-4">
          <button className="w-full btn btn-outline btn-sm">Actualizar</button>
          <ul className="flex flex-col gap-2">
            <li>{currentUser.address}</li>
            <li>{currentUser.email}</li>
            <li>{currentUser.phone}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
