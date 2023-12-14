import { Suspense } from "react";

export default function UserData() {
  return (
    <div>
      <section className="flex flex-col gap-5 h-full">
        <div className="avatar">
          <Suspense
            fallback={<div className="skeleton w-[16rem] rounded-full"></div>}
          >
            <div className="w-[16rem] rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Suspense>
        </div>

        <h2 className="text-3xl">Name Surname</h2>
        <div className="w-[16rem] border-2 rounded  h-full p-4">
          <button className="w-full btn btn-outline btn-sm">Actualizar</button>
          <ul>
            <li>pronouns</li>
            <li>email</li>
            <li>phone</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
