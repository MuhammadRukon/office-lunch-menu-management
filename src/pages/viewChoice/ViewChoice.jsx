import { useLoaderData } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Table from "../../component/viewChoice/Table";


const ViewChoice = () => {
  const { data } = useLoaderData();
  const row = data.rows;
  console.log(row);
  return (
    <MainLayout>
      <h2 className=" mt-16 text-center font-semibold text-2xl lg:text-4xl">
        {typeof row === "object" ? "Employees choice" : "No one has chosen yet"}
      </h2>
      <div className="px-10 2xl:px-0 mt-10 text-center overflow-x-auto  min-h-[calc(100vh-200px)]">
       <Table row={row}/>
      </div>
    </MainLayout>
  );
};

export default ViewChoice;
