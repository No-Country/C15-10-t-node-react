interface SubtitleProps {
  subtitle: string;
}

function SubtitleSection({ subtitle }: Readonly<SubtitleProps>) {
  return (
    <h4 className="text-xl text-gray-500 mb-4 px-2 md:text-left text-center">
      {subtitle}
    </h4>
  );
}

export default SubtitleSection;
