import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
console.log();
// Error handling for API calls
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

// Additional interceptors for specific functionalities
// e.g., logging requests and responses

export { axiosInstance };