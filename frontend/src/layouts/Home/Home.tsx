import Footer from "../../components/Footer/Footer";
import Publicity from "../../components/Publicity/Publicity";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";

function Home() {
  return (
    <div className="container-md mx-auto lg:max-w-screen-lg">
      <FeaturedDestinations />
      <Publicity />
      <Footer />
    </div>
  );
}

export default Home;
