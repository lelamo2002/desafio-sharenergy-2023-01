import axios from "axios";

export const localhost = "localhost";
export const port = "3333";


export const api = axios.create({
  baseURL: `http://${localhost}:${port}`,
});