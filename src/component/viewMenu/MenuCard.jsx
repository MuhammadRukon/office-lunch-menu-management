import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div>
      <div className="relative group h-52 lg:h-80 w-full overflow-hidden flex flex-col hover:scale-110 duration-150 transform items-center justify-end cursor-pointer rounded-2xl text-base md:text-xl font-semibold text-white bg-blue-400 shadow-[0_6px_15px_rgba(0,0,0,0.2)]">
        <div className="bg-red-400 w-full p-5 group-hover:pt-14 absolute bottom-[-25%] group-hover:bottom-0 duration-300 transform clip-path-initial odd:group-hover:clip-path-custom ">
          <h3 className="h-14">{item?.dish_name}</h3>
          <div className="font-normal h-14 text-xs md:text-base">
            {item.description || "No description"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
