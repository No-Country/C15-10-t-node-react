import ReviewCard from "../../layouts/auth/ReviewCard/ReviewCard";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";

function Reviews() {
  
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
    <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
      Opiniones de usuarios
    </h1>
    <div className=" flex flex-col md:flex-row gap-5 mt-5">
      <ReviewCard img={img7} name="Gustavo" reviewText= "Increíble experiencia en la página de viajes. Navegación fácil, información detallada y una amplia variedad de destinos. ¡Planificar mi próximo viaje nunca fue tan emocionante y sencillo!" />
      <ReviewCard img={img6} name="Fernando" reviewText="¡La mejor plataforma de viajes que he usado! La interfaz es intuitiva, las opciones son infinitas y las recomendaciones son acertadas. ¡Gracias por hacer que mis vacaciones sean inolvidables!" />
      <ReviewCard img={img8} name="Silvia" reviewText= "Altamente recomendada. Encontré las ofertas más asombrosas para mi escapada y la atención al cliente fue excepcional. Definitivamente, mi primera opción para planificar futuros viajes." />
    </div>
  </div>
);
};

export default Reviews;
