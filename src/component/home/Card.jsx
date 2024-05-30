import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={data.path}  className="h-52 md:h-80 w-40 md:w-64 flex hover:scale-110 duration-150 transform items-end justify-center cursor-pointer rounded-2xl p-5 text-base md:text-xl font-semibold text-white bg-blue-400 shadow-[0_6px_15px_rgba(0,0,0,0.2)] text-center">
      <h3 className="h-14 md:h-16">{data.name}</h3>
    </Link>
  );
};

export default Card;
