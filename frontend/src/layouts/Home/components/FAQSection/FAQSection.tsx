import Accordion from "../../../../components/Accordion/Accordion";
import SubtitleSection from "../../../../components/SubtitleSection/SubtitleSection";
import TitleSection from "../../../../components/TitleSection/TitleSection";
import FaqData from "../../../../data/FaqData.json";

function FAQSection() {
  return (
    <section id="question" className="py-5">
      <TitleSection title="Preguntas Frecuentes y Respuestas" />
      <SubtitleSection subtitle="Encuentra Respuestas a las Preguntas más comunes sobre Nuestros Servicios y Experiencias Únicas de Viaje." />
      <Accordion FaqData={FaqData} />
    </section>
  );
}

export default FAQSection;
