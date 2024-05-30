
import { useLoaderData } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import MenuCard from "../../component/viewMenu/MenuCard";


const ViewMenu = () => {

  const { data } = useLoaderData();
  console.log(data);
  return (
    <MainLayout>
        <h2 className=" mt-16 text-center font-semibold text-2xl lg:text-4xl">Dishes available for today</h2>
      <div className="px-10 2xl:px-0 mt-10 grid grid-cols-2 sm:grid-cols-3 gap-14 lg:grid-cols-4 text-center justify-between items-center min-h-[calc(100vh-200px)]">
        {typeof data === "object" && data.map((item, idx) => (
          <MenuCard item={item} key={idx} />
        ))}
      </div>
    </MainLayout>
  );
};

export default ViewMenu;
