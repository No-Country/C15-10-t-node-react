import useFetch from "../../hooks/useFetch";
import StarsInputs from "../profile/components/review/starsInput";
import SearchInput from "../search/components/SearchInput/SearchInput";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Rating } from "react-daisyui";
import { RootState } from "../../store/store";
import { setPlace, updatePlaceReviews } from "../home/reducer/placesSlice";
import Lightbox from "yet-another-react-lightbox";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import logo from "../../assets/wind.png"
import 'leaflet/dist/leaflet.css';



import "yet-another-react-lightbox/styles.css";

interface User {
  token: string;
  id: string;
  email: string;
  address: string;
  phone: string;
  firstname: string;
  lastname: string;
}

interface Place {
  id: string;
  name: string;
  description: string;
  imgs: string[];
  coords: number[];
  reviews: Review[];
}
interface Review {
  _id: string;
  place: string;
  user: User;
  rating: number;
  createdAt: string;
  updatedAt: string;
  comment: string;
}



function Place() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const place: Place = useSelector((state: RootState) => state.places.place);
  const [comment, setComment] = useState("");
  const [newRating, setNewRating] = useState<number>(1);
  const [typeError, setTypeError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const similarPlaces = useState<Array<Place>>([]);
  const setSimilarPlaces = similarPlaces[1];

  const {
    error,
    loading,
  }: { data: Place; error: string | undefined; loading: boolean } = useFetch({
    url: `${import.meta.env.VITE_API_URL}/places/${id}`,
  });

  useEffect(() => {
    const getPalces = async () => {
      const response = await axios({
        method: "Get",
        url: `${import.meta.env.VITE_API_URL}/places/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setPlace(response.data));
    };
    getPalces();
  }, []);



  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitLoading(true);
      if (comment.length < 1) {
        setTypeError("El comentario no puede estar vacio");
        setSubmitLoading(false);
        return;
      }
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/reviews`,
          {
            place: id,
            user: user?.id,
            comment: comment,
            rating: newRating,
          }
        );
        dispatch(updatePlaceReviews(response.data));
        setComment("");
      } catch (error) {
        if (error instanceof AxiosError) {
          setTypeError(error.response?.data.message);
        }
        console.log(error);
        setTypeError("Ocurrio un error al enviar el comentario");
      }
      setComment("");
      setSubmitLoading(false);
    },
    [comment, id, user, newRating, dispatch]
  );

  const customIcon = new L.Icon({
    iconUrl: logo, // Ruta a tu propio ícono de marcador
    iconSize: [32, 32], // Tamaño del ícono
    iconAnchor: [16, 32], // Punto de anclaje del ícono
    popupAnchor: [0, -32], // Punto de anclaje del popup
  });


  return (
    <main
      id="place"
      className="min-h-screen container-md flex flex-col gap-y-5 mx-auto lg:max-w-screen-lg overflow-hidden"
    >
      <section className="flex flex-col py-20 px-4 gap-10">
        <div className="mt-6"></div>
        <SearchInput setSimilarPlaces={setSimilarPlaces} q={q} />
        <h1 className="text-7xl">
          Explora {(place && place.name) || "un lugar"}
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
          <figure className="grid grid-cols-3 grid-rows-2 hover:cursor-pointer">
            <img
              src={place.imgs[0]}
              alt={place.name}
              className="col-span-2 row-span-2 aspect-video h-full"
              onClick={() => setOpen(true)}
            />
            {place.imgs.slice(1, 3).map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={place.name}
                className="col-span-1 aspect-video h-full"
                onClick={() => setOpen(true)}
              />
            ))}
          </figure>
        )}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={place.imgs.map((src, index) => ({ src, index }))}
          />
        )}
      </section>
      <article className="flex flex-col px-4 gap-4 mb-10">
        <h2 className="px-2 text-3xl font-bold md:text-left text-center">
          Conoce {(place && place.name) || "un lugar"}
        </h2>
        <p className="text-lg px-2 md:text-left text-center">
          {(place && place.description) ||
            "Con nuestra aplicacion podras encontrar un destino para tus vacaciones"}
        </p>
      </article>

      {place &&
        <MapContainer className="h-[400px] w-full" center={[place.coords[0], place.coords[1]]} zoom={12} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[place.coords[0], place.coords[1]]} icon={customIcon}>
            <Popup  >
              <div className="flex flex-col w-72 gap-2">

                {place.name}
                <img
                  src={place.imgs[0]}
                  alt={place.name}
                  className="h-32 w-full rounded object-cover"
                />
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      }
      <article className="flex flex-col px-4 gap-10">
        <h2 className="text-3xl font-bold px-2 md:text-left text-center">
          Descubre las opiniones de los viajeros
        </h2>
        <div>
          {(place &&
            place.reviews &&
            place.reviews.map((review: Review) => {
              return (
                <div
                  key={review._id}
                  className="card px-2 border rounded p-4 my-4"
                >
                  <div className="flex gap-4 p-4 artboard artboard-horizontal min-h-[128px]">
                    <img
                      height={128}
                      width={128}
                      src={`https://source.unsplash.com/random/128x128?sig=${review._id}`}
                      className="avatar rounded-full h-32 w-32"
                    />
                    <div>
                      {review.user &&
                        review.user.firstname &&
                        review.user.lastname && (
                          <h2 className="text-2xl">
                            {review.user.firstname} {review.user.lastname}{" "}
                          </h2>
                        )}
                      <p>{review.comment}</p>
                      <StarsInputs stars={review.rating} />
                    </div>
                  </div>
                  <p className="text-lg">
                    Publicado el: {new Date(review.createdAt).toLocaleString()}{" "}
                  </p>
                </div>
              );
            })) || (
              <div className="flex items-baseline artboard artboard-horizontal w-full h-[400px] bg-[#0000008c] rounded">
                <p className="text-2xl md:text-5xl p-4 text-center m-auto font-bold text-white">
                  Lo sentimos, no hay reviews para mostrar
                </p>
              </div>
            )}
        </div>
      </article>
      <div className="divider my-4"></div>
      <div className="flex flex-col p-4 gap-10 border m-4 rounded">
        {user ? (
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <figure>
                <img
                  className="rounded-full h-12 w-12"
                  src={`https://source.unsplash.com/random/128x128?sig=${user.id}`}
                />
              </figure>
              <h2 className="text-3xl font-bold mb-4 px-2 md:text-left text-center">
                <i>{user.firstname}</i> Comparte tu opinion
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
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                setTypeError("");
              }}
              className={`textarea textarea-bordered w-full ${typeError ? "border-red-500" : "border-gray-300"
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
        ) : (
          <div className="flex items-baseline artboard artboard-horizontal w-full h-[400px] bg-[#0000008c] rounded">
            <p className="text-2xl md:text-5xl p-4 text-center m-auto font-bold text-white">
              Lo sentimos, debes{" "}
              <Link to="/login" className="link">
                iniciar sesión
              </Link>{" "}
              para publicar.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Place;
