import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector((state)=>state.cart)
  const { cartItems} = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Fashion World
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length>0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/signin">SignIn</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
          </Routes>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
