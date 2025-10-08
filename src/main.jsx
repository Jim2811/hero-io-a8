import { StrictMode, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Components/Home.jsx";
import Apps from "./Components/Apps.jsx";
import Installation from "./Components/Installation.jsx";
import AppDetails from "./Components/AppDetails/AppDetails.jsx";

const router = createBrowserRouter(
  [
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps
      },
      {
        path: "apps/:id",
        loader: async ({params}) =>{
          const response = await fetch(`/appData.json`)
          const data = await response.json()
          return data.find((i) => i.id === parseInt(params.id));
        },
        Component: AppDetails
      },
      {
        path: "installation",
        Component: Installation
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
