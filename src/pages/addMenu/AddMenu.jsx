import React from "react";
import MainLayout from "../../layout/MainLayout";
import axios from "axios";
import { addMenu } from "../../api";
import toast from "react-hot-toast";

const AddMenu = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dishName = e.target.name.value;
    const description = e.target.desc.value;
    const date = e.target.date.value;

    const data = {
      dishName: dishName.toLowerCase(),
      description: description,
      date: date,
    };

    const res = await addMenu(data);
   if(res.data.rowCount){
    toast.success("successfully added");
   } else{
    if(res.data.detail){
        toast.error(res.data.detail);
    } else{
        toast.error("could not add");
    }
   }
   // reset form data
   e.target.reset();
  };

  return (
    <MainLayout>
      <div className="flex text-center items-center justify-center h-[calc(100vh-140px)]">
        <form
          onSubmit={handleSubmit}
          className="w-fit cursor-pointer rounded-2xl py-12 md:py-16 px-4 md:px-8 text-sm md:text-xl shadow-[0_6px_15px_rgba(0,0,0,0.2)]"
        >
          <label className="flex items-center gap-4" htmlFor="name">
            <p className="py-2 text-nowrap">
              <span className="md:w-32 inline-block text-left">Dish name</span>:
            </p>
            <input
              type="text"
              name="name"
              id="name"
              className="border-b h-10 px-3 border-black focus:outline-none"
            />
          </label>
          <label className="flex items-center gap-4" htmlFor="desc">
            <p className="py-2 text-nowrap">
              <span className="md:w-32 inline-block text-left">
                Desciption{" "}
              </span>
              :
            </p>
            <input
              type="text"
              name="desc"
              id="desc"
              className="border-b h-10 px-3 border-black focus:outline-none"
            />
          </label>
          <label className="flex items-center gap-4" htmlFor="date">
            <p className="py-2 text-nowrap">
              <span className="md:w-32 inline-block text-left">
                Availability
              </span>
              :
            </p>
            <input
              type="date"
              name="date"
              id="date"
              className="border-b w-[68%] md:w-[62.5%] h-10 px-3 border-black focus:outline-none"
            />
          </label>
          <button
            className="px-4 py-1 bg-blue-950 text-white rounded-lg text-sm mt-4 md:text-base"
            type="submit"
          >
            Add dish
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default AddMenu;
