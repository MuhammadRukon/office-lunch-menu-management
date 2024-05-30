import React,  {useContext} from "react";
import { selectLunch } from "../../api";
import { AuthContext } from "./../../auth/Auth.jsx";

const MenuCard = ({ item }) => {
const {userId} = useContext(AuthContext);

  const handleSelect =async ()=>{
    const data = {
      lunch_id: item.id,
      employee_id: Number(userId)
    }
    const res = await selectLunch(data);
    console.log(res);
  }
  return (
    <div>
      <div className="relative group h-52 lg:h-80 w-full overflow-hidden flex flex-col hover:scale-110 duration-150 transform items-center justify-end cursor-pointer rounded-2xl text-base md:text-xl font-semibold text-white bg-blue-400 shadow-[0_6px_15px_rgba(0,0,0,0.2)]">
        <div className="bg-red-400 w-full p-5 group-hover:pt-14 lg:absolute bottom-[-22%] group-hover:bottom-0 duration-300 transform clip-path-initial odd:group-hover:clip-path-custom ">
          <h3 className="h-14">{item?.dish_name}</h3>
          <div className="font-normal h-14 text-xs md:text-base">
            {item.description || "No description"}
          </div>
          <button onClick={handleSelect} className="bg-blue-400 text-base px-4 py-2 rounded-lg font-medium">select lunch</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
