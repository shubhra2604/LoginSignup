import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (name, email, password, passwordConfirm) => {
  return api.post("/auth/signup", { name, email, password, passwordConfirm });
};

export const login = (email, password) => {
  return api.post("/auth/login", { email, password });
};

export const getCurrentUser = () => {
  return api.get("/auth/me");
};

export default api;
