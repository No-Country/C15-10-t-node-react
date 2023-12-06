import { ArrowRight } from "lucide-react";

interface NextArrowProps {
  onClick: () => void;
}

function NextArrow({ onClick }: Readonly<NextArrowProps>) {
  return (
    <div
      className="rounded-full p-1 absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-50 hover:bg-green-300"
      onClick={onClick}
    >
      <ArrowRight color="black" className="cursor-pointer" size={32} />
    </div>
  );
}

export default NextArrow;
