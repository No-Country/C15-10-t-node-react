import Body from "./components/Body";
import { useEffect } from "react";
import useRandomPublicity from "../../hooks/useRandomPublicity";

function Publicity() {
  const randomPublicity = useRandomPublicity();

  useEffect(() => {}, [randomPublicity]);

  return (
    <Body
      title={randomPublicity.title}
      paragraph={randomPublicity.paragraph}
      image={randomPublicity.image}
      color={randomPublicity.color}
      text={randomPublicity.text}
      url={randomPublicity.url}
    />
  );
}

export default Publicity;
