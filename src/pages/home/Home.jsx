import MainLayout from "../../layout/MainLayout";
import Card from "./../../component/home/Card.jsx"



const Home = () => {
  const role = "employee"
  const cardsData = [
    {
      name: "Add Daily Menu Options",
      for: "admin",
      path: "/add-menu"
    },
    {
      name: "View Employee Choices",
      for: "admin",
      path: "/view-choice"
    },
    {
      name: "View Daily Menu",
      for: "employee",
      path: "/view-menu"
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="flex gap-[10%] text-center justify-center items-center h-[calc(100vh-200px)]">
          {cardsData.map((data, idx) => (
            data.for === role && <Card data={data} key={idx} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
