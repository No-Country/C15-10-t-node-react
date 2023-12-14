import AgendaList from "./components/agenda/AgendaList";
import HistoryList from "./components/history/HistoryList";
import ReviewList from "./components/review/ReviewList";
import UserData from "./components/userData/userData";

export default function Profile() {
  return (
    <>
      <div className="h-fit pt-20">
        <div></div>
        <section className="flex gap-16 m-10 h-[48rem]">
          <UserData />
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
                <AgendaList />
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
                <ReviewList />
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
                <HistoryList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
