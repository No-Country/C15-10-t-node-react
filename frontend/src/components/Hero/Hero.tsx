import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[98vh] bg-[url(https://e1.pxfuel.com/desktop-wallpaper/152/501/desktop-wallpaper-3840x2400-man-mountains-clouds-travel-travel-ultra.jpg)] bg-cover bg-no-repeat">
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-emerald-100 text-center sm:mt-0 mt-16">
        <div className="max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Descubre nuevos horizontes con FreeWind
          </h1>
          <p className="text-lg lg:text-xl font-semibold mb-6">
            Explora paisajes impresionantes y crea recuerdos inolvidables.
            FreeWind te lleva a aventuras que nunca olvidarás.
          </p>
          <div className="flex items-center justify-center">
            <PrimaryButton text="Regístrate ahora" url="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
