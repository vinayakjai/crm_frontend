import axios from 'axios';

const axiosInstance=axios.create();
axiosInstance.default={
    baseUrl:import.meta.env.VITE_BASE_URL,
    withCredentials:true,
    timeout:2500,
}

export default axiosInstance;