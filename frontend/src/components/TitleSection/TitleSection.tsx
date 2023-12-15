interface TitleProps {
  title: string;
}

function TitleSection({ title }: Readonly<TitleProps>) {
  return (
    <h2 className="text-3xl font-bold mb-4 px-2 md:text-left text-center">
      {title}
    </h2>
  );
}

export default TitleSection;
