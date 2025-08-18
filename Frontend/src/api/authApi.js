import axiosInstance from "./axiosInstance";

export const loginUser = async (credentials) => {
  const res = await axiosInstance.post("/login", credentials);
  return res.data; // backend response
};
