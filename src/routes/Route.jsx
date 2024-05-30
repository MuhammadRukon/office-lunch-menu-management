import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import { Navigate } from "react-router-dom";


const Route = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(typeof user);
  if (user === null || user === "null") {
    return <Navigate to={'/login'}/>
  }
  return !loading && children;
};

export default Route;
