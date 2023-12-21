/* eslint-disable react-hooks/exhaustive-deps */
import CardSkeleton from "./components/CardSkeleton/CardSkeleton";
import PlaceCard from "./components/PlaceCard/PlaceCard";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Place, setPlaces } from "../home/reducer/placesSlice";
import SearchInput from "./components/SearchInput/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { useDispatch } from "react-redux";

function SearchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  // const [place, setPlace] = useState<Place | null>(null);
  const place = useSelector((state: RootState) => state.places.place);

  const [similarPlaces, setSimilarPlaces] = useState<Array<Place>>([]);

  useEffect(() => {
    const getPalces = async () => {
      const response = await axios({
        method: "Get",
        url: `${import.meta.env.VITE_API_URL}/places`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setPlaces(response.data));
    };
    getPalces();
  }, []);

  return (
    <section id="search" className="min-h-screen">
      <div className="py-6 container-md mx-auto lg:max-w-screen-lg overflow-hidden">
        <div className="mt-16">
          <SearchInput setSimilarPlaces={setSimilarPlaces} q={q} />

          <div className="py-5">
            <h1 className="text-2xl font-bold p-4">
              {q
                ? `Resultados de búsqueda que coinciden con ${q}`
                : "Explora nuestros destinos"}
            </h1>
            <div className="border-2 border-neutral-content rounded-md mt-2 bg-base-100">
              <div className="my-2 px-4 py-2 font-semibold text-xl">
                Resultados principales
              </div>
              <div className="border-b-2 border-gray-300 w-full"></div>

              <Suspense fallback={<CardSkeleton />}>
                {place !== null && place !== undefined ? (
                  <PlaceCard place={place} />
                ) : q !== null && q !== undefined && q.trim() !== "" ? (
                  <div className="text-lg mx-auto p-4">
                    Lo sentimos, no pudimos encontrar{" "}
                    <span className="font-semibold">{q}</span> pero te
                    recomendamos explorar otros destinos fascinantes
                  </div>
                ) : (
                  <div className="text-lg mx-auto p-4">
                    Te invitamos a explorar joyas ocultas y destinos
                    extraordinarios en nuestra exclusiva colección de
                    experiencias inolvidables.
                  </div>
                )}
              </Suspense>
            </div>

            {similarPlaces.length > 0 && (
              <div className="border-2 border-neutral-content rounded-md mt-2 bg-base-100">
                <div className="my-2 px-4 font-semibold text-xl">
                  Resultados similares
                </div>
                <div className="border-b-2 border-gray-300 w-full mb-2"></div>
                <div>
                  {similarPlaces.map((similarPlace, index) => (
                    <div key={similarPlace.id}>
                      <Suspense fallback={<CardSkeleton />}>
                        <PlaceCard place={similarPlace} />
                      </Suspense>
                      {index < similarPlaces.length - 1 && (
                        <div className="border-b-2 border-gray-300 w-full mb-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
