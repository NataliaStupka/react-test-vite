// import React from 'react';
import ReactDOM from "react-dom/client";

import "./index.css";
import { Toaster } from "react-hot-toast";

// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
// 2. Імпортуємо створений стор
import { persistor, store } from "./redux/store"; //створили на початку
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
          }}
        />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
