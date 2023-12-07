import { useState } from "react";
import CardContent from "../../../../components/CardContent/CardContent";
import NextArrow from "../../../../components/NextArrow/NextArrow";
import SubtitleSection from "../../../../components/SubtitleSection/SubtitleSection";
import TitleSection from "../../../../components/TitleSection/TitleSection";
import TouristSpotsData from "../../../../data/TouristSpotsData.json";

function FeaturedDestinations() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < TouristSpotsData.length ? newIndex : 0;
    });
  };

  return (
    <section className="py-5 overflow-hidden">
      <TitleSection title={"Descubre estos lugares increibles"} />
      <SubtitleSection
        subtitle={
          "Explora lugares asombrosos y vive experiencias únicas en estos destinos increíbles."
        }
      />
      <div className="relative">
        <div
          className="carousel carousel-center rounded-box"
          style={{
            transform: `translateX(-${
              slideIndex * (50 / TouristSpotsData.length)
            }%)`,
            width: `${TouristSpotsData.length * 25}rem`,
          }}
        >
          {TouristSpotsData.map(
            ({ id, name, location, image, rating, price }) => (
              <div className="carousel-item" key={id}>
                <CardContent
                  name={name}
                  location={location}
                  image={image}
                  rating={rating}
                  price={price}
                />
              </div>
            )
          )}
        </div>
        <NextArrow onClick={handleNextSlide} />
      </div>
    </section>
  );
}

export default FeaturedDestinations;
