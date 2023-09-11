import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Summary from "./Summary.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GithubFinder from "./Githubfinder.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GithubFinder />,
      },

      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/user/:username",
        element: <Summary />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);