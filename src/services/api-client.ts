import axios from "axios";

console.log(process.env.REACT_APP_VERCEL_API_URL);

export const instance = axios.create({
  baseURL:
    process.env.REACT_APP_VERCEL_API_URL || process.env.REACT_APP_API_URL,
});
