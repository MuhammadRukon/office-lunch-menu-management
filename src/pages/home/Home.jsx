import { useContext } from "react";
import MainLayout from "../../layout/MainLayout";
import Card from "./../../component/home/Card.jsx"
import { AuthContext } from "../../auth/Auth.jsx";
import { Navigate, useNavigate } from "react-router-dom";



const Home = () => {
  const {role, user} = useContext(AuthContext);
  const cardsData = [
    {
      name: "Add Daily Menu Options",
      for: "admin",
      path: "/add-menu"
    },
    {
      name: "View Employee Choices",
      for: "admin",
      path: "/choice"
    },
    {
      name: "View Daily Menu",
      for: "employee",
      path: "/menu"
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="flex gap-[10%] text-center justify-center items-center h-[calc(100vh-200px)]">
          {user ? cardsData.map((data, idx) => (
            data.for === role && <Card data={data} key={idx} />
          )) : <Navigate to={'/login'}/>}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
