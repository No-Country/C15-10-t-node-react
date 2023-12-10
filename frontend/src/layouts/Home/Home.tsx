import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Navbar from "../../components/Navbar/Navbar";
import Publicity from "../../components/Publicity/Publicity";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";

function Home() { 
  return (
    <div>
      <Navbar />
      <Nav />
      <Hero />
      <FeaturedDestinations />
      <Publicity />
      <Footer />
    </div>
  );
}

export default Home;
