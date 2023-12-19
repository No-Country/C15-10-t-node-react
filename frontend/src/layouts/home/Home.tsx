import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Publicity from "../../components/Publicity/Publicity";
import FAQSection from "../home/components/FAQSection/FAQSection";
import FeaturedDestinations from "../home/components/FeaturedDestinations/FeaturedDestinations";
import TimeLineSection from "../home/components/TimeLineSection/TimeLineSection";
import { setPlaces } from "../home/reducer/placesSlice";

function Home() {
  const dispatch = useDispatch();

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
