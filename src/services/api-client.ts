import axios from "axios";
import { API_URL } from "src/constants/urls";

export const instance = axios.create({
  baseURL: API_URL,
});
