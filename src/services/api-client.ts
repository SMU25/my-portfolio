import axios from "axios";

console.log(process.env.API_URL, process.env.REACT_APP_VERCEL_TEST);

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || process.env.API_URL,
});
