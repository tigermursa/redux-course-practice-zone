import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./Redux/store.jsx";
import { Counter } from "./Components/Counter/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
