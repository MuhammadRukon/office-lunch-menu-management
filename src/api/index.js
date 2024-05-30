import moment from "moment";
import axiosInstance from "./axiosInstance";

export const addMenu = async (bodyData) => {
  const data = await axiosInstance.post("add-menu", bodyData);
  return data;
};

export const getMenu = async () => {
  const formattedDate = moment().format("YYYY-MM-DD");
  const data = await axiosInstance.post("menu", { date: formattedDate });
  return data;
};

export const register = async (bodyData) => {
  const data = await axiosInstance.post("/register", bodyData);
  return data;
};

export const login = async (bodyData) => {
  const { data } = await axiosInstance.post("/login", bodyData);
  return data;
};

export const admin = async (bodyData) => {
  const { data } = await axiosInstance.post("/request-admin", bodyData);
  return data;
};

export const selectLunch = async (bodyData) => {
  const data = await axiosInstance.post("/select-lunch", bodyData);
  console.log(data);
  return data;
};
