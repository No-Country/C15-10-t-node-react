import { useState, useEffect, useRef } from "react";
import CardContent from "../../../../components/CardContent/CardContent";
import NextArrow from "../../../../components/NextArrow/NextArrow";
import PrevArrow from "../../../../components/PrevArrow/PrevArrow";
import SubtitleSection from "../../../../components/SubtitleSection/SubtitleSection";
import TitleSection from "../../../../components/TitleSection/TitleSection";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

function FeaturedDestinations() {
  const places = useSelector((state: RootState) => state.places.places);

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel?.current) {
      carousel.current.scrollLeft =
        (carousel.current.offsetWidth ?? 0) * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <section className="py-4 overflow-hidden">
      <TitleSection title={"Descubre estos lugares increibles"} />
      <SubtitleSection
        subtitle={
          "Explora lugares asombrosos y vive experiencias únicas en estos destinos increíbles."
        }
      />
      <div className="relative w-full">
        <PrevArrow onClick={movePrev} disabled={isDisabled("prev")} />
        <div
          ref={carousel}
          className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {places &&
            places.map((place) => (
              <div
                key={place.id}
                className={`carousel-item text-center relative lg:w-1/4 md:w-1/3 sm:w-1/3 w-1/2 snap-start`}
              >
                <CardContent place={place} />
              </div>
            ))}
        </div>
        <NextArrow onClick={moveNext} disabled={isDisabled("next")} />
      </div>
    </section>
  );
}

export default FeaturedDestinations;
