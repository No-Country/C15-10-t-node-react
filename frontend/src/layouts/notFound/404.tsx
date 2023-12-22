import wind from "../../assets/wind.png";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen mx-16 gap-8">
      <img height={188} width={188} src={wind} alt="404" />
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold font-mono">Ups...</h1>
        <h1 className="text-5xl font-bold font-mono">
          Parece que no encotramos su página
        </h1>
        <p className="text-2xl text-slate-500">
          Prueba volver a nuestro sitio web{" "}
          <a href="/" className="text-blue-500">
            <i>aqui</i>
          </a>
        </p>
      </div>
      <img
        className="w-1/2"
        src={`https://res.cloudinary.com/dcosddxwt/image/upload/q_auto/v1703247512/contacto_pzglb0.jpg`}
        alt="404"
      />
    </main>
  );
}
