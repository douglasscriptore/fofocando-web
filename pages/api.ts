import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:3333/'
  baseURL: "https://fofocando.herokuapp.com",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
