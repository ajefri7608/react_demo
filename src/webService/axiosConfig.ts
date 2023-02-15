import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 600000,
  headers: { "Access-Control-Allow-Origin": "*" },
});
