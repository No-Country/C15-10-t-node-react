import { icons, LucideProps } from "lucide-react";

const Icon = ({ name, size }: Readonly<LucideProps>) => {
  const LucideIcon = icons[name];

  return <LucideIcon name={name} size={size} />;
};

export default Icon;
