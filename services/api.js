import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://run.mocky.io/v3",
  timeout: 60 * 60 * 1000,
});
