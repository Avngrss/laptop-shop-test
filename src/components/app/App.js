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
  const [readyContent, setReadyContent] = useState(true);
  useEffect(() => {
    async function getData() {
      const getItems = await axios.get("http://localhost:3031/products");
      const getCart = await axios.get("https://64417e01fadc69b8e0858d33.mockapi.io/cart");
      const getFavorite = await axios.get("https://64417e01fadc69b8e0858d33.mockapi.io/favorite");

      setReadyContent(false);

      setCartItems(getCart.data);
      setFavorites(getFavorite.data);
      setItems(getItems.data);
    }
    getData();
  }, []);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  const onAddToCart = (items) => {
    if (cartItem.find((cartObj) => Number(cartObj.id) === Number(items.id))) {
      axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/cart/${items.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(items.id)));
    } else {
      axios.post("https://64417e01fadc69b8e0858d33.mockapi.io/cart", items);
      setCartItems((prev) => [...prev, items]);
    }
  };
  const onRemove = (id) => {
    axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/favorite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post("https://64417e01fadc69b8e0858d33.mockapi.io/favorite", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки :(");
    }
  };

  return (
    <div className="App container">
      {openCart ? <Cart items={cartItem} onClickCloseCart={() => setOpenCart(false)} onRemove={onRemove} /> : null}
      <Header onClickOpenCart={() => setOpenCart(true)} />
      <hr />
      <Routes>
        <Route path="/" element={<Home items={items} cartItem={cartItem} serchValue={serchValue} onChangeSearchValue={onChangeSearchValue} onAddToCart={onAddToCart} onClickFavorite={onAddToFavorite} contentReady={readyContent} />}></Route>
      </Routes>
      <Routes>
        <Route path="/favorite" element={<Favorite items={favorites} onClickFavorite={onAddToFavorite} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
