import axios from "axios";

// Create axios instance with base config
const api = axios.create({
  baseURL: "http://localhost:5000/api", // replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout (optional)
});

// Optional: Add request interceptor (e.g., for auth token)
api.interceptors.request.use(
  (config) => {
    // Example: add auth token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor (handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 or other errors globally here if needed
    return Promise.reject(error);
  }
);

export default api;
