import axiosInstance from "./axiosInstance";

export const addMenu = async (bodyData) => {
  const data = await axiosInstance.post("add-menu", bodyData);
  return data;
};

export const getMenu = async () => {
  const data = await axiosInstance("menu");
  return data;
};

export const register = async (bodyData) => {
  const data = await axiosInstance.post("/register", bodyData);
  return data;
};


export const login = async (bodyData) =>{
  const {data} = await axiosInstance.post('/login', bodyData);
  return data;
}

export const admin = async (bodyData) =>{
  const {data} = await axiosInstance.post('/request-admin', bodyData);
  return data;
}