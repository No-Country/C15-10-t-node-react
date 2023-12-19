import React from 'react'

const ReviewCard = (props: { img: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; reviewText:| string;  }) => {
  const fechaActual = new Date().toLocaleDateString();
    return (
      <div className=" w-full md:w-1/3 bg-gray-300 border-2 border-lightText  md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div>
          <p className=" text-lightText">
          {props.reviewText}
          </p>
        </div>
  
        <div className=" flex flex-row justify-center items-center mt-4 gap-4">
          <img className=" rounded-full w-1/4" src={props.img} alt="img" />
          <h3 className=" font-semibold ">{props.name}</h3>
          <p className="text-gray-600 text-xs mt-1">{fechaActual}</p>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
