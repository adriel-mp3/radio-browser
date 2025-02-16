import axios from "axios";

const API_BASE_URL = "https://de1.api.radio-browser.info/json";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);
