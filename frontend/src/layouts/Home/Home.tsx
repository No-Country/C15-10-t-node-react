import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Publicity from "../../components/Publicity/Publicity";
import FAQSection from "../Home/components/FAQSection/FAQSection";
import FeaturedDestinations from "../Home/components/FeaturedDestinations/FeaturedDestinations";
import getPlaces from '../../api/api'

async function fetchDataAndLog() {
  try {
    const places = await getPlaces();
    console.log(JSON.stringify(places, null, 2)); // Imprime el JSON formateado en la consola
  } catch (error) {
    // Manejar el error si es necesario
  }
}

// Llamada a la función de ejemplo
fetchDataAndLog();
import TimeLineSection from "./components/TimeLineSection/TimeLineSection";

function Home() {
  return (
    <>
      <Hero />
      <div className="container-md mx-auto lg:max-w-screen-lg overflow-hidden">
        <Nav />
        <FeaturedDestinations />
        <Publicity />
        <TimeLineSection />
        <FAQSection />
      </div>
    </>
  );
}

export default Home;
