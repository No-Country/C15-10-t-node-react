import PrimaryButton from "../../PrimaryButton/PrimaryButton";
interface PublicityProps {
  title: string;
  paragraph: string;
  image: string;
  color: string;
  text: string;
  url: string;
}

function Body({
  title,
  paragraph,
  image,
  color,
  text,
  url,
}: Readonly<PublicityProps>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorVariants: any = {
    violet: "bg-violet-200",
    orange: "bg-orange-200",
    green: "bg-green-500",
    cyan: "bg-cyan-400",
  };
  return (
    <section id="publicity">
      <div
        className={`container-md flex flex-col sm:flex-row ${colorVariants[color]} sm:h-[250px] h-[400px]`}
      >
        {/* Columna Izquierda - Texto*/}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <h2 className="text-md md:text-xl font-bold mb-2">{title}</h2>
          <p className="mb-4 text-sm md:text-md">{paragraph}</p>
          <PrimaryButton text={text} bgColor="black" url={url} />
        </div>

        {/* Columna Derecha - Imagen*/}
        <div className="flex-1 sm:w-full sm:h-full overflow-hidden">
          <div
            className="bg-cover bg-center h-full relative hover:scale-110 transition-all"
            style={{
              backgroundImage: `url(${image})`,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
