import { ArrowLeft } from "lucide-react";

interface PrevArrowProps {
  onClick: () => void;
  disabled: boolean;
}

function PrevArrow({ onClick, disabled }: Readonly<PrevArrowProps>) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`rounded-full p-1 absolute top-1/3 left-2 transform -translate-y-1/2 z-40 ${
        disabled ? "hidden" : "bg-green-50 hover:bg-green-300 cursor-pointer"
      }`}
      onClick={handleClick}
    >
      <ArrowLeft color="black" size={32} />
    </div>
  );
}

export default PrevArrow;
