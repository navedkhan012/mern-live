import axios from "axios";
import { api } from "../urlConfig";

const token = localStorage.getItem("token");
const axiosIntance = axios.create({
  baseURL: api,
  headers: { Authorization: token ? token : "" },
});

export default axiosIntance;
