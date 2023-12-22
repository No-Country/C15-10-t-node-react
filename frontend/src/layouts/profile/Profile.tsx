import AgendaList from "./components/agenda/AgendaList";
import HistoryList from "./components/history/HistoryList";
import ReviewList from "./components/review/ReviewList";
import UserData from "./components/userData/userData";

export default function Profile() {
  return (
    <>
      <div className="min-h-[48rem] pt-20">
        <div></div>
        <section className="flex flex-col md:flex-row gap-16 m-10 min-h-[48rem]">
          <UserData />
          <div className="flex flex-col w-full overflow-y-auto max-h-[48rem]">
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-xl"
                aria-label="Agenda"
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
                defaultChecked
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
