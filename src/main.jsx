// import React from 'react';
import ReactDOM from "react-dom/client";

import "./index.css";

// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
// 2. Імпортуємо створений стор
import { store } from "./redux/store"; //створили на початку
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
