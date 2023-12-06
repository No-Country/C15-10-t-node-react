import Icon from "../Icon/Icon";

interface PrimaryButtonProps {
  text: string;
  bgColor?: "black" | "white";
  url: string;
  iconName?: string;
}

function PrimaryButton({
  bgColor = "black",
  text,
  url,
  iconName,
}: Readonly<PrimaryButtonProps>) {
  const colorVariants = {
    black: "bg-black text-white hover:bg-gray-900 hover:text-white",
    white: "bg-white text-dark hover:bg-gray-100 hover:text-dark",
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className={`flex items-center ${colorVariants[bgColor]} font-bold py-3 px-5 transition duration-300 ease-in-out rounded-xl`}
      >
        {iconName ? <Icon name={iconName} size={20} /> : <></>}
        <span className="mx-auto px-1">{text}</span>
      </button>
    </a>
  );
}

export default PrimaryButton;
