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
        <span className="mx-auto px-1">{text}</span>
      </button>
    </a>
  );
}

export default PrimaryButton;
