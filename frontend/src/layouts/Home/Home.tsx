import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Navbar from "../../components/Navbar/Navbar";
import Publicity from "../../components/Publicity/Publicity";
import FAQSection from "./components/FAQSection/FAQSection";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container-md mx-auto lg:max-w-screen-lg overflow-hidden">
        <Nav />
        <FeaturedDestinations />
        <Publicity />
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}

export default Home;
