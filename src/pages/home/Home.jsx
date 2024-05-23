import MainLayout from "../../layout/MainLayout";
import Card from "./../../component/home/Card.jsx"



const Home = () => {
  const role = "admin"
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
    {
      name: "Select Lunch Choice",
      for: "employee",
      path: "/select-lunch"
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="flex gap-[10%] lg:gap-[20%] justify-center items-center h-[calc(100vh-200px)]">
          {cardsData.map((data, idx) => (
            data.for === role && <Card data={data} key={idx} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
