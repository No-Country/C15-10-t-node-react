export default function Profile() {
  return (
    <>
      <div className="h-fit pt-20">
        <div></div>
        <section className="flex gap-16 m-10 h-[48rem]">
          <div className="flex flex-col gap-5">
            <div className="avatar">
              <div className="skeleton w-[16rem] rounded-full"></div>
            </div>
            <h2 className="text-3xl">Name Surname</h2>
            <div className="w-[16rem] border-2 rounded  h-full">
              <ul>
                <li>pronouns</li>
                <li>email</li>
                <li>phone</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <div role="tablist" className="tabs tabs-lifted sticky">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-xl"
                aria-label="Agenda"
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="card lg:card-side bg-base-100 mb-4">
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>
                </div>
                <div className="card lg:card-side bg-base-100">
                  <figure>
                    <img
                      src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-xl"
                aria-label="Reseña"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                Tab content 2
              </div>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-xl"
                aria-label="Historial"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                Tab content 3
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
