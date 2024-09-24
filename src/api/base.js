import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:5000",
});

base.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("vella-user"));
  config.headers.Authorization = token ? `Bearer ${token?.accessToken}` : "";
  return config;
});
export default base;
