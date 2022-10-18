import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
