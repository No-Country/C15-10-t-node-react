import SubtitleSection from "../../../../components/SubtitleSection/SubtitleSection";
import TitleSection from "../../../../components/TitleSection/TitleSection";
import TimeLine from "./components/TimeLine";
import SiteFeaturesData from "../../../../data/SiteFeaturesData.json";

function TimeLineSection() {
  return (
    <section id="timeline" className="py-5">
      <TitleSection title="Descubre las Características Clave de FreeWind" />
      <SubtitleSection subtitle="Explora las funcionalidades que hacen a FreeWind único y útil para tus viajes." />
      <TimeLine TimeLineData={SiteFeaturesData} />
    </section>
  );
}

export default TimeLineSection;
