import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Publicity from "../../components/Publicity/Publicity";
import Reviews from "../../components/Reviu/Reviews";
import FAQSection from "../Home/components/FAQSection/FAQSection";
import FeaturedDestinations from "../Home/components/FeaturedDestinations/FeaturedDestinations";
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
        <Reviews />
      </div>
    </>
  );
}

export default Home;
