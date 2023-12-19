import { Suspense } from "react";

export default function UserData() {
  const { firstname, lastname, email, phone, address } = userData;
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

        <h2 className="text-3xl">
          {firstname} {lastname}
        </h2>
        <div className="flex flex-col gap-4 w-[16rem] border-2 rounded  h-full p-4">
          <button className="w-full btn btn-outline btn-sm">Actualizar</button>
          <ul className="flex flex-col gap-2">
            <li>{address}</li>
            <li>{email}</li>
            <li>{phone}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const userData = {
  firstname: "Dale",
  lastname: "Mohr",
  email: "Claud46@gmail.com",
  phone: "(948) 818-3182 x564",
  address: "008 Stiedemann Knolls, South Isadore, Dominica",
  __v: 0,
  createdAt: "2023-12-01T16:17:05.284Z",
  updatedAt: "2023-12-01T16:17:05.284Z",
  id: "656a070027ff53e6041dfbc1",
};
