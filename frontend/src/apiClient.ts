import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "/",
  headers: {
    "Content-type": "application/json",
  },
}); // create a new instance of axios client; baseUrl and headers are custom configuration

apiClient.interceptors.request.use(
  // interceptor is a function that axios will run before each request or response
  async (config) => {
    if (localStorage.getItem("userInfo"))
      config.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("userInfo")!).token
      }`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default apiClient;
