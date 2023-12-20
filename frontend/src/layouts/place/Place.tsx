import useFetch from "../../hooks/useFetch";
import StarsInputs from "../profile/components/review/starsInput";
import SearchInput from "../search/components/SearchInput/SearchInput";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import { Store } from "../profile/profile.type";
import { useCallback, useState } from "react";
import axios from "axios";
import { Rating } from "react-daisyui";

interface Place {
  id: string;
  name: string;
  description: string;
  imgs: string[];
  coords: number[];
  reviews: string[];
}
function Place() {
  const store: Store = useStore();
  const currentUser = store.getState().auth.user;
  const userId = currentUser.id;
  const [comment, setComment] = useState("");
  const [newRating, setNewRating] = useState<number>(1);
  const [typeError, setTypeError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const { id } = useParams();

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 0.5fr",
    gridTemplateRows: "1fr",
    gap: "4px",
    gridAutoFlow: "row",
    gridTemplateAreas: "'. rest'",
    rest: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "4px",
    },
  };

  const {
    data,
    error,
    loading,
  }: { data: Place; error: string | undefined; loading: boolean } = useFetch({
    url: `${import.meta.env.VITE_API_URL}/places/${id}`,
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitLoading(true);
      if (comment.length < 1) {
        setTypeError("El comentario no puede estar vacio");
        setSubmitLoading(false);
        return;
      }
      // TODO: Submit review
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, {
          placeId: id,
          userId: userId,
          comment: comment,
          rating: newRating,
        });
      } catch (error) {
        setTypeError("No se pudo subir el review");
      }
      setComment("");
      setSubmitLoading(false);
    },
    [comment, id, userId, newRating]
  );
  return (
    <main
      id="place"
      className="min-h-screen container-md mx-auto lg:max-w-screen-lg overflow-hidden"
    >
      <section className="flex flex-col py-20 px-4 gap-10">
        <SearchInput setPlace={() => {}} setSimilarPlaces={() => {}} />
        <h1 className="text-7xl">
          Explora {(data && data.name) || "un lugar"}
        </h1>
        {loading ? (
          <div className="skeleton artboard artboard-horizontal w-full h-[400px]"></div>
        ) : error ? (
          <div className="flex items-baseline artboard artboard-horizontal w-full h-[400px] bg-[#0000008c] rounded">
            <p className="text-2xl md:text-5xl p-4 text-center m-auto font-bold text-white">
              Lo sentimos, no pudimos encontrar Lo que estabas Buscando! pero te
              recomendamos explorar otros destinos fascinantes
            </p>
          </div>
        ) : (
          <figure className="grid grid-cols-2" style={gridStyle}>
            {data && (
              <>
                <img
                  height={400}
                  width={"full"}
                  src={data.imgs[0]}
                  alt={data.name}
                />
                <div style={gridStyle.rest}>
                  {data.imgs.map((img: string, index: number) => {
                    if (index === 0) return null;
                    if (index > 2) return null;
                    return (
                      <img
                        key={index}
                        height={400}
                        width={"full"}
                        src={img}
                        alt={data.name}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </figure>
        )}
      </section>
      <article className="flex flex-col px-4 gap-4">
        <h2 className="px-2 text-3xl font-bold md:text-left text-center">
          Conoce {(data && data.name) || "un lugar"}
        </h2>
        <p className="text-lg px-2 md:text-left text-center">
          {(data && data.description) ||
            "Con nuestra aplicacion podras encontrar un destino para tus vacaciones"}
        </p>
      </article>
      <article className="flex flex-col px-4 gap-10">
        <h2 className="text-3xl font-bold mb-4 px-2 md:text-left text-center">
          Descubre las opiniones de los viajeros
        </h2>
        <div>
          {data &&
            data.reviews.length > 0 &&
            data.reviews.map((review) => {
              return (
                <div key={review} className="card px-2 border rounded p-4 my-4">
                  <div className="flex gap-4 p-4 artboard artboard-horizontal min-h-[128px]">
                    <img
                      height={128}
                      width={128}
                      src={`https://source.unsplash.com/random/128x128?sig=${review}`}
                      className="avatar rounded-full h-32 w-32"
                    />
                    <div>
                      <h2>{review}</h2>
                      <StarsInputs stars={5} />
                      <p>Comentario</p>
                    </div>
                  </div>
                  <p className="text-lg">Publicado en: </p>
                </div>
              );
            })}
        </div>
      </article>
      <div className="divider my-4"></div>
      <div className="flex flex-col p-4 gap-10 border m-4 rounded">
        {currentUser && (
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <figure>
                <img
                  className="rounded-full h-12 w-12"
                  src={`https://source.unsplash.com/random/128x128?sig=${currentUser.id}`}
                />
              </figure>
              <h2 className="text-3xl font-bold mb-4 px-2 md:text-left text-center">
                <i>{currentUser.firstname}</i> Comparte tu opinion
              </h2>
            </div>
            <Rating value={newRating} onChange={setNewRating}>
              <Rating.Item
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <Rating.Item
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <Rating.Item
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <Rating.Item
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <Rating.Item
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
            </Rating>
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
                setTypeError("");
              }}
              className={`textarea textarea-bordered w-full ${
                typeError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Escribe tu opinion"
            ></textarea>
            {typeError && <p className="text-red-500">{typeError}</p>}
            <div className="flex justify-end gap-4">
              {submitLoading ? (
                <button className="btn btn-outline btn-sm" disabled>
                  <span className="loading loading-spinner loading-md"></span>{" "}
                  Cargando
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-outline btn-sm"
                    type="reset"
                    onClick={() => setComment("")}
                  >
                    Limpiar
                  </button>
                  <button className="btn btn-primary btn-sm">Publicar</button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default Place;
