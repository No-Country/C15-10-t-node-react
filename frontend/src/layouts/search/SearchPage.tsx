import { Search } from "lucide-react";
import CardSkeleton from "./components/CardSkeleton/CardSkeleton";
import PlaceCard from "./components/PlaceCard/PlaceCard";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PlaceData from "../../data/TouristSpotsData.json";
import AutoComplete from "../../components/Nav/components/AutoComplete/AutoComplete";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [query, setQuery] = useState(q ?? "");
  const [place, setPlace] = useState<{
    id: number;
    name: string;
    location: string;
    image: string;
    rating: number;
    price: number;
    description: string;
  } | null>(null);

  const [similarPlaces, setSimilarPlaces] = useState<
    Array<{
      id: number;
      name: string;
      location: string;
      image: string;
      rating: number;
      price: number;
      description: string;
    }>
  >([]);

  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState(`Buscar ${q ?? "en Freewind"}`);

  const handleActive = (open: boolean, text: string) => {
    setAutoCompleteVisible(open);
    setText(text);
  };

  const searchSpots = (searchQuery: string) => {
    // Encontrar Lugar principal
    const foundPlace = PlaceData.find(
      (spot) => spot.name.toLowerCase() === searchQuery?.toLowerCase()
    );
    setPlace(foundPlace ?? null);

    // Encontrar lugares similares
    const foundSimilarPlaces =
      searchQuery === ""
        ? PlaceData
        : PlaceData.filter((spot) => {
            const spotKeywords = spot.name.toLowerCase().split(" ");
            const queryKeywords = searchQuery.toLowerCase().split(" ");

            // Filtrar palabras clave coincidentes
            const matchingKeywords = spotKeywords.filter((keyword) =>
              queryKeywords.includes(keyword)
            );

            // Ordenar palabras clave coincidentes por longitud de mayor a menor
            matchingKeywords.sort((a, b) => b.length - a.length);
            // Tomar la palabra clave más larga como criterio de clasificación
            const rankingKeyword = matchingKeywords[0];
            // Verificar si al menos una palabra clave coincide
            return rankingKeyword && (!foundPlace || spot.id !== foundPlace.id);
          });

    // Ordenar los resultados similares por la longitud total de palabras clave coincidentes
    foundSimilarPlaces.sort((a, b) => {
      const keywordA = a.name.toLowerCase();
      const keywordB = b.name.toLowerCase();
      const totalLengthA = keywordA
        .split(" ")
        .reduce((acc, val) => acc + val.length, 0);
      const totalLengthB = keywordB
        .split(" ")
        .reduce((acc, val) => acc + val.length, 0);
      return totalLengthA - totalLengthB;
    });

    setSimilarPlaces(foundSimilarPlaces);
  };

  useEffect(() => {
    const isQueryValid = PlaceData.some(
      (spot) => spot.name.toLowerCase() === q?.toLowerCase()
    );

    if (q === null || q === undefined || !isQueryValid) {
      setQuery("");
      searchSpots("");
    } else {
      setQuery(q);
      searchSpots(q);
    }
  }, [q, query]);

  return (
    <section id="search" className="min-h-screen">
      <div className="py-6 container-md mx-auto lg:max-w-screen-lg overflow-hidden">
        <div className="mt-16">
          {!autoCompleteVisible && (
            <div className="relative flex flex-col items-stretch">
              <div className="relative items-center">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                  <Search />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block shadow-xl w-full p-5 ps-10 text-sm outline-none text-base-content border-2 border-gray-300 rounded-full ring-gray-300 placeholder:text-gray-500 placeholder:text-sm focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder={`Buscar ${q ?? "en Freewind"}`}
                  onClick={() => setAutoCompleteVisible(true)}
                  defaultValue={text}
                />
              </div>
              <button
                type="submit"
                onClick={() => setAutoCompleteVisible(true)}
                className="md:absolute md:end-2.5 md:bottom-1.5 md:mt-0 mt-3 font-bold px-5 py-4 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 transition-all rounded-full"
              >
                Buscar
              </button>
            </div>
          )}
          {autoCompleteVisible && (
            <AutoComplete
              items={PlaceData}
              value={value}
              onChange={setValue}
              placeholder={`Buscar ${q ?? "en Freewind"}`}
              onClick={handleActive}
            />
          )}

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
                {place !== null ? (
                  <PlaceCard
                    title={place.name}
                    titleImage={place.name}
                    rating={place.rating}
                    location={place.location}
                    description={place.description}
                    image={place.image}
                  />
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

            <div className="border-2 border-neutral-content rounded-md mt-2 bg-base-100">
              <div className="my-2 px-4 font-semibold text-xl">
                Resultados similares
              </div>
              <div className="border-b-2 border-gray-300 w-full mb-2"></div>
              {similarPlaces.length > 0 ? (
                <div>
                  {similarPlaces.map((similarPlace, index) => (
                    <div key={similarPlace.id}>
                      <Suspense fallback={<CardSkeleton />}>
                        <PlaceCard
                          title={similarPlace.name}
                          titleImage={similarPlace.name}
                          rating={similarPlace.rating}
                          location={similarPlace.location}
                          description={similarPlace.description}
                          image={similarPlace.image}
                        />
                      </Suspense>
                      {index < similarPlaces.length - 1 && (
                        <div className="border-b-2 border-gray-300 w-full mb-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <CardSkeleton />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
