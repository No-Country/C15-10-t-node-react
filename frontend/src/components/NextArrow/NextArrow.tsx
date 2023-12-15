import { ArrowRight } from "lucide-react";

interface NextArrowProps {
  onClick: () => void;
  disabled: boolean;
}

function NextArrow({ onClick, disabled }: Readonly<NextArrowProps>) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`rounded-full p-1 absolute top-1/3 right-2 transform -translate-y-1/2 ${
        disabled ? "hidden" : "bg-green-50 hover:bg-green-300 cursor-pointer"
      }`}
      onClick={handleClick}
    >
      <ArrowRight color="black" size={32} />
    </div>
  );
}

export default NextArrow;
