/* eslint-disable no-self-compare */
import Header from "../Header/Header.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart.jsx";
import React, { useState, useEffect } from "react";
import Home from "../../pages/Home.jsx";
import Favorite from "../../pages/Favorite.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [serchValue, setSearchValue] = useState("");
  const [cartItem, setCartItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3031/products").then((res) => {
      setItems(res.data);
    });
    axios.get("https://64417e01fadc69b8e0858d33.mockapi.io/cart").then((res) => {
      setCartItems(res.data);
    });
  }, []);
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onAddToCart = (items) => {
    axios.post("https://64417e01fadc69b8e0858d33.mockapi.io/cart", items);
    setCartItems((prev) => [...prev, items]);
  };
  const onRemove = (id) => {
    axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToFavorite = (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/favorite/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://64417e01fadc69b8e0858d33.mockapi.io/favorite", obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="App container">
      {openCart ? <Cart items={cartItem} onClickCloseCart={() => setOpenCart(false)} onRemove={onRemove} /> : null}
      <Header onClickOpenCart={() => setOpenCart(true)} />
      <Routes>
        <Route path="/" element={<Home items={items} serchValue={serchValue} onChangeSearchValue={onChangeSearchValue} onAddToCart={onAddToCart} onClickFavorite={onAddToFavorite} />}></Route>
      </Routes>
      <Routes>
        <Route path="/favorite" element={<Favorite items={favorites} onClickFavorite={onAddToFavorite} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
