import axiosInstance from "./axiosInstance";

export const addMenu = async (bodyData) => {
  const data = await axiosInstance.post("add-menu", bodyData);
  return data;
};
