import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Fashion World
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">SignIn</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
          </Routes>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
