import axios from "axios";
const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "/",
  headers: {
    "Content-type": "application/json",
  },
}); // create a new instance of axios client; baseUrl and headers are custom configuration

export default apiClient;
