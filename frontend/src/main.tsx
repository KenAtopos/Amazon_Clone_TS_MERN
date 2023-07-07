import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/"; // this env,NODE_ENV will be set automatically by node, in local will be "development", when deployed, will be "production"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      {/* index=true here indicate
      that this route should be rendered when the parent's path matches the url
      exactly. */}
      <Route path="product/:slug" element={<ProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
