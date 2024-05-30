import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AddMenu from "../pages/addMenu/AddMenu";
import ViewMenu from "../pages/viewMenu/ViewMenu";
import { getMenu } from "../api";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Route from "./Route";

export const routes = createBrowserRouter([
  {
    index: true,
    element: <Route>
      <Home />
    </Route>,
  },
  {
    path: "/add-menu",
    element: <Route>
      <AddMenu />
    </Route>,
  },
  {
    path: "/menu",
    element: <Route>
      <ViewMenu />
    </Route>,
    loader: async () => await getMenu(),
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
]);
