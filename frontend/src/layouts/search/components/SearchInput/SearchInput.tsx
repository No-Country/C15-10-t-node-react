import { Search } from "lucide-react";
import AutoComplete from "../../../../components/Nav/components/AutoComplete/AutoComplete";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { Place } from "../../../home/reducer/placesSlice";
import { setPlace } from "../../../home/reducer/placesSlice";

interface Props {
  setSimilarPlaces: React.Dispatch<React.SetStateAction<Place[]>>;
  q?: string | null;
}
export default function SearchInput({ setSimilarPlaces, q }: Props) {
  const placeData = useSelector((state: RootState) => state.places.places);
  const singlePlace = useSelector((state: RootState) => state.places.place);
  const dispatch = useDispatch();

  const [query, setQuery] = useState(q ?? "");
  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState(`Buscar ${q ?? "en Freewind"}`);

  const handleActive = (open: boolean, text: string) => {
    setAutoCompleteVisible(open);
    setText(text);
  };

  const searchSpots = useCallback(
    (searchQuery: string) => {
      // Encontrar Lugar principal
      const foundPlace = placeData.find(
        (spot) => spot.name.toLowerCase() === searchQuery?.toLowerCase()
      );
      dispatch(setPlace(foundPlace || singlePlace));

      // Encontrar lugares similares
      const foundSimilarPlaces =
        searchQuery === ""
          ? placeData
          : placeData
              .filter((spot) => {
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
                return (
                  rankingKeyword && (!foundPlace || spot.id !== foundPlace.id)
                );
              })
              .sort((a, b) => {
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
    },
    [placeData, setSimilarPlaces, dispatch, singlePlace]
  );

  useEffect(() => {
    const isQueryValid = placeData.some(
      (spot) => spot.name.toLowerCase() === q?.toLowerCase()
    );

    if (q === null || q === undefined || !isQueryValid) {
      setQuery("");
      searchSpots("");
    } else {
      setQuery(q);
      searchSpots(q);
      localStorage.setItem(
        "history",
        JSON.stringify([
          { q: q, time: new Date().getTime() },
          ...JSON.parse(localStorage.getItem("history") ?? "[]"),
        ])
      );
    }
  }, [q, query, placeData, searchSpots]);

  return (
    <>
      {!autoCompleteVisible && (
        <div className="relative flex flex-col items-stretch">
          <div className="relative items-center">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
              <Search />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-5 ps-10 text-sm outline-none text-base-content border-2 border-gray-300 rounded-full ring-gray-300 placeholder:text-gray-500 placeholder:text-sm focus:ring-inset sm:text-sm sm:leading-6"
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
          items={placeData}
          value={value}
          onChange={setValue}
          placeholder={`Buscar ${q ?? "en Freewind"}`}
          onClick={handleActive}
        />
      )}
    </>
  );
}
