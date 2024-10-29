import axios from "axios";

const base = axios.create({
  // baseURL: "http://localhost:5041",
  baseURL: "https://cp.vellalasercare.com",
});

base.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("vella_user"));
  config.headers.Authorization = token ? `Bearer ${token?.accessToken}` : "";
  return config;
});
export default base;
