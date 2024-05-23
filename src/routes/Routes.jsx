import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
  {
    index: true,
    element:<Home/>,
  },

]);
