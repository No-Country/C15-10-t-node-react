import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Publicity from "../../components/Publicity/Publicity";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container-md mx-auto lg:max-w-screen-lg">
        <FeaturedDestinations />
        <Publicity />
        <Footer />
      </div>
    </>
  );
}

export default Home;
