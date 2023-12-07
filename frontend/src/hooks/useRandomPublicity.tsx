import { useState, useEffect } from "react";
import PublicityJson from "../data/Publicity.json";

function useRandomPublicity() {
  const [randomPublicity, setRandomPublicity] = useState(getRandomPublicity);

  function getRandomPublicity() {
    const randomIndex = Math.floor(Math.random() * PublicityJson.length);
    return PublicityJson[randomIndex];
  }

  useEffect(() => {
    setRandomPublicity(getRandomPublicity());
  }, []);

  return randomPublicity;
}

export default useRandomPublicity;
