function CardSkeleton() {
  return (
    <div className="flex flex-row gap-4 w-full md:px-4 py-3 px-2.5">
      <div className="skeleton w-full md:w-96 mx-auto"></div>
      <div className="md:ml-4 ml-2 w-full mx-auto lg:h-36 overflow-hidden">
        <div className="skeleton h-6 md:w-48 w-28 mt-2"></div>
        <div className="skeleton h-5 w-24 mt-2"></div>
        <div className="skeleton h-5 md:w-36 w-28 mt-2"></div>
        <div className="skeleton h-6 w-full mt-2"></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
