import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL= import.meta.env.VITE_BASE_URL;
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.timeout = 2500;

console.log(axiosInstance.defaults);

export default axiosInstance;
