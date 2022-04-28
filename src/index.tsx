/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import-helpers/order-imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
