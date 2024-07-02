import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.tsx";
import Home from "./Pages/Home/Home.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Cart from "./Pages/Cart/Cart.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation />}>
            <Route index element={<Home />} />
            {/* @ts-ignore */}
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
