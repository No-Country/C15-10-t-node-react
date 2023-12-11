import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Publicity from "../../components/Publicity/Publicity";
import FAQSection from "./components/FAQSection/FAQSection";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";

function Home() {
  return (
    <>
      <Hero />
      <div className="container-md mx-auto lg:max-w-screen-lg overflow-hidden">
        <Nav />
        <FeaturedDestinations />
        <Publicity />
        <FAQSection />
      </div>

    </>
  );
}

export default Home;
