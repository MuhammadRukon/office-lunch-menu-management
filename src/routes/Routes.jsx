import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AddMenu from "../pages/addMenu/AddMenu";

export const routes = createBrowserRouter([
  {
    index: true,
    element:<Home/>,
  },
  {
    path: "/add-menu",
    element:<AddMenu/>,
  },

]);
